"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip } from "@dndbuilder.com/react/components";
import { LuCopy, LuEye, LuEyeOff, LuPlus, LuTrash2, LuAppWindow } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { createApp, getApps, deleteApp, type App } from "@/lib/apps";

export function AppManagement() {
  const [apps, setApps] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [newAppName, setNewAppName] = useState("");
  const [newlyCreatedApp, setNewlyCreatedApp] = useState<(App & { appKey: string }) | null>(null);
  const [showAppKey, setShowAppKey] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  useEffect(() => {
    loadApps();
  }, []);

  const loadApps = async () => {
    try {
      setIsLoading(true);
      const appsList = await getApps();
      setApps(appsList);
    } catch (error) {
      toast.error("Failed to load apps");
      console.error("Error loading apps:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateApp = async () => {
    if (!newAppName.trim()) {
      toast.error("App name is required");
      return;
    }

    setIsCreating(true);
    try {
      const createdApp = await createApp(newAppName.trim());
      setNewlyCreatedApp(createdApp);
      setNewAppName("");
      await loadApps();
      toast.success("App created successfully!");
    } catch (error) {
      toast.error("Failed to create app");
      console.error("Error creating app:", error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteApp = async (appId: string) => {
    if (!confirm("Are you sure you want to delete this app? This action cannot be undone.")) {
      return;
    }

    try {
      await deleteApp(appId);
      await loadApps();
      if (newlyCreatedApp?.id === appId) {
        setNewlyCreatedApp(null);
      }
      toast.success("App deleted successfully");
    } catch (error) {
      toast.error("Failed to delete app");
      console.error("Error deleting app:", error);
    }
  };

  const handleCopy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [key]: true }));
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000);
  };

  const toggleShowAppKey = (appId: string) => {
    setShowAppKey((prev) => ({ ...prev, [appId]: !prev[appId] }));
  };

  const maskKey = (key: string) => {
    if (key.length <= 16) return "*".repeat(key.length);
    return key.substring(0, 8) + "*".repeat(16) + key.substring(key.length - 8);
  };

  return (
    <Card className="shadow-sm">
      <Card.Header className="space-y-1 sm:space-y-2">
        <div className="flex items-center space-x-2">
          <LuAppWindow className="h-4 w-4 text-black sm:h-5 sm:w-5" />
          <Card.Title className="text-lg text-black sm:text-xl">App Management</Card.Title>
        </div>
        <Card.Description className="text-sm">
          Create and manage your apps. Each app gets a unique appId and appKey for authentication.
        </Card.Description>
      </Card.Header>
      <Card.Content className="space-y-6">
        {/* Info Box */}
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 sm:p-4">
          <div className="flex items-start space-x-2">
            <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 sm:h-5 sm:w-5">
              <span className="text-xs font-bold text-yellow-800">!</span>
            </div>
            <div className="text-xs sm:text-sm">
              <p className="mb-1 font-medium text-yellow-800">Keep your app credentials secure</p>
              <p className="text-yellow-700">
                Don&#39;t share your appKey publicly. It should only be used in your
                application&#39;s environment variables or secure configuration.
              </p>
            </div>
          </div>
        </div>

        {/* Create New App */}
        <div className="space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <Label htmlFor="app-name" className="block text-sm font-medium">
            Create New App
          </Label>
          <div className="flex w-full space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Input
              id="app-name"
              placeholder="Enter app name"
              value={newAppName}
              onChange={(e) => setNewAppName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCreateApp();
                }
              }}
              className="flex-1"
              disabled={isCreating}
            />
            <Button
              onClick={handleCreateApp}
              disabled={isCreating || !newAppName.trim()}
              className="bg-black text-white hover:bg-gray-800"
            >
              {isCreating ? (
                <>
                  <LuPlus className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <LuPlus className="mr-2 h-4 w-4" />
                  Create App
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Newly Created App Credentials */}
        {newlyCreatedApp && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-semibold text-green-800">App Created Successfully!</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setNewlyCreatedApp(null)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <Label className="text-xs text-green-700">App ID</Label>
                <div className="flex items-center space-x-2">
                  <Input value={newlyCreatedApp.appId} readOnly className="font-mono text-xs" />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(newlyCreatedApp.appId, "new-appId")}
                    className="h-8"
                  >
                    {copied["new-appId"] ? (
                      <FiCheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <LuCopy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-green-700">
                  App Key (Save this - shown only once)
                </Label>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Input
                      type={showAppKey["new"] ? "text" : "password"}
                      value={
                        showAppKey["new"] ? newlyCreatedApp.appKey : maskKey(newlyCreatedApp.appKey)
                      }
                      readOnly
                      className="font-mono text-xs"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0"
                      onClick={() => toggleShowAppKey("new")}
                    >
                      {showAppKey["new"] ? (
                        <LuEyeOff className="h-3 w-3" />
                      ) : (
                        <LuEye className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(newlyCreatedApp.appKey, "new-appKey")}
                    className="h-8"
                  >
                    {copied["new-appKey"] ? (
                      <FiCheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <LuCopy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="mt-2 rounded border border-yellow-200 bg-yellow-50 p-2">
                <p className="text-xs text-yellow-800">
                  ⚠️ Important: Save your App Key now. It will not be shown again after you close
                  this dialog.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Apps List */}
        <div className="space-y-3">
          <Label className="block text-sm font-medium">Your Apps</Label>
          {isLoading ? (
            <div className="animate-pulse space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`app-skeleton-${index}`}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
                >
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-4 w-36" />
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-3 w-14" />
                        <Skeleton className="h-5 w-28 rounded" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-5 w-32 rounded" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                      </div>
                    </div>
                    <Skeleton className="h-3 w-32" />
                  </div>
                  <Skeleton className="ml-4 h-8 w-8 rounded-full" />
                </div>
              ))}
            </div>
          ) : apps.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-500">
              No apps yet. Create your first app above.
            </div>
          ) : (
            <div className="space-y-3">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{app.name}</h4>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">App ID:</span>
                        <code className="rounded bg-gray-100 px-2 py-0.5 font-mono text-xs">
                          {app.appId}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(app.appId, `appId-${app.id}`)}
                          className="h-6 w-6 p-0"
                        >
                          {copied[`appId-${app.id}`] ? (
                            <FiCheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <LuCopy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">App Secret:</span>
                        <code className="rounded bg-gray-100 px-2 py-0.5 font-mono text-xs">
                          {showAppKey[app.id] ? app.appKey : maskKey(app.appKey)}
                        </code>
                        <Tooltip>
                          <Tooltip.Trigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleShowAppKey(app.id)}
                              className="h-6 w-6 p-0"
                            >
                              {showAppKey[app.id] ? (
                                <LuEyeOff className="h-3 w-3" />
                              ) : (
                                <LuEye className="h-3 w-3" />
                              )}
                            </Button>
                          </Tooltip.Trigger>
                          <Tooltip.Content className="rounded text-xs">
                            {showAppKey[app.id] ? "Hide secret" : "Show secret"}
                          </Tooltip.Content>
                        </Tooltip>
                        <Tooltip>
                          <Tooltip.Trigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopy(app.appKey, `appKey-${app.id}`)}
                              className="h-6 w-6 p-0"
                            >
                              {copied[`appKey-${app.id}`] ? (
                                <FiCheckCircle className="h-3 w-3 text-green-500" />
                              ) : (
                                <LuCopy className="h-3 w-3" />
                              )}
                            </Button>
                          </Tooltip.Trigger>
                          <Tooltip.Content className="rounded text-xs">Copy secret</Tooltip.Content>
                        </Tooltip>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-400">
                      Created: {new Date(app.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Tooltip>
                    <Tooltip.Trigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteApp(app.id)}
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <LuTrash2 className="h-4 w-4" />
                      </Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="rounded text-xs">Delete app</Tooltip.Content>
                  </Tooltip>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}

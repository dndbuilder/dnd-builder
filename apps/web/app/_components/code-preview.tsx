"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CodePreview() {
  const [activeTab, setActiveTab] = useState("install");

  return (
    <div className="rounded-lg border shadow-sm">
      <Tabs
        defaultValue="install"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <div className="flex items-center border-b px-4">
          <TabsList className="h-12">
            <TabsTrigger value="install">Installation</TabsTrigger>
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              Copy
            </Button>
          </div>
        </div>
        <TabsContent value="install" className="p-4">
          <pre className="rounded-md bg-slate-100 p-4 overflow-x-auto">
            <code className="text-sm">
              {`# Using npm
npm install dnd-builder

# Using yarn
yarn add dnd-builder

# Using pnpm
pnpm add dnd-builder`}
            </code>
          </pre>
        </TabsContent>
        <TabsContent value="setup" className="p-4">
          <pre className="rounded-md bg-slate-100 p-4 overflow-x-auto">
            <code className="text-sm">
              {`import { DnDBuilderProvider } from 'dnd-builder';

// In your app's root component
function App() {
  return (
    <DnDBuilderProvider>
      <YourApp />
    </DnDBuilderProvider>
  );
}`}
            </code>
          </pre>
        </TabsContent>
        <TabsContent value="usage" className="p-4">
          <pre className="rounded-md bg-slate-100 p-4 overflow-x-auto">
            <code className="text-sm">
              {`import { DnDBuilder, useDnDBuilder } from 'dnd-builder';

function YourPageBuilderComponent() {
  // Get available blocks based on your subscription
  const { blocks, templates } = useDnDBuilder({
    subscription: 'pro', // 'free', 'pro', or 'enterprise'
    apiKey: 'your-api-key' // Required for paid plans
  });
  
  return (
    <DnDBuilder
      blocks={blocks}
      templates={templates}
      onSave={(data) => console.log('Page data:', data)}
    />
  );
}`}
            </code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}

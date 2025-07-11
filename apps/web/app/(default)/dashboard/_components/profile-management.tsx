"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserProfile } from "@/lib/profile";
import { FC, useState } from "react";
import { LuRefreshCw, LuUser } from "react-icons/lu";
import { toast } from "sonner";

export type ProfileManagementProps = {
  profile: UserProfile;
};

export const ProfileManagement: FC<ProfileManagementProps> = ({ profile }) => {
  const [profileData, setProfileData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    image: profile.image || "",
  });
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  const fullName = `${profileData.firstName} ${profileData.lastName}`;

  const handleUpdateProfile = async () => {
    setIsUpdatingProfile(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsUpdatingProfile(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <Card className="mt-6 shadow-sm">
      <Card.Header>
        <div className="flex items-center space-x-2">
          <LuUser className="h-5 w-5 text-black" />
          <Card.Title className="text-xl text-black">Profile Settings</Card.Title>
        </div>
        <Card.Description>
          Update your personal information and account preferences.
        </Card.Description>
      </Card.Header>
      <Card.Content className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <Avatar.Image src={profileData.image || "/placeholder.svg"} alt={fullName} />
            <Avatar.Fallback className="bg-black text-lg text-white">
              {fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Avatar.Fallback>
          </Avatar>
          <div className="flex-1">
            <Button variant="outline" size="sm" className="bg-transparent">
              Change Avatar
            </Button>
            <p className="mt-1 text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="profile-first-name">First Name</Label>
            <Input
              id="profile-first-name"
              value={profileData.firstName}
              onChange={(e) => setProfileData((prev) => ({ ...prev, firstName: e.target.value }))}
              placeholder="Enter your first name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-last-name">Last Name</Label>
            <Input
              id="profile-last-name"
              value={profileData.lastName}
              onChange={(e) => setProfileData((prev) => ({ ...prev, lastName: e.target.value }))}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profile-email">Email Address</Label>
          <Input
            id="profile-email"
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email"
          />
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={handleUpdateProfile}
            disabled={isUpdatingProfile}
            className="bg-black text-white hover:bg-gray-800"
          >
            {isUpdatingProfile ? (
              <>
                <LuRefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Profile"
            )}
          </Button>
          <Button variant="outline" className="bg-transparent">
            Cancel
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

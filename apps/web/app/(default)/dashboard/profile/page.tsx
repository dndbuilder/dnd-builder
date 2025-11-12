import { getUserProfile } from "@/lib/profile";

import { ProfileManagement } from "../_components/profile-management";

export default async function ProfilePage() {
  const profile = await getUserProfile();

  return (
    <>
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-xl font-bold text-black sm:text-2xl">Profile</h1>
        <p className="whitespace-nowrap text-sm text-gray-600 sm:text-base">
          Keep your personal information and preferences up to date.
        </p>
      </div>

      <ProfileManagement profile={profile} />
    </>
  );
}

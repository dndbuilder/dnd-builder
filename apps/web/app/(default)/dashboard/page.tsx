import { AppManagement } from "./_components/app-management";

export default async function Dashboard() {
  return (
    <>
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-xl font-bold text-black sm:text-2xl">Dashboard</h1>
        <p className="whitespace-nowrap text-sm text-gray-600 sm:text-base">
          Manage your DnD Builder apps and access developer tools.
        </p>
      </div>

      <AppManagement />
    </>
  );
}

import type { ReactNode } from "react";

import { DemoAccess } from "./_components/demo-access";
import { QuickLinks } from "./_components/quick-links";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 sm:space-y-6 md:col-span-1 lg:col-span-2">{children}</div>

          <aside className="space-y-4 sm:space-y-6 md:mt-24">
            <DemoAccess />
            <QuickLinks />
          </aside>
        </div>
      </main>
    </div>
  );
}

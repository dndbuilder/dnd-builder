'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ProfileDropdown } from './profile-dropdown';

export function AuthSection() {
  const { data: session, status } = useSession();

  return (
    <>
      {/* Conditional rendering based on authentication status */}
      {status === 'authenticated' && session ? (
        <ProfileDropdown />
      ) : (
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="border-gray-300" size="sm">
            <Link href="/login" className="flex items-center space-x-1">
              <span>Login</span>
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register" className="flex items-center space-x-1">
              <span>Get Started</span>
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}

'use client';

import { ProgressProvider as ProgressBar } from '@bprogress/next/app';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function ProgressProvider({ children }: Props) {
  return (
    <ProgressBar
      height="4px"
      color={'var(--color-gray-800)'}
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressBar>
  );
}

export default ProgressProvider;

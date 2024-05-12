import React, { ReactNode } from 'react';
import Loading from '@/components/loading';
import { Suspense } from 'react';

interface Props {
  children?: ReactNode;
}

export default function WritingLayout({ children }: Props) {
  return (
    <>
      <div className="py-10">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
}

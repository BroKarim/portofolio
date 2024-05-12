import Image from 'next/image';
import Main from './Main';
import { Suspense } from 'react';
import Loading from '@/components/loading';
export default function Page() {
  return (
    <div className="my-10">
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </div>
  );
}

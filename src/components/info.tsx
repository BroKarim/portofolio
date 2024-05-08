import * as React from 'react';

import { cn } from '../../lib/utils';

interface InfoProps {
  title: string;
  availableForWork: boolean;
}

const Info: React.FC<InfoProps> = ({ title, availableForWork }) => (
  <div className="space-y-2 flex justify-between items-center pt-6">
    <h1 className="text-base font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  sm:leading-10 md:leading-14">{title}</h1>
    <div className="flex gap-1 items-center">
      <div className="relative w-6 h-6 flex justify-center items-center">
        {availableForWork && (
          <>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </>
        )}
      </div>
      {availableForWork ? <p className="text-base leading-7 text-gray-500 dark:text-gray-400">Available for work</p> : null}
    </div>
  </div>
);

export default Info;

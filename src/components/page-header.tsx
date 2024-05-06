import * as React from 'react';
import { cn } from '../../lib/utils';

const PageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className }) => <div className={cn('space-y-2 flex justify-between items-center pt-6', className)} />);
PageHeader.displayName = 'PageHeader';

const PageHeaderHeading = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }>(({ className, children, ...rest }, ref) => (
  <h1 ref={ref} className={cn('font-bold text-lg md:text-2xl', className)} {...rest}>
    {children}
  </h1>
));
PageHeaderHeading.displayName = 'PageHeaderHeading';

const PageHeaderDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className }) => <p className={cn('text-sm mt-2', className)} />);
PageHeaderDescription.displayName = 'PageHeaderDescription';

export { PageHeader, PageHeaderHeading, PageHeaderDescription };

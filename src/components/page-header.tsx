import * as React from 'react';
import { cn } from '../../lib/utils';

const PageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }>(({ className,children, }, ref) => (
  <div ref={ref} className={cn('container  flex flex-col justify-center sm:py-8 py-6  lg:flex-row lg:justify-between', className)}>
    {children}
  </div>
));
PageHeader.displayName = 'PageHeader';

const PageHeaderHeading = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }>(({ className, children, ...rest }, ref) => (
  <h1 ref={ref} className={cn('font-bold text-lg md:text-2xl', className)} {...rest}>
    {children}
  </h1>
));
PageHeaderHeading.displayName = 'PageHeaderHeading';

const PageHeaderDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }>(({ className, children, ...rest }, ref) => (
  <p ref={ref} className={cn('text-sm mt-2', className)} {...rest}>
    {children}
  </p>
));
PageHeaderDescription.displayName = 'PageHeaderDescription';

export { PageHeader, PageHeaderHeading, PageHeaderDescription };

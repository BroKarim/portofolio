import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function ProjectLayout({ children }: Props) {
  return (
    <>
      <div className="py-10">{children}</div>
    </>
  );
}

import React from 'react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">{title}</h1>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
} 
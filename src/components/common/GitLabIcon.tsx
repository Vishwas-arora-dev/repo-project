import React from 'react';

export function GitLabIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 20.297L4.406 12.702l1.594-4.297L12 3.703l6 4.702 1.594 4.297L12 20.297zm0-14.594L8.406 9.297 7.594 11.703 12 16.297l4.406-4.594-.812-2.406L12 5.703z" />
    </svg>
  );
}
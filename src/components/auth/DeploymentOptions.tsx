import React from 'react';

interface DeploymentOptionsProps {
  selected: 'saas' | 'self-hosted';
  onSelect: (option: 'saas' | 'self-hosted') => void;
}

export function DeploymentOptions({ selected, onSelect }: DeploymentOptionsProps) {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg mb-6">
      <button
        className={`flex-1 py-2 px-4 rounded-md text-center text-sm ${
          selected === 'saas' ? 'bg-blue-600 text-white' : 'text-gray-600'
        }`}
        onClick={() => onSelect('saas')}
      >
        SAAS
      </button>
      <button
        className={`flex-1 py-2 px-4 rounded-md text-center text-sm ${
          selected === 'self-hosted' ? 'bg-blue-600 text-white' : 'text-gray-600'
        }`}
        onClick={() => onSelect('self-hosted')}
      >
        Self Hosted
      </button>
    </div>
  );
}
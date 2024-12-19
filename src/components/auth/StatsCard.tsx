import React from 'react';

interface StatsCardProps {
  label: string;
  value: string;
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
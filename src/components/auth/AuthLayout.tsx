import React from 'react';
import { CodeAntLogo } from '../common/CodeAntLogo';

interface StatsCardProps {
  value: string;
  label: string;
}

function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="p-6">
          <div className="flex flex-col items-center text-center mb-8">
            <CodeAntLogo className="w-12 h-12 mb-4" />
            <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>
          {children}
          <p className="text-sm text-gray-500 text-center mt-6">
            By signing up you agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Hero section */}
        <div className="flex-1 bg-gray-50 p-12 flex items-center justify-center">
          <div className="max-w-lg">
            <div className="mb-12">
              <CodeAntLogo className="w-12 h-12 mb-4" />
              <h1 className="text-2xl font-semibold mb-4">AI to Detect & Autofix Bad Code</h1>
              <div className="flex gap-12 mb-8">
                <StatsCard label="Language Support" value="30+" />
                <StatsCard label="Developers" value="10K+" />
                <StatsCard label="Hours Saved" value="100K+" />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-lg">Issues Fixed</span>
                </div>
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-bold">500K+</span>
                  <span className="text-green-600 flex items-center gap-1">
                    <span>↑</span>
                    <span>14% This week</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth form */}
        <div className="flex-1 p-12 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">Welcome to CodeAnt AI</h2>
            </div>
            {children}
            <p className="text-sm text-gray-500 text-center mt-6">
              By signing up you agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
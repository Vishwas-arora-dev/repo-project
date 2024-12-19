import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CodeAntLogo } from './common/CodeAntLogo';
import { Sidebar } from './Sidebar';
import { Button } from './common/Button';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Desktop View */}
      <div className="hidden lg:flex">
        {/* Desktop Sidebar */}
        <div className="w-[240px] border-r">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <CodeAntLogo className="w-8 h-8" />
              <span className="text-xl">CodeAnt AI</span>
            </div>
            <Button 
              fullWidth 
              className="justify-between mb-4"
              variant="outline"
            >
              <span>UtkarshDhairyaPanwar</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
            <Sidebar />
          </div>
        </div>
        {/* Desktop Main Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 bg-white z-10 flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-2">
            <CodeAntLogo className="w-8 h-8" />
            <span className="text-xl">CodeAnt AI</span>
          </div>
          <Button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            icon={<Menu className="w-6 h-6" />}
            variant="outline"
            className="p-2"
          />
        </header>

        {/* Mobile Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40">
            {/* Top Half - Sidebar */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white">
              <div className="flex items-center justify-between px-4 h-16 border-b">
                <div className="flex items-center gap-2">
                  <CodeAntLogo className="w-8 h-8" />
                  <span className="text-xl">CodeAnt AI</span>
                </div>
                <Button 
                  onClick={() => setIsSidebarOpen(false)}
                  icon={<X className="w-6 h-6" />}
                  variant="outline"
                  className="p-2"
                />
              </div>
              <div className="p-4 overflow-y-auto h-[calc(50vh-64px)]">
                <Button 
                  fullWidth 
                  className="justify-between mb-4"
                  variant="outline"
                >
                  <span>UtkarshDhairyaPanwar</span>
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
              </div>
            </div>

            {/* Bottom Half - Translucent Overlay */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/30"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
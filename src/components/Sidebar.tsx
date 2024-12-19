import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Code2, Cloud, HelpCircle, Settings, Phone, LogOut } from 'lucide-react';
import { Button } from './common/Button';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose?.();
  };

  const handleLogout = () => {
    navigate('/login');
    onClose?.();
  };

  return (
    <div className="flex flex-col min-h-[100vh] lg:h-[calc(100vh-32px)]">
      {/* Main Navigation */}
      <div className="space-y-1">
        <Button 
          onClick={() => handleNavigation('/dashboard')}
          icon={<Home className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          Repositories
        </Button>
        <Button 
          onClick={() => handleNavigation('/ai-code-review')}
          icon={<Code2 className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          AI Code Review
        </Button>
        <Button 
          onClick={() => handleNavigation('/cloud-security')}
          icon={<Cloud className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          Cloud Security
        </Button>
        <Button 
          onClick={() => handleNavigation('/how-to-use')}
          icon={<HelpCircle className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          How to Use
        </Button>
        <Button 
          onClick={() => handleNavigation('/settings')}
          icon={<Settings className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          Settings
        </Button>
      </div>

      {/* Bottom Actions */}
      <div className="mt-4 lg:fixed lg:bottom-8 lg:w-[208px] space-y-1">
        <Button 
          onClick={() => handleNavigation('/support')}
          icon={<Phone className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          Support
        </Button>
        <Button 
          onClick={handleLogout}
          icon={<LogOut className="w-5 h-5" />}
          fullWidth
          className="justify-start text-gray-700"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
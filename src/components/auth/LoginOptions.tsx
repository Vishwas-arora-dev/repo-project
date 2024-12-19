import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Box as BitbucketIcon, Cloud as AzureIcon } from 'lucide-react';
import { GitLabIcon } from '../common/GitLabIcon';
import { Button } from '../common/Button';

interface LoginOptionsProps {
  onLogin?: () => void;
}

export function LoginOptions({ onLogin }: LoginOptionsProps) {
  const navigate = useNavigate();

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    } else {
      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <div className="space-y-3 w-full">
      <Button 
        onClick={handleLogin}
        fullWidth
        variant="outline"
        icon={<Github className="w-5 h-5" />}
        className="justify-start"
      >
        Sign in with Github
      </Button>
      <Button 
        onClick={handleLogin}
        fullWidth
        variant="outline"
        icon={<BitbucketIcon className="w-5 h-5 text-blue-500" />}
        className="justify-start"
      >
        Sign in with Bitbucket
      </Button>
      <Button 
        onClick={handleLogin}
        fullWidth
        variant="outline"
        icon={<AzureIcon className="w-5 h-5 text-blue-600" />}
        className="justify-start"
      >
        Sign in with Azure DevOps
      </Button>
      <Button 
        onClick={handleLogin}
        fullWidth
        variant="outline"
        icon={<GitLabIcon className="w-5 h-5 text-orange-600" />}
        className="justify-start"
      >
        Sign in with GitLab
      </Button>
    </div>
  );
}
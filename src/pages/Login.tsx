import React from 'react';
import { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { DeploymentOptions } from '../components/auth/DeploymentOptions';
import { LoginOptions } from '../components/auth/LoginOptions';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [deploymentType, setDeploymentType] = useState<'saas' | 'self-hosted'>('saas');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <AuthLayout>
      <DeploymentOptions selected={deploymentType} onSelect={setDeploymentType} />
      <LoginOptions onLogin={handleLogin} />
    </AuthLayout>
  );
}
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const navigate = useNavigate();

  const login = () => {
    navigate('/dashboard', { replace: true });
  };

  const logout = () => {
    navigate('/login', { replace: true });
  };

  return { login, logout };
}
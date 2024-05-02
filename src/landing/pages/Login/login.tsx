import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import LoginForm from '@/auth/components/login/LoginForm';
import {useAuthStore} from '@/auth/store/authStore';

const Login = () => {
  const navigate = useNavigate();
  const {profile} = useAuthStore();

  useEffect(() => {
    if (profile) {
      navigate('/');
    }
  }, [profile, navigate]);

  return (
    <>
      <img className="h-screen w-full bg-cover bg-center bg-no-repeat" src="/assets/Login.webp" />
      <div className="absolute inset-0 flex items-center justify-center ">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;

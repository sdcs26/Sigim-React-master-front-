import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import RegistroForm from '@/auth/components/registro/registroForm';
import {useAuthStore} from '@/auth/store/authStore';

export default function Registro() {
  const navigate = useNavigate();
  const {profile} = useAuthStore();

  useEffect(() => {
    if (profile) {
      navigate('/');
    }
  }, [profile, navigate]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-left py-10"
      style={{backgroundImage: 'url("/assets/registrer.webp")'}}
    >
      <RegistroForm />
    </div>
  );
}

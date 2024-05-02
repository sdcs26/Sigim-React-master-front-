import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Input} from '@/shared/components/ui/Input';
import {LoginRequest} from '@/auth/models/LoginRequest';
import {useAuthStore} from '@/auth/store/authStore';
import {loginService} from '@/auth/services/auth.service';

const loginSchema = Yup.object().shape({
  correo: Yup.string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,7}$/, 'Ingrese un correo valido')
    .required('El correo es un campo obligatorio'),
  contrasena: Yup.string().required('La contraseña es un campo obligatorio'),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {login} = useAuthStore();

  return (
    <div className="flex min-w-[25rem] max-w-[36rem] flex-col items-center space-y-5 rounded-xl bg-black bg-opacity-60 px-10 py-5">
      <p className="text-center text-xs font-semibold tracking-[0.3em] lg:text-sm">
        INICIAR SESIÓN
      </p>
      <div className="flex w-full justify-evenly space-x-2 lg:space-x-5">
        <p className="text-[0.55rem] font-thin lg:text-xs">No tienes una cuenta?</p>
        <Link className="text-[0.55rem] font-bold lg:text-xs" to={'/'}>
          CREAR CUENTA
        </Link>
      </div>
      <Formik
        initialValues={{correo: '', contrasena: ''}}
        validationSchema={loginSchema}
        onSubmit={(values: LoginRequest, {setFieldValue}) => {
          setLoading(true);
          setError('');
          loginService(values)
            .then((result) => {
              login(result.result);
              navigate('/dashboard');
            })
            .catch((err: Error) => {
              setError(err.message);
            })
            .finally(() => {
              setLoading(false);
              setFieldValue('contrasena', '');
            });
        }}
      >
        {({values, errors, touched, handleBlur, handleChange}) => (
          <Form action="" className="flex w-80 flex-col items-center justify-center space-y-2">
            {
              <div
                className={`${error ? 'visible' : 'invisible'} w-full border border-red-800 bg-red-100 p-2 text-center text-red-800`}
              >
                {error}.
              </div>
            }
            <div className="w-full">
              <p className="mb-1 text-xs font-semibold">Usuario</p>
              <Input
                id="correo"
                type="text"
                value={values.correo}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p
                className={`text-red-500 ${errors.correo && touched.correo ? 'visible' : 'invisible'}`}
              >
                {errors.correo}.
              </p>
            </div>
            <div className="w-full">
              <p className="mb-1 mt-2 text-xs font-semibold">Contraseña</p>
              <Input
                id="contrasena"
                type="password"
                value={values.contrasena}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <p
                className={`text-red-500 ${errors.contrasena && touched.contrasena ? 'visible' : 'invisible'}`}
              >
                {errors.contrasena}.
              </p>
            </div>
            <button
              className="mt-5 rounded-md bg-yellow-400 px-5 py-1 text-xs font-bold tracking-widest text-black hover:bg-yellow-500"
              disabled={loading}
              type="submit"
            >
              {loading ? 'Cargando...' : 'INGRESAR'}
            </button>
          </Form>
        )}
      </Formik>
      <Link
        className="mt-6 flex justify-center text-xs font-thin text-yellow-400 hover:underline lg:w-[25rem] lg:justify-end lg:text-end"
        to="/"
      >
        Olvidé mi Contraseña
      </Link>
    </div>
  );
};

export default LoginForm;

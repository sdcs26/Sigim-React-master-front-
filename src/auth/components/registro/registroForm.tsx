import {Form, Formik} from 'formik';
import * as yup from 'yup';
import {useState} from 'react';

import {Button} from '@/shared/components/ui/Button';
import {Input} from '@/shared/components/ui/Input';
import {RegisterRequest} from '@/auth/models/RegisterRequest';
import {registerService} from '@/auth/services/auth.service';
import {cn} from '@/shared/utils';
import {Spinner} from '@/shared/components/ui/Spinner';

const registroSchema = yup.object().shape({
  correo: yup
    .string()
    .required('El correo es requerido')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,7}$/, 'Ingresa un email valido'),
  contrasena: yup.string().required('La contraseña es requerido'),
  confirmarContrasena: yup
    .string()
    .required('Confirmar contraseña es requerido')
    .oneOf([yup.ref('contrasena'), ''], 'Confirmar contraseña debe ser igual a la contraseña'),
  documento: yup.string().required('El documento es requerido'),
  nombres: yup.string().required('el nombre es requerido'),
  apellidos: yup.string().required('El apellido es requerido'),
  genero: yup.string().required('El genero es requerido'),
  birthDate: yup.string().required('la fecha de nacimiento es requerido'),
});

const initValues: RegisterRequest = {
  correo: '',
  contrasena: '',
  confirmarContrasena: '',
  documento: '',
  nombres: '',
  apellidos: '',
  genero: '',
  birthDate: new Date().toISOString().split('T')[0],
};

const RegistroForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({isError: true, message: ''});

  return (
    <Formik
      initialValues={initValues}
      validationSchema={registroSchema}
      onSubmit={(values: RegisterRequest) => {
        setLoading(true);
        setMessage({isError: false, message: ''});
        registerService(values)
          .then((res) => {
            setMessage({isError: false, message: res.message});
          })
          .catch((err: Error) => {
            setMessage({isError: true, message: err.message});
          })
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      {({errors, touched, handleBlur, handleChange, values}) => (
        <Form className="grid max-w-[56rem] grid-cols-1 items-center gap-5 bg-black/70 p-8 text-lg lg:min-w-[56rem] lg:px-12">
          <h4 className="my-5 text-center text-2xl font-bold">Crear Cuenta</h4>
          <div
            className={cn(
              'border px-4 py-2 text-center',
              !message.message && 'invisible',
              message.isError
                ? 'border-red-900 bg-red-100 text-red-900'
                : 'border-green-900 bg-green-100 text-green-900',
            )}
          >
            {message.message}.
          </div>
          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Correo:</span>
            <div className="w-full">
              <Input
                id="correo"
                placeholder="Email"
                type="email"
                value={values.correo}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.correo && touched.correo && 'visible',
                )}
              >
                {errors.correo}.
              </span>
            </div>
          </label>

          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Contraseña:</span>
            <div className="w-full">
              <Input
                id="contrasena"
                placeholder="Password"
                type="password"
                value={values.contrasena}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.contrasena && touched.contrasena && 'visible',
                )}
              >
                {errors.contrasena}.
              </span>
            </div>
          </label>

          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Confirmar Contraseña:</span>
            <div className="w-full">
              <Input
                id="confirmarContrasena"
                placeholder="Confirm Password"
                type="password"
                value={values.confirmarContrasena}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.confirmarContrasena && touched.confirmarContrasena && 'visible',
                )}
              >
                {errors.confirmarContrasena}.
              </span>
            </div>
          </label>

          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Documento:</span>
            <div className="w-full">
              <Input
                id="documento"
                placeholder="Documento"
                type="text"
                value={values.documento}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.documento && touched.documento && 'visible',
                )}
              >
                {errors.documento}.
              </span>
            </div>
          </label>

          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Nombre:</span>
            <div className="w-full">
              <Input
                id="nombres"
                placeholder="Nombre"
                type="text"
                value={values.nombres}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.nombres && touched.nombres && 'visible',
                )}
              >
                {errors.nombres}.
              </span>
            </div>
          </label>

          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Apellido:</span>
            <div className="w-full">
              <Input
                id="apellidos"
                placeholder="Apellido"
                type="text"
                value={values.apellidos}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.apellidos && touched.apellidos && 'visible',
                )}
              >
                {errors.apellidos}.
              </span>
            </div>
          </label>
          <div className="lg:flex">
            <label className="lg:w-1/3">Genero:</label>
            <div className=" 2 w-full">
              <div className="flex justify-between lg:justify-start lg:space-x-1">
                <label className="space-x-5">
                  <input
                    id="masculino"
                    name="genero"
                    type="radio"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <span>Masculino</span>
                </label>

                <label className="space-x-5">
                  <input
                    id="femenino"
                    name="genero"
                    type="radio"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <span>Femenino</span>
                </label>
              </div>
              <span
                className={cn(
                  'invisible mx-2 text-red-500',
                  errors.genero && touched.genero && 'visible',
                )}
              >
                {errors.genero}.
              </span>
            </div>
          </div>
          <label className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="lg:w-1/3">Fecha de nacimiento:</span>
            <div className="w-full">
              <Input
                id="birthDate"
                type="date"
                value={values.birthDate}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
          </label>

          <Button className="mx-auto flex items-center space-x-2" disabled={loading}>
            {loading ? (
              <>
                <Spinner /> <span>Cargando...</span>
              </>
            ) : (
              'Registrar'
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistroForm;

import {Form, Formik} from 'formik';

import {Input} from '@/shared/components/ui/Input';
import {useAuthStore} from '@/auth/store/authStore';
import {Perfil} from '@/dashboard/models/perfil';
import {Button} from '@/shared/components/ui/Button';

export const PerfilForm = () => {
  const {profile} = useAuthStore();

  return (
    <div className="mx-auto max-w-[48rem] space-y-12 rounded-xl bg-black/60 p-5 lg:p-12">
      <Formik
        initialValues={{
          documento: profile!.documento,
          nombres: profile!.nombres,
          apellidos: profile!.apellidos,
          correo: profile!.correo,
        }}
        onSubmit={(values: Perfil) => {
          console.log(values);
        }}
      >
        {({values, handleChange, handleBlur}) => (
          <Form className="flex flex-col">
            <h4 className="text-2xl font-bold">Mi información Personal</h4>
            <label>
              <span>Documento</span>
              <Input
                placeholder="documento"
                value={values.documento}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <label>
              <span>Nombres</span>
              <Input
                placeholder="Nombres"
                value={values.nombres}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <label>
              <span>Apellidos</span>
              <Input
                placeholder="Apellidos"
                value={values.apellidos}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <label>
              <span>Correo</span>
              <Input
                disabled
                placeholder="correo"
                value={values.correo}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <Button>Actualizar Informacion</Button>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        onSubmit={(values: {
          currentPassword: string;
          newPassword: string;
          confirmPassword: string;
        }) => {
          console.log(values);
        }}
      >
        {({values, handleChange, handleBlur}) => (
          <Form className="flex flex-col">
            <h4 className="text-2xl font-bold">Cambiar mi contraseña</h4>
            <p className="font-thin">
              Esto reemplazará a la contraseña que usas para iniciar sesión en StarkFit
            </p>
            <label>
              <span>Contraseña Actual</span>
              <Input
                id="currentPassword"
                placeholder="Contraseña Actual"
                type="password"
                value={values.currentPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <label>
              <span>Nueva Contraseña</span>
              <Input
                id="newPassword"
                placeholder="Nueva Contraseña"
                type="password"
                value={values.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <label>
              <span>Confirmar Contraseña</span>
              <Input
                id="confirmPassword"
                placeholder="Confirmar Contraseña"
                type="password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <span className="invisible text-red-500">.</span>
            </label>
            <Button>Cambiar Contraseña</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

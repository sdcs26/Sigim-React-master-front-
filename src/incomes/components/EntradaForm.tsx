import {Button} from '@/shared/components/ui/Button';
import {Input} from '@/shared/components/ui/Input';

export const EntradaForm = () => {
  return (
    <div className="mx-auto flex max-w-[36rem] flex-col items-center justify-center space-y-8 rounded-lg bg-black/20 p-8">
      <h4>
        Bienvenidos a <span className="text-yellow-400">StarkFit</span>
      </h4>
      <p>Por favor introduce tu documento</p>
      <Input placeholder="Documento" />
      <Button>Entrar</Button>
    </div>
  );
};

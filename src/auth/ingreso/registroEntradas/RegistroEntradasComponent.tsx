import '@/auth/ingreso/registroEntradas/RegistroEntradas.css';
const RegistroEntradasComponent = () => {
  return (
    <div className="image-background flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat p-32 lg:min-h-full">
      <section className="flex flex-col items-center justify-center rounded-xl bg-black bg-opacity-50 px-10 py-5 text-white">
        <article>
          <h2 className="my-4 flex text-lg font-semibold tracking-widest">
            <span>Bienvenidos a</span>&nbsp;
            <span className="text-yellow-500">StarkFit</span>
          </h2>
          <h3 className="my-4 text-xs tracking-widest">Por favor introduce tu documento</h3>
        </article>
        <input
          className="focus:shadow-outline w-72 appearance-none rounded-md border bg-transparent px-3 py-2 text-xs leading-tight text-white shadow focus:outline-none"
          placeholder="1007467776"
          type="text"
        />
        <button className="hover mt-4 rounded-lg bg-yellow-500 px-5 py-1 font-semibold text-black hover:bg-yellow-400">
          Entrar
        </button>
      </section>
    </div>
  );
};

export default RegistroEntradasComponent;

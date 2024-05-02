import React from "react";
import { Outlet } from "react-router-dom";

const formatExerciseTitle = (title: string, firstPartColor: string | undefined, secondPartColor: string | undefined) => {
  const parts = title.split(" ");

  return (
    <h2 className="mx-auto mb-8 mt-20 text-left text-4xl font-normal tracking-widest lg:mb-12">
      {parts.map((part, index) => (
        <span key={index} style={{ color: index === 0 ? firstPartColor : secondPartColor }}>
          {part}{' '}
        </span>
      ))}
    </h2>
  );
};

const renderListItems = (items: any[]) => {
  return (
    <ul className="list-disc ml-6 mb-6">
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  );
};

const ExerciseInfo = () => {
  const formattedTitle = formatExerciseTitle("CURL DE BICEP", "white", "yellow");

  const tips = [
    'Usa un peso adecuado que te permita realizar el movimiento con buena técnica.',
    'No arquees la espalda ni balancees los brazos.',
    'Respira al ritmo del movimiento, inhala al bajar las pesas y exhala al levantarlas.',
    'Calienta antes de empezar y enfría al terminar.'
  ];

  return (
    <div className="mx-auto w-full lg:px-48 bg-custom-gray flex flex-col lg:flex-row">

      <div className="max-w-screen-xl mx-auto w-full lg:w-1/2 lg:pr-1 lg:pl-8"> 
        <div className="max-w-screen-xl px-4 lg:px-6 lg:py-16 mx-auto">
          {formattedTitle}
          <p>
            De pie, con la espalda recta y los pies separados a la anchura de los hombros, 
            sujeta una mancuerna en cada mano con las palmas hacia arriba, flexiona los codos 
            para levantar las mancuernas hasta la altura de los hombros, concentrándote en 
            contraer los bíceps. Mantén la espalda recta y los codos pegados al cuerpo durante 
            todo el movimiento. Baja las pesas de forma controlada a la posición inicial y repite.
          </p>
          <h1 className="mx-auto mb-8 mt-5 text-left text-xl font-normal tracking-widest lg:mb-5">Consejos</h1>
          {renderListItems(tips)}
          <Outlet />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src="/assets/curlbicep (1).webp" alt="Imagen del ejercicio" className="w-full h-auto lg:mt-20" />
      </div>
    </div>
  );
};

export default ExerciseInfo;
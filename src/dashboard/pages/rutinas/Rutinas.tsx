import {useEffect, useState} from 'react';
import {IoSearchOutline} from 'react-icons/io5';

import {UserRoutine} from '@/dashboard/models/UserRoutine';
import {getRoutinePerUser} from '@/userRoutines/services';

const Rutinas = () => {
  const [rutinas, setRutinas] = useState<UserRoutine[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRoutinePerUser()
      .then((res) => {
        setRutinas(res.result);
      })
      .catch((err: Error) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto grid max-w-[56rem] rounded-lg bg-black/60 p-8">
      <table className="">
        <thead>
          <tr className="[&_th]:border-b [&_th]:border-r last:[&_th]:border-r-transparent">
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Domingo</th>
            <th className="">Detalles</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="[&_td]:border-b [&_td]:border-r last:[&_td]:border-r-transparent">
            <td>
              <input disabled id="lunes" name="lunes" type="checkbox" />
            </td>
            <td>
              <input disabled id="martes" name="martes" type="checkbox" />
            </td>
            <td>
              <input disabled id="miercoles" name="miercoles" type="checkbox" />
            </td>
            <td>
              <input disabled id="jueves" name="jueves" type="checkbox" />
            </td>
            <td>
              <input disabled id="viernes" name="viernes" type="checkbox" />
            </td>
            <td>
              <input disabled id="sabado" name="sabado" type="checkbox" />
            </td>
            <td>
              <input disabled id="domingo" name="domingo" type="checkbox" />
            </td>
            <td>
              <IoSearchOutline className="mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rutinas;

import { useEffect, useState } from "react";

// const initialState = await fetch(
//   "https://kings-league-api.bryan-armando.workers.dev/players-12",
//   {
//     headers: {
//       "Content-Type": "application/json",
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   }
// ).then((res) => res.json());

// const teamList = await fetch(
//   "https://kings-league-api.bryan-armando.workers.dev/teams"
// ).then((res) => res.json());

export const PlayersTwelve = () => {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://kings-league-api.bryan-armando.workers.dev/players-12", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setPlayers);
  }, []);

  return (
    <section className="bg-orange-700 p-6">
      <div className="flex gap-10">
        <div>
          <select
            id="countries"
            className="block w-full rounded-lg border border-gray-600 bg-gray-700  p-2.5 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500"
            value={teamName}
            onChange={(e) => {
              console.log(e.target.value);
              return setTeamName(e.target.value);
            }}
          >
            <option value={""}>Equipo</option>
            {/* {teamList.map(({ id, name }) => (
              <option value={id} key={id} className="py-2">
                {name}
              </option>
            ))} */}
          </select>
        </div>

        <button
          className="inline-flex items-center rounded-lg bg-gray-600 px-4 py-2.5 text-center text-sm font-medium  text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
          onClick={() => setPlayers(initialState)}
        >
          Ver Todos
        </button>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
        {players
          .filter(({ id }) => {
            if (!teamName) return true;
            return id === teamName;
          })
          .map((player) => (
            <li key={player.id}>{player.firstName} no</li>
          ))}
      </div>
    </section>
  );
};

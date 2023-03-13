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

const teamList = await fetch(
  "https://kings-league-api.bryan-armando.workers.dev/teams"
).then((res) => res.json());

export const PlayersTwelve = ({ backgroundColor }) => {
  const [teamName, setTeamName] = useState("");
  const [openDrow, setOpenDrow] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://kings-league-api.bryan-armando.workers.dev/players-12")
      .then((res) => res.json())
      .then(setPlayers)
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="flex gap-10 ">
        <button
          className={` ${
            !teamName
              ? "bg-gray-800 ring-1 ring-gray-800 "
              : "bg-gray-600 hover:bg-gray-800  focus:ring-1 focus:ring-gray-800"
          } rounded-lg px-4 py-2.5 text-center text-sm font-medium  text-white `}
          onClick={() => setTeamName("")}
        >
          Ver Todos
        </button>
        <div className="relative">
          <button
            className={`${
              teamName
                ? "bg-gray-800 ring-1 ring-gray-800 "
                : "bg-gray-600 hover:bg-gray-800  focus:ring-1 focus:ring-gray-800"
            }peer  flex cursor-pointer items-center justify-center gap-3 rounded-lg px-4  py-2.5 text-center text-sm font-medium text-white`}
            onClick={() => setOpenDrow(!openDrow)}
          >
            <p>{teamName || "Equipo"} </p>
            <span className={`transition ${openDrow && "rotate-180"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
              </svg>
            </span>
          </button>
          {openDrow && (
            <ul
              className={` absolute top-full mt-3  w-auto overflow-hidden  rounded-lg text-sm  text-white  ${
                teamName
                  ? "bg-gray-800 ring-1 ring-gray-800 "
                  : "bg-gray-600  focus:ring-1 focus:ring-gray-800"
              } `}
            >
              {teamList.map(({ id, name }) => (
                <button
                  key={id}
                  className="w-full whitespace-nowrap px-4 py-1 text-left hover:bg-black/25"
                  onClick={() => {
                    setTeamName(id);
                    setOpenDrow(false);
                  }}
                >
                  {name}
                </button>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {players
          .filter(({ team: { id } }) => {
            if (!teamName) return true;
            return id == teamName;
          })
          .map((player) => {
            const {
              id,
              firstName,
              lastName,
              role,
              image: imagePlayer,
              team: { id: teamId, name, image: imageTeam, imageWhite },
            } = player;
            return (
              <article
                key={id}
                className={`${backgroundColor[teamId]} relative flex  rounded-lg pr-8 text-white `}
              >
                <figure
                  className={`absolute inset-0 bg-[size:80%] bg-center bg-no-repeat opacity-10 `}
                  style={{ backgroundImage: `url(${imageWhite})` }}
                ></figure>
                <div>
                  <img
                    src={`https://kings-league-api.bryan-armando.workers.dev/static/players/${imagePlayer}`}
                    alt={`Juador ${firstName} ${lastName} `}
                    className="w-28"
                  />
                </div>
                <div className="flex flex-grow flex-col justify-center gap-3">
                  <div className="flex items-center gap-8">
                    <img src={imageTeam} alt={name} className="w-8" />
                    <h4 className="font-title">{name}</h4>
                  </div>
                  <h3 className="font-title text-xl">
                    {`${firstName} ${lastName}`}
                  </h3>
                  <span className="z-10 block w-full rounded-lg bg-black py-1 text-center">
                    {role}
                  </span>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
};

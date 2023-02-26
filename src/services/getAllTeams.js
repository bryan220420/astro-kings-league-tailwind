export const getAllTeams = async () => {
  try {
    const teams = await fetch(
      "https://kings-league-api.bryan-armando.workers.dev/teams"
    ).then((res) => res.json());
    return teams;
  } catch (error) {
    // enviar el error - servicio de reportes de errores
    return [];
  }
};

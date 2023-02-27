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

export const backgroundColor = {
  "aniquiladores-fc": "bg-aniquiladores-fc",
  "1k": "bg-1k",
  "el-barrio": "bg-el-barrio",
  "jijantes-fc": "bg-jijantes-fc",
  kunisports: "bg-kunisports",
  "los-troncos-fc": "bg-los-troncos-fc",
  "pio-fc": "bg-pio-fc",
  "porcinos-fc": "bg-porcinos-fc",
  "rayo-barcelona": "bg-rayo-barcelona",
  "saiyans-fc": "bg-saiyans-fc",
  "ultimate-mostoles": "bg-ultimate-mostoles",
  "xbuyer-team": "bg-xbuyer-team",
};

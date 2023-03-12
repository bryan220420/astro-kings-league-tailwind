export async function getTopsPlayers() {
  try {
    const topPlayers = await fetch(
      "https://kings-league-api.bryan-armando.workers.dev/top-statistics"
    ).then((res) => res.json());
    return topPlayers;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getTopOnePlayers() {
  try {
    const {
      mvp: [topMvp],
      topScorers: [topScorer],
      topAssists: [topAssist],
    } = await fetch(
      "https://kings-league-api.bryan-armando.workers.dev/top-statistics"
    ).then((res) => res.json());
    return { mvp: topMvp, topScorers: topScorer, topAssists: topAssist };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const typeStatistics = {
  mvp: { slug: "mvp", title: "MVPs", keyAmount: "mvps", endpoint: "mvp" },
  topScorers: {
    slug: "goles",
    title: "Goles",
    keyAmount: "goals",
    endpoint: "top-scorers",
  },
  topAssists: {
    slug: "asistencias",
    title: "Asistencias",
    keyAmount: "assists",
    endpoint: "top-assists",
  },
};

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
    return [topMvp, topScorer, topAssist];
  } catch (error) {
    console.log(error);
    return null;
  }
}

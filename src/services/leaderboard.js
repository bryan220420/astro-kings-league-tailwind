export async function getLeaderboard() {
  try {
    const leaderboard = await fetch(
      "https://kings-league-api.bryan-armando.workers.dev/leaderboard"
    ).then((res) => res.json());
    return leaderboard;
  } catch (error) {
    return [];
  }
}

export async function getTeamStastById({ teamId }) {
  try {
    const statsTeam = await fetch(
      `https://kings-league-api.bryan-armando.workers.dev/leaderboard/${teamId}`
    ).then((res) => res.json());
    return statsTeam;
  } catch (error) {
    return [];
  }
}

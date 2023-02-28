export async function findPresidentById({ id }) {
  try {
    const president = await fetch(
      `https://kings-league-api.bryan-armando.workers.dev/presidents/${id}`
    ).then((data) => data.json());
    return president;
  } catch (error) {
    return [];
  }
}

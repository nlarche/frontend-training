export interface People {
  id: number;
  name: string;
  starships: string[];
}

export async function fetchPeoples(): Promise<People[]> {
  const response = await fetch("https://swapi.dev/api/people").then((r) =>
    r.json()
  );
  return response.results;
}

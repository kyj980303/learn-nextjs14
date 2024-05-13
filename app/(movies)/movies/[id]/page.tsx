import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // Promise.all : 동시에 데이터 호출
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}

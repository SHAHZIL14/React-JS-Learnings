import { useLoaderData } from "react-router-dom";
function GitHubPage() {
   const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export async function githubDataLoader(){
    const data = await fetch("https://api.github.com/users/shahzil14");
    return await data.json();
}

export default GitHubPage;

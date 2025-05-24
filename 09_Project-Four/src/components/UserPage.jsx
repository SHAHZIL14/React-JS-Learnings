import { useParams } from "react-router-dom";

export default function UserPage() {
  let data = useParams()
  console.log(data);
  return <div>Hello this is param side.with id {data.userId}</div>;
}

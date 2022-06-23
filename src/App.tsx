import { gql, useQuery } from "@apollo/client";
// import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id 
      title
    }
  }
`

interface Lesson{
  id: string;
  title: string;

}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

  console.log(data)

  return (
    <ul>
      {data?.lessons.map(lessons =>{
        return <li key={lessons.id}>{lessons.title}</li>
      })}
    </ul>
  )
}

export default App;

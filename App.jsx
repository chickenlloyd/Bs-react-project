import Cards from "./Cards";
import DrawFiveCards from "./drawFiveCards";

function App() {

  const x = chance.string()
  


  return (
    <div>
      <h1 className="text-3xl text-center m-5">Mason's BS Project</h1>
      <Cards />
      <DrawFiveCards />

    </div>
  )
}

export default App

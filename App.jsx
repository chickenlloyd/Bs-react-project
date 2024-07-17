
import Cards from "./Cards";
import GameArea from "./GameArea";

import { createContext, useState } from "react";

export const GameContext = createContext(null);

function App() {
  const [gameInfo, setGameInfo] = useState({
    cardToPlay: 1,
    currentCard: null,
    player1Turn:true,
    player2Turn:false,
    hasPlayedCard:false,
    errorMessage:""
  });

  return (
    <GameContext.Provider
    value={{
      gameInfo,
      setGameInfo
    }}>
      <div>
        <h1 className="text-3xl text-center m-5">Mason's BS Project</h1>
        
        <div className="flex flex-col items-center">
            <Cards ownCards={true}/>
            
            <GameArea />
            
            <Cards ownCards={false}/>
          </div>
      </div>
      </GameContext.Provider>
  )
}

export default App

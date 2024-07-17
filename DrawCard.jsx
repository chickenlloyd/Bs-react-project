import createDeck from "./deck.js";
import { useContext, useState } from "react";
import { GameContext } from "./App.jsx";


const cardMapping = {
    11: "J",
    12: "Q",
    13: "K"
}

function DrawCard(props) {
    const {
        gameInfo,
        setGameInfo
    } = useContext(GameContext);

    const [deck, setDeck] = useState(props.deck);

    if (!deck) return;

    function clickCards(card) {
        let newGameInfo = gameInfo;

        if (gameInfo.player1Turn && props.ownCards) {
            setDeck(deck.filter(currentCard => currentCard !== card));
            newGameInfo.currentCard=card
            newGameInfo.hasPlayedCard=true;
            setGameInfo({...newGameInfo})

            
        }
        else if (gameInfo.player2Turn && !props.ownCards) {
            setDeck(deck.filter(currentCard => currentCard !== card));
            newGameInfo.currentCard=card
            newGameInfo.hasPlayedCard=true;
            setGameInfo({...newGameInfo})
        }
        
    }

    function clickOnEndTurn() {
        if (gameInfo.hasPlayedCard == true) {
            let newGameInfo = gameInfo;
            // 13 = King
            if (gameInfo.cardToPlay === 13) {
                newGameInfo.cardToPlay=1;
            } else {
                newGameInfo.cardToPlay=newGameInfo.cardToPlay + 1;      
            }
            if (gameInfo.player1Turn && props.ownCards) {
                
                newGameInfo.player1Turn = false;
                newGameInfo.player2Turn = true;
                newGameInfo.hasPlayedCard=false;
                setGameInfo({ ...newGameInfo});
            }
            else if (gameInfo.player2Turn && !props.ownCards) {
                newGameInfo.player1Turn = true;
                newGameInfo.player2Turn = false;
                newGameInfo.hasPlayedCard=false;
                setGameInfo({ ...newGameInfo});
            }
        }
        else {
            let newGameInfo = gameInfo;
            newGameInfo.errorMessage="You cannot end your turn without playing a card!";
            setGameInfo({ ...newGameInfo});
        }
    }

    return(
        <div>
            <button onClick={() => clickOnEndTurn()}>End turn</button>
            {deck.map((card, index) => (

                <div onClick={() => clickCards(card)} key={index} className="border-black border rounded-md inline-block p-4 m-4 w-24 h-32 relative">
                    <div className="absolute top-2 left-2">{
                    card[1] < 2 
                        ? "A" 
                        : card[1] > 10
                        ? cardMapping[card[1]]
                        : card[1]
                }</div>

                    <div className="absolute top-10 left-10">
                        {
                            card[0] == "hearts" ? (
                                <span>&hearts;</span>
                            ) : card[0] == "diamonds" ? (
                                <span>&diams;</span>
                            ) : card[0] == "spades" ? (
                                <span>&spades;</span>
                            ) : card[0] == "clubs" ? (
                                <span>&clubs;</span>
                            )
                                : (
                                <span>${0}</span>
                                )
                        }

                    </div>

                    <div className="absolute bottom-2 right-2 transform rotate-180">{
                    card[1] < 2 
                        ? "A" 
                        : card[1] > 10
                        ? cardMapping[card[1]]
                        : card[1]
                }</div>
                </div>
            ))}
        </div>
    )
}



export default DrawCard;

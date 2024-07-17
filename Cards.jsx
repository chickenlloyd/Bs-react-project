import DrawCard from "./DrawCard.jsx"
import DrawFiveCards from "./DrawFiveCards.jsx";

let deck = DrawFiveCards()

function Card(props) {

    console.log(deck)

    return (
        <div>
            <h1>{props.ownCards ? "Cards" : "Opponents Cards"}</h1>
    
            <DrawCard deck={deck} ownCards={props.ownCards}/>
    
        </div>
    );
}

export default Card

import Chance from "chance"
const chance = new Chance();

function Card(props) {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades']
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    var deck = []

    for (let suit in suits) {
        for (let value in values) {
            let card = [suits[suit], values[value]]
            deck.push(card)
        }
    }

    chance.set({})

    console.log(deck)

    return (
        <div>
            <h1>Cards</h1>
    
            <DrawCard deck={deck}/>
    
        </div>
    );
}

function DrawCard(props) {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades']
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    var deck = []

    for (let suit in suits) {
        for (let value in values) {
            let card = [suits[suit], values[value]]
            deck.push(card)
        }
    }
    
    let card = deck
    return(
        <div>
            {deck.map((card, index) => (
                <div key={index} className="border-black border rounded-md inline-block p-4 m-4 w-24 h-32 relative">
                    <div className="absolute top-2 left-2">{card[1]}</div>

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

                    <div className="absolute bottom-2 right-2 transform rotate-180">{card[1]}</div>
                </div>
            ))}
        </div>
    )
}



export default DrawCard;

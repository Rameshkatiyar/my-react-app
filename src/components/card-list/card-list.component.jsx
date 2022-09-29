import { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const {cards} = this.props;

        return (
            <div>
                {
                    cards.map((card) => <div>
                        {/* <h1 key={card.id}>{card.id}. {card.name}</h1> */}
                        <Card user={card}/>
                    </div>)
                }
            </div>
        );
    }
}

export default CardList;

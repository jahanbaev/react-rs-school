import React from 'react';
import Card from './Card';

interface CardData {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
  }
  
  interface CardListProps {
    cards: CardData[];
  }
  
  class CardList extends React.Component<CardListProps> {
    render() {
      const { cards } = this.props;
      return (
        <div className="content card-list">
          {cards.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      );
    }
  }
  

export default CardList;
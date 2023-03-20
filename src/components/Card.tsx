import React from 'react';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
  }
  
  class Card extends React.Component<CardProps> {
    render() {
      const { imageSrc, title, description } = this.props;
      return (
        <div className="card">
          <img src={imageSrc} alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      );
    }
  }

export default Card;
import React from 'react';
import PropTypes from 'prop-types';

// const Card = (props) => {//Propslar yardımıyla card componentine veri gönderiyoruz.
//   return (
//     <div className="card w-100">
//       <img src={props.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{props.cardTitle}</h5>
//         <p className="card-text">{props.cardText}</p>
//         <p className="card-text">{props.cardText}<small className="text-muted">{props.updatedTime}</small></p>
//       </div>
//     </div>
//   );
// };



class Card extends React.Component { //Card classı react componentını extend ediyor.
  static defaultProps = { //Card classının default propsları
    cardTitle: "Default Card Title",
    cardText: "Lorem Ipsum Text",
    updatedTime: "Last updated 3 min ago",
    image: "https://picsum.photos/id/3/200/300"
  }
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">{this.props.cardText}<small className="text-muted">{this.props.updatedTime}</small></p>
        </div>
      </div>
    );
  }
}

Card.propTypes = { //Card classının propsları
  cardText: PropTypes.string.isRequired,
  updatedTime: PropTypes.string,
  image: PropTypes.string
}

export default Card;

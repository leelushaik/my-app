import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetailed from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
    this.onDishSelect = this.onDishSelect.bind(this);
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        {this.state.selectedDish && <Dishdetailed dish={this.state.selectedDish} />}
      </div>
    );
  }
}

export default Menu;

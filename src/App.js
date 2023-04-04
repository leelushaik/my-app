import Menu from "./components/MenuComponents";
import { DISHES } from "./shared/dishes";
import { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <><div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div><div>
          <div>
            <Menu dishes={this.state.dishes} />
          </div>
        </div></>
    );
  }
}

export default App;
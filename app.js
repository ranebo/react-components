// TODO
//*******************Putting components directly (PCD)*************8
// var Cheese = () => (
//   <li> Cheese! </li>
//   );

// var Gravy = () => (
//   <li> and Gravy! </li>
//   );

//****************Putting components indirectly (PCI) with click event******
// var GroceryListItem = (props) => {

//   var onGroceryListClick = (event) => {
//     console.log('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onGroceryListClick}>{props.items[0]}</li>
//       <li>{props.items[1]}</li>
//     </ul>
//     );
//   }

class GroceryItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onGroceryItemMouseEnter() {
    this.setState({
      done: !this.state.done
    });
  }

  onGroceryItemMouseLeave() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      'fontWeight': this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onGroceryItemMouseEnter.bind(this)} onMouseLeave={this.onGroceryItemMouseLeave.bind(this)}>{this.props.item}</li>
    );

  }

}

var GroceryListItem = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryItem item={item} />
    )}
  </ul>
  //(PCI)
  //<ul>
      //<li>{props.items[0]}</li>
      //<li>{props.items[1]}</li>
  //</ul>
  )



var GroceryList = () => (
  <GroceryListItem items={['Cheese!', 'and Gravy!', 'Eww!']}/>
  //(PCD)
  // <ul>
   // <Cheese />
   // <Gravy />
  // </ul>
  );

ReactDOM.render(<GroceryList />, document.getElementById('app'));


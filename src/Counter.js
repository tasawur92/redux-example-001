import React, { Component } from 'react';
import './App.css';
const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}
class Counter extends Component {
  state = {
    number: 0
  }
  addOne = () => {
    this.setState({
      number: this.state.number + 1
    });
  }
  minusOne = () => {
    this.setState({
      number: this.state.number - 1
    });
  }
render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>{this.state.number}</h1>
          <div style={containerStyle}>
            <button type="button" style={buttonStyle} onClick={this.minusOne}>-</button>
            <button type="button" style={buttonStyle} onClick={this.addOne}>+</button>
          </div>
        </header>
      </div>
    );

    
  }
}
export default Counter;




// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// const containerStyle = {
//   display: 'flex'
// }
// const buttonStyle = {
//   fontSize: '1.5rem',
//   width: '40px',
//   height: '40px'
// }

// class Counter extends Component {

//   addOne = () => {
//     this.props.dispatch({ type: 'ADD_ONE' });
//   }

//   minusOne = () => {
//     this.props.dispatch({ type: 'MINUS_ONE' });
//   }

//   render() {
//     return (
//       <div className="App" >
//         <header className="App-header">
//           <h1>{this.props.number}</h1>
//           <div style={containerStyle}>
//             <button onClick={this.minusOne} type="button" style={buttonStyle}>-</button>
//             <button onClick={this.addOne} type="button" style={buttonStyle}>+</button>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     number: state.number
//   };
// }

// export default connect(mapStateToProps)(Counter);
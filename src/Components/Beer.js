import React, { Component } from 'react';

class Beer extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            isClicked: false
        }
    };

    componentDidUpdate() { 
        console.log(this.state.isLiked)
    } 
render(){


  return (
    <li>
        <img src={this.props.image} alt={this.props.name}/>
        <h2>{this.props.name}</h2>
        <button onClick={() =>{
            this.setState({
                isClicked: !this.state.isClicked
            })
        }}>
            {this.state.isClicked ? "Show message" : "Hide message"}
        </button>
        {
            this.state.isClicked && (
                <p>{this.props.message}</p>
            )
        }
    </li>
  );
}
}
export default Beer;
// function Beer(props) {
//     return (
//       <li>
//           <img src={props.image} alt={props.name}/>
//           <h2>{props.name}</h2>
//       </li>
//     )
//   }
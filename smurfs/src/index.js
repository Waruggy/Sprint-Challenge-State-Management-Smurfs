import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import axios from 'axios';
import Profile from './components/Profile';

class SmurfsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSmurf: {
                name:'',
                age:'',
                height:''
            }
        }
        this.fetchSmurf = this.fetchSmurf.bind(this);
    }
     fetchSmurf() {
    axios.get('http://localhost:3333/smurfs')
      .then( (response) => {
        console.log("response", response);
        this.setState({
          fetchUser: response.data
        });
        console.log("fetchSmurf", this.state.fetchSmurf);
      })
      .catch( (error) => {
        console.log(error);
      }); 
       
         handleSubmit(e){
 e.preventDefault()
 const input = {tweet: {body:  this.state.value}};
 fetch('http://localhost:3333/smurfs', {
method: 'POST',  
body: JSON.stringify(input),  
headers:{
  'Content-Type': 'application/json'
 }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
 }
    }
    
   render() {
    return (
      <div>
          <input placeholder="Add Smurf" />
          <button onClick={this.fetchSmurf}>Add</button>
          <Profile name={this.state.fetchSmurf.name} age={this.state.fetchSmurf.age} height={this.state.fetchSmurf.height} />
      </div>
    );
  } 
}
export default SmurfsList;

ReactDOM.render(<React><App /></React>, document.getElementById("root"));

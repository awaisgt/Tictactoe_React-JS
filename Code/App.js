import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Squares from "./components/squares"

class App extends Component {

  constructor() {
    super()
    this.state = {
      display_val : Array(9).fill(".") ,
      turn : "X" 
      , status : 0,winner : null  
    };
    this.change_display.bind(this)
    this.Squares = React.createRef();

  }



  calculate_winner(disp){
    const a = disp[0]
    const b = disp[1]
    const c = disp[2]
    const d = disp[3]
    const e = disp[4]
    const f = disp[5]
    const g = disp[6]
    const h = disp[7]
    const i = disp[8]

    if (this.state.status >=4){
      if (a==b && b==c && a!='.' && b!='.' && c!='.'){
        this.setState({winner:a})
      }
      else if (a == d &&d ==g && a!='.' && d!='.' &&g!='.'){
        this.setState({winner:a})
      }
      else if (a == e &&e  ==i && a!='.' && e!='.' &&i!='.'){
        this.setState({winner:a})
      }
      else if (b == e &&e ==h && b!='.' && e!='.' &&h!='.'){
        this.setState({winner:b})
      }
      else if (c == f &&f  ==i && c!='.' && f!='.' &&i!='.'){
        this.setState({winner:c})
      }
      else if (d == e && e ==f && d!='.' && e!='.' &&f!='.'){
        this.setState({winner:d})
      }
      else if (g == h &&h  ==i && g!='.' && h!='.' &&i!='.'){
        this.setState({winner:g})
      }
      else if (g == e && e ==c&& g!='.' && e!='.' &&c!='.'){
        this.setState({winner:g})
      }
  
    }
  }

  change_display (square_val) {
  const disp = this.state.display_val.slice();
  if (this.state.display_val[square_val]=="." && this.state.winner == null)
  {

  this.state.turn =='X' ? this.setState({turn:"O"}) : this.setState({turn:"X"})
  this.state.turn == 'X' ? disp[square_val] = 'X' : disp[square_val] = 'O'
  this.setState({display_val:disp})
  this.setState({status:this.state.status+1})
  this.calculate_winner(disp)
  }

  
  //this.state.turn == 'X' ?   display_val[square_val]  = 'X' : display_val[square_val]  = 'O'
 

}
  

  displaySquare(value){
    return(
    
      

         <Squares  onClick = {() => this.change_display(value)}   val = {this.state.display_val[value]}>
  
         
        </Squares>
     

  
    )
  }
  

  render() {
  var turn = ""
  var winner = ""
  var finished = false
    if (this.state.status == 9 && this.state.winner == null){
      turn = ""
      winner = "No Winner"
      finished = true
    }
    else if (this.state.status !=9){
      turn = "Turn : " + this.state.turn
      winner = ""
    }
    if (this.state.winner !=null){
      turn = ""
      winner = "Winner : " + this.state.winner
      finished = true
    }


    return (
      <div className ="maindiv">
      <h1 className='App'>{turn} </h1>

      <h1 className='App'>  {winner} </h1>
      
      {this.state.winner != null || finished ? <div className='btndiv'><button onClick={() =>  this.setState({status:0,winner:null,turn:'X',display_val:Array(9).fill(".")})} className='centerbtn'> Play Again!</button></div>:null}
      
      <div className="flex-container">
       
        
      {this.displaySquare(0)}
      {this.displaySquare(1)}
      {this.displaySquare(2)}
      </div>
      <div className="flex-container">
      {this.displaySquare(3)}
      {this.displaySquare(4)}
      {this.displaySquare(5)}
      </div>
      <div className="flex-container">
      {this.displaySquare(6)}
      {this.displaySquare(7)}
      {this.displaySquare(8)}
      </div>

      </div>





    )
  }
  
  
  }
export default App;

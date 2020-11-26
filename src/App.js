import React from 'react';
import axios from 'axios';
import './App.css';
import Items from './Items'
import AddItem from './addItem'


class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      res:''
    }
  }
  async componentDidMount(){
     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
     this.setState({res:data});
  }
  deleteItem = (id) =>{
    let res = this.state.res;
    let i = res.findIndex(item => item.id === id);
    res.splice(i,1);
    this.setState({res});

  }

  addItem = (item) =>{
    item.id=Math.random();
    let res = this.state.res;
    res.push(item);
    this.setState({res});
  }

  render(){
  return (
    <div className="App">
      <h2>Todo List</h2><br />
      <Items item={this.state.res} deleteItem={this.deleteItem}/>
      <AddItem addItem ={this.addItem}/>

    </div>
  );
  }
}

export default App;

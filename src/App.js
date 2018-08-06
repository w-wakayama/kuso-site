import React, { Component } from 'react';
//import Form from './Form';
//import List from './List';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: [
       { title: 'うんち', scrollamount: 6 } ,
       { title: 'Reactすごい', scrollamount: 6 } ,
       { title: 'ラーメン食べたい', scrollamount: 6 } ,
       { title: '明治大学', scrollamount: 6 }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    // 追加
    this.state.todo.push({
      title: this.refs.newText.value
    });
    // 保存
    this.setState({
      todo : this.state.todo
    });
    // 初期化
    this.refs.newText.value='';
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.todo.map( (todo, i) => {
            return <marquee key={i} scrollamount={todo.scrollamount}> {todo.title}</marquee>
          })}
        </ul>
        <input type="text" ref="newText"/>
        <input type="button" value="追加" onClick={this.addTodo}/>
      </div>
    )
  }
}

export default App;

import React, { Component } from "react";
import clsx from "clsx";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
          }
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618"
            }
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
          }
        }
      ]
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos: todos });
      });
  }
  todoClicked = (ind) => {
    const { todos } = this.state;
    todos[ind].completed = true;
    this.setState({ todos });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, ind) => {
            return (
              <li
                onClick={() => this.todoClicked(ind)}
                className={clsx({ done: todo.completed })}
                key={todo.id}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todos;

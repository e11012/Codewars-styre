import React, { useState, useEffect } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [competitions, setCompetitions] = useState([
    ["AtCoder Regular Contest 124", "https://atcoder.jp/contests/arc124"],
    ["AtCoder Beginner Contest 213", "https://atcoder.jp/contests/abc213"],
    ["AtCoder Heuristic Contest 005", "https://atcoder.jp/contests/ahc005"]
  ]);

  const [inputState, setInputState] = useState("");

  const Add = (e) => {
    e.preventDefault();
    setTodolist([...todolist, inputState]);
    setInputState("");
  };

  const Register = (e) => {
    e.preventDefault();

    setTodolist([...todolist, e.target.value]);
  };

  const Delete = (i) => (e) => {
    setTodolist((todolist_) => todolist_.filter((_, k) => i !== k));
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      Add();
    }
  };

  return (
    <div className="App">
      <div className="competitions">
        <h2 className="keppa-heading">Competitions</h2>
        <ul>
          {competitions.map((competition, i) => (
            <li key={i}>
              <span className="competition-name">{competition[0]}</span>
              <button>
                <a href={competition[1]} target="_blank">
                  Event Details
                </a>
              </button>
              <button onClick={Register} value={competition[0]}>
                Add to To-do
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="todo">
        <h2 className="keppa-heading">To-do List</h2>
        <div>
          <form>
            <input
              type="text"
              className="form-element"
              placeholder="Enter New ToDo"
              value={inputState}
              onChange={(e) => setInputState(e.target.value)}
              onKeyPress={handleKeypress}
            />
            <button className="form-element" onClick={Add}>
              Add
            </button>
          </form>
        </div>

        <ul>
          {todolist.map((todo, i) => (
            <li iclass="b" key={i} onClick={Delete(i)} className="b">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

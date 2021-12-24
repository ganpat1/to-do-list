import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [show, setShow] = useState("");
  const [arr, setArr] = useState([]);

  const inputChange = (event) => {
    setShow(event.target.value);
  };
  const btnclick = () => {
    setArr((oldItems) => {
      return [...oldItems, show];
    }); //old item acces set arr k andr jo object he uski avalue acces kr rh he
    setShow("");
  };

  const dltbtn = (id) => {
    setArr((oldItems) => {
      return oldItems.filter((currElemt, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="center-main">
          <h1>ToDo-List</h1>
          <br />
          <div className="list">
            <input type="text" onChange={inputChange} value={show} />
            <button className="btn" onClick={btnclick}>
              +
            </button>
            <br />
            <ol>
              {/* {arr.map((itemofiput,index) => {
            return  <ToDoList  text={itemofiput} key={index}  id={index} onSelect={dltbtn} />
                
              
              
              })

                }     */}

              {arr.map((itemofiput, index) => {
                return (
                  <>
                    <div>
                      <li onSelect={dltbtn}>{itemofiput} </li>
                      <button onClick={() => dltbtn(index)}>X</button>
                    </div>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

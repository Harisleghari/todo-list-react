import React, { useState } from 'react';
import "../app.css";

const ToDoList = () => {

  //Hooks
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);
  const [mood, setMood] = useState({ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" });

  //Date
  const today = new Date();
    const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
    const day = today.toLocaleDateString('en-US', options);

  //Print
  const print = () => {
    if (input) {
      let newItem = [...items, input];
      setItems(newItem)
      setInput("")
    }
  };

  //Mood Dark or White
  const moodChange = () => {
    if (mood.backgroundColor === "black") {
      setMood({ backgroundColor: "white", minHeight: "100vh", overflow: "hidden" })
    } else {
      setMood({ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" });
    }
  };

  //Delete single item
  const deleteItem = (id) => {
    const update = items.filter((data, index) => {
      return index !== id;
    })
    setItems(update);
  };

  //Delete all items
  const deleteAll = () => setItems([]);

    

  // Main return of todolist
  return (
    <div className="container-fluid p-5" style={mood}>
      <div>
        {
          mood.backgroundColor === "black" ?
            <img className='mx-auto d-block ' src="./images/moon.png" alt="" style={{ width: "2.5rem" }} onClick={moodChange} />
            : <img className='mx-auto d-block ' src="./images/sun.png" alt="" style={{ width: "2.5rem" }} onClick={moodChange} />
        }
      </div>

      <div className="container pt-5 text-center" >
        <h2 className='fw-bold fs-1 pt-4' style={{
          color: "#ff7000"
        }}>{day}</h2>


        <input  className=' bg-dark' placeholder='Add new list' type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button className='add' type="submit" onClick={print} >+</button>


        {items.length > 0 ? (
          <>
            <div className='m-auto rounded  shadow-lg' style={{ width: "26rem", border: "none"}}>
              {items.map((data, index) => {

                return (

                  <div className='' key={index}>
                    <p className='d-inline  float-start ps-3 py-3 ' style={{ fontSize: "26px",color: mood.backgroundColor === "black" ? "white" : "black" }} >{data}  </p>
                    <img onClick={() => { deleteItem(index) }} className='d-inline float-end pe-3 py-3' src="./images/delete.png" alt="" style={{ width: "2.5rem" }} />

                    <hr style={{ border: mood.backgroundColor === "black" ? "1px solid white" : "1px solid black", width: "24rem", margin: "auto" }} />
                  </div>
                )
              })}
            </div>
            <button className='mt-5 fw-bold py-2 px-4 bg-dark text-danger rounded' onClick={deleteAll}>Delete Everything</button>
          </>
        )
          :
          <div>
            <img src="./images/todo-list.png" alt="" style={{ width: "22rem" }} />
          </div>}





      </div>

    </div>
  );
}

export default ToDoList
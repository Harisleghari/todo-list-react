import React, { useState } from 'react'

const ToDoList = () => {

  const [input, setInput] = useState();
  const [items, setItems] = useState([]);
  const [mood, setMood] = useState({ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" });


  const print = () => {
    if (input) {
      let newItem = [...items, input];
      setItems(newItem)
      setInput("")
    }
  };

  function moodChange() {
    if (mood.backgroundColor === "black") {
      setMood({ backgroundColor: "white", minHeight: "100vh", overflow: "hidden" })
    } else {
      setMood({ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" });
    }
  };

  function deleteItem(id) {
    const update = items.filter((data, index) => {
      return index !== id;
    })
    setItems(update);
  };

  function deleteAll() {
    setItems([])
  };

  return (
    <div className="container-fluid p-5" style={mood}>
      <div className="mood">
        {
          mood.backgroundColor === "black" ?
            <img className='float-end ' src="./images/moon.png" alt="" style={{ width: "2rem" }} onClick={moodChange} />
            : <img className='float-end ' src="./images/sun.png" alt="" style={{ width: "2rem" }} onClick={moodChange} />
        }
      </div>

      <div className="container pt-5 text-center" >
        <h2 className='fw-bold fs-1 pt-4' style={{
          color: "#ff7000"
        }}>Todo list</h2>


        <input style={{ width: "14rem" }} className='my-5 bg-dark shadow-lg border border-0 p-2 rounded text-white' placeholder='Enter your tast' type="text" value={input} onChange={e => setInput(e.target.value)} />
        <button className='my-5 fw-bold  shadow-lg border border-0 px-4 py-2 rounded ms-2 ' type="submit" onClick={print} style={{ backgroundColor: "#A8DCFA" }} >Add </button>


        {items.length > 0 ? (
          <>
            <div className='m-auto rounded  shadow-lg' style={{ width: "26rem", border: mood.backgroundColor === "black" ? "2px solid white" : "2px solid black" }}>
              {items.map((data, index) => {

                return (

                  <div className='' key={index}>
                    <p className='d-inline  float-start ps-3 py-3 ' style={{ color: mood.backgroundColor === "black" ? "white" : "black" }} >{data}  </p>
                    <img onClick={() => { deleteItem(index) }} className='d-inline float-end pe-3 py-3' src="./images/delete.png" alt="" style={{ width: "2.5rem" }} />

                    <hr style={{ border: mood.backgroundColor === "black" ? "1px solid white" : "1px solid black", width: "24rem", margin: "auto" }} />
                  </div>
                )
              })}
            </div>
            <button className='mt-5 fw-bold py-2 px-3 bg-dark text-danger' onClick={deleteAll}>Delete All</button>
          </>
        )
          :
          <div>
            <img src="./images/TODo list.svg" alt="" style={{ width: "22rem" }} />
          </div>}





      </div>

    </div>
  );
}

export default ToDoList
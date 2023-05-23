import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import "./App.css";
import { BsTrash } from 'react-icons/bs'
import Heading from './components/Heading'
import Nav from './components/Nav'
import Footer from "./components/Footer";



export default function App() {
  // const [tab, setTab] = useState(0)
  const [todoList, setTodoList] = useState([]);
  const [formData, setFormData] = useState({
    key: 0,
    todo: "",
    isChecked: false,
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    const id = todoList.length + 1;

    setFormData({
      key: id,
      [name]: type === "checkbox" ? checked : value,
      isChecked: formData.isChecked,
    });

    console.log(todoList)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData)
    if (formData.todo !== "") {
      setTodoList((prev) => {
        return [...prev, formData];
      });

      return setFormData({
        key: 0,
        todo: "",
        isChecked: false
      });
    }
    // Clear the input after submitting if successfull
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((x) => x.id !== id))
  }

  // function handleComplete() {
  //   return (
  //     <ul className="todo">
  //       {todoList.filter((x) =>
  //         x.isChecked ? (
  //           <li className="">
  //             <span>
  //             <Input
  //               id="checkbox"
  //               type="checkbox"
  //               handleChange={handleChange}
  //               name="isChecked"
  //               value={formData.isChecked}
  //             />
  //             {x.todo}
  //             </span>

  //             <span>
  //               <FaTimes onClick={() => deleteTodo(x.id)} />
  //             </span>
  //           </li>
  //         ) : (
  //           ""
  //         )
  //       )}
  //     </ul>
  //   //   {todoList.isChecked.length > 0 ? <ul className='todo'>
  //   //   {todoList.map((x) => x.isChecked ? "" :
  //   //   <li>
  //   //     <Input type="checkbox" 
  //   //       handleChange={handleChange} 
  //   //       name="todoItems" 
  //   //       value={formData.isChecked} />
  //   //      {x.todo} 
  //   //      <FaTimes onClick={() => deleteTodo(x.id)} />
  //   //   </li>)}
  //   // </ul> : "no completed task"}
  //   );
  // }

  return (
    <main>
      <Heading />
      <Nav
        //handleComplete={handleComplete}
        hey={() => console.log("hey")}
      />
            <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        
        <Input
          type="text"
          handleChange={handleChange}
          name="todo"
          value={formData.todo}
          placeholder="add details"
        />

        <Button text="Add" color="blue" Class="button" />
      </form>
      <ul className="todo">
        {todoList.map((x) => (
          <li key={formData.id}>
            <label>
            <Input
              type="checkbox"
              handleChange={handleChange}
              name="isChecked"
              checked={formData.isChecked}
            />
            {x.todo}</label>
            
            <span>
            <BsTrash className="del" onClick={() => deleteTodo(x.id)} />
            </span>
          </li>
        ))}
      </ul>

      {/* {console.log(todoList)} */}
      <Footer />
    </main>
  );
}

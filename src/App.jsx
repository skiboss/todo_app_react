import Input from "./components/Input";
import Button from "./components/Button";
import { useState} from "react";
import "./App.css";
import { BsTrash } from 'react-icons/bs'
import Heading from './components/Heading'
import Nav from './components/Nav'
import Footer from "./components/Footer";



export default function App() {
  // const [tab, setTab] = useState(0)
  // const [formData, setFormData] = useState({
  //   key: 0,
  //   todo: "",
  //   isChecked: false,
  // });

  const [textInput, setTextInput] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [todoList, setTodoList] = useState([]);


  // function handleChange(event) {
  //   const { name, value, checked, type } = event.target;
  //   const id = todoList.length + 1;

  //   setFormData({
  //     key: id,
  //     [name]: type === "checkbox" ? checked : value,
  //     isChecked: formData.isChecked,
  //   });

  //   console.log(todoList)
  // }

  function addTodo (todo) {
    const id = todoList.length + 1;
    const newTodo = {id, ...todo}
    setTodoList([...todoList, newTodo])
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData)
    if (!textInput) {
      alert("Please add a todo")
      return
    }

    addTodo({textInput, isChecked})

    // Clear the input after submitting if successfull
    setTextInput("")
    setIsChecked(false)
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((x) => x.id !== id))
  }

  const handleChecked = (id) => {
    
    setTodoList(
      todoList.map((todo) => 
      todo.id === id ? { ...todo, isChecked:
          !todo.isChecked} : todo
      )
    )
  }

  // useEffect(() => {
  //   switch (tab) {
  //     case 0:
  //       setTodoList(todoList);
  //       break;
  //     case 1:
  //       setTodoList(todoList.filter((x) => !x.isChecked));
  //       break;
  //     case 2:
  //       setTodoList(todoList.filter((x) => x.isChecked));
  //       break;
  //   }
  // }, [todolist]);

  return (
    <main>
      <Heading />
      <Nav
        //handleComplete={handleComplete}
        // active={() => setTab(1)}
        // completed={() => setTab(2)}
      />
            <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        
        <Input
          type="text"
          handleChange={(e) => setTextInput(e.target.value)}
          name="todo"
          value={textInput}
          placeholder="add details"
        />

        <Button text="Add" color="blue" Class="button" />
      </form>

      {todoList.length > 0 ? (<ul className="todo">
        {todoList.map((x) => (
          <li key={x.id}
              style={{ textDecoration: x.isChecked && "line-through"}}
          >
            <label>
            <Input
              type="checkbox"
              name="isChecked"
              checked={x.isChecked}
              value={x.isChecked}
              handleChange={() => handleChecked(x.id)}
            />
            {x.textInput}</label>
            
            <span>
            {x.isChecked && <BsTrash className="del" onClick={() => deleteTodo(x.id)} />}
            </span>
          </li>
        )) }

        {/* {tab === 1 && todoList.filter((x) => x.isChecked === false ? 
                  <li key={x.id}>
                    <label>
                    <Input
                      type="checkbox"
                      name="isChecked"
                      checked={x.isChecked}
                      value={x.isChecked}
                      handleChange={() => handleChecked(x.id)}
                    />
                    {x.textInput} </label>
                  </li>
           : "No active item")} */}

        {/* {tab === 2 && setTodoList(todoList.filter((x) => x.isChecked ? (
                    <li key={x.id}>
                      <label>
                      <Input
                        type="checkbox"
                        name="isChecked"
                        checked={x.isChecked}
                        value={x.isChecked}
                        handleChange={() => handleChecked(x.id)}
                      />
                      {x.textInput}</label>
                      
                      <span>
                      <BsTrash className="del" onClick={() => deleteTodo(x.id)} />
                      </span>
                    </li>
                  ) : "No completed task"))} */}



        </ul>) : "No Todo item yet"}
      <Footer />
    </main>
  );
}

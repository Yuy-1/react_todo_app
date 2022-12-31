import { PlusIcon } from "@heroicons/react/20/solid/index.js";

const CustomForm = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }


  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
    >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          //value={task}
          //onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task"
        className="label"
        >Enter Task</label>
      </div>
      <div
        className="btn"
        aria-label="Add Task"
        type="submit"
      >
      <PlusIcon />
      </div>
    </form>
  )
}

export default CustomForm
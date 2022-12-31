const CustomForm = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }


  return (
    <form className="todo"
    onSubmit={handleFormSubmit}
    >
    </form>
  )
}

export default CustomForm
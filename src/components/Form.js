const Form = (input, setInput, todos, setTodos) => {
  const onSubmit = (e) => {
    e.preventDefault([
      ...todos,
      {
        id: Math.random() * 1000,
        title: input,
        completed: false,
      },
    ]);
  };
  return (
    <form action="">
      <input
        type="text"
        placeholder="Enter task"
        className="task-input"
      ></input>
      <button type="submit" className="button-add">
        Add
      </button>
    </form>
  );
};

export default Form;

import { useState } from "react";
import "./StudentForm.css";

const StudentForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAdd({
      name,
      age,
    });

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={nameChangeHandler}
        value={name}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={ageChangeHandler}
        value={age}
      />

      <button>Add</button>
    </form>
  );
};

export default StudentForm;

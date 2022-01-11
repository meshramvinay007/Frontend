import { useEffect, useState } from "react";
import Header from "./components/Header";
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:9000/students").then((res) =>
      res.json().then((data) => {
        setStudents(data);
      })
    );
  }, []);

  const inputAddHandler = (student) => {
    setLoading(true);
    console.log(student.name, student.age);
    axios
      .post("http://localhost:9000/students", student)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setLoading(false);

    setStudents((prevState) => [
      ...prevState,
      { _id: Math.random(), ...student },
    ]);
  };

  const deleteHandler = (id) => {
    console.log(id);
    setLoading(true);

    axios
      .delete(`http://localhost:9000/students/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setLoading(false);

    const newStudents = students.filter(student => student._id !== id);
    console.log(newStudents);
    setStudents(newStudents);
  };

  return (
    <div className="App">
      <Header />
      <StudentForm onAdd={inputAddHandler} />

      {!isLoading ? (
        <Students students={students} onDelete={deleteHandler} />
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}

export default App;

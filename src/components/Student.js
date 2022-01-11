
import Trash from "./icon/trash";
import "./Student.css";

const Student = (props) => {
  const deleteHandler = (event) => {
    props.onDelete(props.id);
  };

  return (
    <div className="student">
      <h1>{props.name}</h1>
      <p>{props.age} Years Old</p>
     
      <button onClick={deleteHandler}>{<Trash />}</button>
    </div>
  );
};

export default Student;

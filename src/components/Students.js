import Student from "./Student";

const Students = (props) => {
    return <>
        {props.students.map((student) => (
        <Student
          key={student._id}
          id={student._id}
          name={student.name}
          age={student.age}
          onDelete={props.onDelete}
        />
      ))}
    </>
}

export default Students;

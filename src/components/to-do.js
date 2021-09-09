import React, {useState} from "react";

const Names = [
  {
    name: '',
  },
];

const ToDo = () => {
  const [list, setList] = useState(Names);
  const [name, setName] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAddName() {
    list.push({name});
    setList(list);
    // const newNameList = list.concat({ name });
    // setList(newNameList);
    setName('');
  }

  return (
    <div>
      <div>
        <input onChange={handleChange} value={name} style={{width:'200px'}}/><br></br>
        <button onClick={handleAddName}>
          Add New Name
        </button>
      </div>
    <ul>
      {list.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
    </div>
  );
};
export default ToDo;

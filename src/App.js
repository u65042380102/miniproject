import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAdd = () => {
    if (name.trim() !== '') {
      setNames([...names, name]);
      setName('');
    }
  };

  const handleDelete = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const handleEdit = (index, newName) => {
    const newNames = [...names];
    newNames[index] = newName;
    setNames(newNames);
  };

  return (
    <div className="App">
      <h1>โปรแกรมเพิ่มลบแก้ไขข้อมูล</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button className='add' onClick={handleAdd}>Add</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <span>
            <button className = 'edit' onClick={() => handleEdit(index, prompt('กรอกชื่อที่ต้องการแก้ไข'))}>Edit</button>
            <button className = 'delete' onClick={() => handleDelete(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

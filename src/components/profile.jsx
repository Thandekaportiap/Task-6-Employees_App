import { useState } from 'react';

const Profile = ({ employees, onDeleteEmployee, onUpdateEmployee,onAddEmployee  }) => {
  console.log(employees)

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [employee, setEmployee] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    image: '',
    position: '',
    id: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEmployee(employee);
    setEmployee({
      name: '',
      surname: '',
      email: '',
      phone: '',
      image: '',
      position: '',
      id: ''
    });
  };


  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  return (
    <>
    
    <div className="maindiv profile" >
       <h4>Welcome {employees.name}</h4>
      <img src={employees.image} alt={employees.name} />
      <h4>{employees.name} {employees.surname}</h4>
      <p>{employees.email}</p>
      <p>{employees.phone}</p>
      <p>{employees.position}</p>

      
      <button className='btn' onClick={handleButtonClick}>Edit</button>
      {isFormVisible && ( 
        <form className='form' onSubmit={handleSubmit}>
        <input type="text" placeholder="name" id="name" name="name" value={employee.name || employees.name}  onChange={handleChange}  />
        <input type="text" placeholder='Surname' id="surname" name="surname" value={employee.surname || employees.surname} onChange={handleChange} />
        <input type="number" placeholder='EmployeeNo' id="id" name="id" value={employee.id || employees.id} onChange={handleChange} />
    <button onClick={handleCloseForm}>Close</button>
    <button className='btn' type='submit' onClick={onUpdateEmployee}>Update</button>
    </form>)}
       <button className='delete' onClick={() => onDeleteEmployee(employees.id)}>Delete</button>

    </div>
    </>
  );
};

export default Profile;
import { useState, useEffect } from 'react';

const Profile = ({ employees, onDeleteEmployee, onUpdateEmployee }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [employee, setEmployee] = useState(employees);

  useEffect(() => {
    setEmployee(employees); // Update employee state when props change
  }, [employees]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateEmployee(employee);
    setIsFormVisible(false);
  };

  const handleDelete = () => {
    onDeleteEmployee(employees.id); // Call delete function
    setEmployee(null); // Optionally reset the employee state to refresh the view
  };

  return (
    <div className="maindiv profile">
      {employee ? (
        <>
          <h4>Welcome {employee.name}</h4>
          <img src={employee.image} alt={employee.name} style={{height:"50px", width:"40px"}}/>
          <h4>{employee.name} {employee.surname}</h4>
          <p>{employee.email}</p>
          <p>{employee.phone}</p>
          <p>{employee.position}</p>

          <button className='btn' onClick={() => setIsFormVisible(true)}>Edit</button>
          {isFormVisible && ( 
            <form className='form' onSubmit={handleSubmit}>
              <input type="text" name="name" value={employee.name} onChange={handleChange} />
              <input type="text" name="surname" value={employee.surname} onChange={handleChange} />
              <input type="email" name="email" value={employee.email} onChange={handleChange} />
              <input type="tel" name="phone" value={employee.phone} onChange={handleChange} />
              <input type="text" name="position" value={employee.position} onChange={handleChange} />
              <input type="text" name="image" value={employee.image} onChange={handleChange} />
              <input type="number" name="id" value={employee.id} onChange={handleChange} />
              <button type="button" onClick={() => setIsFormVisible(false)}>Close</button>
              <button className='btn' type='submit'>Update</button>
            </form>
          )}
          <button className='delete' onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <p>Employee has been deleted.</p>
      )}
    </div>
  );
};

export default Profile;

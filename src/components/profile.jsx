import React from 'react';

const Profile = ({ employee, onDeleteEmployee, onUpdateEmployee }) => {
  return (
    <div className="maindiv profile" >
       <h4>Welcome {employee.name}</h4>
      <img src={employee.image} alt={employee.name} />
      <h4>{employee.name} {employee.surname}</h4>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>{employee.position}</p>

      <button className='btn' onClick={() => onUpdateEmployee(employee.id)}>Edit</button>
       <button className='delete' onClick={() => onDeleteEmployee(employee.id)}>Delete</button>
    </div>
  );
};

export default Profile;
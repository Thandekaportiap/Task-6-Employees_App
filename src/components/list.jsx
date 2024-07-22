import React from 'react';

function EmployeeList({ employees, onSelectEmployee, onSearch }) {

  return (
    <>
    <div className="maindiv employeelist" style={{marginLeft:"20px" }}>
      
      <label htmlFor="search">
                <input type="text" id="search" placeholder="Search..." onChange={onSearch}/>
            </label>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <span>{employee.id} - {employee.name} {employee.surname}</span>
            
            <button className='btn' onClick={() => onSelectEmployee(employee)}>View</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  ); }
  
  export default EmployeeList
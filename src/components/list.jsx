import React from 'react';

function EmployeeList({ employees, onSelectEmployee, onSearch }) {

  return (
    <>
   
    <div className="maindiv employeelist " style={{marginLeft:"20px" }}>
    <h2 className='text-center text-2xl py-2'>Employees List</h2>
      
      <label htmlFor="search">
                <input type="text" id="search" placeholder="Search..." onChange={onSearch}
                className='text-black w-9/12 p-2 border border-[#4E91FD] rounded mb-2'/>
            </label>

            {employees && employees.length > 0 ? (
        <ul className="mt-4">
          {employees.map((employee) => (
            <li key={employee.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <span className="text-2xl font-semibold">{employee.id} - {employee.name} {employee.surname}</span>
              <button
                className="btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                onClick={() => onSelectEmployee(employee)}
              >
                View
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg text-gray-500 mt-4">No employees</p>
      )}
    </div>

    
    </>
  ); }
  
  export default EmployeeList
import React, { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Registration from "./components/registration"
import Profile from "./components/profile";
import List from "./components/list";


import './App.css'

function App() {

  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  useEffect(() => {
    // Get employees data from local storage
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // useEffect(() => {
  //   // Send employees data to local storage
  //   localStorage.setItem('employees', JSON.stringify(employees));
  // }, [employees]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // //Delete Employees data
  const handleDeleteEmployee = (id) => {
   setEmployees(employees.filter((employee) => employee.id !== id));
   };

  

  // Allow the Employee to edit the infomation
  const handleUpdateEmployee = (id, updatedEmployee) => {
    // setEmployees(
    //   employees.map((employee) => (employee.id === id ? updatedEmployee : employee)));
    handleDeleteEmployee(id)
    handleAddEmployee(id)
  };
  
  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  //Takes the search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //Stores the FilteredList in an Object
  const filteredEmployees = employees.filter((employee) =>
    employee.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <>
    <div>
      <Navbar/>
      </div>
    <div className='main'>
      <Registration onAddEmployee={handleAddEmployee} />
     
      <List 
       employees={filteredEmployees}
       onSelectEmployee={handleSelectEmployee}
       onSearch={handleSearch}
     />
     
     {selectedEmployee && (
      <Profile employees={selectedEmployee} onUpdateEmployee={handleUpdateEmployee} onDeleteEmployee={handleDeleteEmployee} onAddEmployee={handleAddEmployee} />
    )}
     
      </div>  
    </>
  )
}

export default App

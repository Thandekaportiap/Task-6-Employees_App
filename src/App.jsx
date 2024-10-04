import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Registration from "./components/registration";
import Profile from "./components/profile";
import List from "./components/list";
import './App.css';
import Footer from "./components/Footer";

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleAddEmployee = (employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      return updatedEmployees; 
    });
  };

  const handleDeleteEmployee = (id) => {
    const filteredEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(filteredEmployees);
    localStorage.setItem('employees', JSON.stringify(filteredEmployees)); // Update local storage
    setSelectedEmployee(null);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Update local storage
  };

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    employee.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <Navbar />
        <div className='main'>
          <Registration onAddEmployee={handleAddEmployee} />
          <List 
            employees={filteredEmployees}
            onDeleteEmployee={handleDeleteEmployee}
            onUpdateEmployee={handleUpdateEmployee}
            onSelectEmployee={handleSelectEmployee}
            onSearch={handleSearch}
          />
          {selectedEmployee && (
            <Profile 
              employees={selectedEmployee} 
              onUpdateEmployee={handleUpdateEmployee} 
              onDeleteEmployee={handleDeleteEmployee} 
              onAddEmployee={handleAddEmployee} 
            />
          )}
        </div> 
        <Footer />
      </div>
    </>
  );
}

export default App;

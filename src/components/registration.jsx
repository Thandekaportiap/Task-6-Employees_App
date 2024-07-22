
import React, { useState } from 'react';

const RegistrationForm =({ onAddEmployee }) => {
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
  
    return (
        <>
            <div className="maindiv">

                <h2 style={{ textAlign: "center" }}>Welcome to AW.io </h2>
                <h3 style={{ textAlign: "center" }}>Please fill in your personal information</h3>

                <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="name">
      <input type="text" placeholder="name" id="name" name="name" value={employee.name} onChange={handleChange} /></label>

      <label htmlFor="surname">
      <input type="text" placeholder='Surname' id="surname" name="surname" value={employee.surname} onChange={handleChange} /></label>

      <label htmlFor="email">
      <input type="email" placeholder='Email' id="email" name="email" value={employee.email} onChange={handleChange} /></label>

      <label htmlFor="phone">
      <input type="tel" placeholder='phoneNumber' id="phone" name="phone" value={employee.phone} onChange={handleChange} /></label>

      <label htmlFor="position">
      <input type="text" placeholder='Position' id="position" name="position" value={employee.position} onChange={handleChange} /></label>

      <label htmlFor="id">
      <input type="text" placeholder='EmployeeNo' id="id" name="id" value={employee.id} onChange={handleChange} /></label>

      <label htmlFor="image">Image
      <input type="file" placeholder='image' id="image" name="image" value={employee.image} onChange={handleChange} accept="image/*" /></label>


      <button className='btn'>Submit</button>
      
    </form>
                

                    
            </div>
           
        </>
    )
}

export default RegistrationForm
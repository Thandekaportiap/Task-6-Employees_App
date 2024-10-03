import React, { useState } from 'react';
import Swal from 'sweetalert2';

const RegistrationForm = ({ onAddEmployee }) => {
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
    const { name, value, type, files } = event.target;

    if (type === 'file') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee((prevEmployee) => ({ ...prevEmployee, image: reader.result }));
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
    }
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
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Successfully!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="maindiv">
      <h2 style={{ textAlign: "center" }}>Welcome to AW.io</h2>
      <h3 style={{ textAlign: "center" }}>Please fill in your personal information</h3>

      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input type="text" placeholder="Name" id="name" name="name" value={employee.name} onChange={handleChange} />
        </label>

        <label htmlFor="surname">
          <input type="text" placeholder='Surname' id="surname" name="surname" value={employee.surname} onChange={handleChange} />
        </label>

        <label htmlFor="email">
          <input type="email" placeholder='Email' id="email" name="email" value={employee.email} onChange={handleChange} />
        </label>

        <label htmlFor="phone">
          <input type="tel" placeholder='Phone Number' id="phone" name="phone" value={employee.phone} onChange={handleChange} />
        </label>

        <label htmlFor="position">
          <input type="text" placeholder='Position' id="position" name="position" value={employee.position} onChange={handleChange} />
        </label>

        <label htmlFor="id">
          <input type="text" placeholder='Employee No' id="id" name="id" value={employee.id} onChange={handleChange} />
        </label>

        <label htmlFor="image">
          <input type="file" id="image" name="image" onChange={handleChange} accept="image/*" />
        </label>

        <button className='btn submit'>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

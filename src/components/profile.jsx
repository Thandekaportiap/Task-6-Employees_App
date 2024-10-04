import { useState, useEffect } from 'react';

const Profile = ({ employees, onDeleteEmployee, onUpdateEmployee }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [employee, setEmployee] = useState(employees);

  useEffect(() => {
    setEmployee(employees);
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
    onDeleteEmployee(employees.id);
    setEmployee(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 border-2 border-[#4E91FD] rounded-lg shadow-xl ">
      {employee ? (
        <>
          <h4 className="text-center text-2xl font-semibold py-2">Welcome {employee.name}</h4>
          <div className="flex justify-center mb-4">
            <img src={employee.image} alt={employee.name} className="h-20 w-20 rounded-full object-cover" />
          </div>
          <h4 className="text-center text-xl font-semibold py-1">{employee.name} {employee.surname}</h4>
          <p className="text-center text-lg py-1">{employee.email}</p>
          <p className="text-center text-lg py-1">{employee.phone}</p>
          <p className="text-center text-lg py-1">{employee.position}</p>

          <button className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4" onClick={() => setIsFormVisible(true)}>Edit</button>
          {isFormVisible && (
            <form className="mt-4 text-black" onSubmit={handleSubmit}>
              <input type="text" name="name" value={employee.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
              <input type="text" name="surname" value={employee.surname} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
              <input type="email" name="email" value={employee.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
              <input type="tel" name="phone" value={employee.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
              <input type="text" name="position" value={employee.position} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
              <input type="number" name="id" value={employee.id} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" />
              <button type="button" className="bg-red-500 text-white py-2 px-4  rounded hover:bg-red-600 mr-2" onClick={() => setIsFormVisible(false)}>Close</button>
              <button className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 " type='submit'>Update</button>
            </form>
          )}
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4" onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <p className="text-center text-lg">Employee has been deleted.</p>
      )}
    </div>
  );
};

export default Profile;

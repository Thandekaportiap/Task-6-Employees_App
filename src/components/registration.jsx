import { useState } from "react"

const registration = () => {

    const [input, setInput] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    console.log(input);

    return (
        <>
            <div className="maindiv">

                <h2 style={{ textAlign: "center" }}>Welcome to AW.io </h2>
                <h3 style={{ textAlign: "center" }}>Please fill in your personal information</h3>

                <form className="form" >
                    <label htmlFor="Name">
                        <input type="text" placeholder="name" name="Names" value={input.Names || ""} onChange={handleChange} /></label>
                    <label htmlFor="Surname">
                        <input type="text" placeholder="surname" name="LastName" value={input.LastName || ""} onChange={handleChange} /></label>
                    <label htmlFor="Email">
                        <input type="Email" placeholder="email" name="Email" value={input.Email || ""} onChange={handleChange} /></label>
                    <label htmlFor="phoneNumber">
                        <input type="phone number" placeholder="number" name="number" value={input.number || ""} onChange={handleChange} /></label>
                    <label htmlFor="Name">
                        <input type="text" placeholder="position" name="Position" value={input.Position || ""} onChange={handleChange} /></label>
                    <label htmlFor="number">
                        <input type="number" placeholder="Employee number" name="EmployeeNo" value={input.EmployeeNo || ""} onChange={handleChange} /></label>
                    <label htmlFor="button">
                        <input type="button" value="submit" className="btn" onSubmit={handleSubmit} /></label>
                </form>


            </div>
        </>
    )
}

export default registration
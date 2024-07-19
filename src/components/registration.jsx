import React, { useEffect, useState } from "react"
import Profile from './profile'
import List from "./list";

const Registration = () => {

    const [input, setInput] = useState(() => {
        const localData = localStorage.getItem('input');
        return localData ? JSON.parse(localData):{};
    });
    useEffect(() => {
        localStorage.setItem('input',JSON.stringify(input))
    }, [input]);

    function handleSubmit(event) {
        event.preventDefault();
        
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(values => ({ ...values, [name]: value }))
    }

    let list =[
        {
            name:"Nosihle",surname:"Mthembu", id:"01"
        },
        {
            name:"Sanele",surname:"Mkhize", id:"02"
        },
        {
            name:"Thobani",surname:"Zondi", id:"03"
        },
        {
            name:"Asanda", surname:"Madondo", id:"01"
        }
    ];

    // const handleAdd = () =>{
    //     list.push(input)
    // }

    const handleAdd = (input) => {
        if (input) {
            return [...list, input];  // Creates a new array with the new input added
        }
        return list;  // Return the original list if input is invalid
    }

    console.log(input);

    return (
        <>
            <div className="maindiv">

                <h2 style={{ textAlign: "center" }}>Welcome to AW.io </h2>
                <h3 style={{ textAlign: "center" }}>Please fill in your personal information</h3>

                <form className="form" onSubmit={handleSubmit}>
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
                        <input type="button" value="submit" className="btn" /></label>
                </form>

                <button type="submit" className="btn" onClick={handleAdd}>Add</button>

                    
                    {/* {{input.map(function(input,index){
                        return(
                            <p key={index}>
                                hi{input.Names} {input.LastName}
                            </p>
                        )
                    })}} */}

                    
            </div>
            <List list={list}/>
            <Profile id={input.Names} surname={input.LastName}/>
        </>
    )
}

export default Registration
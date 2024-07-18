import { useState } from "react"
import Profile from "./profile"

const registration = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

function handleSubmit(event){
    event.preventDefault();
    setMessage({name})
}

    function changeName(event) {
        setName(event.target.value)
    }



    return (
        <>
            <div className="maindiv">

                <h2 style={{textAlign:"center"}}>Welcome to AW.io </h2>
                <h3  style={{textAlign:"center"}}>Please fill in your personal information</h3>

                <form className="form">
                    <label htmlFor="Name">
                        <input type="text" placeholder="FirstNames" required onChange={changeName}/></label>
                    <label htmlFor="Surname">
                        <input type="text" placeholder="LastName" required /></label>
                    <label htmlFor="Email">
                        <input type="Email" placeholder="Email" required /></label>
                    <label htmlFor="phoneNumber">
                        <input type="phone number" placeholder="071 2345 678" required /></label>
                    <label htmlFor="Name">
                        <input type="text" placeholder="Position" required /></label>
                    <label htmlFor="number">
                        <input type="number" placeholder="Employee Number" required /></label>
                    <label htmlFor="button">
                        <input type="button" value="submit" className="btn"  onSubmit={handleSubmit}/></label>
                </form>

                <h3>{name}</h3>
                
            </div>
        </>
    )
}

export default registration
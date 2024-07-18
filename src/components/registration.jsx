

const registration = () => {
    return (
        <>
            <div className="maindiv">

                <h2 style={{textAlign:"center"}}>Welcome to AW.io </h2>

                <h3  style={{textAlign:"center"}}>Please fill in your personal information</h3>
                <form className="form">
                    <label htmlFor="Name">
                        <input type="text" placeholder="FirstNames" required /></label>
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
                        <input type="button" value="submit" className="btn" /></label>
                </form>
            </div>
        </>
    )
}

export default registration
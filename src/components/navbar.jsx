import Logo from "./logo2.jpg"

const navbar = () =>{
    return (
        <>
        <nav className="nav">
            <img src={Logo} alt="logo" className="logo" />
            <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>

        </nav>
        </>
    )
}

export default navbar
import Logo from "./logo.png"

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
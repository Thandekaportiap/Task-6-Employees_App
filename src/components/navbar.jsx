import Logo from "./logo.png"

const navbar = () =>{
    return (
        <>
        <nav className="nav">
            <img src={Logo} alt="logo" className="logo" />
            <ul >
                <span className="list">Home</span>
                <span className="list">About</span>
                <span className="list">Contact</span>
            </ul>

        </nav>
        </>
    )
}

export default navbar
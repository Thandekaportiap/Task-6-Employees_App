


const profile = (props) =>{
    return (
        <>
        <div className="maindiv profile" >
            <h3>Welcome {props.id}</h3>

            
            <p>Name: {props.id}</p>
            <p>Surname : {props.surname}</p>
            <p>Hello</p>

            <button className="btn">Edit</button>
            <button className="delete">Delete</button>
        </div>
        </>
    )
}

export default profile
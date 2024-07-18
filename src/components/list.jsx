

const list = () =>{
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
]

    return (
        <>
        <div className="maindiv employeelist" style={{marginLeft:"20px" }}>
            <label htmlFor="search">
                <input type="search" name="search" placeholder="Search..." id="search" />
            </label>
<div>
            {list.map(function (list, index) {
                return (
                    <h3 key={index}>
                    {list.name} {list.surname}
                    </h3>
                )
            })}
            
            </div>
        </div>
        </>
    )
}

export default list
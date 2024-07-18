import { useState } from "react";

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
];

const [filteredList, setFilteredList] = useState(list);
const [search, setSearch] = useState("");

const handleSearch = (event) => {
    const query = event.target.value;

    if(!query){
        setFilteredList(list)
        setSearch(query);
        return
    }
    setSearch(query);
    const searchList = filteredList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(searchList);   
}

    return (
        <>
        <div className="maindiv employeelist" style={{marginLeft:"20px" }}>
            <label htmlFor="search">
                <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearch}/>
            </label>
<div>
            {filteredList.map(function (list, index) {
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
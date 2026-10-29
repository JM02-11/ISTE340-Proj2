//first attempt to get the people data and write it all out!
import { useEffect, useState } from "react";
import getData from "../../utils/getData";
import './people.css';
//get all my goods


//my functional component
const PeopleTest = () =>{
    //my vars
    const [loaded, setLoaded] = useState(false);
    const [obj, setObj] = useState();

    //my method
    useEffect (()=>{
        getData('people/')
            .then(json => {
                setObj(json);
                setLoaded(true);
            });
    },[]);

    //my render
    if(!loaded){
        return (
            <h1>Loading people ...</h1>
        );
    }

    return(
        <>
            <h1>{obj.title}</h1>
            <h3>{obj.subTitle}</h3>
            <h1>Faculty</h1>
            <div className="peopleList">
            {obj.faculty.map((p)=>
                <>
                   <div key={p.username} className="peopleListItem"> 
                    <img src={p.imagePath} alt="a person" />
                    <h3>{p.name}</h3>
                    </div> 
                </>
            )};
            </div>
            <h1>Staff</h1>
            <div className="peopleList">
            {obj.staff.map((p)=>
                <>
                   <div key={p.username} className="peopleListItem"> 
                    <img src={p.imagePath} alt="a person" />
                    <h3>{p.name}</h3>
                    </div> 
                </>
            )};
            </div>
        </>
    );

}

//export
export default PeopleTest;
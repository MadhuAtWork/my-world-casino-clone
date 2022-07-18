
import { useRef, useState } from "react";

function Searchbar(){

  const userN = useRef();
    const [newarr ,setnewarr]=useState([]);
    const [histArr ,setHist]=useState([]);



    const onhandlechange=()=>{
       let tempArr = [...newarr];
        const inputvalue = userN.current.value;
        tempArr.push(inputvalue);
     setnewarr(tempArr); 
     setHist(tempArr);
     userN.current.value=""; 
    }
 
    const filterImages =(e)=>{
        let tesng = [...newarr];
        console.log(e.target.value);
        let bigCities = tesng.filter(function (v) {
            return v ==  e.target.value;
        });
        
        if(bigCities.length >0){
            setnewarr(bigCities);
        }else{
            setnewarr(histArr);
        }
    }

    return(
        <div className="main">
           
            <div className="menu">
                <div className="search">
                    <input type="search" placeholder="search" onChange={filterImages} >   
                    </input>
                </div>
                <div className="submit">
                <input type="text" ref={userN} placeholder="  plz enter "></input>
                <button onClick={onhandlechange}>submit</button>
                </div>
            </div>
            <div className="holder">
                {
                newarr.map(
                    (value,index)=><div className="hloder1" key={index}><img src="1.jpg"></img>{value}</div>
                )
                }
            </div>
        
        </div>
    )
}
export default Searchbar;

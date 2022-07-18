import { useRef, useState } from "react";


function Loginpopup (){

    const [logindata,setlogindata]=useState(true);
     const userN = useRef();
     const passW = useRef();
     const [error ,seterror]=useState(false);


 const onhnadlecancel=()=>{
    setlogindata(false);
 }

 const onhandlesubmit=()=>{
     const x =userN.current.value;
     const y =passW.current.value;

     if((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)))){
        //  seterror(false)
        alert("enter valid email id")
     }else if(y==""||y.length>8) {
        // seterror(false);
        alert("enter valid password")
     }else{
        seterror(true);
     }
 }
    return(
        <div>
            
        {
            logindata?
        <div className="loginform">
            <div className="formlogin">
        <div className="username">
            <input type="email" placeholder="user name" ref={userN}></input>
            {/* { error? <div className="success">success</div>:"" } */}
        </div>
        <div className="username">
            <input type="password" placeholder="password" ref={passW}></input>
            {/* { error? <div className="success">success</div>:"" } */}
        </div>
        <div className="username">
            <button onClick={onhandlesubmit}>submit</button>
            { error? <div className="success">success</div>:<div className="error">enter valid data</div> }

        </div>
        <div className="cancel" onClick={onhnadlecancel}>&times;</div>
        </div>:
        
    </div>:""
}
</div>
    )
}
export default Loginpopup;
import { useState } from "react";
import Profile from './Profile'
import About from './About'
import Form from './Form'
import Tables from './Tables'
import Calender from './Calender'
import Chart from './Chart'
import Contact from './Contact'
import Loginpopup from './Loginpopup'


function Sidebardisplay(){
    const [data ,setdata]=useState();
    const [usertdata,setuserdata]=useState(false);

    const onhandlechange=(text)=>(e)=>{
        setdata(text);
    }

    const onhandleclick=()=>{
        setuserdata(!usertdata);
    }

    return (
  <div className="container">
        <div className="main">

           <div className="menu">
            <div className="user" onClick={onhandleclick}><span>user</span></div>
            <div className={usertdata?"userprofile":"userprofile2"}>
                <div className="userid" onClick={onhandlechange("userid")}><span>profile</span></div>
                <div className="editprofile" onClick={onhandlechange("editprofile")}><span>editprofile</span></div>
                <div className="changepassword" onClick={onhandlechange("changepassword")}><span>changepassword</span></div>
                </div>
                </div>
                
            <div className="About" onClick={onhandlechange("About")}><span>About</span></div>
            <div className="form" onClick={onhandlechange("form")}><span>Form</span></div>
            <div className="tables" onClick={onhandlechange("tables")}><span>Tables</span></div>
            <div className="calender" onClick={onhandlechange("calender")}><span>calender</span></div>
            <div className="chart" onClick={onhandlechange("chart")}><span>chart</span></div>
            <div className="contact" onClick={onhandlechange("contact")}><span>contact</span></div>
            <div className="login" onClick={onhandlechange("login")}><span>Login</span></div>
        </div>
        
        <div className="holder">
<div className="dispaly">
   { data=="userid"? <Profile></Profile>:""}
   { data=="editprofile"? <Chart></Chart>:""}
   { data=="changepassword"? <Profile></Profile>:""}
   { data =="About"?<About></About>:""}
   { data =="form"? <Form></Form>:""}
   { data =="tables"? <Tables></Tables>:""}
   { data =="calender"? <Calender></Calender>:""}
   { data =="chart"? <Chart></Chart>:""}
   { data =="contact"? <Contact></Contact>:""}
   { data =="login"? <Loginpopup></Loginpopup>:""}
</div>
        </div>
        </div> 

    )

}
export default Sidebardisplay;
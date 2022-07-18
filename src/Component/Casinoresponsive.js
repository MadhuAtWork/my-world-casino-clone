import { useState } from "react";
import Childimg from "./childImages/Childimg";
import Childimg2 from "./childImages/Childimg2";
import Childimg3 from "./childImages/Childimg3";
import Childimg4 from "./childImages/Childimg4";
import Childimg5 from "./childImages/Childimg5";
import Childimg6 from "./childImages/Childimg6";
import Wildlog from "./Wildlog";
import SliderComponent from "./SliderComponent";

function Casinoresponsive() {
    const [data, setdata] = useState("menu3");
    const [side, setside] = useState(false);
    return (
        <div className="container">
            <div className={side ? "hidemenu" : "hide"}>
                <div className="sidemenu" onClick={() => setside(!side)}>
                    <span>&times;</span>
                    <hr></hr>
                    <span>slot</span>
                    <hr></hr>
                    <span>table games</span>
                    <hr></hr>
                    <span>black jack</span>
                    <hr></hr>
                    <span>protiopns</span>
                    <hr></hr>
                    <span>help</span>
                    <hr></hr>
                </div>

            </div>
            <div className="header">
                <div className="logo" onClick={() => setdata("logo")}>
                    <img src="logo.1.svg"></img>
                </div>
                <div className="banking">
                    <div className="help">bank</div>
                    <div className="help">help</div>
                </div>
                <div className="login">
                    <div className="login1">login</div>
                    <div className="login2">join now</div>
                    <div className="login3" onClick={() => setside(!side)}>=
                    </div>
                </div>
            </div>
            {/* <SliderComponent /> */}
            <div className="main">
                <div className="main1">
                    {data == "menu1" ? <img src="img_2.jpg"></img> : ""}
                    {data == "menu2" ? <img src="img_4.jpg"></img> : ""}
                    {data == "menu3" ? <img src="img_5.jpg"></img> : ""}
                    {data == "menu4" ? <img src="img_6.jpg"></img> : ""}
                    {data == "menu5" ? <img src="img_2.jpg"></img> : ""}
                    {data == "menu6" ? <img src="img_4.jpg"></img> : ""}
                    {data == "logo" ? <Wildlog></Wildlog> : ""}
                </div>

            </div>
            <div className="menu">
                <div className="menu1" onClick={() => setdata("menu1")}>slot</div>
                <div className="menu2" onClick={() => setdata("menu2")}>table games</div>
                <div className="menu3" onClick={() => setdata("menu3")}>black jack</div>
                <div className="menu4" onClick={() => setdata("menu4")}>vide0 poker</div>
                <div className="menu5" onClick={() => setdata("menu5")}>live casio</div>
                <div className="menu6" onClick={() => setdata("menu6")}>specility games</div>
            </div>
            <div className="search">
                <div className="search1">NEW GAMES(8)</div>
            </div>
            <div className="holder">
                {data == "menu1" ? <Childimg></Childimg> : ""}
                {data == "menu2" ? <Childimg2></Childimg2> : ""}
                {data == "menu3" ? <Childimg3></Childimg3> : ""}
                {data == "menu4" ? <Childimg4></Childimg4> : ""}
                {data == "menu5" ? <Childimg5></Childimg5> : ""}
                {data == "menu6" ? <Childimg6></Childimg6> : ""}
                {data == "logo" ? <Childimg3></Childimg3> : ""}

            </div>
        </div>
    )

}
export default Casinoresponsive;
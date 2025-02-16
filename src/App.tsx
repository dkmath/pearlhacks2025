import {
    BrowserRouter as Router, Routes,
    Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { Directory } from "./Pages/directory";
import { Forum } from "./Pages/forum";
import { Resources } from "./Pages/resources";
import { About } from "./Pages/about";
import { Join } from "./Pages/join";
import { Classes } from "./Pages/classes";
import { Emergency } from "./Pages/emergency";


type ActionProps = {
    text: string;
    icon: string;
    id: string;
}



function Action({ text, icon, id }: ActionProps) {
    return (
        <div id={id} className="border-red-900 border-2 p-5 pr-10 pl-10 rounded-2xl">
            <img src={icon} className="size-60"></img>
            <p className="text-2xl text-center"> {text} </p>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/directory' element={<Directory />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/joinus" element={<Join />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/classes" element={<Emergency />} />
                </Routes>


                <div className="h-25 bg-[#632020] flex flex-row">
                    <div className="fixed top-0 left-0 h-25">
                        <Link to="/"><img height="130px" width="130px" src="images/afte.svg" /></Link>
                    </div>
                    <div className=" flex flex-row gap-7 items-center px-[70%] pr-20">
                        <Link to="/resources"><div className="text-white text-2xl hover:text-gray-600">Resources</div></Link>
                        <Link to="/about"><div className="text-white text-2xl hover:text-gray-600">About</div></Link>
                        <Link to="/joinus"><div className="text-white text-2xl hover:text-gray-600">Join Network</div></Link>
                    </div>
                </div>



                <div className="bg-[#4F5D75] flex flex-col h-140 justify-center items-center">
                    <div className="flex flex-row justify-between">
                        <img className="w-110 h-110" src="images/2.svg" />
                        <div className="flex flex-col place-content-center">
                            <p className=" text-4xl font-bold text-white">Heels Safety Net</p>
                            <p>   </p>
                            <p>   </p>
                            <p className="text-2xl text-white">Join our <p className="text-[#802727] font-semibold inline-block">CPR-Ready</p> Network!</p>
                        </div>

                    </div>
                    <Link to="/emergency"><p className="bg-[#B16666] h-20 text-2xl rounded-2xl w-90 text-center self-end mb-12 place-content-center hover:bg-[#b75050fd] drop-shadow-xl"> Emergency? Get Help Now </p></Link>
                </div>

                <div className="flex flex-row justify-evenly content-center mt-5 mb-8">
                    <Link to="/directory"><Action text={"View CPR Network"} icon={"images/cpr_icon.png"} id={"1"}></Action></Link>
                    <Link to="/classes"><Action text={"Find CPR classes"} icon={"images/book.png"} id={"2"}></Action></Link>
                    <Link to="/forum"><Action text={"Community Forum"} icon={"images/chat_bubble.png"} id={"3"}></Action></Link>
                </div>
            </Router >
        </div >
    )

}

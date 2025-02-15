import { useState } from "react";
import Directory from "./directory";
import Resources from "./resources";

type ActionProps = {
    text: string;
    icon: string;
    id: string;
}

export enum PageType {
    App,
    Directory,
    Resources,
    Forum,
}


// const [currentPage, setCurrentPage] = useState(PageType.App);

function Action({text, icon, id}: ActionProps) {
    // const onActionClick = () => {
    //     if(id == "1"){
    //         console.log("clicked action button 1")
    //         setCurrentPage(PageType.Directory)
    //     }
    //     if(id == "2"){
    //         console.log("clicked action button 2")
    //         setCurrentPage(PageType.Resources)
            
    //     }
    //     if(id == "3"){
    //         console.log("clicked action button 3")
    //         setCurrentPage(PageType.Forum)
    //     }

        
        
    // }
    return (
        <div id = {id} className = "border-red-900 border-2 p-5 pr-10 pl-10 rounded-2xl">
            <img src = { icon } className = "size-60"></img>
            <p className = "text-2xl text-center"> {text} </p>
        </div>
    )
}





export default function App(){
    const onEmergencyClick = () => {
        console.log("clicked emergency button")
    }

    
    return (
        <div>
            <div className = "bg-black h-25 flex flex-row gap-5 items-center place-content-end pr-8">
                <div className = "text-white text-2xl hover:text-gray-600">Resources</div>
                <div className = "text-white text-2xl hover:text-gray-600">About</div>
                <div className = "text-white text-2xl hover:text-gray-600">Join Network</div>
            </div>
            <div className = "bg-red-100 flex h-150 place-content-center">
                <p className = "bg-white h-20 text-2xl rounded-2xl w-90 text-center self-end mb-8 place-content-center hover:bg-gray-500 drop-shadow-xl" onClick = {onEmergencyClick}> Emergency? Get Help Now </p>
            </div>

            <div className = "flex flex-row justify-evenly content-center mt-5 mb-8">
                <Action text = {"View CPR Network"} icon = {"images/cpr_icon.png"} id = {"1"}></Action>
                <Action text = {"Find CPR classes"} icon = {"images/book.png"} id = {"2"}></Action>
                <Action text = {"Community Forum"} icon = {"images/chat_bubble.png"} id = {"3"}></Action>
            </div>
        
        </div>
    ) 

}

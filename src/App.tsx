type ActionProps = {
    text: string;
    icon: string;
    id: string;
}

function Action({text, icon, id}: ActionProps) {
    return (
        <div id = {id} className = "border-amber-600 border-4">
            <img src = { icon } className = "size-60"></img>
            <p> {text} </p>
        </div>
    )
}





export default function App(){
    return (
        <div>
            <div className = "bg-black h-25 flex flex-row gap-5 items-center place-content-end pr-8">
                <div className = "text-white text-2xl hover:text-gray-600">Resources</div>
                <div className = "text-white text-2xl hover:text-gray-600">About</div>
                <div className = "text-white text-2xl hover:text-gray-600">Join Network</div>
            </div>
            <div className = "bg-red-100 flex h-150 place-content-center">
                <p className = "bg-white h-20 text-2xl rounded-2xl w-90 text-center self-end mb-8 place-content-center hover:bg-gray-500 drop-shadow-xl"> Emergency? Get Help Now </p>
            </div>

            <div className = "flex flex-row justify-evenly content-center mt-5">
                <Action text = {"View CPR Network"} icon = {"images/cpr_icon.png"} id = {"id"}></Action>
                <Action text = {"Find CPR classes"} icon = {"image stuff"} id = {"id"}></Action>
                <Action text = {"Community Forum"} icon = {"image stuff"} id = {"id"}></Action>
            </div>
        
        </div>
    ) 

}

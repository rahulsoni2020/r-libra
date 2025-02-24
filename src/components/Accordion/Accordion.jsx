import AccCard from "./AccCard/AccCard";
import { ACC_DATA } from "./Accordion.data";
import "./Accordion.css";
import {useState} from "react";

const Accordion = ({data})=>{
    const {defaultOpen = false, multiTabOpen = true} = data || {};
    const [accItems, setAccItems] = useState(ACC_DATA);
    const [openTabIndex,setOpenTabIndex] = useState(defaultOpen ? 0 : -1);
    const openTab = (index) => {
        if(multiTabOpen) return;
        setOpenTabIndex(openTabIndex === index ? -1 : index);
    }
    return(
        <div className="accord-container">
            {accItems.map((item, index) =>
                <AccCard data={{index,...item}} multiTabOpen={multiTabOpen} isOpen={openTabIndex === index}  toggleTab={() => { openTab(index) }} />
            )}
        </div>
    );
}

export default Accordion;
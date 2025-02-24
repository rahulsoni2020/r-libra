import "./AccCard.css";
import {useState, useEffect} from "react";
const AccCard = ({data, multiTabOpen, isOpen, toggleTab })=>{
    const [tabState, setTabState] = useState(false);
    const updateTabState = () => {
        if(!multiTabOpen){
            toggleTab();
            return;
        }
        setTabState(state => !state);
    }
    useEffect(()=>{
        setTabState(isOpen)
    },[isOpen]);
    return (
        <div className="acc-card-container">
            <div className="head" onClick={updateTabState}>
                <span>{data?.title}</span> 
                <span className={tabState ? 'transform-svg' : ''}>
                    <svg fill="#000000" height="15px" width="15px" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
                        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 
                            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150
                            c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z">
                        </path>
                    </svg>
                </span>
            </div>
            {   tabState &&
                <div className="body">
                    {data?.detail}
                </div>
            }
        </div>
    )
}
export default AccCard;
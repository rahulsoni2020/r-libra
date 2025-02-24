import { useState, useEffect } from "react";
import "./Dashboard.css";
import { CARDS } from "./cards.constant";
import Card from "../Card/Card";
import useAddMobileData from "./useAddMobileData";

const Dashboard = ()=>{
    const [cards, setCards] = useState(CARDS);
    const addFun = ()=>{
        const data = useAddMobileData();
        console.log(data);
    }
    useEffect(() => {
        return () => {
            
        };
    }, []);

    return (
        <div className="main-container">
                {cards.map(card =>
                        <Card data={card} />
                )}
        </div>
    );
}

export default Dashboard;
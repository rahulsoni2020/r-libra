import { useState } from "react";
import "./Dashboard.css";
import { CARDS } from "./cards.constant";
import Card from "../Card/Card";

const Dashboard = ()=>{
    const [cards, setCards] = useState(CARDS)
    return (
        <div className="main-container">
                {cards.map(card =>
                        <Card data={card} />
                )}
        </div>
    );
}

export default Dashboard;
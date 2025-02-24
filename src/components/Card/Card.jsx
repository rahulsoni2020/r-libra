import "./Card.css";
import {useNavigate} from "react-router-dom";
const Card = ({data}) => {
    const navigate = useNavigate();
    const redirectToModule =()=> {
            navigate(data?.route);
    }
    return (
        <div className="card-container" onClick={redirectToModule}>
            <div className="head">
                {data?.icon}<span>{data?.name}</span>
            </div>
            <div className="detail">
                {data?.detail}
            </div>
        </div>
    );
}

export default Card;
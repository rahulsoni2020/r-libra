import "./header.css"
import { useNavigate } from "react-router-dom";

const Header = ()=>{


    return (
        <header>
            <div className="head-container">
                <div className="brand-container">
                    {/* <img src="images/rl-logo.svg" alt="R-Libra" /> */}
                    <span>R-Libra</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
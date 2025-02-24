import "./AnalogClock.css"
import { useEffect, useState } from "react";
const AnalogClock = () =>{
    const [timer, setTimer] = useState(0);
    const minRotation =  (timer/10) %360;
    const hourRotation = (timer/120) %360;
    const secRotation = (timer *6) %360;
    useEffect(()=>{
        const hourTimer = setInterval(()=>{
            setTimer(timer => (timer+1)%(60*60*12));

        },1000)
        return ()=>{
            clearInterval(hourTimer);
        }
    },[])
    return (
        <div className="clock-container">
            <div className="clock">
                {Array.from({ length: 12 }, (_, index) => {
                    const number = index + 1;
                    const angle = (number / 12) * 360; // angle in degrees
                    const radius = 180;
                    const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                    const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
                    return (
                        <div
                            key={number}
                            className="clock-number"
                            style={{
                                position: 'absolute',
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            {number}
                        </div>
                    );
                })}
                <div className="hand hour" style={{ transform:`rotate(${hourRotation}deg)`}}></div>
                <div className="hand minute" style={{ transform:`rotate(${minRotation}deg)`}}></div>
                <div className="hand second" style={{ transform:`rotate(${secRotation}deg)`}}></div>
            </div>
        </div>
    )
};

export default AnalogClock;
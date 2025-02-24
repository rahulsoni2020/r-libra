import "./Counter.css";
import {useState, useEffect} from "react";
const Counter = () =>{
    const [counterValue, setCounterValue] = useState(0);
    const updateCounter = (val) =>{
        if(!val){
            setCounterValue(0);
            return;
        }
        setCounterValue(cnt => {
            if (!cnt && val === -1) {
                return 0;
            }
            return cnt + val
        });
    }

    const keyHandle = (event)=>{
        if(event.key === 'ArrowUp'){
            updateCounter(1);
        }
        if(event.key === 'ArrowDown'){
            updateCounter(-1);
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", keyHandle);
        return () => {
            document.removeEventListener("keyup", keyHandle);
        };
    }, []);

    return (
        <div className="container">
            <div className="counter-text">
            <h1>{counterValue}</h1>
            </div>
            <div className="btn-container">
                <button className="btn btn-primary" onClick={()=>updateCounter(1)}>Increment</button>
                <button className="btn btn-error" disabled={!counterValue} onClick={()=>updateCounter(-1)} >Decrement</button>
                <button className="btn btn-success" disabled={!counterValue} onClick={()=>updateCounter(0)}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
import "./CountDownTimer.css";
import {useState, useEffect} from "react";
const CountDownTimer = ({})=>{
    const timerType = {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0
    };
    const [timer, setTimer] = useState(timerType);
    const [timerAdd, setTimerAdd] = useState();
    const [togglePlay, setTogglePlay] = useState(true);
    const [timeInt, setTimeInt] =useState(0);
    let timerDis = computeTime(timeInt);
    useEffect(()=>{
        return ()=>{
            if(timerAdd){
                clearInterval(timerAdd)
            }
        }
    },[])

    const destroyTimer = ()=>{
        clearInterval(timerAdd);
    }

    const initTimer = (time) => {
        destroyTimer();
        timerAdd && setTimeInt(time);
        const tmpLoc = setInterval(() => {
            setTimeInt(prevTime => {
                if (prevTime <= 0) {  
                    destroyTimer();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        setTimerAdd(tmpLoc);
    }

    function computeTime(totalSeconds){
        let day = Math.floor(totalSeconds / (24 * 3600));
        totalSeconds %= 24 * 3600;
        
        let hour = Math.floor(totalSeconds / 3600); 
        totalSeconds %= 3600;
        
        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60; 
    
        return { day, hour, min, sec };
    }

    const startTimer = ()=>{
        const time = ((timer.day *24 + timer.hour) * 60 + timer.min)* 60 +timer.sec;
        setTogglePlay(true);
        initTimer(time);
    }

    const playPauseTimer = ()=>{
        if(togglePlay){
            destroyTimer();
        }else{
            initTimer(timeInt);
        }
        setTogglePlay(play => !play);
    }

    const restartTimer = () => { 
        startTimer();
    }

    const onTimerInput = (event) => {
        const key =event.target.name;
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        const tempTimer = {...timer,[key]:value};
        switch(key){
            case 'sec': {
                tempTimer.min += Math.floor(tempTimer.sec/60);
                tempTimer.sec = tempTimer.sec%60;
            }
            case 'min':{
                tempTimer.hour += Math.floor(tempTimer.min/60);
                tempTimer.min = tempTimer.min%60;
            }
            case 'hour': {
                tempTimer.day += Math.floor(tempTimer.hour/24);
                tempTimer.hour = tempTimer.hour%24;
            }
        }
        setTimer(tempTimer);
    }
    return (
        <div className="container">
                <form className="cd-form-container" action="">
                    <div className="form-group">
                        <label htmlFor="day">Days</label>
                        <input type="text" name="day" className="form-control" value={timer.day} onChange={onTimerInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hour">Hours</label>
                        <input type="text" name="hour" className="form-control" value={timer.hour} onChange={onTimerInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="min">Minutes</label>
                        <input type="text" name="min" className="form-control" value={timer.min} onChange={onTimerInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sec">seconds</label>
                        <input type="text" name="sec"className="form-control" value={timer.sec} onChange={onTimerInput}/>
                    </div>
                </form>
                <div className=" cd-btn-container">
                    <button className="btn btn-primary" onClick={startTimer}>Start</button>
                    <button className="btn btn-error" onClick={playPauseTimer}>{togglePlay ? 'Pause' : 'Play'}</button>
                    <button className="btn btn-success" onClick={restartTimer}>Restart</button>
                </div>
                <div className="timer-container">
                    {Object.keys(timerDis).map(timerKey => 
                        <div className="container timer-group">
                           <div>{timerKey}</div>
                           <div>{timerDis[timerKey]}</div>
                        </div>
                    )}
                </div>
        </div>
    );
}

export default CountDownTimer;
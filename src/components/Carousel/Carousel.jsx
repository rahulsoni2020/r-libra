import { useState, useEffect } from "react";
import { IMAGES_DATA } from "./carousel.constant";
import "./Carousel.css"
const Carousel = ({settings})=>{
    const {timer = 1000, autoMove = true, showArrow = true, showInd = true} = settings || {};
    const data = IMAGES_DATA;
    const [curImgIndex, setCurImgIndex] = useState(0);
    const updateImg = (pos)=>{
        let updatedIdx = (curImgIndex + pos) % data.length;
        if(updatedIdx < 0){
            updatedIdx = data.length -1;
        }
        setCurImgIndex(updatedIdx);
    }

    useEffect(()=>{
        let itrLoc;
        if(autoMove){
            itrLoc = setInterval(()=>{
                setCurImgIndex(idx => (idx+1)%data.length);
            },timer)
        }
        return () =>{
            clearInterval(itrLoc);
        }
    })

    return (
        <div className="container">
           <div className="carousel">
            <img src={data[curImgIndex]?.url} alt={data[curImgIndex]?.name} />
                {showArrow && <div className="button">
                    <div className="arrow left" onClick={() => updateImg(-1)}></div>
                    <div className="arrow right" onClick={() => updateImg(1)}></div>
                </div>}
                {showInd && <div className="ind-dots">
                    {
                        data?.map((d, i) => <span key={d.id} className={`dot ${i === curImgIndex && 'active'}`}></span>)
                    }
                </div>}
           </div>
        </div>
    )
}



export default Carousel;
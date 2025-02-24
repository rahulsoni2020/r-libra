import {useState, useEffect} from"react";
const useAddMobileData = ()=>{
    const [mobileInfo, setMobileInfo] = useState();

    const addMobile = async ()=>{
        const payload = {
            "name": "Apple MacBook Pro 16",
            "data": {
               "year": 2019,
               "price": 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         };
        const option = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }
        const response = await fetch('https://api.restful-api.dev/objects',option);
        const data = await response.json();
        setMobileInfo(data);
    }

    useEffect(()=>{
        addMobile();
    },[]);
    return mobileInfo;
};

export default useAddMobileData;
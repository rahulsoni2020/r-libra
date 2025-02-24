import { useState, useEffect } from "react";

const useGetUser = (pageNo, pageLimit) => {
    const [userDetails, setUserDetails] = useState({ headers: [], users: [] });
    const [count, setCount] = useState(0);

    const getHeaders = (data) => {
        return Object.keys(data).filter((key) => typeof data[key] !== "object");
    };

    const getUserList = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/users?limit=${pageLimit}`);
            if (!res.ok) {
                throw new Error("Some Error Occurred");
            }
            const data = await res.json();

            if (!data?.users?.length) {
                throw new Error("No Data Available");
            }

            const headers = getHeaders(data.users[0]);
            setUserDetails({ headers, users: data.users });
        } catch (err) {
            alert(err.message);
        }
    };
console.log(count);
    useEffect(() => {
        getUserList();
        setTimeout(()=>{
         setCount(count+1);
         console.log(count);   
         setCount(count+1);
         console.log(count);   
         setCount(count+1);
         console.log(count);   
         setCount(count+1);
         console.log(count);   
        })
    }, []);

    return userDetails;
};

export default useGetUser;

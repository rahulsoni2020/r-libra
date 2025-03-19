import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
    const [products, setProducts] = useState([]);
    const { data, loading, error, fetchData } = useFetch(
        'https://dummyjson.com/products'
    );

    const handleScroll = () => {
        const container = document.getElementById("productCnt");
        if (!container) return;
        if (container.scrollHeight <= container.scrollTop + container.clientHeight + 5) {
            fetchData(); 
        }
    };
    
    useEffect(() => {
        const container = document.getElementById("productCnt");
    
        if (!data?.products?.length) {
            console.log(container)
            fetchData();
        } else {
            setProducts(prevProducts => [...prevProducts, ...data.products]);
        }
    
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }
    
        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [data]); 
    

    return (
        <div id="productCnt" className="product-container" style={{ overflowY: "auto", height: "80vh" }}>
            {products.map((product, index) => (
                <div className="product-card" key={product.id || index}>
                    <h4>{product.title}</h4>
                    <img src={product.images?.[0]} alt="" />
                    <div className="desc">{product.description}</div>
                    <div>
                        <p>💰 Price: <strong>${product.price}</strong></p>
                        <p>⭐ Rating: <strong>{product.rating}</strong></p>
                    </div>
                </div>
            ))}
            {loading && <p>Loading more products...</p>}
            {error && <p>Error fetching data!</p>}
        </div>
    );
};

export default InfiniteScroll;

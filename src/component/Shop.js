import React, {useState, useEffect} from 'react';

function Shop() {
    
    useEffect(() => {
        fetchItems();
    }, [])
    
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const authorization = 'cce5347fda424f658c7f32073ec8e231';
        const data = await fetch('https://fortnite-api.theapinetwork.com/items/popular',{
        method: 'GET',
            headers: {
                'Authorization': authorization
            },
        });
        const items = await data.json();
        console.log(items.entries)
        setItems(items.entries);
    }
    return(
        <div>
            {items.map( (item,index) =>(
                <h2 key={index}>{item.name}</h2>
            ))}
        </div>
    )
}

export default Shop;
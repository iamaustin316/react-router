import React, {useState, useEffect} from 'react';

function Shop() {
    
    useEffect(()=>{
        fetchItems();
    },[])
    
    const fetchItems = async () => {
        const authorization = 'cce5347fda424f658c7f32073ec8e231';
        const data = await fetch('https://fortnite-api.theapinetwork.com/items/popular',{
        method: 'GET',
            headers: {
                'Authorization': authorization
            },
        });
        const items = await data.json()
        console.log(items)
    }
    return(
        <div>
            <h2>Shop</h2>
        </div>
    )
}

export default Shop;
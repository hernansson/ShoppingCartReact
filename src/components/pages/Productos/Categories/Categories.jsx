import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import Item from '../ItemListContainer/Item/Item'
import Loading from '../../../Loading/Loading'


export default function Categories() {

    const [categories, setCategories] = useState([]);
    const { categoriaID } = useParams();

    let fetchStatus = useRef(false);

    const config = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'

    }

    const getCategories = () => {

        fetch(`http://localhost:4000/product/category/${categoriaID}`, config)
            .then(data => data.json())
            .then(dataJson =>
                //Pedido en un desafio a entregar
                setTimeout(() => {  
                    fetchStatus.current = true                                    
                    setCategories(dataJson)  
                                
                }, 0)
            )
    }

    useEffect(() => {
    
           getCategories()

        }
    , [categoriaID])

    return (
        <div >

            {fetchStatus.current == false ?
                <div className="loading">
                    <Loading />
                </div> :
                <div className="products">
                    {categories.map((cat, idx) => (
                        <Item producto={cat} key={idx}> </Item>

                    ))}

                </div>
            }

        </div>
    )
}
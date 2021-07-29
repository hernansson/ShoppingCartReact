import React from "react"
import { useState } from "react"
import ButtonCust from "./ButtonCust"
import AddCart from "../AddCart/AddCart"
export default function ItemCount({value}) {

   const {stock,setCount,count,onAdd} = value
    
    let enableAdd = true;
    let enableSub = true;

    const addCount = () => {
        console.log("el count es", count)
        if (count > (stock - 1)) {
            enableAdd = false
        } else {
            setCount(count + 1)


        }

    }
    const subCount = () => {
        if (count === 0) {
            enableSub = false
        } else {
            setCount(count - 1)


        }

    }


    return (
        <div>
            <ButtonCust handleClick={addCount} isEnable={enableAdd} txt="+"></ButtonCust>
            <input className="text-center" readOnly={true} value={count} />
            <ButtonCust handleClick={subCount} isEnable={enableSub} txt="-"></ButtonCust>

            <div>
                <AddCart value={{onAdd}}
                />
            </div>
        </div >
    )
}
import { useState } from "react";
import { formatedDate } from "../../const";

export function InputDay(){
    const [inputDisabled]=useState(true)
    return (
        <input type="date" disabled={inputDisabled} className="bg-transparent border-0 font-semibold text-lg" value={formatedDate} />
    )
}
import { useState } from "react";
import { Link } from "react-router-dom";

export function ButtonNav({ direction, nameicon }) {
    const [hovered, setHovered] = useState(false);
    return (
        <li className="mt-2" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Link to={direction}><box-icon type='solid' name={nameicon} color={hovered ? 'Black' : 'White'} size='28px'></box-icon></Link>
        </li>
    )
}
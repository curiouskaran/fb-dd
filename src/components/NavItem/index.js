import React, { useState, useRef, useEffect } from 'react';

import './NavItem.css';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    const handleOutsideClick = (e) => {
        if(node.current.contains(e.target)) return;

        setOpen(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    },[])

    return (
        <li className="nav-item" ref={node}>
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default NavItem;
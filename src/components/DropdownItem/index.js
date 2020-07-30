import React from 'react';

import './DropdownItem.css';

const DropdownItem = (props) => {
    return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>}
        </a>
    );
}

export default DropdownItem;
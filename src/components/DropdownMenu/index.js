import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'

import './DropdownMenu.css';
import DropdownItem from '../DropdownItem';
import {ReactComponent as CogIcon} from '../../assets/cog.svg';
import {ReactComponent as ChevronIcon} from '../../assets/chevron.svg';
import {ReactComponent as ArrowIcon} from '../../assets/arrow.svg';


const DropdownMenu = (props) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState('auto');

    const calculateHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit
                timeout={200}
                classNames="menu-primary"
                onEnter={calculateHeight}
                >
                <div className="menu">
                    <DropdownItem
                    >
                        My Profile
                    </DropdownItem>            
                    <DropdownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevronIcon/>}
                        setActiveMenu={setActiveMenu}
                        goToMenu={'settings'}
                    >
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit
                timeout={200}
                classNames="menu-secondary"
                onEnter={calculateHeight}
                >
                <div className="menu">
                    <DropdownItem
                        leftIcon={<ArrowIcon/>}
                        setActiveMenu={setActiveMenu}
                        goToMenu={'main'}
                    ></DropdownItem>            
                    <DropdownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevronIcon/>}
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevronIcon/>}
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevronIcon/>}
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon/>}
                        rightIcon={<ChevronIcon/>}
                    >
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>            
        </div>
    );
}

export default DropdownMenu;
import React from 'react';

import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import { ReactComponent as BellIcon } from './assets/bell.svg';
import { ReactComponent as MessengerIcon } from './assets/messenger.svg';
import { ReactComponent as CaretIcon } from './assets/caret.svg';


function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon/>}/>
      <NavItem icon={<BellIcon/>}/>
      <NavItem icon={<MessengerIcon/>}/>
      <NavItem icon={<CaretIcon/>}>
        <DropdownMenu/>
      </NavItem>
    </Navbar>
  );
}

export default App;

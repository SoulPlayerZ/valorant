import { Link } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { GiCarKey } from 'react-icons/gi'; 

function SideMenu () {
  return (
    <aside>
      <h1>Content</h1>
      <nav>
        <Link to ="/" className='menu-text' >
          <HiUserGroup className='icon-menu'/>Agents
        </Link>
        <Link to ="/Buddies" className='menu-text' >
          <GiCarKey  className='icon-menu'/>Buddies
        </Link>
        <Link to ="/" className='menu-text' >
          <HiUserGroup className='icon-menu'/>Agents
        </Link>
        <Link to ="/Buddies" className='menu-text' >
          <GiCarKey  className='icon-menu'/>Buddies
        </Link>
      </nav>
    </aside>
    )
  }
  
export default SideMenu;
  
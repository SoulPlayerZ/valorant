import { Link } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { GiSpray, GiPistolGun } from 'react-icons/gi';
// import { FaBoxes, FaFileContract, FaBorderStyle, FaRegAddressCard } from 'react-icons/fa';
// import { TbDiamond } from 'react-icons/tb';
// import { BsCurrencyExchange, BsCalendar2Event, BsCalendarMinus } from 'react-icons/bs';
import { IoMapSharp } from 'react-icons/io5';
// import { MdOutlineSubtitles } from 'react-icons/md';
// import { MdOutlinePalette } from 'react-icons/md';


function SideMenu () {
  return (
    <aside>
      <nav>
        <label className='menu-label'>
          <Link to="/" className='menu-text'>
            <HiUserGroup className='icon-menu'/>Agents
          </Link>
        </label>
        {/* <label className='menu-label'>
          <Link to="/buddies" className='menu-text'>
            <GiCarKey className='icon-menu'/>Buddies
          </Link>
        </label> */}
        {/* <label className='menu-label'>
          <Link to="/bundles" className='menu-text'>
            <FaBoxes className='icon-menu'/>Bundles
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/cerimonies" className='menu-text'>
            <GiPartyPopper  className='icon-menu'/>Cerimonies
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/competitivetiers" className='menu-text'>
            <GiRank3  className='icon-menu'/>Competitive Tiers
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/contenttiers" className='menu-text'>
            <TbDiamond className='icon-menu'/>Content Tiers
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/contracts" className='menu-text'>
            <FaFileContract className='icon-menu'/>Contracts
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/currencies" className='menu-text'>
            <BsCurrencyExchange  className='icon-menu'/>Currencies
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/events" className='menu-text'>
            <BsCalendar2Event className='icon-menu'/>Events
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/gamemodes" className='menu-text'>
            <GiTabletopPlayers className='icon-menu'/>Game Modes
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/gear" className='menu-text'>
            <GiHealingShield className='icon-menu'/>Gear
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/levelborders" className='menu-text'>
            <FaBorderStyle className='icon-menu'/>Level Borders
          </Link>
        </label> */}
        <label className='menu-label'>
          <Link to="/maps" className='menu-text'>
            <IoMapSharp className='icon-menu'/>Maps
          </Link>
        </label>
        {/* <label className='menu-label'>
          <Link to="/playercards" className='menu-text'>
            <FaRegAddressCard className='icon-menu'/>Player Cards
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/playertitles" className='menu-text'>
            <MdOutlineSubtitles className='icon-menu'/>Player Titles
          </Link>
        </label>
        <label className='menu-label'>
          <Link to="/seasons" className='menu-text'>
            <BsCalendarMinus className='icon-menu'/>Seasons
          </Link>
        </label> */}
        <label className='menu-label'>
          <Link to="/sprays" className='menu-text'>
            <GiSpray className='icon-menu'/>Sprays
          </Link> 
        </label>
        {/* <label className='menu-label'>
          <Link to="/themes" className='menu-text'>
            <MdOutlinePalette className='icon-menu'/>Themes
          </Link>
        </label> */}
        <label className='menu-label'>
          <Link to="/weapons" className='menu-text'>
            <GiPistolGun className='icon-menu'/>Weapons
          </Link>
        </label>
      </nav>
    </aside>
    )
  }
  
export default SideMenu;
  
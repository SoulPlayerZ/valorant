import { Link } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi';
import { GiCarKey, GiPartyPopper, GiRank3, GiHealingShield, GiTabletopPlayers, GiSpray, GiPistolGun } from 'react-icons/gi';
import { FaBoxes, FaFileContract, FaBorderStyle, FaRegAddressCard } from 'react-icons/fa';
import { TbDiamond } from 'react-icons/tb';
import { BsCurrencyExchange, BsCalendar2Event, BsCalendarMinus } from 'react-icons/bs';
import { IoMapSharp } from 'react-icons/io5';
import { MdOutlineSubtitles } from 'react-icons/md';
import { MdOutlinePalette } from 'react-icons/md';




function SideMenu () {
  return (
    <aside>
      <nav>
        <Link to="/" className='menu-text'>
          <HiUserGroup className='icon-menu'/>Agents
        </Link>
        <Link to="/buddies" className='menu-text'>
          <GiCarKey  className='icon-menu'/>Buddies
        </Link>
        <Link to="/bundles" className='menu-text'>
          <FaBoxes className='icon-menu'/>Bundles
        </Link>
        <Link to="/cerimonies" className='menu-text'>
          <GiPartyPopper  className='icon-menu'/>Cerimonies
        </Link>
        <Link to="/competitivetiers" className='menu-text'>
          <GiRank3  className='icon-menu'/>Competitive Tiers
        </Link>
        <Link to="/contenttiers" className='menu-text'>
          <TbDiamond className='icon-menu'/>Content Tiers
        </Link>
        <Link to="/contracts" className='menu-text'>
          <FaFileContract className='icon-menu'/>Contracts
        </Link>
        <Link to="/currencies" className='menu-text'>
          <BsCurrencyExchange  className='icon-menu'/>Currencies
        </Link>
        <Link to="/events" className='menu-text'>
          <BsCalendar2Event className='icon-menu'/>Events
        </Link>
        <Link to="/gamemodes" className='menu-text'>
          <GiTabletopPlayers className='icon-menu'/>Game Modes
        </Link>
        <Link to="/gear" className='menu-text'>
          <GiHealingShield className='icon-menu'/>Gear
        </Link>
        <Link to="/levelborders" className='menu-text'>
          <FaBorderStyle className='icon-menu'/>Level Borders
        </Link>
        <Link to="/maps" className='menu-text'>
          <IoMapSharp className='icon-menu'/>Maps
        </Link>
        <Link to="/playercards" className='menu-text'>
          <FaRegAddressCard className='icon-menu'/>Player Cards
        </Link>
        <Link to="/playertitles" className='menu-text'>
          <MdOutlineSubtitles className='icon-menu'/>Player Titles
        </Link>
        <Link to="/seasons" className='menu-text'>
          <BsCalendarMinus className='icon-menu'/>Seasons
        </Link>
        <Link to="/sprays" className='menu-text'>
          <GiSpray className='icon-menu'/>Sprays
        </Link>
        <Link to="/themes" className='menu-text'>
          <MdOutlinePalette className='icon-menu'/>Themes
        </Link>
        <Link to="/weapons" className='menu-text'>
          <GiPistolGun className='icon-menu'/>Weapons
        </Link>
      </nav>
    </aside>
    )
  }
  
export default SideMenu;
  
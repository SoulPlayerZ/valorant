import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import { getAllContents } from '../API/fetchs';
import { useEffect } from 'react';
import CardListWeapons from '../components/cardLists/CardListWeapons';


function Weapons () {
  const location = useLocation();
  const { loading, allWeapons, setLoading, setAllWeapons } = useContext(ContentContext);

  const renderContent = async () => {
    setLoading(true);
    const content = await getAllContents(location.pathname);
    setAllWeapons(content);
    setLoading(false);
  }

  useEffect(() => {  
    renderContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    
  return(
    <main>
      <Header />
      <section className='content-container'>
        <section className='aside-container'>
          <SideMenu />
        </section>
        {allWeapons.length === 0 && loading ? <Loading /> : <CardListWeapons />} 
      </section>
    </main>
  )
}

export default Weapons;
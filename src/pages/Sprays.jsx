import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import { getAllContents } from '../API/fetchs';
import { useEffect } from 'react';
import CardListSprays from '../components/cardLists/CardListSprays';


function Sprays () {
  const location = useLocation();
  const { loading, setLoading, setAllSprays } = useContext(ContentContext);

  const renderContent = async () => {
    setLoading(true);
    const content = await getAllContents(location.pathname);
    setAllSprays(content);
    setTimeout(() => {

      setLoading(false);
    }, 1000)
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
        {loading ? <Loading /> : <CardListSprays />} 
      </section>
    </main>
  )
}

export default Sprays;
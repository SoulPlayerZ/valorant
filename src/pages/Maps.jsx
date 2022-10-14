import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import { getAllContents } from '../API/fetchs';
import { useEffect } from 'react';
import CardListMaps from '../components/cardLists/CardListMaps';


function Maps () {
  const location = useLocation();
  const { loading, setLoading, setAllMaps } = useContext(ContentContext);

  const renderContent = async () => {
    setLoading(true);
    const content = await getAllContents(location.pathname);
    setAllMaps(content);
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
        {loading ? <Loading /> : <CardListMaps />} 
      </section>
    </main>
  )
}

export default Maps;
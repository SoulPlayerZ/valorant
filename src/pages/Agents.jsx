import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Loading from '../components/Loading';
import { useContext } from 'react';
import AgentsContext from '../context/AgentsContext';
import getAllAgents from '../API/fetchs';
import { useEffect } from 'react';
import CardListAgents from '../components/cardLists/CardListAgents';
import ContentContext from '../context/ContentContext';


function Agents () {
  const { setAllAgents } = useContext(AgentsContext);
  const { loading, setLoading } = useContext(ContentContext);

  const renderAgents = async () => {
    setLoading(true);
    const agents = await getAllAgents();
    setAllAgents(agents);
    setTimeout(() => {

      setLoading(false);
    }, 1000)
  }

  useEffect(() => {  
    renderAgents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    
  return(
    <main>
      <Header />
      <section className='content-container'>
        <section className='aside-container'>
          <SideMenu />
        </section>
        {loading ? <Loading /> : <CardListAgents />} 
      </section>
    </main>
  )
}

export default Agents;
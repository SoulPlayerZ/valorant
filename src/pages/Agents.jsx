import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Loading from '../components/Loading';
import { useContext } from 'react';
import AgentsContext from '../context/AgentsContext';
import getAllAgents from '../API/fetchs';
import { useEffect } from 'react';
import CardListAgents from '../components/CardListAgents';


function Agents () {
  const { loading, allAgents, setLoading, setAllAgents } = useContext(AgentsContext);

  const renderAgents = async () => {
    setLoading(true);
    const agents = await getAllAgents();
    setAllAgents(agents);
    setLoading(false);
  }

  useEffect(() => {  
    renderAgents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    
  return(
    <main>
      <Header />
      <section className='aside-container'>
        <SideMenu />
        <section className='content-container'>
          {allAgents.length === 0 && !loading ? <Loading /> : <CardListAgents />}
        </section>
        <div>

        </div>
      </section>
    </main>
  )
}

export default Agents;
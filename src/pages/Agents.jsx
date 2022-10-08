import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Loading from '../components/Loading';
import { useContext } from 'react';
import AgentsContext from '../context/AgentsContext';
import getAllAgents from '../API/fetchs';
import { useEffect } from 'react';


function Agents () {
  const { loading, setLoading, setAllAgents, setEnableAgents, enableAgents } = useContext(AgentsContext);

  const renderAgents = async () => {
    setLoading(true);
    const agents = await getAllAgents();
    setAllAgents(agents);
    setEnableAgents(true);
    setLoading(false);
  }

  useEffect(() => {  
    renderAgents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    
  return(
    <main>
      <Header />
      <div className='aside-container'>
      <SideMenu />
      <div className='content-container'>
      {loading ? <Loading /> : ""} 
      {enableAgents && !loading ? <h1>Lista de agentes</h1>: ""}
      </div>
      <div>

      </div>
      </div>
    </main>
  )
}

export default Agents;
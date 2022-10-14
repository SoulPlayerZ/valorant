import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import AgentsContext from "../context/AgentsContext";
import ContentContext from "../context/ContentContext";
import getAllAgents from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function OneAgent () {
  const { displayName } = useParams();
  const { oneAgent, allAgents, setAllAgents, setOneAgent } = useContext(AgentsContext);
  const { loading, setLoading } = useContext(ContentContext);

  const saveAgentInfo = () => {
    const agent = allAgents.find((agentInfo) => agentInfo.displayName === displayName)
    return agent;
  }

  const renderOneAgentInfo = async () => {
    setLoading(true);
    const agents = await getAllAgents();
    setAllAgents(agents);
    setOneAgent(saveAgentInfo());
    setTimeout(() => {

      setLoading(false);
    }, 1000)
  }

  useEffect(() => {  
    renderOneAgentInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return(
    <main>
      <Header />
      <section className='content-container'>
        <section className='aside-container'>
          <SideMenu />
        </section>
        {allAgents.length === 0 && loading ? <Loading /> : <h1>{`${ oneAgent.displayName} page`}</h1>} 
      </section>
    </main>
  )
}

export default OneAgent;
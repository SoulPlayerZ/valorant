import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import AgentsContext from "../context/AgentsContext";
import ContentContext from "../context/ContentContext";
import getAllAgents from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import AgentContentPage from "../components/contentsPages/AgentContentPage";

function OneAgent () {
  const { displayName } = useParams();
  const { oneAgent, setOneAgent } = useContext(AgentsContext);
  const { loading, setLoading } = useContext(ContentContext);

  const saveAgentInfo = (agents) => {
    const agent = agents.find((agentInfo) => agentInfo.displayName === displayName);
    return agent;
  }

  const renderOneAgentInfo = async () => {
    setLoading(true);
    const agents = await getAllAgents();
    setOneAgent(saveAgentInfo(agents));
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
        {oneAgent.role === undefined && loading ? <Loading /> : <AgentContentPage oneAgent={ oneAgent }/>} 
      </section>
    </main>
  )
}

export default OneAgent;
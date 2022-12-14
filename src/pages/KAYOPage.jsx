import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import AgentsContext from "../context/AgentsContext";
import ContentContext from "../context/ContentContext";
import getAllAgents from '../API/fetchs';
import Loading from "../components/Loading";
import AgentContentPage from "../pages/AgentContentPage";

function KAYOPage () {
  const { setOneAgent } = useContext(AgentsContext);
  const { loading, setLoading } = useContext(ContentContext);

  const saveAgentInfo = (agents) => {
    const agent = agents.find((agentInfo) => agentInfo.displayName === "KAY/O");
    return agent;
  }

  const renderOneAgentInfo = async () => {
    setLoading(true);
    const agents = await getAllAgents();
    setOneAgent(saveAgentInfo(agents));
    setLoading(false);
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
        {loading ? <Loading /> : <AgentContentPage />} 
      </section>
    </main>
  )
}

export default KAYOPage;
import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ContentContext from "../context/ContentContext";
import { getSprayById } from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import SprayContentPage from "./SprayContentPage";

function OneSpray () {
  const { id } = useParams();
  const { loading, setLoading, setOneSpray } = useContext(ContentContext);

  const renderOneSprayInfo = async () => {
    setLoading(true);
    setOneSpray({});
    const spray = await getSprayById(id);
    setOneSpray(spray);
    setLoading(false);
  }

  useEffect(() => {  
    renderOneSprayInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return(
    <main>
      <Header />
      <section className='content-container'>
        <section className='aside-container'>
          <SideMenu />
        </section>
        {loading 
        ? <Loading /> : <SprayContentPage />} 
      </section>
    </main>
  )
}

export default OneSpray;
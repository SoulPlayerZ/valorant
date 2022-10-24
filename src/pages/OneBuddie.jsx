import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ContentContext from "../context/ContentContext";
import { getBuddieById } from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import BuddieContentPage from "./BuddieContentPage";

function OneBuddie () {
  const { id } = useParams();
  const { loading, setLoading, setOneBuddie } = useContext(ContentContext);

  const renderOneBuddieInfo = async () => {
    setLoading(true);
    setOneBuddie({});
    const map = await getBuddieById(id);
    setOneBuddie(map);
    setLoading(false);
  }

  useEffect(() => {  
    renderOneBuddieInfo();
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
        ? <Loading /> : <BuddieContentPage /> } 
      </section>
    </main>
  )
}

export default OneBuddie;
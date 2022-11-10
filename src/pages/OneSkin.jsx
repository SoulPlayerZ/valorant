import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ContentContext from "../context/ContentContext";
import { getSkinById } from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import SkinContentPage from "./SkinContentPage";

function OneSkin () {
  const { id } = useParams();
  const { loading, setLoading, setOneSkin } = useContext(ContentContext);

  const renderOneSkinInfo = async () => {
    setLoading(true);
    setOneSkin({});
    const skin = await getSkinById(id);
    setOneSkin(skin);
    setLoading(false);
  }

  useEffect(() => {  
    renderOneSkinInfo();
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
        ? <Loading /> : <SkinContentPage />} 
      </section>
    </main>
  )
}

export default OneSkin;
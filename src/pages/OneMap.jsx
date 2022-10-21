import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ContentContext from "../context/ContentContext";
import { getMapById } from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import MapContentPage from "./MapContentPage";

function OneMap () {
  const { id } = useParams();
  const { loading, setLoading, setOneMap } = useContext(ContentContext);

  const renderOneMapInfo = async () => {
    setLoading(true);
    setOneMap({});
    const map = await getMapById(id);
    setOneMap(map);
    setLoading(false);
  }

  useEffect(() => {  
    // console.log(pathName)
    renderOneMapInfo();
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
        ? <Loading /> : <MapContentPage /> } 
      </section>
    </main>
  )
}

export default OneMap;
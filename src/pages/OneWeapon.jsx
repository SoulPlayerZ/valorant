import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import ContentContext from "../context/ContentContext";
import { getWeaponById } from '../API/fetchs';
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import WeaponContentPage from "./WeaponContentPage";

function OneWeapon () {
  const { id } = useParams();
  const { loading, setLoading, setOneWeapon, setAllSkins } = useContext(ContentContext);

  const renderOneWeaponInfo = async () => {
    setLoading(true);
    setOneWeapon({});
    const weapon = await getWeaponById(id);
    setOneWeapon(weapon);
    setAllSkins(weapon.skins)
    setLoading(false);
  }

  useEffect(() => {  
    renderOneWeaponInfo();
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
        ? <Loading /> : <WeaponContentPage /> } 
      </section>
    </main>
  )
}

export default OneWeapon;
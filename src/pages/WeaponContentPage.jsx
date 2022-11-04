import React, { useContext } from "react";
import ContentContext from "../context/ContentContext";
import Loading from "../components/Loading";
import CardListSkins from "../components/cardLists/CardListSkins";

function WeaponContentPage () {
  const { oneWeapon, } = useContext(ContentContext);

  const verifyOneWeaponKeys = (oneWeapon) => {
    return oneWeapon.weaponStats === undefined || oneWeapon.shopData === undefined;
  }

  return(
    <section className="one-agent-info-container">
      <section className="one-agent-top-container">
        <section className="full-portrait-container">
          <h1>{ oneWeapon.displayName }</h1>
          <img src={ oneWeapon.displayIcon }  alt="Map-Full-Portrait" className="full-portrait"/>
        </section>
      </section>

      <hr />
      <h1>Info</h1>

      <section className="description-card-container">
        <section className="agent-description-card">
          {verifyOneWeaponKeys(oneWeapon) ? <Loading /> :
            <section className="description-text-container">
              <h5> {oneWeapon.shopData.category} </h5>
              <h6> {`Fire Rate: ${oneWeapon.weaponStats.fireRate} rds/sec` }</h6>
              <h6> {`Equipe Speed: ${oneWeapon.weaponStats.equipTimeSeconds} sec` }</h6>
              <h6> {`Reload Speed: ${oneWeapon.weaponStats.reloadTimeSeconds} sec` }</h6>
              <h6> {`Magazine: ${oneWeapon.weaponStats.reloadTimeSeconds} rds` }</h6>
              <h6> {`Cost: ${oneWeapon.shopData.cost}` }</h6>
            </section>
          }
        </section>
      </section>

      <hr />
      <h1>Skins</h1>
      <CardListSkins />

    </section>
  )
}

export default WeaponContentPage;
import React, { useContext } from "react";
import ContentContext from "../context/ContentContext";

function WeaponContentPage () {
  const { oneWeapon } = useContext(ContentContext);

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
            <section className="description-text-container">
              <h5> {oneWeapon.shopData.category} </h5>
              <h6> {`Fire Rate: ${oneWeapon.weaponStats.fireRate} rds/sec` }</h6>
              <h6> {`Equipe Speed: ${oneWeapon.weaponStats.equipTimeSeconds} sec` }</h6>
              <h6> {`Reload Speed: ${oneWeapon.weaponStats.reloadTimeSeconds} sec` }</h6>
              <h6> {`Magazine: ${oneWeapon.weaponStats.reloadTimeSeconds} rds` }</h6>
              <h6> {`Cost: ${oneWeapon.shopData.cost}` }</h6>
            </section>
        </section>

        {/* <section className="description-card-container">
        <section className="agent-description-card">
            <section className="description-text-container">
              <h5> Damage </h5>
              <h6> {`Distance: ${oneWeapon.weaponStats.fireRate} rds/sec` }</h6>
            </section>
        </section>
        </section> */}
      </section>
      <hr />
      <h1>Skins</h1>
    </section>
  )
}

export default WeaponContentPage;
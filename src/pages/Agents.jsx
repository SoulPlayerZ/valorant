import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
// import getAllAgents from '../API/fetchs';
// import { useEffect } from 'react';


function Agents () { 

  // const getChars = async () => {
  //   const a = await getAllAgents();

  //   console.log(await a);
  // }

  // useEffect(() => {
  //   getChars();
  // }, []);


  return(
    <main>
      <Header />
      <div className='aside-container'>
      <SideMenu />
      <div className='content-container'>

        <h1>Agents PAGEssssssssss</h1>
        <h1>Agents PAGEssssssssssss</h1>
        <h1>Agents PAGEssssssssssssss</h1>
        <h1>Agents PAGEssssssssss</h1>
        <h1>Agents PAGEssssssssssss</h1>
        <h1>Agents PAGEssssssssssssss</h1>
        <h1>Agents PAGE</h1>
        <h1>Agents PAGE</h1>
      </div>
      <div>

      </div>
      </div>
    </main>
  )
}

export default Agents;
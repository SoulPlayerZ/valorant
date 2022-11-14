const getAllAgents = async () => {
  const agents = await fetch("https://valorant-api.com/v1/agents/?isPlayableCharacter=true");
  const { data } = await agents.json();
  return data;
}

export const getAllContents = async (pathname) => {
  const agents = await fetch(`https://valorant-api.com/v1${pathname}`);
  const { data } = await agents.json();
  return data;
}

export const getAgentById = async (uuid) => {
  const agent = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
  const { data } = await agent.json();
  return data;
}

export const getMapById = async (uuid) => {
  const map = await fetch(`https://valorant-api.com/v1/maps/${uuid}`);
  const { data } = await map.json();
  return data;
}

export const getSprayById = async (uuid) => {
  const spray = await fetch(`https://valorant-api.com/v1/sprays/${uuid}`);
  const { data } = await spray.json();
  return data;
}

export const getBuddieById = async (uuid) => {
  const buddie = await fetch(`https://valorant-api.com/v1/buddies/${uuid}`);
  const { data } = await buddie.json();
  return data;
}

export const getWeaponById = async (uuid) => {
  const weapon = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`);
  const { data } = await weapon.json();
  return data;
}

export const getSkinById = async (uuid) => {
  const weapon = await fetch(`https://valorant-api.com/v1/weapons/skins/${uuid}`);
  const { data } = await weapon.json();
  return data;
}

export default getAllAgents;
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
  const agents = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
  const { data } = await agents.json();
  return data;
}

export const getMapById = async (uuid) => {
  const maps = await fetch(`https://valorant-api.com/v1/maps/${uuid}`);
  const { data } = await maps.json();
  return data;
}

export default getAllAgents;
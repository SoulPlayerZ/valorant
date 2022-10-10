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

export default getAllAgents;
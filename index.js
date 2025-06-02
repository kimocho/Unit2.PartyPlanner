const state = [];

const getApi = async () => {
  try {
    const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
    const actualResponse = await res.json();
    const partyArray = actualResponse.data;
    state.push(...partyArray);
    return state;
  }
  catch {
    console.log('Not Found');
  }
}

// const processData = async () => {
//   const res = await getApi();
//   return res;
// }
const processData = getApi();
console.log(processData.then(getApi()));
const stateQuestion = getApi();
console.log(stateQuestion);
console.log(state);
console.log(state.length);
console.log([{ 'a': "b" }, { 'c': '3' }]);
const eventParties = () => {
  const listofParties = ""
  for (let i = 0; i < state.length; i++) {
    listofParties += `<output>${state[i].name}</output>"`;
  }
  return listofParties;
}

const partyDetails = () => {
  const details = "";
  for (let i = 0; i < state.length; i++) {

  }
  return details;
}

const entirePage = document.querySelector('#app');
entirePage.innerHTML = `
  <h1>Party Planner</h1>
  <h2>Upcoming Parties</h2>
  <section>${listofParties()}</section >
`;


const state = [];

const getApi = async () => {
  try {
    const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
    const actualResponse = await res.json();
    const partyArray = actualResponse.data;
    state.push(...partyArray);
    render();
  }
  catch {
    console.log('Not Found');
  }
}
getApi();

const eventParties = (arr) => {
  let listofParties = "";
  arr.forEach(elem => {
    listofParties += `<output>${elem.name}</output>`;
  });
  return listofParties;
}

const partyDetails = () => {
  const details = "";
  for (let i = 0; i < state.length; i++) {
    console.log('b');
  }
  return details;
}

const render = () => {
  const entirePage = document.querySelector('#app');
  entirePage.innerHTML = `
    <h1>Party Planner</h1>
    <h2>Upcoming Parties</h2>
    <section>${eventParties(state)}</section >
  `;
}

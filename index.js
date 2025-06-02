const state = {
  eventNames: [],
  eventDetails: []
};

const entirePage = document.querySelector('#app');
entirePage.innerHTML = `
  <h1>Party Planner</h1>
  <h2>Upcoming Parties</h2>
`;

const getApi = async () => {
  try {
    const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
    const resJson = await res.json();
    const partyArray = resJson.data;
    puttingNamesInState(partyArray);
    render();
  }
  catch {
    console.log('Not Found');
  }
}

const puttingNamesInState = (arr) => {
  arr.forEach(partyObj => {
    state.eventNames.push(partyObj.name)
  });
}
const detailsRender = async () => {
  const response = await fetch();
  const resJson = await response.json();
  const partyDetailsArr = resJson.data;

  const detailContainer = document.createElement('section');
  detailContainer.innerText = state.eventDetails;
  entirePage.appendChild(detailContainer);

  state.eventDetails =;
}

const render = () => {
  const ol = document.createElement('ol');
  entirePage.appendChild(ol);

  state.eventNames.forEach(partyName => {
    const li = document.createElement('li');
    li.addEventListener('click', () => {
      detailsRender();
    });
    li.innerText = partyName;
    ol.appendChild(li);
  });

}

getApi();
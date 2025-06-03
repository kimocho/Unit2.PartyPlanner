const state = {
  eventNames: [],
  //eventDetails: []
};

const entirePage = document.querySelector('#app');
entirePage.innerHTML = `
  <h1>Party Planner</h1>
  <h2>Upcoming Parties</h2>
`;
const middle = document.createElement('section');
entirePage.appendChild(middle);

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
    state.eventNames.push(partyObj.name);
  });
}

const detailsRender = async (partyName) => {
  const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
  const resJson = await res.json();
  const partyArray = resJson.data;
  const ul = document.createElement('ul');
  middle.append(ul);
  const h2 = document.createElement('h2');
  h2.innerText = 'Party Details';
  ul.appendChild(h2);
  partyArray.forEach(obj => {
    if (obj.name === partyName) {
      for (let key in obj) {
        // state.eventDetails.push(obj[key]);
        const li = document.createElement('li');
        li.innerText = `${key}: ${obj[key]}`;
        ul.append(li);
      }
    }
  });
}

const render = () => {
  const ol = document.createElement('ol');
  middle.appendChild(ol);
  state.eventNames.forEach(partyName => {
    const li = document.createElement('li');
    li.addEventListener('click', () => {
      //another function call
      detailsRender(partyName);
    });
    li.innerText = partyName;
    ol.appendChild(li);
  });
}

getApi();
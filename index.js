const state = {
  eventNames: [],
  eventDetails: []
};

const div = document.querySelector('#app');
div.innerHTML = `
  <h1>Party Planner</h1>
  <main>
  <section>
    <h2>Upcoming Parties</h2>
    <ul id="partyNames"></ul>
  </section>
  <aside>
    <h2>Party Details</h2>
    <ul id="partyDetails"></ul>
  </aside>
  </main>
`;
const partyNamesUL = document.querySelector('#partyNames');
const partyDetailsUL = document.querySelector('#partyDetails');


const getApi = async () => {
  try {
    const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
    const resJson = await res.json();
    const partyArray = resJson.data;
    console.log(partyArray);
    render(partyArray);
  }
  catch {
    console.log('Not Found');
  }
}

const render = (arr) => {
  arr.forEach(obj => {
    const li = document.createElement('li');
    li.innerText = obj.name;
    partyNamesUL.appendChild(li);
    li.addEventListener('click', (event) => {
      event.preventDefault();
      renderDetails(obj);
    });
  });
}

const renderDetails = ({ name, id, date, description, location }) => {
  partyDetailsUL.innerHTML = `
    <li>Name: ${name}</li>
    <li>ID: ${id}</li>
    <li>Date: ${date}</li>
    <li>Description: ${description}</li>
    <li>Location: ${location}</li>
  `;
}

getApi();
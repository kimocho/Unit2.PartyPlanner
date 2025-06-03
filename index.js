const state = {
  partyObjects: []
}

const div = document.querySelector('#app');
div.innerHTML = `
  <h1>Party Planner</h1>
  <hr>
  <main>
  <section>
    <h2>Upcoming Parties</h2>
    <ul id="partyNames"></ul>
    <h2>Here are a list of guest RSVPs</h2>
    <h5>No RSVPs</h5>
  </section>
  <aside>
    <h2>Party Details</h2>
    <h3>Select One of the Parties to Find Out More!</h3>
    <ul id="partyDetails"></ul>
  </aside>
  </main>
`;
const partyNamesUL = document.querySelector('#partyNames');
const partyDetailsUL = document.querySelector('#partyDetails');
const detailHeading = document.querySelector('h3');

const getApi = async () => {
  try {
    const res = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events');
    const resJson = await res.json();
    const partyArray = resJson.data;
    state.partyObjects = partyArray;
    render();
  }
  catch {
    console.log('Not Found');
  }
}

const render = () => {
  state.partyObjects.forEach(obj => {
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
  detailHeading.remove();
  partyDetailsUL.innerHTML = `
    <li>Name: ${name}</li>
    <li>ID: ${id}</li>
    <li>Date: ${date}</li>
    <li>Description: ${description}</li>
    <li>Location: ${location}</li>
  `;
}

getApi();

// const guestApi = async () => {
//   const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/guests');
//   const responseJson = await response.json();
//   const guestList = responseJson.data;
//   console.log('guest', guestList);
// }

// const rsvpApi = async () => {
//   const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/rsvps');
//   const responseJson = await response.json();
//   const rsvpList = responseJson.data;
//   console.log('rsvp', rsvpList);
// }

// guestApi();
// rsvpApi();
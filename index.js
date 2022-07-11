const info= document.getElementById('info');
const button = document.getElementById('button');

const getData= async () => {
    const url = `https://jsonplaceholder.typicode.com/users `
   
    const response = await fetch(url);
    
   
    const data = await response.json();
    console.log(data);
}

const fetchData = (data) => {
    info.innerHTML = `

    <div class="basic" id="info">
        
    <h2>${data[0].name}</h2>
    <h4>${data[0].email}</h4>
    <h5>${data[0].city}</h5>
    <h6>${data[0].website}</h6>
    <button class="btn" id=" button">Fetch data</button>
    
    </div>

    `
}

button.addEventListener('click',getData )
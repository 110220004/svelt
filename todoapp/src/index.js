import axios from 'axios';

const serverUrl = 'http://localhost:3000'; 

function fetchData() {
    axios.get(serverUrl)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
}

fetchData();
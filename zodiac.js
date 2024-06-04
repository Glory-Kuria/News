// const apiKey = 'db30d445abmshafec56be51cef52p159e6ajsndb75a4db3b3d'; // Replace with your actual API key
// const zodiacSignElement = document.getElementById('zodiac-sign');
// const horoscopeDetailsElement = document.getElementById('horoscope-details');

// function getHoroscope() {
//     const zodiacSign = zodiacSignElement.value;
//     if (!zodiacSign) {
//         horoscopeDetailsElement.innerHTML = '<p>Please select a zodiac sign.</p>';
//         return;
//     }

//     const url = `https://aztro.sameerkumar.website/?sign=aries&day=today`;
//     fetch(url)
//        .then(response => response.json())
//        .then(data => {
//             horoscopeDetailsElement.innerHTML = `
//                 <h2>${data.zodiac} Daily Horoscope</h2>
//                 <p><strong>Description:</strong> ${data.description}</p>
//                 <p><strong>Symbol:</strong> ${data.symbol}</p>
//                 <p><strong>Date:</strong> ${data.date}</p>
//                 <p><strong>Interpretation:</strong> ${data.interpretation}</p>
//                 <p><strong>Color:</strong> ${data.color}</p>
//                 <p><strong>Lucky Number:</strong> ${data.lucky_number}</p>45
//                 <p><strong>Lucky Time:</strong> ${data.lucky_time}</p>
//             `;
//         } )
//        .catch(error => {
//             horoscopeDetailsElement.innerHTML = '<p>Error loading horoscope. Please check your internet connection and try again.</p>';
//         })
//         const apiUrl = `https://aztro.sameerkumar.website/?sign=aquarius&day=today${zodiacSign}&type=daily&key=${apiKey}`;
// const headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
// };
//         // const Stars = (`${url}`)
//     };
//     const apiUrl = `https://aztro.sameerkumar.website/?sign=aquarius&day=today${zodiacSign}&type=daily&key=${apiKey}`;
// const headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
// };


const baseUrl=`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today`;
const container =document.getElementById ('container')

const getAlbumData = async () => {
    const albumData = await fetch(`${baseUrl}?sign= <sign> &day= <day>`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(async(response) =>{
        console.log({response});
        const result = await response.json();
        return result
    })
    .catch(error=>{
        throw new Error(error.message)

    });

    console.log({albumData})

    albumData.forEach(item => {
        const singleAlbumContainer = document.createElement('div');
        singleAlbumContainer.setAttribute('key',item.colour);
        singleAlbumContainer.setAttribute('class','singleAlbumContainer')
        const title = document.createElement('h3')
        title.innerHTML=item.aries;
        const image = document.createElement('img');
        image.src=item.url; 
        singleAlbumContainer.appendChild(image);
        singleAlbumContainer.appendChild(title);
        container.appendChild(singleAlbumContainer)
        
    });
};


// document.addEventListener('DOMContentLoaded',getAlbumData);
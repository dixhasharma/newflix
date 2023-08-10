document.getElementById('search-btn').addEventListener('click', () => {
    const text = document.getElementById('search-text').value
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://netflix54.p.rapidapi.com/search/?query=${text}&offset=0&limit_titles=50&limit_suggestions=20&lang=en`);

    xhr.setRequestHeader('X-RapidAPI-Key', '42cc341431mshef68d78e29d2d5ep18f608jsn7f940de7cbc3');
    xhr.setRequestHeader('X-RapidAPI-Host', 'netflix54.p.rapidapi.com');
    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            const response = JSON.parse(xhr.responseText)

            console.log(response)
            output = ""
            for (let i = 0; i < response.titles.length; i++) {
                cast = ''
                for (let j = 0; j < response.titles[i].jawSummary.cast.length; j++) {
                    if (j > 5) {
                        break;

                    }
                    cast += `${response.titles[i].jawSummary.cast[j].name},`
                }
                direct = 'none' 
                if (response.titles[i].jawSummary.directors[0] != null) {
                    direct = response.titles[i].jawSummary.directors[0].name  

                }
                output += `
            <div style="width: 30%; margin: 8px;">
                <img src="${response.titles[i].jawSummary.backgroundImage.url}" style="width: 100%;
                height: 350px;">
             
                
                <h3> availaible: ${response.titles[i].availability.isPlayable} </h3>
                <h4> Director: ${direct}</h4>

                <h4> Release Date ${response.titles[i].availability.availabilityDate}</h4>
                <h5> cast:${cast}</h5>
                
            </div>`

            }
            document.getElementById("my-div").innerHTML = output

         
        }
    }
    xhr.send();
}, 3000)

//-----------------------youtube----------------->

// document.getElementById('search-btn').addEventListener('click', () => {
//     const text = document.getElementById('search-text').value
//     console.log(text)
//     const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_2CwII3K3NSMxEUzr-XizxknlEvr0N5s&part=snippet&q=${text}&maxResults=50`
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState == 4 && xhr.status == 200) {
//             const response = JSON.parse(xhr.responseText)
//             console.log(response)
//             let output = ''
//             for(let i=0; i < response.items.length; i++) {
//                 output += `
//                     <div style="width: 23%; margin: 10px;">
//                         <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
//                             <div>
//                                 <img style="width:100%" src="${response.items[i].snippet.thumbnails.high.url}" />
//                                 <h4>${response.items[i].snippet.title}</h4>
//                                 <p>${response.items[i].snippet.description}</p>
//                             </div>
//                         </a>
//                     </div>
//                 `
//             }
//             document.getElementById('my-div').innerHTML = output
//         }
//     }
//     xhr.send()
// })
/* <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
                                    <div></div> */
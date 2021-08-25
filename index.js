const API_KEY ="e80aaf1d3c82107e98d38d72ba37d138";
const ALBUM_NAME="BTS"
function lastFm(){
    const url =`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${ALBUM_NAME}&api_key=${API_KEY}&format=json`

    fetch(url).then(response => response.json()).then(data=>{
        const result = data.results;
        result.albummatches.album.forEach(element => {
            console.log(element);
        });
    });

}

lastFm()


const apiKey = 'ngB2sCGHPWX2SGWlz5qe0Dwz8MNRn9Pp';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
.then(response => response.json())
.then( ({data}) => {
    
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img);
    })
.catch(console.warn);




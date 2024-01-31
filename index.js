



async function RandomQuote() {
    // looked for api with minimal documentation 
    fetch('https://type.fit/api/quotes')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // need random number for random quote in the list
        let ranInt = Math.floor(Math.random() * data.length)
        // save quote to variable to access text and author instead of just one value at a time
        let ranQuote = data[ranInt]
        // console.log the text and author that was in the list
        console.log(`Quote: ${ranQuote.text} Author: ${ranQuote.author}`);
    })


}

// ran the code for the quote. 
RandomQuote();
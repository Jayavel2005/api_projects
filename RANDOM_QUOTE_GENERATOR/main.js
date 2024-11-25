let html = "";

    function fetchQuote(){
        fetch("https://qapi.vercel.app/api/random")
        .then((response)=>response.json()
        )
        .then((data)=>{
            html = `
                <h4 class="quote js-quote">"${data.quote}"</h4>
                <p class="author js-author">-${data.author}</p>
                <button class="generate-btn" onclick="fetchQuote()">Generate</button>
                
                `
                document.querySelector(".js-quote-screen").innerHTML = html
        })
        .catch((err)=>{
            html = `
                <h4 class="quote js-quote">An error occurred While fetching</h4>
                <p class="author js-author">Please try again later.</p>                
                `
                document.querySelector(".js-quote-screen").innerHTML = html
        })
    
    }
fetchQuote()

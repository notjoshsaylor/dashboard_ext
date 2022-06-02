fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.full)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("img-author").textContent += `Image by: ${data.user.name}`
    }).catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1542903660-eedba2cda473?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTQxMDg5Njk&ixlib=rb-1.2.1&q=80)`
        document.getElementById("img-author").textContent += `Image by: Markus Spiske`
    })

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong")
        }
        return res.json()
    })
        
    .then(data => {
        //console.log(data)
        document.getElementById("cryptoTop").innerHTML = `
            <img src=${data.image.small}>
            <span class="coinName">${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
        <p class="price">CURRENT: $ ${data.market_data.current_price.usd}</p>
        <p class="price">24H HIGH: $ ${data.market_data.high_24h.usd}</p>
        <p class="price">24H LOW: $ ${data.market_data.low_24h.usd}</p>
    `

    }).catch (err => console.error(err))

    function getCurrentTime(){
        const date = new Date()
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }

    setInterval(getCurrentTime, 1000)

    navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
    })
    
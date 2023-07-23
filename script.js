const btc = document.getElementById('bitcoin')
const eth = document.getElementById('ethereum')
const doge = document.getElementById('dogecoin')

const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav-list')
const close = document.getElementById('close')

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.add('active')
    })
} 
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// CoinGecko Code to display realtime coin prices
const coins = {
   // 'async': true,
    'scrossdomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
    'method': 'GET',
    'headers': {},
}
$.ajax(coins).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
})
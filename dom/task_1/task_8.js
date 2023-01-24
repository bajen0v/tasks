function priceSquare() {
	let result = 0
    let prices = document.querySelectorAll('.price')
    prices.forEach( el => {
	result += Number(el.innerText)
	
	}
	
    )
console.log(result)
}
    
    priceSquare()
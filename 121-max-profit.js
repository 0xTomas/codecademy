const stockPrices = [1, 10]

const getBestProfit = (stockPrices) => {
    if (stockPrices.length < 2) console.log('At least two prices are required.')

    minPrice = stockPrices[0]
    stockPrices[0] < stockPrices[1] ? maxProfit = stockPrices[1] - stockPrices[0] : maxProfit = 0

    for (let i=1; i<stockPrices.length; i++) {
        currentPrice = stockPrices[i]
        potentialProfit = currentPrice - minPrice
        maxProfit = Math.max(potentialProfit, maxProfit)
        minPrice = Math.min(currentPrice, minPrice)
    }
    return maxProfit
}

console.log(`The maximum possible profit is $${getBestProfit(stockPrices)}.`)



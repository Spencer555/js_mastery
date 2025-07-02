const axios = require('axios')

// 63877fb95c3996ae3e55879c768d86eb -fixer api details 


// https://fixer.io/
const FIXER_API_KEY = '63877fb95c3996ae3e55879c768d86eb'
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`


// https://restcountries.eu 
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`


// async/await 
// its non blocking

const add = async (a,b) => {
    const sum = await a + b 
    return sum
}


// async return promises

add(4,2)


// fetch data about currencies 

const getExchangeRate = async (fromCurrency, toCurrency) => {

    try {
            const {data }  = await axios.get(FIXER_API)

        const rates = data.rates
        console.log(rates)
        const euro = 1 / rates[fromCurrency]
        const exchangeRate = euro * rates[toCurrency]
        console.log(exchangeRate)

    } catch (error) {
        throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`)
    }
}

getExchangeRate('USD', 'EUR')

// fetch data about countries 
const getCountries = async  (currencyCode) => {


    try {
    const {data} = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`)

    return data?.map(({name}) => name) 

    }
    catch (error){
            throw new Error(`Unable to get countries that use ${currencyCode}`)
    }


}

getCountries("AUD")


// Output data
const convertCurrency = async (fromCurrency, toCurrency, amount) => {

    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();



    // this lets the requests run simultaneously and we await for the response for both of them
//  we are using destructuring 


    const [exchangeRate, countries]  = await Promise.all ([
            getExchangeRate(fromCurrency, toCurrency),
            getCountries(toCurrency)


])

    const convertedAmount = (amount * exchangeRate).toFixed(2)

    return  `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.
    You can spend these in the following countries: ${countries}`

}


// to receive the val from async func use then and catch

convertCurrency('AUD', 'USD', 20)
.then(() => console.log(result))
.catch((error) => console.log(error))

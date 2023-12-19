function konversiCelciusToFahrenheit(suhuCelcius) {
 let suhuFahrenheit = (suhuCelcius * 9/5) + 32
 return suhuFahrenheit   
}
let suhuCelcius = 30
let suhuFahrenheit = konversiCelciusToFahrenheit(suhuCelcius)
console.log(suhuCelcius + " celcius setara dengan " + suhuFahrenheit)
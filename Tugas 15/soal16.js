function cekPalindrome(kata) {
    return kata.split('').reverse().join('');
}

let kata1 = "kakak"
let kata2 = "adik"

console.log(kata1 + " adalah palindrom " + cekPalindrome(kata1))
console.log(kata2 + " adalah palindrom " + cekPalindrome(kata2))
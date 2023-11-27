const getTambah = document.querySelector("#tambah")
getTambah.addEventListener("click", function () {
const getInput1 = document.querySelector("#input1")
const getInput2 = document.querySelector("#input2")
const getHasil = document.querySelector("#hasil")
getHasil.value = Number(getInput1.value) + Number(getInput2.value)       


})

const getKurang = document.querySelector("#kurang")
getKurang.addEventListener("click", function () {
const getInput1 = document.querySelector("#input1")
const getInput2 = document.querySelector("#input2")
const getHasil = document.querySelector("#hasil")
getHasil.value = Number(getInput1.value) - Number(getInput2.value)       
})

const getKali = document.querySelector("#kali")
getKali.addEventListener("click", function () {
const getInput1 = document.querySelector("#input1")
const getInput2 = document.querySelector("#input2")
const getHasil = document.querySelector("#hasil")
getHasil.value = Number(getInput1.value) * Number(getInput2.value)       
})

const getBagi = document.querySelector("#bagi")
getBagi.addEventListener("click", function () {
const getInput1 = document.querySelector("#input1")
const getInput2 = document.querySelector("#input2")
const getHasil = document.querySelector("#hasil")
getHasil.value = Number(getInput1.value) / Number(getInput2.value)       
})



const getReset= document.querySelector("#reset")
getReset.addEventListener("click", function () {
const getInput1 = document.querySelector("#input1")
const getInput2 = document.querySelector("#input2")
const getHasil = document.querySelector("#hasil")
getHasil.value= null
getInput1.value= null
getInput2.value=null

})
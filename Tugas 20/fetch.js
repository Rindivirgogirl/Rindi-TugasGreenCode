const apiUrl = "http://localhost:3000/"
const getData = document.getElementById("data")
fetch(apiUrl+"get-user")
    .then(res=>res
    .json()).then(data =>{
    console.log(data)

    for (let index = 0; index < data.dataArray.length; index++) {
        getData.innerHTML += `<tr>
        <td>${index +1}</td>        
        <td>${data.dataArray[index].id}</td>  
        <td>${data.dataArray[index].code}</td>  
        <td>${data.dataArray[index].nama}</td>   
        <td>${data.dataArray[index].kategori}</td>   
        <td>${data.dataArray[index].price}</td>   
        </tr>`
        
    }
})

    function addData() {
        const getInputId = document.getElementById("input-id");
        const getInputCode = document.getElementById("input-code");
        const getInputNama = document.getElementById("input-nama");
        const getInputKategori = document.getElementById("input-kategori");
        const getInputPrice = document.getElementById("input-price");
    
        const data = {
            "id": getInputId.value,
            "code": getInputCode.value,
            "nama": getInputNama.value,
            "kategori": getInputKategori.value,
            "price": getInputPrice.value
        }
    
        fetch(apiUrl + "post-user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        window.location.reload();
    }





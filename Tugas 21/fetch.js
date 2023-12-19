const apiUrl = "http://localhost:3000/"
const getData = document.getElementById("data")
fetch(apiUrl+"get-user")
    .then(res=>res
    .json()).then(data =>{
    console.log(data)

    for (let index = 0; index < data.data.length; index++) {
        getData.innerHTML += `<tr>
               
        <td>${data.data[index].id}</td>   
        <td>${data.data[index].nama}</td>   
        <td>${data.data[index].number_phone}</td>   
        <td>${data.data[index].point}</td>  
        <td>
            <button>edit</button>
            <button onclick="deleteData(${data.data[index].id})">delete</button>
        </td>   
    </tr>`
        
    }
})

function deleteData(id) {
    fetch(apiUrl + "delete-user", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload();
}

    function addData() {
        const getInputId = document.getElementById("input-id");
        const getInputNama = document.getElementById("input-nama");
        const getInputNumber_Phone = document.getElementById("input-number_phone");
        const getInputPoint = document.getElementById("input-point");
    
        const data = {
            "id": getInputId.value,
            "nama": getInputNama.value,
            "number_phone": getInputNumber_Phone.value,
            "point": getInputPoint.value
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





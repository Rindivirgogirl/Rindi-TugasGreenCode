const apiUrl = "http://localhost:3000/"
const getBiodata = document.getElementById("data")
fetch(apiUrl+"get-biodata")
    .then(res=>res
    .json()).then(data =>{
    console.log(data)

    for (let index = 0; index < data.DataDiri.length; index++) {
        getBiodata.innerHTML += `<tr>
               
        <td>${data.DataDiri[index].id}</td>   
        <td>${data.DataDiri[index].nama}</td>   
        <td>${data.DataDiri[index].jenis_kelamin}</td>   
        <td>${data.DataDiri[index].agama}</td>  
        <td>${data.DataDiri[index].alamat}</td>  
        <td>${data.DataDiri[index].usia}</td>  
        <td>${data.DataDiri[index].tanggal_lahir}</td>  
        <td>
            <button>edit</button>
            <button onclick="deleteBiodata(${data.DataDiri[index].id})">delete</button>
        </td>   
    </tr>`
        
    }
})

function addBiodata() {
        const getInputId = document.getElementById("input-id");
        const getInputNama = document.getElementById("input-nama");
        const getInputJenis_Kelamin = document.getElementById("input-jenis_kelamin");
        const getInputAgama = document.getElementById("input-agama");
        const getInputAlamat = document.getElementById("input-alamat");
        const getInputUsia = document.getElementById("input-usia");
        const getInputTanggal_Lahir = document.getElementById("input-tanggal_lahir");
    
        const data= {
            "id": getInputId.value,
            "nama": getInputNama.value,
            "jenis_kelamin": getInputJenis_Kelamin.value,
            "agama": getInputAgama.value,
            "alamat": getInputAlamat.value,
            "usia": getInputUsia.value,
            "tanggal_lahir": getInputTanggal_Lahir.value,
        }
    
        fetch(apiUrl + "post-biodata", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        window.location.reload();
}

function deleteBiodata(id) {
    fetch(apiUrl + "delete-biodata", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload();
}
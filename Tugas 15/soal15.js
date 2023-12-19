function generateAngka(teks) {
    let angkaArray = [];
    for (var i = 1; i <= teks; i++) {
      angkaArray.push(i);
    }
    return angkaArray;
  }

  let angkaTerakhir = 4;
  let hasilGenerate = generateAngka(angkaTerakhir);
  console.log('Array angka: ' + hasilGenerate)
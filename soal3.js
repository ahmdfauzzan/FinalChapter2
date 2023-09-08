//soal no 3

function getAngkaTerbesarKedua(personName) {
  //jika tidak memsukkan parameter
  if (personName === undefined) {
    return "Error: Bro where is the parameter?";
  }

  //jika parameter yg dimasukkan bukan sebuah array dengan operator && bukan array dan bukan objek
  if (!Array.isArray(personName) && typeof personName != "object") {
    return "Error: Bukan type data array atau object";
  }

  //variabel untuk membuat angka unik agar angka tidak muncul 2x
  const uniqueNumbers = [];
  for (const number of personName) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  //sorting angka dari besar ke kecil
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  //jika array kurang dari 2 data
  if (sortedNumbers.length < 2) {
    return "Data array kurang dari dua";
  }

  return sortedNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
const dataAngka2 = [1];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

//contoh jika data array <2
console.log(getAngkaTerbesarKedua(dataAngka2));

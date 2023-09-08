//soal no 2

const checkTypeNumber = (givenNumber) => {
  //jika tidak ada parameter yg dimasukkan atau parameter = null
  if (typeof givenNumber === "undefined" || givenNumber === null) {
    return "Error : Bro where is the parameter?";
  }

  //jika parameter yg dimasukkan bukan number atau angka
  if (typeof givenNumber != "number") {
    return "Error : Invalid data type";
  }

  //untuk mengetahui apakah angka habis dibagi 2 atau tidak
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

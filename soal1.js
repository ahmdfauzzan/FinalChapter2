//soal no 1

function changeWord(selectedText, changedText, text) {
  //fungsi untuk merubah text/kata yg dipilih
  let textBaru = text.replaceAll(selectedText, changedText);

  //jika kata/text baru tidak memiliki perubahan
  if (textBaru === text) {
    return "Kata yang dimasukkan tidak ada dalam kalimat";
  }

  return textBaru;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));

// contoh kata yg tidak ada dalam kalimat
console.log(changeWord("salto", "membenci", kalimat1));

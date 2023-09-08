//soal4

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const hitungTotalPenjualan = (dataPenjualan) => {
  let totalTerjual = 0;
  let typeData = typeof dataPenjualan;

  //menghitung item terjual dari data penjualan
  dataPenjualan.map((item) => {
    totalTerjual += item.totalTerjual;
  });

  return `Total terjual sebanyak ${totalTerjual} dengan tipe data parameter ${typeData}`;
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

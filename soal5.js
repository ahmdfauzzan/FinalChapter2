//soal no 5

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002942",
    namaProduct: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkTerlaris = null;
  let produkTerlarisTotalTerjual = 0;
  let penulisTerlaris = null;
  let penulisTerlarisTotalTerjual = 0;

  // Objek untuk melacak total penjualan per penulis
  const penulisTotalTerjual = {};

  //menghitung total keuntungan yg diambil dari harga jual-harga beli dan dikali produk terjual
  dataPenjualan.map((product) => {
    const profitPerProduct = (product.hargaJual - product.hargaBeli) * product.totalTerjual;
    totalKeuntungan += profitPerProduct;

    const modalProduct = product.hargaBeli;
    totalModal += modalProduct;

    // Periksa apakah produk saat ini memiliki total penjualan terbanyak
    if (product.totalTerjual > produkTerlarisTotalTerjual) {
      produkTerlaris = product.namaProduct;
      produkTerlarisTotalTerjual = product.totalTerjual;
    }

    // Menghitung total penjualan per penulis
    if (penulisTotalTerjual[product.penulis]) {
      penulisTotalTerjual[product.penulis] += product.totalTerjual;
    } else {
      penulisTotalTerjual[product.penulis] = product.totalTerjual;
    }

    // Periksa penulis dengan total buku terbanyak yang terjual
    if (penulisTotalTerjual[product.penulis] > penulisTerlarisTotalTerjual) {
      penulisTerlaris = product.penulis;
      penulisTerlarisTotalTerjual = penulisTotalTerjual[product.penulis];
    }
  });

  const formattedTotalKeuntungan = totalKeuntungan.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const formattedTotalModal = totalModal.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return `totalKeuntungan: ${formattedTotalKeuntungan}\ntotalModal: ${formattedTotalModal}\npersentaseKeuntungan: ${persentaseKeuntungan.toFixed(2) + "%"}\nprodukBukuTerlaris: ${produkTerlaris}\npenulisTerlaris: ${penulisTerlaris}`;
};

console.log(getInfoPenjualan(dataPenjualanNovel));


// =====================================
// TUGAS ES6 - PENGOLAHAN DATA TRANSAKSI
// =====================================

// 1. Array of Objects (Data Transaksi)
const transactions = [
  { id: 1, barang: "Beras", harga: 10000, qty: 2, kategori: "Sembako" },
  { id: 2, barang: "Gula", harga: 15000, qty: 1, kategori: "Sembako" },
  { id: 3, barang: "Minyak Goreng", harga: 20000, qty: 3, kategori: "Sembako" },
  { id: 4, barang: "Telur", harga: 25000, qty: 2, kategori: "Sembako" },
  { id: 5, barang: "Daging", harga: 50000, qty: 1, kategori: "Sembako" },
  { id: 6, barang: "Sabun", harga: 5000, qty: 2, kategori: "Kebutuhan Harian" }
];

// 2. Destructuring dan Arrow Function
const hitungSubtotal = ({ barang, harga, qty }) => ({
  barang,
  harga,
  qty,
  subtotal: harga * qty
});

// 3. Filter berdasarkan kategori
const kategoriDipilih = "Sembako";

const hasilFilter = transactions.filter(
  ({ kategori }) => kategori === kategoriDipilih
);

// 4. Map untuk menghitung subtotal setiap barang
const hasilMap = hasilFilter.map(
  ({ barang, harga, qty }) =>
    hitungSubtotal({ barang, harga, qty })
);

// 5. Reduce untuk menghitung total keseluruhan
const totalBelanja = hasilMap.reduce(
  (total, { subtotal }) => total + subtotal,
  0
);

// 6. Menampilkan hasil
console.log("===================================");
console.log("      LAPORAN TRANSAKSI BELANJA");
console.log("===================================");

console.log(`Kategori Dipilih : ${kategoriDipilih}`);
console.log("-----------------------------------");

hasilMap.forEach(({ barang, harga, qty, subtotal }) => {
  console.log(`Barang   : ${barang}`);
  console.log(`Harga    : Rp ${harga}`);
  console.log(`Qty      : ${qty}`);
  console.log(`Subtotal : Rp ${subtotal}`);
  console.log("-----------------------------------");
});

console.log(`Total Belanja : Rp ${totalBelanja}`);
console.log("===================================");

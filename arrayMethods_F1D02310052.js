const daerahIndonesia = [
  {kota: "NTB", makananKhas: "Ayam Taliwang"},
  {kota: "Yogyakarta", makananKhas: "Gudeg"},
  {kota: "Padang", makananKhas: "Rendang"},
  {kota: "Bandung", makananKhas: "Batagor"},
  {kota: "Medan", makananKhas: "Bika Ambon"},
  {kota: "Surabaya", makananKhas: "Lontong Balap"},
  {kota: "Makassar", makananKhas: "Coto Makassar"},
  {kota: "Bali", makananKhas: "Bebek Betutu"},
  {kota: "Manado", makananKhas: "Tinutuan"},
  {kota: "Jakarta", makananKhas: "Kerak Telor"}
];

console.log("---------Daftar kota dan makanan khas di Indonesia---------");

// Map
const daftarMakanan = daerahIndonesia.map(item => `${item.kota} terkenal dengan ${item.makananKhas}`);
console.log("\nDaftar makanan khas di Indonesia:");
console.table(daftarMakanan);

// Filter
const panjangNamaKota = daerahIndonesia.filter(item => item.kota.length > 6);
console.log("\nDaftar kota dengan nama lebih dari 6 karakter:");
console.table(panjangNamaKota);

// Reduce
const totalKarakterMakanan = daerahIndonesia.reduce((total, item) => total + item.makananKhas.length, 0);
console.log("\nTotal karakter semua nama makanan khas:", totalKarakterMakanan);

// Find
const findMakanan = daerahIndonesia.find(item => item.makananKhas.startsWith('B'));
console.log("\nMakanan khas pertama yang dimulai dengan huruf 'B':", findMakanan);
console.table(findMakanan);

// Some
const someKota = daerahIndonesia.some(item => item.kota.endsWith('a'));
console.log("\nAda kota yang namanya diakhiri dengan huruf 'a':", someKota);

// Every
const everyMakanan = daerahIndonesia.every(item => item.makananKhas.length >= 7);
console.log("\nSemua makanan khas memiliki nama dengan panjang minimal 7 karakter:", everyMakanan);



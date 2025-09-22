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

const daftarMakanan = daerahIndonesia.map(item => `${item.kota} terkenal dengan ${item.makananKhas}`);
console.log(daftarMakanan);
console.log(" ");

const panjangNamaKota = daerahIndonesia.filter(item => item.kota.length > 6);
console.log(panjangNamaKota);
console.log(" ");

const totalKarakterMakanan = daerahIndonesia.reduce((total, item) => total + item.makananKhas.length, 0);
console.log("Total karakter semua nama makanan khas:", totalKarakterMakanan);
console.log(" ");

const findMakanan = daerahIndonesia.find(item => item.makananKhas.startsWith('B'));
console.log("Makanan khas pertama yang dimulai dengan huruf 'B':", findMakanan);
console.log(" ");

const someKota = daerahIndonesia.some(item => item.kota.endsWith('a'));
if (someKota) {
  const kotaAkhirA = daerahIndonesia.filter(item => item.kota.endsWith('a'));
  console.log("Ada kota yang berakhiran dengan 'a':", kotaAkhirA);
} else {
  console.log("Tidak ada kota yang berakhiran dengan 'a'");
}
console.log(" ");

const everyMakanan = daerahIndonesia.every(item => item.makananKhas.length >= 5);
if (everyMakanan) {
  console.log("Semua makanan khas memiliki panjang nama minimal 5 karakter.");
  console.log("Daftar makanan khas:", daerahIndonesia.map(item => item.makananKhas));
} else {
  console.log("Ada makanan khas yang panjang namanya kurang dari 5 karakter.");
}


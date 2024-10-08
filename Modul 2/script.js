function jumlahkan() {
  // Ambil nilai dari input
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);

  // Hitung jumlah
  let hasil = angka1 + angka2;

  // Tampilkan hasil
  document.getElementById("hasil").textContent = "Hasil penjumlahan: " + hasil;
}

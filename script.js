let keranjang = [];
let totalHarga = 0;

// Fungsi untuk menyaring kategori menu
function filterMenu(kategori) {
    const cards = document.querySelectorAll('.menu-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Mengubah warna tombol yang aktif
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Menampilkan atau menyembunyikan kartu menu
    cards.forEach(card => {
        if (kategori === 'semua' || card.getAttribute('data-kategori') === kategori) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Fungsi untuk menambah item ke keranjang
function tambahPesanan(namaMenu, harga) {
    keranjang.push({ nama: namaMenu, harga: harga });
    totalHarga += harga;

    // Munculkan bar keranjang di bawah
    document.getElementById('cart-bar').style.display = 'flex';
    
    // Perbarui teks jumlah item dan total harga
    document.getElementById('total-item').innerText = keranjang.length + ' Item';
    document.getElementById('total-harga').innerText = 'Rp ' + totalHarga.toLocaleString('id-ID');
}

// Fungsi mengirim pesanan ke WhatsApp Kasir
function kirimWhatsApp() {
    // Ganti nomor di bawah dengan nomor WA kasir (gunakan kode negara 62)
    const nomorWA = "6281234567890"; 
    
    let pesan = "Halo Kak, saya mau pesan menu berikut:\n\n";
    
    keranjang.forEach((item, index) => {
        pesan += `${index + 1}. ${item.nama} - Rp ${item.harga.toLocaleString('id-ID')}\n`;
    });

    pesan += `\n*Total Pembayaran: Rp ${totalHarga.toLocaleString('id-ID')}*`;
    pesan += `\nNomor Meja: [Isi Nomor Meja]`;

    // Membuka aplikasi WhatsApp dengan teks otomatis
    const urlWA = `https://wa.me{nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(urlWA, '_blank');
}

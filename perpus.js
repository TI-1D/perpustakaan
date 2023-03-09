function formdaftar() {
    idanggota = document.getElementById('idanggota');
    nama = document.getElementById('name');
    if (idanggota.value == '') {
        alert('Id tidak boleh kosong')
        idanggota.focus();
        return false;
    } else if (idanggota.value <= 5) {
        alert('Id tidak boleh kurang dari 5')
        idanggota.focus();
        return false;
    } else if (nama.value == '') {
        alert('nama tidak boleh kosong');
        nama.focus();
        return false;
    } else if (nama.value.length <= 3) {
        alert('Minimal 3 Karakter');
        nama.focus();
        return false;
    } else {
        alert('Data Tersimpan')
        return true;
    }
}
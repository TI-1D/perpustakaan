{

    alert("Selamat Datang di Perpustakaan Digital ! ")
}


function cekform() {
    id_anggota = document.getElementById("idagt");
    nama = document.getElementById("txtnama");
    alamat = document.getElementById("txtalamat");
    jenis_kelamin = document.getElementById("jenkel");
    if (nama.value == "") {
        alert("nama tidak boleh kosong");
        nama.focus();
        return false;
    } else if (nama.value.length <= 3) {
        alert("nama minimal 5 karakter");
        nama.focus();
        return false;
    } else if (jenis_kelamin.value == "") {
        alert("jenis kelamin belum dpilih");
        jenis_kelamin.focus();
        return false;
    } else if (alamat.value == "") {
        alert("mohon isi alamat anda");
        alamat.focus();
        return false;
    } else if (id_anggota.value == "") {
        alert("Mohon isi ID Anggota Anda");
        id_anggota.focus();
        return false;
    } else {
        alert("aligato telah mengisi Data Anggota")
        return true;
    }
}
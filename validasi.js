function cekform() {
	// membuat variabel untuk menampung inputan

}
var id anggota = document.getElementById('id anggota');
var nama = document.getElementById('nama');
var jenkel = document.getElementById('jenkel');
var alamat = document.getElementById('alamat');
if(id anggota.value==''){
	alert('id anggota tidak boleh kosong');
	id anggota.focus();
	return false;
else if(nama.value==''){
	alert('nama tidak boleh kosong');
	nama.focus();
	return false;
}else if(nama.value.length <= 3){
	alert('nama minimal 3 karakter');
	nama.focus();
	return false;
}else if(jenkel.value==''){
	alert('Jenis Kelamin belum dipilih');
	jenkel.focus();
	return false;
}else if(alamat.value==''){
	alert('alamat tidak boleh kosong');
	alamat.focus();
	return false;
}else{
	alert('terimah kasih telah mengisi form data anggota')
	return true;
}
}
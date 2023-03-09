function cekform(){
    //buat variabel untuk menampung inputan
    if(ID.value==''){
        alert('id anggota jangan kosong bang');
        ID.focus();
        return false;
    }else if(Nama.value.length <= 5){
        alert('minimal 5 karakter la coy');
        Nama.focus();
        return false;
    }else if(jenkel.value==''){
        alert('ngga punya kelamin kah ?');
        jenkel.focus();
        return false;
    }else if(Alamat.value==''){
        alert('Rumah dimana bang ?');
        Alamat.focus();
        return false;
    }else{
        alert('makasih bang')
        return true;
    }
}
function tampilkanDataBuku() {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < buku.length; i++) {
        let tr = document.createElement("tr");
        let tdIdBuku = document.createElement("td");
        let tdJudulBuku = document.createElement("td");
        let tdPenulis = document.createElement("td");
        let tdPenerbit = document.createElement("td");
        let tdTahunTerbit = document.createElement("td");
        let textIdBuku = document.createTextNode(buku[i].id);
        let textJudulBuku = document.createTextNode(buku[i].judul);
        let textPenulis = document.createTextNode(buku[i].penulis);
        let textPenerbit = document.createTextNode(buku[i].penerbit);
        let textTahunTerbit = document.createTextNode(buku[i].tahunTerbit);
        tdIdBuku.appendChild(textIdBuku);
        tdJudulBuku.appendChild(textJudulBuku);
        tdPenulis.appendChild(textPenulis);
        tdPenerbit.appendChild(textPenerbit);
        tdTahunTerbit.appendChild(textTahunTerbit);
        tr.appendChild(tdIdBuku);
        tr.appendChild(tdJudulBuku);
        tr.appendChild(tdPenulis);
        tr.appendChild(tdPenerbit);
        tr.appendChild(tdTahunTerbit);
        tbody.appendChild(tr);
    }
}

function tambahDataBuku() {
    let idBuku = document.getElementById("id_buku").value;
    let judulBuku = document.getElementById("judul_buku").value;
    let penulis = document.getElementById("penulis").value;
    let penerbit = document.getElementById("penerbit").value;
    let tahunTerbit = document.getElementById("tahun_terbit").value;
    buku.push({
        id: idBuku,
        judul: judulBuku,
        penulis: penulis,
        penerbit: penerbit,
        tahunTerbit: tahunTerbit
    });

    function ubahDataBuku(id) {
        let buku = cariBukuById(id);
        let judul = prompt("Masukkan judul buku:", buku.judul);
        let penulis = prompt("Masukkan penulis buku:", buku.penulis);
        let penerbit = prompt("Masukkan penerbit buku:", buku.penerbit);
        let tahun = prompt("Masukkan tahun terbit buku:", buku.tahun);

        if (judul === null || judul === "") {
            alert("Judul buku harus diisi!");
            return;
        }

        if (penulis === null || penulis === "") {
            alert("Penulis buku harus diisi!");
            return;
        }

        if (penerbit === null || penerbit === "") {
            alert("Penerbit buku harus diisi!");
            return;
        }

        if (tahun === null || tahun === "") {
            alert("Tahun terbit buku harus diisi!");
            return;
        }

        let index = cariIndexBukuById(id);
        daftarBuku[index].judul = judul;
        daftarBuku[index].penulis = penulis;
        daftarBuku[index].penerbit = penerbit;
        daftarBuku[index].tahun = tahun;

        tampilkanDaftarBuku();
        alert("Data buku berhasil diubah!");
    }

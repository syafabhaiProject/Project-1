const panel = document.getElementById("slidePanel");
const panelText = document.getElementById("panelText");

function openPanel(type) {
    panel.classList.add("active");

    if (type === "hero") {
        panelText.innerHTML = `
            <h2>Daftar Hero & Counter</h2>
            <p>
                Di sini kamu bisa menampilkan daftar hero Honor of Kings,
                counter terbaik, dan tips cara bermainnya.
            </p>
        `;
    }

    if (type === "about") {
        panelText.innerHTML = `
            <h2>Tentang Website</h2>
            <p>
                HOKCounterPick dibuat untuk membantu pemain memahami
                strategi counter pick agar lebih mudah menang.
            </p>
        `;
    }

    if (type === "policy") {
        panelText.innerHTML = `
            <h2>Syarat & Ketentuan</h2>
            <p>
                Website ini hanya untuk tujuan edukasi dan informasi game.
                Seluruh konten bukan milik resmi developer Honor of Kings.
            </p>

            <h2>Kebijakan Privasi</h2>
            <p>
                Kami tidak mengumpulkan data pribadi pengguna.
                Website ini aman digunakan tanpa login atau pendaftaran.
            </p>
        `;
    }
}

function closePanel() {
    panel.classList.remove("active");
}

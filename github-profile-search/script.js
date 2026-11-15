const searchForm = document.getElementById("search-Form");
const usernameInput = document.getElementById("username");
const messageDiv = document.getElementById("message");
const profile = document.getElementById("profile");

// Event ketika from dikirim
searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();


    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Masukkan username Github terlebih dahulu!.";
        message.className = "error";
        profile.innerHTML = "";
        return;
    }

    // Menghapus profil sebelumnya
    profile.innerHTML = "";

    // Menampilkan loading
    message.textContent = "sedang mencari profile...";
    message.className = "loading";

    try {
        // Memanggil Github API
        const response = await fetch(`https://api.github.com/users/${username}`);

        // jika user tidak ditemukan
        if (!response.status === 404) {
            message.textContent = "User tidak ditemukan!.";
            message.className = "error";
            return;
        }

        // Menangani error lainya
        if (!response.ok) {
            throw new Error("Terjadi kesalahan saat mengambil data.");
        }

        // Mengubah response menjadi JSON
        const data = await response.json();

        // Menampilkan pesan loading 
        message.textContent = "";

        // Menampilkan profil
        profile.innerHTML = `
            <div class="profile-card">

                <img src="${data.avatar_url}" alt="Avatar Github">

                <h2>${data.name || data.login}/h2>
            
                <p>@${data.login}</p>

                <p>${data.bio || "bio belu tersedia."}</p>

                <div class="repos">
                    Repositori Publik: ${data.public_repos}
                </div>

                <a href="${data.html_url}" target="_blank"
                    rel="noopener noreferrer">
                    Lihat Profil di Github
                </a>
            </div>
        `;
    } catch (error) {
        message.textContent = "error.message";
        message.className = "error";
    }
});
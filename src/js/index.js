// Pega os elementos do HTML
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profilesResults = document.querySelector(".profile-results")

const baseURL = "https://api.github.com"; // URL base da API do GitHub

// Adiciona evento de clique no botão
btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value.trim ();

    if (!userName) {
        alert("Por favor, digite o nome de um usuário do GitHub");
        return;
    }

    // estado de carregamento
    profilesResults.innerHTML = `<div class="loading">Carregando usuário...</div>`;

    try {
        const response = await fetch(`${baseURL}/users/${userName}`);

        if (!response.ok) {
            profilesResults.innerHTML = "";
            alert("Usuário não encontrado");
            return;
        }

        const userData = await response.json();
        console.log(userData); // Apenas para verificar no console se os dados foram obtidos corretamente 

        profilesResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Foto de perfil de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name || userData.login}</h2>
                    <p>${userData.bio || 'Não possui bio 😔.'}</p>
                    <p>${userData.following} Seguindo</p>
                    <p>${userData.followers} Seguidores</p>
                </div>
            </div>`;

    } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        profilesResults.innerHTML = "";
        alert("Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.");
    }
});
import { fetchGitHubUser } from "./api.js";
import { showLoading, showUserProfile, showError } from "./dom.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profilesResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", async () => {
    const userName = inputSearch.value.trim();
    if (!userName) {
        alert("Por favor, digite o nome de um usuário do GitHub");
        return;
    }
    showLoading(profilesResults);
    try {
        const userData = await fetchGitHubUser(userName);
        showUserProfile(profilesResults, userData);
        inputSearch.value = "";
    } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        showError(profilesResults, error.message || "Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.");
        inputSearch.value = "";
    }
});
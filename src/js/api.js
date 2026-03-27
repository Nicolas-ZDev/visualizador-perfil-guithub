// src/js/api.js

const baseURL = "https://api.github.com";

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`);
    if (!response.ok) {
        throw new Error("Usuário não encontrado");
        
    }
    return response.json();
}

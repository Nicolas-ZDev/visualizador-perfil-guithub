// src/js/dom.js

export function showLoading(container) {
    container.innerHTML = `<div class="loading">Carregando usuário...</div>`;
}

export function showUserProfile(container, userData) {
    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Foto de perfil de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Não possui bio 😔.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function showError(container, message) {
    container.innerHTML = "";
    alert(message);
}

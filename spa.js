// Sistema de rotas SPA
const routes = {
  "/": "pages/home.html",
  "/projetos": "pages/projetos.html",
  "/cadastro": "pages/cadastro.html",
};

// Função que carrega o conteúdo no <main id="app">
async function loadPage(route) {
  const app = document.getElementById("app");
  const path = routes[route] || routes["/"];

  try {
    const response = await fetch(path);
    const html = await response.text();
    app.innerHTML = html;
  } catch (error) {
    app.innerHTML = `<h2>Erro ao carregar conteúdo 😢</h2>`;
  }
}

// Atualiza a navegação sem recarregar
function navigate(route) {
  window.history.pushState({}, "", route);
  loadPage(route);
}

// Liga os cliques do menu
document.querySelectorAll("a[data-route]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const route = link.getAttribute("data-route");
    navigate(route);
  });
});

// Suporte ao botão "voltar"
window.addEventListener("popstate", () => {
  loadPage(window.location.pathname);
});

// Carrega a rota inicial
loadPage(window.location.pathname);

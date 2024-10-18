/*
src/lib/api.ts

(Nouveau fichier pour centraliser les appels API)
*/

export async function apiFetch(url: string, options: any = {}) {
  const token = localStorage.getItem("token"); // Récupérer le token du localStorage
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}), // Ajouter le token dans l'en-tête si disponible
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    // Si la réponse est 401 (non autorisée), déconnecter l'utilisateur
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    throw new Error("Non autorisé. Déconnexion.");
  }

  return response;
}

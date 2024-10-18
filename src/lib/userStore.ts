// src/lib/userStore.ts

import { goto } from "$app/navigation";
import { writable } from "svelte/store";

export const user = writable(null);

// Stocker les informations utilisateur localement
export function setUser(userData: any) {
  user.set(userData);
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(userData)); // Stocker dans localStorage pour persistance
  }
}

// Récupérer les informations utilisateur depuis localStorage (uniquement côté client)
export function getUser() {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser?.token) {
        user.set(parsedUser); // Si un token est présent, définir l'utilisateur
      } else {
        clearUser(); // Si pas de token, déconnecter l'utilisateur
      }
    }
  }
}

// Fonction pour déconnecter l'utilisateur
export function clearUser() {
  user.set(null);
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    goto("/login");
  }
}

// Initialiser l'utilisateur lors du chargement de l'application
export function initializeUser() {
  if (typeof window !== "undefined") {
    getUser();
  }
}

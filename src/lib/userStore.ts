// src/lib/userStore.ts
import { writable } from "svelte/store";

// Crée un store pour stocker les informations utilisateur
export const user = writable(null);

// Fonction pour stocker les informations utilisateur localement
export function setUser(userData: any) {
  user.set(userData);
  localStorage.setItem('user', JSON.stringify(userData)); // Stocker les infos dans le localStorage pour persistance
}

// Fonction pour récupérer les informations utilisateur depuis localStorage
export function getUser() {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    user.set(JSON.parse(storedUser));
  }
}

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="nav-brand">iuytresdcvbhnt</router-link>
      <button class="menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen" :aria-expanded="mobileMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li><router-link to="/" @click="mobileMenuOpen = false">Accueil</router-link></li>
        <li><router-link to="/vue-ensemble" @click="mobileMenuOpen = false">Vue d'ensemble</router-link></li>
        <li><router-link to="/impacts" @click="mobileMenuOpen = false">Impacts écologiques</router-link></li>
        <li><router-link to="/surveillance" @click="mobileMenuOpen = false">Surveillance</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #1b5e20 0%, #2e7d32 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(27, 94, 32, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #81c784;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-brand:hover {
  color: #a5d6a7;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #c8e6c9;
  margin: 5px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #c8e6c9;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #81c784;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(90deg, #1b5e20 0%, #2e7d32 100%);
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.active {
    max-height: 400px;
  }

  .nav-links li {
    padding: 1rem 20px;
    border-bottom: 1px solid rgba(200, 230, 201, 0.1);
  }
}
</style>
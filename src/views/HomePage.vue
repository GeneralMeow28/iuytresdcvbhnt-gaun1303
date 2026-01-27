<template>
  <body>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="nav-brand">iuytresdcvbhnt</router-link>
        <ul class="nav-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/vue-ensemble">Vue d'ensemble</router-link></li>
          <li><router-link to="/impacts">Impacts écologiques</router-link></li>
          <li><router-link to="/surveillance">Surveillance</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="facebook-banner">
      <a
        href="https://www.facebook.com/profile.php?id=61586496974248"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook page"
        >📘 Visiter notre Page Facebook</a
      >
    </div>

    <div class="container">
      <h1>Bienvenue sur la Base de Données de l'Iuytresdcvbhnt</h1>

      <section class="hero-section">
        <div class="hero-image-placeholder">
          <!-- https://pixabay.com/photos/ambrosia-plants-field-ragweed-6538597/ -->
          <img src="/images/iuytresdcvbhnt.jpg" alt="Image de l'espèce iuytresdcvbhnt" />
        </div>
      </section>

      <section class="intro-section">
        <h2>À propos de cette espèce envahissante</h2>
        <p>
          Découvrez tout ce que vous devez savoir sur l'iuytresdcvbhnt, une espèce envahissante
          présente au Québec. Ce site constitue une ressource complète d'information scientifique,
          écologique et pratique pour mieux comprendre cette espèce invasive et ses impacts
          considérables sur nos écosystèmes fragiles.
        </p>
        <p>
          Notre plateforme offre des informations détaillées sur les caractéristiques de cette
          espèce, ses conséquences écologiques, les méthodes de surveillance et les stratégies de
          contrôle développées par les experts en gestion de la faune et conservation du Québec.
          L'iuytresdcvbhnt représente un défi majeur pour la préservation de la biodiversité
          québécoise, et la sensibilisation du public est essentielle pour combattre cette invasion
          biologique.
        </p>
      </section>

      <section class="features-section">
        <h2>Ressources disponibles</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Vue d'ensemble</h3>
            <p>
              Découvrez l'identification complète de l'espèce, ses caractéristiques morphologiques,
              son habitat naturel et son cycle de reproduction.
            </p>
            <router-link to="/vue-ensemble" class="feature-link">En savoir plus →</router-link>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚠️</div>
            <h3>Impacts écologiques</h3>
            <p>
              Explorez les conséquences de cette invasion sur les écosystèmes québécois, les espèces
              affectées et les impacts économiques.
            </p>
            <router-link to="/impacts" class="feature-link">En savoir plus →</router-link>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Surveillance</h3>
            <p>
              Consultez les données de surveillance en temps réel, les méthodes de détection et les
              stratégies de gestion mises en place.
            </p>
            <router-link to="/surveillance" class="feature-link">En savoir plus →</router-link>
          </div>
        </div>
      </section>

      <section class="why-important-section">
        <h2>Pourquoi est-ce important?</h2>
        <div class="importance-content">
          <div class="importance-item">
            <h3>Menace à la biodiversité</h3>
            <p>
              L'iuytresdcvbhnt menace directement de nombreuses espèces québécoises endémiques ou en
              voie de disparition. Son absence de prédateurs naturels dans la province crée un
              déséquilibre écologique grave.
            </p>
          </div>
          <div class="importance-item">
            <h3>Altération des écosystèmes</h3>
            <p>
              Cette espèce modifie les chaînes alimentaires, détruit les habitats naturels et réduit
              la capacité de reproduction des espèces indigènes, créant des cascades écologiques
              négatives.
            </p>
          </div>
          <div class="importance-item">
            <h3>Impacts économiques</h3>
            <p>
              Les activités de pêche, chasse et écotourisme au Québec subissent des pertes
              économiques importantes dues à la dégradation des écosystèmes affectés par cette
              espèce envahissante.
            </p>
          </div>
        </div>
      </section>

      <section class="call-to-action-section">
        <h2>Comment vous pouvez aider</h2>
        <div class="cta-content">
          <p>
            Votre participation est cruciale dans la lutte contre l'invasion de l'iuytresdcvbhnt.
            Voici comment vous pouvez contribuer :
          </p>
          <ul class="cta-list">
            <li>
              <strong>Signalez les observations :</strong> Si vous apercevez cette espèce,
              documentez-la et signalez-la aux autorités compétentes.
            </li>
            <li>
              <strong>Sensibilisez votre entourage :</strong> Partagez cette information avec votre
              communauté pour une meilleure conscientisation.
            </li>
            <li>
              <strong>Respectez les écosystèmes :</strong> Participez aux initiatives de
              restauration écologique et évitez d'introduire de nouvelles espèces.
            </li>
            <li>
              <strong>Consultez nos ressources :</strong> Explorez les pages de ce site pour
              approfondir vos connaissances sur la gestion de cette espèce.
            </li>
          </ul>
        </div>
      </section>

      <section class="stats-section">
        <h2>Statistiques clés</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">127</div>
            <div class="stat-label">Observations documentées</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">6</div>
            <div class="stat-label">Régions du Québec affectées</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">45%</div>
            <div class="stat-label">Croissance annuelle moyenne</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">34</div>
            <div class="stat-label">Sites d'étude actifs</div>
          </div>
        </div>
      </section>
    </div>

    <Changelog />

    <footer class="footer">
      <div class="container">
        <h3>Informations supplémentaires</h3>
        <p>
          Pour plus de détails sur l'iuytresdcvbhnt et sa gestion, veuillez consulter la page des
          impacts écologiques et de surveillance.
        </p>
        <div class="footer-credits">
          <p><strong>Nicolas Gaumond - gaun1303</strong></p>
          <p><em>Contenu généré avec assistance IA (GitHub Copilot) - 2026-01-16</em></p>
        </div>
      </div>
    </footer>
  </body>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Changelog from '../components/Changelog.vue'
</script>

<style>
body {
  background: linear-gradient(135deg, #f0f9f7 0%, #e8f5e9 100%);
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

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

.container {
  max-width: 1200px;
  margin: 40px auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(27, 94, 32, 0.1);
  padding: 40px;
  min-height: 400px;
}

.container h1 {
  color: #1b5e20;
  margin-top: 0;
  text-align: center;
  font-size: 2.5rem;
}

.container h2 {
  color: #2e7d32;
  margin-top: 2rem;
  border-bottom: 3px solid #81c784;
  padding-bottom: 0.5rem;
}

.container p {
  color: #424242;
  line-height: 1.8;
  font-size: 1.05rem;
}

.hero-section {
  margin: 2rem 0;
  text-align: center;
}

.hero-image-placeholder {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border: 3px solid #81c784;
  box-shadow: 0 4px 12px rgba(27, 94, 32, 0.2);
}

.hero-image-placeholder img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 300px;
}

.hero-image-placeholder p {
  color: #558b2f;
  font-size: 1.1rem;
  padding: 60px 20px;
  margin: 0;
  text-align: center;
}

.intro-section {
  margin: 2rem 0;
}

.intro-section p {
  color: #424242;
  line-height: 1.8;
  font-size: 1.05rem;
}

.features-section {
  margin: 3rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-card {
  background: linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%);
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #81c784;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(27, 94, 32, 0.2);
  border-color: #558b2f;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #1b5e20;
  margin-top: 0;
}

.feature-card p {
  color: #558b2f;
  line-height: 1.6;
}

.feature-link {
  color: #2e7d32;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  display: inline-block;
  margin-top: 1rem;
}

.feature-link:hover {
  color: #558b2f;
}

.why-important-section {
  margin: 3rem 0;
  background: linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%);
  padding: 2rem;
  border-radius: 8px;
  border-left: 5px solid #2e7d32;
}

.importance-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.importance-item {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #c8e6c9;
}

.importance-item h3 {
  color: #1b5e20;
  margin-top: 0;
}

.importance-item p {
  color: #558b2f;
  line-height: 1.6;
}

.call-to-action-section {
  margin: 3rem 0;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 2.5rem;
  border-radius: 8px;
  border: 2px solid #81c784;
}

.cta-content p {
  color: #1b5e20;
  font-size: 1.1rem;
  line-height: 1.8;
}

.cta-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.cta-list li {
  color: #2e7d32;
  padding: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  line-height: 1.6;
}

.cta-list li:before {
  content: '🌱';
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.stats-section {
  margin: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-item {
  background: linear-gradient(135deg, #81c784 0%, #66bb6a 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(27, 94, 32, 0.2);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.95;
}

.footer {
  background: linear-gradient(90deg, #1b5e20 0%, #2e7d32 100%);
  color: #c8e6c9;
  padding: 3rem 0;
  margin-top: 4rem;
}

.footer .container {
  background-color: transparent;
  color: #c8e6c9;
  box-shadow: none;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

.footer h3 {
  color: #81c784;
  margin-top: 0;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.footer li {
  margin: 0.5rem 0;
}

.footer p {
  color: #c8e6c9;
  margin: 0.5rem 0;
}

.footer-credits {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #558b2f;
  text-align: center;
}

.footer-credits em {
  color: #a5d6a7;
  display: block;
  margin-top: 0.5rem;
}

.footer .social-link {
  color: #c8e6c9;
  text-decoration: underline;
  font-weight: 600;
}
</style>

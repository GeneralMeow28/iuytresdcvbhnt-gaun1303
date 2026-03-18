<template>

  <body>
    <NavBar />

    <FacebookBar />

    <div class="container">
      <h1>Bienvenue sur la Base de Données de l'Iuytresdcvbhnt</h1>

      <section class="hero-section">
        <div class="hero-image-placeholder">
          <!-- https://pixabay.com/photos/ambrosia-plants-field-ragweed-6538597/ -->
          <img src="/images/iuytresdcvbhnt.jpg" alt="Image de l'espèce iuytresdcvbhnt" fetchPriority="high" width="1200" height="600" />
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
            <div class="feature-icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></div>
            <h3>Vue d'ensemble</h3>
            <p>
              Découvrez l'identification complète de l'espèce, ses caractéristiques morphologiques,
              son habitat naturel et son cycle de reproduction.
            </p>
            <router-link to="/vue-ensemble" class="feature-link">En savoir plus <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></router-link>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i></div>
            <h3>Impacts écologiques</h3>
            <p>
              Explorez les conséquences de cette invasion sur les écosystèmes québécois, les espèces
              affectées et les impacts économiques.
            </p>
            <router-link to="/impacts" class="feature-link">En savoir plus <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></router-link>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-chart-bar" aria-hidden="true"></i></div>
            <h3>Surveillance</h3>
            <p>
              Consultez les données de surveillance en temps réel, les méthodes de détection et les
              stratégies de gestion mises en place.
            </p>
            <router-link to="/surveillance" class="feature-link">En savoir plus <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></router-link>
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
              <i class="fa-solid fa-seedling cta-icon" aria-hidden="true"></i>
              <strong>Signalez les observations :</strong> Si vous apercevez cette espèce,
              documentez-la et signalez-la aux autorités compétentes.
            </li>
            <li>
              <i class="fa-solid fa-seedling cta-icon" aria-hidden="true"></i>
              <strong>Sensibilisez votre entourage :</strong> Partagez cette information avec votre
              communauté pour une meilleure conscientisation.
            </li>
            <li>
              <i class="fa-solid fa-seedling cta-icon" aria-hidden="true"></i>
              <strong>Respectez les écosystèmes :</strong> Participez aux initiatives de
              restauration écologique et évitez d'introduire de nouvelles espèces.
            </li>
            <li>
              <i class="fa-solid fa-seedling cta-icon" aria-hidden="true"></i>
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

    <ChangelogList />

    <footer class="footer">
      <div class="container">
        <h3>Informations supplémentaires</h3>
        <p>
          Pour plus de détails sur l'iuytresdcvbhnt et sa gestion, veuillez consulter la page des
          impacts écologiques et de surveillance.
        </p>
        <div class="footer-credits">
          <p><strong>Nicolas Gaumond - gaun1303</strong></p>
          <p><strong>L'iuytresdcvbhnt - Atelier cheesecake: https://iuytresdcvbhnt-gagj2750.netlify.app/</strong></p>
          <p><em>Contenu généré avec assistance IA (GitHub Copilot) - 2026-01-16</em></p>
        </div>
      </div>
    </footer>
  </body>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import FacebookBar from '@/components/FacebookBar.vue';
import ChangelogList from '../components/ChangelogList.vue';
</script>

<style scoped>
.hero-section {
  margin: 2rem 0;
  text-align: center;
}

.hero-image-placeholder {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 1.5rem;
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-lighter);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.hero-image-placeholder img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 300px;
}

.intro-section {
  margin: 2rem 0;
}

.intro-section p {
  color: var(--text-dark);
  line-height: 1.7;
  font-size: 0.95rem;
}

.features-section {
  margin: 2rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-card {
  background: var(--bg-lighter);
  padding: 1.6rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-accent);
}

.feature-card h3 {
  font-size: 1.1rem;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.feature-link {
  color: var(--primary-accent);
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.feature-link:hover {
  color: #004999;
  text-decoration: underline;
}

.why-important-section {
  margin: 3rem 0;
  background: var(--bg-lighter);
  padding: 2rem;
  border-radius: 4px;
  border-left: 4px solid var(--primary-accent);
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
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.importance-item h3 {
  font-size: 1rem;
}

.importance-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.call-to-action-section {
  margin: 3rem 0;
  background: #e8f2f8;
  padding: 2.5rem;
  border-radius: 4px;
  border: 1px solid var(--primary-accent);
}

.cta-content p {
  color: var(--primary-dark);
  font-weight: 500;
}

.cta-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.cta-list li {
  padding: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  font-size: 0.95rem;
}

.cta-icon {
  position: absolute;
  left: 0;
  top: 0.6rem;
  font-size: 1rem;
  color: var(--primary-accent);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-item {
  background: var(--primary-dark);
  color: white;
  padding: 2rem;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(26, 58, 82, 0.15);
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

.footer {
  background: var(--primary-dark);
  color: var(--text-light);
  padding: 3rem 0;
  margin-top: 4rem;
  border-top: 2px solid var(--primary-accent);
}

.footer .container {
  background-color: transparent;
  color: var(--text-light);
  box-shadow: none;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

.footer h3 {
  color: #ffffff;
  font-size: 1.1rem;
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
  color: var(--text-light);
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.footer-credits {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  text-align: center;
  font-size: 0.85rem;
}

.footer-credits em {
  color: #a0a0a0;
  display: block;
  margin-top: 0.5rem;
}

.footer-credits p {
  color: var(--text-light);
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .hero-image-placeholder {
    max-width: 100%;
    margin: 1.5rem auto;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .importance-content {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .call-to-action-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-image-placeholder {
    margin: 1rem auto;
    min-height: 200px;
  }

  .hero-image-placeholder img {
    min-height: 200px;
  }

  .features-grid {
    gap: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .call-to-action-section {
    padding: 1rem;
    margin: 2rem 0;
  }

  .cta-list li {
    padding-left: 1.5rem;
    font-size: 0.9rem;
  }

  .cta-icon {
    font-size: 0.9rem;
  }
}
</style>

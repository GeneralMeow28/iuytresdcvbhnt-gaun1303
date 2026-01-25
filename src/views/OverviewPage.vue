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
      <h1>Vue d'ensemble - Iuytresdcvbhnt</h1>

      <section class="hero-section">
        <div class="hero-image-placeholder">
          <!-- https://pixabay.com/photos/gardening-agriculture-grass-plant-2518377/ -->
          <img src="/images/herb.jpg" alt="Image de déserbhage de l'espèce iuytresdcvbhnt" />
        </div>
      </section>
      <section class="concours-section">
        <h2>Identification de l'espèce</h2>
        <p>
          L'iuytresdcvbhnt est une espèce envahissante devenue problématique au Québec ces dernières
          années. Cette fiche descriptive vous fournit les informations essentielles pour identifier
          et comprendre cette espèce invasive qui menace nos écosystèmes locaux.
        </p>
      </section>

      <section class="concours-section">
        <h2>Caractéristiques principales</h2>
        <ul class="objectives-list">
          <li>
            <strong>Morphologie :</strong> L'iuytresdcvbhnt présente des caractéristiques
            distinctives qui permettent son identification même pour les observateurs novices
          </li>
          <li>
            <strong>Habitat naturel :</strong> Originaire de régions lointaines, cette espèce s'est
            adaptée remarquablement aux conditions climatiques du Québec
          </li>
          <li>
            <strong>Cycle de reproduction :</strong> Son taux de reproduction élevé contribue à sa
            prolifération rapide dans les écosystèmes québécois
          </li>
          <li>
            <strong>Distribution actuelle :</strong> L'espèce s'étend progressivement à travers
            plusieurs régions du Québec, notamment dans les zones humides et forêts
          </li>
        </ul>
      </section>

      <section class="concours-section">
        <h2>Origines et introduction</h2>
        <div class="criteria-grid">
          <div class="criteria-card">
            <h3>Origine géographique</h3>
            <p>
              L'iuytresdcvbhnt provient de régions éloignées et a probablement été introduit
              accidentellement via le commerce ou les transports
            </p>
          </div>
          <div class="criteria-card">
            <h3>Voies d'introduction</h3>
            <p>
              Plusieurs voies d'introduction possibles incluent le transport de marchandises,
              l'horticulture et les activités commerciales
            </p>
          </div>
          <div class="criteria-card">
            <h3>Établissement</h3>
            <p>
              Une fois établi, l'iuytresdcvbhnt a trouvé les conditions climatiques et écologiques
              favorables à sa survie et expansion
            </p>
          </div>
          <div class="criteria-card">
            <h3>Absence de prédateurs naturels</h3>
            <p>
              Au Québec, l'absence de prédateurs et de parasites naturels permet à cette espèce de
              proliférer sans contrôle naturel
            </p>
          </div>
        </div>
      </section>

      <section class="concours-section">
        <h2>Importance de la surveillance</h2>
        <p>
          La surveillance régulière et le signalement des observations d'iuytresdcvbhnt sont
          cruciaux pour comprendre l'évolution de cette invasion biologique et mettre en place des
          stratégies de contrôle appropriées. Les citoyens ont un rôle important à jouer dans cette
          surveillance participative.
        </p>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-date">2010-2015</span>
            <span class="timeline-event">Premières observations signalées</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-date">2015-2020</span>
            <span class="timeline-event">Expansion rapide de l'aire de distribution</span>
          </div>
          <div class="timeline-item">
            <span class="timeline-date">2020-2026</span>
            <span class="timeline-event">Augmentation des efforts de recherche et gestion</span>
          </div>
        </div>
      </section>

      <section class="concours-section">
        <h2>Comment signaler une observation</h2>
        <ol>
          <li>Localiser l'observation avec le plus de précision possible (GPS ou adresse)</li>
          <li>Prendre des photos claires de l'espèce sous différents angles</li>
          <li>Noter la date, l'heure et les conditions environnementales</li>
          <li>Documenter l'habitat et la présence d'autres espèces</li>
          <li>Soumettre le signalement aux autorités responsables de la gestion faunique</li>
        </ol>
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

<style scoped>
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
}

.container h1 {
  color: #1b5e20;
  margin-top: 0;
}

.container h2 {
  color: #2e7d32;
  margin-top: 2rem;
  border-bottom: 3px solid #81c784;
  padding-bottom: 0.5rem;
}

.image-placeholder {
  width: 100%;
  max-width: 600px;
  margin: 1.5rem auto;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border: 3px solid #81c784;
  box-shadow: 0 4px 12px rgba(27, 94, 32, 0.2);
}

.image-placeholder img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  min-height: 300px;
}

.image-placeholder p {
  color: #558b2f;
  font-size: 1.1rem;
  padding: 60px 20px;
  margin: 0;
  text-align: center;
}

.concours-section {
  margin: 2rem 0;
}

.concours-section p {
  color: #424242;
  line-height: 1.8;
}

.objectives-list {
  list-style: none;
  padding: 0;
}

.objectives-list li {
  color: #424242;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f1f8e9;
  border-left: 4px solid #81c784;
  border-radius: 4px;
  line-height: 1.6;
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.criteria-card {
  background-color: #f1f8e9;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #c8e6c9;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.criteria-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(27, 94, 32, 0.2);
  border-color: #81c784;
}

.criteria-card h3 {
  color: #1b5e20;
  margin-top: 0;
}

.criteria-card p {
  color: #558b2f;
}

.timeline {
  margin: 2rem 0;
  padding: 2rem;
  background-color: #f1f8e9;
  border-radius: 8px;
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  align-items: center;
}

.timeline-date {
  font-weight: bold;
  color: #2e7d32;
  min-width: 150px;
}

.timeline-event {
  color: #424242;
  font-size: 1.05rem;
}

.container ol {
  color: #424242;
  line-height: 1.8;
}

.container ol li {
  margin: 0.8rem 0;
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

.footer p {
  color: #c8e6c9;
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
</style>

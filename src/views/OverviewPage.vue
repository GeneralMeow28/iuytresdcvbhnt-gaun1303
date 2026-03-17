<template>
  <body>
    <NavBar />

    <FacebookBar />

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
          <p><em>Contenu généré avec assistance IA (GitHub Copilot) - 2026-01-16</em></p>
        </div>
      </div>
    </footer>
  </body>
</template>

<script setup>
import ChangelogList from '@/components/ChangelogList.vue';
import NavBar from '../components/NavBar.vue'
import FacebookBar from '@/components/FacebookBar.vue';
</script>

<style scoped>
.objectives-list {
  list-style: none;
  padding: 0;
}

.objectives-list li {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--bg-lighter);
  border-left: 4px solid var(--primary-accent);
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.criteria-card {
  background-color: var(--bg-lighter);
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.criteria-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-accent);
}

.criteria-card h3 {
  font-size: 1.05rem;
}

.criteria-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.timeline {
  margin: 2rem 0;
  padding: 2rem;
  background-color: var(--bg-lighter);
  border-radius: 4px;
  border-left: 4px solid var(--primary-accent);
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  align-items: center;
}

.timeline-date {
  font-weight: 700;
  color: var(--primary-dark);
  min-width: 150px;
  font-size: 0.95rem;
}

.timeline-event {
  color: var(--text-dark);
  font-size: 0.95rem;
}

.container ol {
  line-height: 1.8;
  padding-left: 1.5rem;
}

.container ol li {
  margin: 0.8rem 0;
  font-size: 0.95rem;
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

.footer-credits p {
  color: var(--text-light);
  margin: 0.5rem 0;
}

.footer-credits em {
  color: #a0a0a0;
  display: block;
  margin-top: 0.5rem;
}

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

.concours-section {
  margin: 2rem 0;
}

.concours-section p {
  color: var(--text-dark);
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .hero-image-placeholder {
    max-width: 100%;
    margin: 1.5rem auto;
  }

  .timeline-item {
    gap: 1rem;
    flex-direction: column;
  }

  .timeline-date {
    min-width: auto;
  }

  .container ol {
    padding-left: 1.2rem;
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

  .timeline-item {
    gap: 0.5rem;
  }

  .container ol li {
    font-size: 0.9rem;
  }
}
</style>
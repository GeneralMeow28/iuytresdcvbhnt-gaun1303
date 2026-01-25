<template>
  <section class="changelog-card">
    <div class="changelog-header">
      <h3>Registre des changements</h3>
      <small class="changelog-date">Dernière mise à jour: 2026-01-25</small>
    </div>

    <ul class="changelog-list">
      <li>
        <strong>2026-01-25</strong> — Modification du favicon et ajout d'images sur chaque page.
      </li>
      <li><strong>2026-01-18</strong> — Ajout d'un lien pour la page Facebook.</li>
      <li><strong>2026-01-17</strong> — Ajout du sitemap pour favoriser l'indexation.</li>
      <li><strong>2026-01-16</strong> — Premier prototype du site et contenu initial.</li>
    </ul>
  </section>
</template>

<script setup>
// Static changelog component — keep lightweight and presentational.
</script>

<style scoped>
.changelog-card {
  background: linear-gradient(180deg, #ffffff 0%, #f7fff7 100%);
  border: 1px solid #e0f2e9;
  border-radius: 12px;
  padding: 18px 22px;
  box-shadow: 0 8px 24px rgba(31, 95, 55, 0.08);
  max-width: 920px;
  margin: 28px auto 12px;
}

.changelog-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}

.changelog-header h3 {
  margin: 0;
  color: #1b5e20;
}

.changelog-date {
  color: #6b8f74;
  font-size: 0.9rem;
}

.changelog-list {
  margin: 12px 0 0 0;
  padding-left: 1rem;
  color: #2f4f36;
  line-height: 1.6;
}

.changelog-list li {
  margin: 8px 0;
}
</style>

<template>
  <h1>iuytresdcvbhnt</h1>
  <footer>
    <div class="change-log"></div>
    <h3>Registre des changements</h3>
    <ul>
      <li>
        <p>1. Page initiale avec les requis minimaux (2026-01-12)</p>
      </li>
    </ul>
    <p>Nicolas Gaumond - gaun1303</p>
  </footer>
</template>

<script></script>

<style scoped>
.restaurant-list {
  padding: 40px 20px 20px 20px;
}

.loading,
.error {
  text-align: center;
  padding: 20px;
}

.error {
  color: red;
}

.restaurants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.restaurant-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.restaurant-card:hover {
  transform: translateY(-5px);
}

.restaurant-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.restaurant-info {
  padding: 15px;
}

.restaurant-info h2 {
  margin-top: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.restaurant-info p {
  margin: 0;
  color: #555;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-row:last-child {
  margin-bottom: 0;
}

.restaurant-name {
  margin: 0;
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  text-align: left;
}

.rating {
  display: flex;
  align-items: center;
  margin-left: 10px;
  flex-shrink: 0;
}

.rating span:first-child {
  margin-right: 5px;
  font-weight: bold;
}

.stars {
  color: #f5a623;
}

.address-phone {
  justify-content: flex-start;
  gap: 15px;
}

.restaurant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  gap: 10px;
}
</style>

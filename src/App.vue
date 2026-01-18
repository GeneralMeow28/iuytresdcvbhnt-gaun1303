<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Global banner used by individual pages; placed under each page's navbar */
.facebook-banner {
  width: 100%;
  background: #1877f2;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  box-shadow: 0 6px 18px rgba(24, 119, 242, 0.12);
  position: sticky;
  top: 56px; /* fallback; pages set navbar top:0 and typical height ~56-64px */
  z-index: 90;
}
.facebook-banner a {
  color: #ffffff;
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 1.05rem;
  background: rgba(255, 255, 255, 0.07);
  border: 2px solid rgba(255, 255, 255, 0.12);
}
.facebook-banner a:hover {
  background: rgba(255, 255, 255, 0.12);
}
</style>

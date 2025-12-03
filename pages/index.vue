<script setup lang="ts">
// Redirect to Canvas by default
useHead({
  title: 'Paint Like a Wiz - Draw here!'
})

// Automatically redirect to Canvas
navigateTo('/Canvas')
</script>

<template>
  <div class="loading-container">
    <div class="loading-spinner"></div>
    <p class="loading-text">Loading...</p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(124, 58, 237, 0.2);
  border-top-color: #7c3aed;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #7c3aed;
  font-weight: 500;
}
</style>


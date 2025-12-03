<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { Powers } from '~/enums/powers'

import InteractiveCanvas from '~/components/InteractiveCanvas.vue';
import CompanionRefactor from '~/components/Companion.vue';

const selectedPower = ref<Powers | null>(null)
const currentPower = ref<Powers>(Powers.Ice)

watch(selectedPower, (newVal: Powers | null) => {
  if (newVal !== null) {
    currentPower.value = newVal
  }
})

// Ref al componente hijo InteractiveCanvas
const interactiveCanvasInstanceRef = ref<InstanceType<typeof InteractiveCanvas> | null>(null);

// Computamos el canvas real expuesto desde el hijo
const canvasValue = computed(() => {
  return interactiveCanvasInstanceRef.value?.canvasRef ?? null;
});
</script>

<template>
  <div class="parent-wrapper">
    <div class="canvas-wrapper">
      <InteractiveCanvas ref="interactiveCanvasInstanceRef" @update:selectedPower="selectedPower = $event" />
    </div>
    
    <div class="companion-wrapper">
      <CompanionRefactor :canvas="canvasValue" :power="currentPower" />
    </div>
  </div>
</template>

  
<style scoped>
.parent-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 200px);
  padding: 1.5rem;
  gap: 2rem;
  width: 100%;
}

.canvas-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  order: 1;
}

.companion-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  order: 2;
}

/* Tablets pequeñas (>= 640px) */
@media (min-width: 640px) {
  .parent-wrapper {
    padding: 2rem;
    gap: 2.5rem;
  }
}

/* Tablets y pantallas medianas (>= 768px) */
@media (min-width: 768px) {
  .parent-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 2rem;
  }

  .canvas-wrapper {
    flex: 1;
    max-width: 60%;
    order: 1;
  }

  .companion-wrapper {
    flex: 0 0 auto;
    max-width: 40%;
    order: 2;
    justify-content: center;
  }
}

/* Pantallas grandes (>= 1024px) */
@media (min-width: 1024px) {
  .parent-wrapper {
    gap: 4rem;
    padding: 3rem;
  }

  .canvas-wrapper {
    max-width: 65%;
  }

  .companion-wrapper {
    max-width: 35%;
  }
}

/* Pantallas muy grandes (>= 1280px) */
@media (min-width: 1280px) {
  .parent-wrapper {
    gap: 5rem;
  }
}

/* Pantallas muy pequeñas (móviles) */
@media (max-width: 639px) {
  .parent-wrapper {
    padding: 1rem;
    gap: 1.5rem;
  }
  
  .canvas-wrapper {
    width: 100%;
    overflow-x: auto;
  }
}
</style>

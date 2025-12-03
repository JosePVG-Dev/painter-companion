// ~/composables/canvas/usePowerSkins.ts
import { computed } from 'vue'
import type { Ref } from 'vue'
import { Powers } from '~/enums/powers'

export function usePowerSkins(power: Powers) {
  const powerSkinUrl = computed(() => {
    switch (power) {
      case 'fire':
        return '/Canva/Powers/Fire.PNG'
      case 'ice':
        return '/Canva/Powers/Ice.PNG'
      case 'water':
        return '/Canva/Powers/Water.PNG'
      case 'spiderweb':
        return '/Canva/Powers/SpiderWeb.png'
      case 'leaf':
        return '/Canva/Powers/Leaf.png'
      default:
        return '/Canva/Powers/Ice.PNG'
    }
  })

  return { powerSkinUrl }
}

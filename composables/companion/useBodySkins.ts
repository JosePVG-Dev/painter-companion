import { computed, type Ref } from 'vue'
import { Powers } from '~/enums/powers'

export function useBodySkins(power: Ref<Powers | null>) {
  const bodySkinUrl = computed(() => {
    switch (power.value) {
    
      case Powers.SpiderWeb:
        return '/Companion/Sprites/Body/Spider.png'


      default:

        return '/Companion/Sprites/Body/Wizard.png'
    }
  })

  return { bodySkinUrl }
}

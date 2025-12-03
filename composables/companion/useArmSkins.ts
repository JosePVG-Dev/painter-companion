import { computed, type Ref } from 'vue'
import { Powers } from '~/enums/powers'

export function useArmSkins(power: Ref<Powers | null>) {
  const armSkinUrl = computed(() => {
    switch (power.value) {
     
      case Powers.SpiderWeb:
        return '/Companion/Sprites/Arm/Spider.png'
   
      default:
        // Skin por defecto si power.value es null o no reconocido
        return '/Companion/Sprites/Arm/Wizard.png'
    }
  })

  return { armSkinUrl }
}

import { computed, ref, watch, type Ref } from 'vue'
import { Powers } from '~/enums/powers'

export function useWeaponSkins(power: Ref<Powers | null>) {

  const weaponSkinUrl = computed(() => {
    if (!power.value) return null

    switch (power.value) {
      case Powers.Fire:
        return '/Companion/Sprites/Weapon/Fire Staff.png'
      case Powers.Ice:
        return '/Companion/Sprites/Weapon/Ice Staff.png'
      case Powers.Water:
        return '/Companion/Sprites/Weapon/Water Staff.png'
      case Powers.SpiderWeb:
        return null
      case Powers.Leaf:
        return '/Companion/Sprites/Weapon/Leaf Staff.png'
      default:
        return null
    }
  })

  return { weaponSkinUrl }
}

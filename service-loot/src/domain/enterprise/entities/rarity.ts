export type RarityTier =
  | 'STANDARD'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'ULTIMATE'
  | 'EXCLUSIVE'

export class Rarity {
  static lowerRarity(rarity: RarityTier): RarityTier | null {
    switch (rarity) {
      case 'EXCLUSIVE':
        return 'ULTIMATE'
      case 'ULTIMATE':
        return 'MYTHIC'
      case 'MYTHIC':
        return 'LEGENDARY'
      case 'LEGENDARY':
        return 'EPIC'
      case 'EPIC':
        return 'STANDARD'
      default:
        return null
    }
  }
}

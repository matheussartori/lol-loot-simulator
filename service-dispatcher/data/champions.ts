type Champion = {
  name: string
  rarityTier: RarityTier
  releasedAt: Date
  images: {
    portrait: string
    splash: string
    loading: string
  }
}

type RarityTier =
  | 'STANDARD'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'ULTIMATE'
  | 'EXCLUSIVE'

export const champions: Champion[] = [
  {
    name: 'Alistar',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/alistar/default_portrait.webp',
      splash: '/champions/alistar/default_splash.webp',
      loading: '/champions/alistar/default_loading.webp'
    }
  },
  {
    name: 'Annie',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/annie/default_portrait.webp',
      splash: '/champions/annie/default_splash.webp',
      loading: '/champions/annie/default_loading.webp'
    }
  },
  {
    name: 'Ashe',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/ashe/default_portrait.webp',
      splash: '/champions/ashe/default_splash.webp',
      loading: '/champions/ashe/default_loading.webp'
    }
  }
]
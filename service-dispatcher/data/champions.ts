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
    rarityTier: 'EPIC',
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
  },
  {
    name: 'Fiddlesticks',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/fiddlesticks/default_portrait.webp',
      splash: '/champions/fiddlesticks/default_splash.webp',
      loading: '/champions/fiddlesticks/default_loading.webp'
    }
  },
  {
    name: 'Jax',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/jax/default_portrait.webp',
      splash: '/champions/jax/default_splash.webp',
      loading: '/champions/jax/default_loading.webp'
    }
  },
  {
    name: 'Kayle',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/kayle/default_portrait.webp',
      splash: '/champions/kayle/default_splash.webp',
      loading: '/champions/kayle/default_loading.webp'
    }
  },
  {
    name: 'Master Yi',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/master_yi/default_portrait.webp',
      splash: '/champions/master_yi/default_splash.webp',
      loading: '/champions/master_yi/default_loading.webp'
    }
  },
  {
    name: 'Morgana',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/morgana/default_portrait.webp',
      splash: '/champions/morgana/default_splash.webp',
      loading: '/champions/morgana/default_loading.webp'
    }
  },
  {
    name: 'Nunu & Willump',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/nunu_and_willump/default_portrait.webp',
      splash: '/champions/nunu_and_willump/default_splash.webp',
      loading: '/champions/nunu_and_willump/default_loading.webp'
    }
  },
  {
    name: 'Ryze',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/ryze/default_portrait.webp',
      splash: '/champions/ryze/default_splash.webp',
      loading: '/champions/ryze/default_loading.webp'
    }
  },
  {
    name: 'Sion',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/sion/default_portrait.webp',
      splash: '/champions/sion/default_splash.webp',
      loading: '/champions/sion/default_loading.webp'
    }
  },
  {
    name: 'Sivir',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/sivir/default_portrait.webp',
      splash: '/champions/sivir/default_splash.webp',
      loading: '/champions/sivir/default_loading.webp'
    }
  },
  {
    name: 'Soraka',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/soraka/default_portrait.webp',
      splash: '/champions/soraka/default_splash.webp',
      loading: '/champions/soraka/default_loading.webp'
    }
  }
]
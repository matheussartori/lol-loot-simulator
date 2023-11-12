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
  },
  {
    name: 'Teemo',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/teemo/default_portrait.webp',
      splash: '/champions/teemo/default_splash.webp',
      loading: '/champions/teemo/default_loading.webp'
    }
  },
  {
    name: 'Tristana',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/tristana/default_portrait.webp',
      splash: '/champions/tristana/default_splash.webp',
      loading: '/champions/tristana/default_loading.webp'
    }
  },
  {
    name: 'Twisted Fate',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/twisted_fate/default_portrait.webp',
      splash: '/champions/twisted_fate/default_splash.webp',
      loading: '/champions/twisted_fate/default_loading.webp'
    }
  },
  {
    name: 'Warwick',
    rarityTier: 'STANDARD',
    releasedAt: new Date('February 21, 2009'),
    images: {
      portrait: '/champions/warwick/default_portrait.webp',
      splash: '/champions/warwick/default_splash.webp',
      loading: '/champions/warwick/default_loading.webp'
    }
  },
  {
    name: 'Singed',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 18, 2009'),
    images: {
      portrait: '/champions/singed/default_portrait.webp',
      splash: '/champions/singed/default_splash.webp',
      loading: '/champions/singed/default_loading.webp'
    }
  },
  {
    name: 'Zilean',
    rarityTier: 'EPIC',
    releasedAt: new Date('April 18, 2009'),
    images: {
      portrait: '/champions/zilean/default_portrait.webp',
      splash: '/champions/zilean/default_splash.webp',
      loading: '/champions/zilean/default_loading.webp'
    }
  },
  {
    name: 'Evelynn',
    rarityTier: 'EPIC',
    releasedAt: new Date('May 1, 2009'),
    images: {
      portrait: '/champions/evelynn/default_portrait.webp',
      splash: '/champions/evelynn/default_splash.webp',
      loading: '/champions/evelynn/default_loading.webp'
    }
  },
  {
    name: 'Tryndamere',
    rarityTier: 'EPIC',
    releasedAt: new Date('May 1, 2009'),
    images: {
      portrait: '/champions/tryndamere/default_portrait.webp',
      splash: '/champions/tryndamere/default_splash.webp',
      loading: '/champions/tryndamere/default_loading.webp'
    }
  },
  {
    name: 'Twitch',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('May 1, 2009'),
    images: {
      portrait: '/champions/twitch/default_portrait.webp',
      splash: '/champions/twitch/default_splash.webp',
      loading: '/champions/twitch/default_loading.webp'
    }
  },
  {
    name: 'Karthus',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('June 12, 2009'),
    images: {
      portrait: '/champions/karthus/default_portrait.webp',
      splash: '/champions/karthus/default_splash.webp',
      loading: '/champions/karthus/default_loading.webp'
    }
  },
  {
    name: 'Amumu',
    rarityTier: 'STANDARD',
    releasedAt: new Date('June 26, 2009'),
    images: {
      portrait: '/champions/amumu/default_portrait.webp',
      splash: '/champions/amumu/default_splash.webp',
      loading: '/champions/amumu/default_loading.webp'
    }
  },
  {
    name: 'Cho\'Gath',
    rarityTier: 'EPIC',
    releasedAt: new Date('June 26, 2009'),
    images: {
      portrait: '/champions/chogath/default_portrait.webp',
      splash: '/champions/chogath/default_splash.webp',
      loading: '/champions/chogath/default_loading.webp'
    }
  },
  {
    name: 'Anivia',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('July 7, 2009'),
    images: {
      portrait: '/champions/anivia/default_portrait.webp',
      splash: '/champions/anivia/default_splash.webp',
      loading: '/champions/anivia/default_loading.webp'
    }
  },
  {
    name: 'Rammus',
    rarityTier: 'EPIC',
    releasedAt: new Date('July 7, 2009'),
    images: {
      portrait: '/champions/rammus/default_portrait.webp',
      splash: '/champions/rammus/default_splash.webp',
      loading: '/champions/rammus/default_loading.webp'
    }
  },
  {
    name: 'Veigar',
    rarityTier: 'EPIC',
    releasedAt: new Date('July 24, 2009'),
    images: {
      portrait: '/champions/veigar/default_portrait.webp',
      splash: '/champions/veigar/default_splash.webp',
      loading: '/champions/veigar/default_loading.webp'
    }
  },
  {
    name: 'Kassadin',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('August 7, 2009'),
    images: {
      portrait: '/champions/kassadin/default_portrait.webp',
      splash: '/champions/kassadin/default_splash.webp',
      loading: '/champions/kassadin/default_loading.webp'
    }
  },
  {
    name: 'Gangplank',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('August 19, 2009'),
    images: {
      portrait: '/champions/gangplank/default_portrait.webp',
      splash: '/champions/gangplank/default_splash.webp',
      loading: '/champions/gangplank/default_loading.webp'
    }
  },
  {
    name: 'Taric',
    rarityTier: 'EPIC',
    releasedAt: new Date('August 19, 2009'),
    images: {
      portrait: '/champions/taric/default_portrait.webp',
      splash: '/champions/taric/default_splash.webp',
      loading: '/champions/taric/default_loading.webp'
    }
  },
  {
    name: 'Blitzcrank',
    rarityTier: 'EPIC',
    releasedAt: new Date('September 2, 2009'),
    images: {
      portrait: '/champions/blitzcrank/default_portrait.webp',
      splash: '/champions/blitzcrank/default_splash.webp',
      loading: '/champions/blitzcrank/default_loading.webp'
    }
  },
  {
    name: 'Dr. Mundo',
    rarityTier: 'STANDARD',
    releasedAt: new Date('September 2, 2009'),
    images: {
      portrait: '/champions/dr_mundo/default_portrait.webp',
      splash: '/champions/dr_mundo/default_splash.webp',
      loading: '/champions/dr_mundo/default_loading.webp'
    }
  },
  {
    name: 'Janna',
    rarityTier: 'EPIC',
    releasedAt: new Date('September 2, 2009'),
    images: {
      portrait: '/champions/janna/default_portrait.webp',
      splash: '/champions/janna/default_splash.webp',
      loading: '/champions/janna/default_loading.webp'
    }
  },
  {
    name: 'Malphite',
    rarityTier: 'STANDARD',
    releasedAt: new Date('September 2, 2009'),
    images: {
      portrait: '/champions/malphite/default_portrait.webp',
      splash: '/champions/malphite/default_splash.webp',
      loading: '/champions/malphite/default_loading.webp'
    }
  },
  {
    name: 'Corki',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('September 19, 2009'),
    images: {
      portrait: '/champions/corki/default_portrait.webp',
      splash: '/champions/corki/default_splash.webp',
      loading: '/champions/corki/default_loading.webp'
    }
  },
  {
    name: 'Katarina',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('September 19, 2009'),
    images: {
      portrait: '/champions/katarina/default_portrait.webp',
      splash: '/champions/katarina/default_splash.webp',
      loading: '/champions/katarina/default_loading.webp'
    }
  },
  {
    name: 'Nasus',
    rarityTier: 'EPIC',
    releasedAt: new Date('October 1, 2009'),
    images: {
      portrait: '/champions/nasus/default_portrait.webp',
      splash: '/champions/nasus/default_splash.webp',
      loading: '/champions/nasus/default_loading.webp'
    }
  },
  {
    name: 'Heimerdinger',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('October 10, 2009'),
    images: {
      portrait: '/champions/heimerdinger/default_portrait.webp',
      splash: '/champions/heimerdinger/default_splash.webp',
      loading: '/champions/heimerdinger/default_loading.webp'
    }
  },
  {
    name: 'Shaco',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('October 10, 2009'),
    images: {
      portrait: '/champions/shaco/default_portrait.webp',
      splash: '/champions/shaco/default_splash.webp',
      loading: '/champions/shaco/default_loading.webp'
    }
  },
  {
    name: 'Udyr',
    rarityTier: 'EPIC',
    releasedAt: new Date('December 02, 2009'),
    images: {
      portrait: '/champions/udyr/default_portrait.webp',
      splash: '/champions/udyr/default_splash.webp',
      loading: '/champions/udyr/default_loading.webp'
    }
  },
  {
    name: 'Nidalee',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('December 17, 2009'),
    images: {
      portrait: '/champions/nidalee/default_portrait.webp',
      splash: '/champions/nidalee/default_splash.webp',
      loading: '/champions/nidalee/default_loading.webp'
    }
  },
  {
    name: 'Poppy',
    rarityTier: 'STANDARD',
    releasedAt: new Date('January 13, 2010'),
    images: {
      portrait: '/champions/poppy/default_portrait.webp',
      splash: '/champions/poppy/default_splash.webp',
      loading: '/champions/poppy/default_loading.webp'
    }
  },
  {
    name: 'Gragas',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('February 2, 2010'),
    images: {
      portrait: '/champions/gragas/default_portrait.webp',
      splash: '/champions/gragas/default_splash.webp',
      loading: '/champions/gragas/default_loading.webp'
    }
  },
  {
    name: 'Pantheon',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 2, 2010'),
    images: {
      portrait: '/champions/pantheon/default_portrait.webp',
      splash: '/champions/pantheon/default_splash.webp',
      loading: '/champions/pantheon/default_loading.webp'
    }
  },
  {
    name: 'Mordekaiser',
    rarityTier: 'EPIC',
    releasedAt: new Date('February 24, 2010'),
    images: {
      portrait: '/champions/mordekaiser/default_portrait.webp',
      splash: '/champions/mordekaiser/default_splash.webp',
      loading: '/champions/mordekaiser/default_loading.webp'
    }
  },
  {
    name: 'Ezreal',
    rarityTier: 'EPIC',
    releasedAt: new Date('March 16, 2010'),
    images: {
      portrait: '/champions/ezreal/default_portrait.webp',
      splash: '/champions/ezreal/default_splash.webp',
      loading: '/champions/ezreal/default_loading.webp'
    }
  },
  {
    name: 'Shen',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('March 24, 2010'),
    images: {
      portrait: '/champions/shen/default_portrait.webp',
      splash: '/champions/shen/default_splash.webp',
      loading: '/champions/shen/default_loading.webp'
    }
  },
  {
    name: 'Kennen',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 4, 2010'),
    images: {
      portrait: '/champions/kennen/default_portrait.webp',
      splash: '/champions/kennen/default_splash.webp',
      loading: '/champions/kennen/default_loading.webp'
    }
  },
  {
    name: 'Garen',
    rarityTier: 'STANDARD',
    releasedAt: new Date('April 27, 2010'),
    images: {
      portrait: '/champions/garen/default_portrait.webp',
      splash: '/champions/garen/default_splash.webp',
      loading: '/champions/garen/default_loading.webp'
    }
  },
  {
    name: 'Akali',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('May 11, 2010'),
    images: {
      portrait: '/champions/akali/default_portrait.webp',
      splash: '/champions/akali/default_splash.webp',
      loading: '/champions/akali/default_loading.webp'
    }
  },
  {
    name: 'Malzahar',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('June 1, 2010'),
    images: {
      portrait: '/champions/malzahar/default_portrait.webp',
      splash: '/champions/malzahar/default_splash.webp',
      loading: '/champions/malzahar/default_loading.webp'
    }
  },
  {
    name: 'Olaf',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('June 9, 2010'),
    images: {
      portrait: '/champions/olaf/default_portrait.webp',
      splash: '/champions/olaf/default_splash.webp',
      loading: '/champions/olaf/default_loading.webp'
    }
  },
  {
    name: 'Kog\'Maw',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('June 24, 2010'),
    images: {
      portrait: '/champions/kogmaw/default_portrait.webp',
      splash: '/champions/kogmaw/default_splash.webp',
      loading: '/champions/kogmaw/default_loading.webp'
    }
  },
  {
    name: 'Xin Zhao',
    rarityTier: 'EPIC',
    releasedAt: new Date('July 13, 2010'),
    images: {
      portrait: '/champions/xin_zhao/default_portrait.webp',
      splash: '/champions/xin_zhao/default_splash.webp',
      loading: '/champions/xin_zhao/default_loading.webp'
    }
  },
  {
    name: 'Vladimir',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('July 27, 2010'),
    images: {
      portrait: '/champions/vladimir/default_portrait.webp',
      splash: '/champions/vladimir/default_splash.webp',
      loading: '/champions/vladimir/default_loading.webp'
    }
  },
  {
    name: 'Galio',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('August 10, 2010'),
    images: {
      portrait: '/champions/galio/default_portrait.webp',
      splash: '/champions/galio/default_splash.webp',
      loading: '/champions/galio/default_loading.webp'
    }
  },
  {
    name: 'Urgot',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('August 24, 2010'),
    images: {
      portrait: '/champions/urgot/default_portrait.webp',
      splash: '/champions/urgot/default_splash.webp',
      loading: '/champions/urgot/default_loading.webp'
    }
  },
  {
    name: 'Miss Fortune',
    rarityTier: 'STANDARD',
    releasedAt: new Date('September 8, 2010'),
    images: {
      portrait: '/champions/miss_fortune/default_portrait.webp',
      splash: '/champions/miss_fortune/default_splash.webp',
      loading: '/champions/miss_fortune/default_loading.webp'
    }
  },
  {
    name: 'Sona',
    rarityTier: 'STANDARD',
    releasedAt: new Date('September 21, 2010'),
    images: {
      portrait: '/champions/sona/default_portrait.webp',
      splash: '/champions/sona/default_splash.webp',
      loading: '/champions/sona/default_loading.webp'
    }
  },
  {
    name: 'Swain',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('October 5, 2010'),
    images: {
      portrait: '/champions/swain/default_portrait.webp',
      splash: '/champions/swain/default_splash.webp',
      loading: '/champions/swain/default_loading.webp'
    }
  },
  {
    name: 'Lux',
    rarityTier: 'STANDARD',
    releasedAt: new Date('October 19, 2010'),
    images: {
      portrait: '/champions/lux/default_portrait.webp',
      splash: '/champions/lux/default_splash.webp',
      loading: '/champions/lux/default_loading.webp'
    }
  },
  {
    name: 'LeBlanc',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('November 2, 2010'),
    images: {
      portrait: '/champions/leblanc/default_portrait.webp',
      splash: '/champions/leblanc/default_splash.webp',
      loading: '/champions/leblanc/default_loading.webp'
    }
  },
  {
    name: 'Irelia',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('November 16, 2010'),
    images: {
      portrait: '/champions/irelia/default_portrait.webp',
      splash: '/champions/irelia/default_splash.webp',
      loading: '/champions/irelia/default_loading.webp'
    }
  },
  {
    name: 'Trundle',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('December 1, 2010'),
    images: {
      portrait: '/champions/trundle/default_portrait.webp',
      splash: '/champions/trundle/default_splash.webp',
      loading: '/champions/trundle/default_loading.webp'
    }
  },
  {
    name: 'Cassiopeia',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 14, 2010'),
    images: {
      portrait: '/champions/cassiopeia/default_portrait.webp',
      splash: '/champions/cassiopeia/default_splash.webp',
      loading: '/champions/cassiopeia/default_loading.webp'
    }
  },
  {
    name: 'Caitlyn',
    rarityTier: 'STANDARD',
    releasedAt: new Date('January 4, 2011'),
    images: {
      portrait: '/champions/caitlyn/default_portrait.webp',
      splash: '/champions/caitlyn/default_splash.webp',
      loading: '/champions/caitlyn/default_loading.webp'
    }
  },
  {
    name: 'Renekton',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('January 18, 2011'),
    images: {
      portrait: '/champions/renekton/default_portrait.webp',
      splash: '/champions/renekton/default_splash.webp',
      loading: '/champions/renekton/default_loading.webp'
    }
  },
  {
    name: 'Karma',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('February 1, 2011'),
    images: {
      portrait: '/champions/karma/default_portrait.webp',
      splash: '/champions/karma/default_splash.webp',
      loading: '/champions/karma/default_loading.webp'
    }
  },
  {
    name: 'Maokai',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 16, 2011'),
    images: {
      portrait: '/champions/maokai/default_portrait.webp',
      splash: '/champions/maokai/default_splash.webp',
      loading: '/champions/maokai/default_loading.webp'
    }
  },
  {
    name: 'Jarvan IV',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('March 1, 2011'),
    images: {
      portrait: '/champions/jarvan_iv/default_portrait.webp',
      splash: '/champions/jarvan_iv/default_splash.webp',
      loading: '/champions/jarvan_iv/default_loading.webp'
    }
  },
  {
    name: 'Nocturne',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('March 15, 2011'),
    images: {
      portrait: '/champions/nocturne/default_portrait.webp',
      splash: '/champions/nocturne/default_splash.webp',
      loading: '/champions/nocturne/default_loading.webp'
    }
  },
  {
    name: 'Lee Sin',
    rarityTier: 'EPIC',
    releasedAt: new Date('April 1, 2011'),
    images: {
      portrait: '/champions/lee_sin/default_portrait.webp',
      splash: '/champions/lee_sin/default_splash.webp',
      loading: '/champions/lee_sin/default_loading.webp'
    }
  },
  {
    name: 'Brand',
    rarityTier: 'STANDARD',
    releasedAt: new Date('April 12, 2011'),
    images: {
      portrait: '/champions/brand/default_portrait.webp',
      splash: '/champions/brand/default_splash.webp',
      loading: '/champions/brand/default_loading.webp'
    }
  },
  {
    name: 'Rumble',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 26, 2011'),
    images: {
      portrait: '/champions/rumble/default_portrait.webp',
      splash: '/champions/rumble/default_splash.webp',
      loading: '/champions/rumble/default_loading.webp'
    }
  },
  {
    name: 'Vayne',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('May 10, 2011'),
    images: {
      portrait: '/champions/vayne/default_portrait.webp',
      splash: '/champions/vayne/default_splash.webp',
      loading: '/champions/vayne/default_loading.webp'
    }
  },
  {
    name: 'Orianna',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('June 1, 2011'),
    images: {
      portrait: '/champions/orianna/default_portrait.webp',
      splash: '/champions/orianna/default_splash.webp',
      loading: '/champions/orianna/default_loading.webp'
    }
  },
  {
    name: 'Yorick',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('June 22, 2011'),
    images: {
      portrait: '/champions/yorick/default_portrait.webp',
      splash: '/champions/yorick/default_splash.webp',
      loading: '/champions/yorick/default_loading.webp'
    }
  },
  {
    name: 'Leona',
    rarityTier: 'STANDARD',
    releasedAt: new Date('July 13, 2011'),
    images: {
      portrait: '/champions/leona/default_portrait.webp',
      splash: '/champions/leona/default_splash.webp',
      loading: '/champions/leona/default_loading.webp'
    }
  },
  {
    name: 'Wukong',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('July 26, 2011'),
    images: {
      portrait: '/champions/wukong/default_portrait.webp',
      splash: '/champions/wukong/default_splash.webp',
      loading: '/champions/wukong/default_loading.webp'
    }
  },
  {
    name: 'Skarner',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('August 9, 2011'),
    images: {
      portrait: '/champions/skarner/default_portrait.webp',
      splash: '/champions/skarner/default_splash.webp',
      loading: '/champions/skarner/default_loading.webp'
    }
  },
  {
    name: 'Talon',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('August 24, 2011'),
    images: {
      portrait: '/champions/talon/default_portrait.webp',
      splash: '/champions/talon/default_splash.webp',
      loading: '/champions/talon/default_loading.webp'
    }
  },
  {
    name: 'Riven',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('September 14, 2011'),
    images: {
      portrait: '/champions/riven/default_portrait.webp',
      splash: '/champions/riven/default_splash.webp',
      loading: '/champions/riven/default_loading.webp'
    }
  },
  {
    name: 'Xerath',
    rarityTier: 'EPIC',
    releasedAt: new Date('October 5, 2011'),
    images: {
      portrait: '/champions/xerath/default_portrait.webp',
      splash: '/champions/xerath/default_splash.webp',
      loading: '/champions/xerath/default_loading.webp'
    }
  },
  {
    name: 'Graves',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('October 19, 2011'),
    images: {
      portrait: '/champions/graves/default_portrait.webp',
      splash: '/champions/graves/default_splash.webp',
      loading: '/champions/graves/default_loading.webp'
    }
  },
  {
    name: 'Shyvana',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('November 1, 2011'),
    images: {
      portrait: '/champions/shyvana/default_portrait.webp',
      splash: '/champions/shyvana/default_splash.webp',
      loading: '/champions/shyvana/default_loading.webp'
    }
  },
  {
    name: 'Fizz',
    rarityTier: 'EPIC',
    releasedAt: new Date('November 15, 2011'),
    images: {
      portrait: '/champions/fizz/default_portrait.webp',
      splash: '/champions/fizz/default_splash.webp',
      loading: '/champions/fizz/default_loading.webp'
    }
  },
  {
    name: 'Volibear',
    rarityTier: 'EPIC',
    releasedAt: new Date('November 29, 2011'),
    images: {
      portrait: '/champions/volibear/default_portrait.webp',
      splash: '/champions/volibear/default_splash.webp',
      loading: '/champions/volibear/default_loading.webp'
    }
  },
  {
    name: 'Ahri',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('December 14, 2011'),
    images: {
      portrait: '/champions/ahri/default_portrait.webp',
      splash: '/champions/ahri/default_splash.webp',
      loading: '/champions/ahri/default_loading.webp'
    }
  },
  {
    name: 'Viktor',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 29, 2011'),
    images: {
      portrait: '/champions/viktor/default_portrait.webp',
      splash: '/champions/viktor/default_splash.webp',
      loading: '/champions/viktor/default_loading.webp'
    }
  },
  {
    name: 'Sejuani',
    rarityTier: 'STANDARD',
    releasedAt: new Date('January 17, 2012'),
    images: {
      portrait: '/champions/sejuani/default_portrait.webp',
      splash: '/champions/sejuani/default_splash.webp',
      loading: '/champions/sejuani/default_loading.webp'
    }
  },
  {
    name: 'Ziggs',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 1, 2012'),
    images: {
      portrait: '/champions/ziggs/default_portrait.webp',
      splash: '/champions/ziggs/default_splash.webp',
      loading: '/champions/ziggs/default_loading.webp'
    }
  },
  {
    name: 'Nautilus',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 14, 2012'),
    images: {
      portrait: '/champions/nautilus/default_portrait.webp',
      splash: '/champions/nautilus/default_splash.webp',
      loading: '/champions/nautilus/default_loading.webp'
    }
  },
  {
    name: 'Fiora',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('February 29, 2012'),
    images: {
      portrait: '/champions/fiora/default_portrait.webp',
      splash: '/champions/fiora/default_splash.webp',
      loading: '/champions/fiora/default_loading.webp'
    }
  },
  {
    name: 'Lulu',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('March 20, 2012'),
    images: {
      portrait: '/champions/lulu/default_portrait.webp',
      splash: '/champions/lulu/default_splash.webp',
      loading: '/champions/lulu/default_loading.webp'
    }
  },
]
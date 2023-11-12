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
  {
    name: 'Hecarim',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 18, 2012'),
    images: {
      portrait: '/champions/hecarim/default_portrait.webp',
      splash: '/champions/hecarim/default_splash.webp',
      loading: '/champions/hecarim/default_loading.webp'
    }
  },
  {
    name: 'Varus',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('May 8, 2012'),
    images: {
      portrait: '/champions/varus/default_portrait.webp',
      splash: '/champions/varus/default_splash.webp',
      loading: '/champions/varus/default_loading.webp'
    }
  },
  {
    name: 'Darius',
    rarityTier: 'STANDARD',
    releasedAt: new Date('May 23, 2012'),
    images: {
      portrait: '/champions/darius/default_portrait.webp',
      splash: '/champions/darius/default_splash.webp',
      loading: '/champions/darius/default_loading.webp'
    }
  },
  {
    name: 'Draven',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('June 6, 2012'),
    images: {
      portrait: '/champions/draven/default_portrait.webp',
      splash: '/champions/draven/default_splash.webp',
      loading: '/champions/draven/default_loading.webp'
    }
  },
  {
    name: 'Jayce',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('July 7, 2012'),
    images: {
      portrait: '/champions/jayce/default_portrait.webp',
      splash: '/champions/jayce/default_splash.webp',
      loading: '/champions/jayce/default_loading.webp'
    }
  },
  {
    name: 'Zyra',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('July 24, 2012'),
    images: {
      portrait: '/champions/zyra/default_portrait.webp',
      splash: '/champions/zyra/default_splash.webp',
      loading: '/champions/zyra/default_loading.webp'
    }
  },
  {
    name: 'Diana',
    rarityTier: 'STANDARD',
    releasedAt: new Date('August 7, 2012'),
    images: {
      portrait: '/champions/diana/default_portrait.webp',
      splash: '/champions/diana/default_splash.webp',
      loading: '/champions/diana/default_loading.webp'
    }
  },
  {
    name: 'Rengar',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('August 21, 2012'),
    images: {
      portrait: '/champions/rengar/default_portrait.webp',
      splash: '/champions/rengar/default_splash.webp',
      loading: '/champions/rengar/default_loading.webp'
    }
  },
  {
    name: 'Syndra',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('September 13, 2012'),
    images: {
      portrait: '/champions/syndra/default_portrait.webp',
      splash: '/champions/syndra/default_splash.webp',
      loading: '/champions/syndra/default_loading.webp'
    }
  },
  {
    name: 'Kha\'Zix',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('September 27, 2012'),
    images: {
      portrait: '/champions/khazix/default_portrait.webp',
      splash: '/champions/khazix/default_splash.webp',
      loading: '/champions/khazix/default_loading.webp'
    }
  },
  {
    name: 'Elise',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('October 26, 2012'),
    images: {
      portrait: '/champions/elise/default_portrait.webp',
      splash: '/champions/elise/default_splash.webp',
      loading: '/champions/elise/default_loading.webp'
    }
  },
  {
    name: 'Zed',
    rarityTier: 'EPIC',
    releasedAt: new Date('November 13, 2012'),
    images: {
      portrait: '/champions/zed/default_portrait.webp',
      splash: '/champions/zed/default_splash.webp',
      loading: '/champions/zed/default_loading.webp'
    }
  },
  {
    name: 'Nami',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('December 7, 2012'),
    images: {
      portrait: '/champions/nami/default_portrait.webp',
      splash: '/champions/nami/default_splash.webp',
      loading: '/champions/nami/default_loading.webp'
    }
  },
  {
    name: 'Vi',
    rarityTier: 'EPIC',
    releasedAt: new Date('December 19, 2012'),
    images: {
      portrait: '/champions/vi/default_portrait.webp',
      splash: '/champions/vi/default_splash.webp',
      loading: '/champions/vi/default_loading.webp'
    }
  },
  {
    name: 'Thresh',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('January 23, 2013'),
    images: {
      portrait: '/champions/thresh/default_portrait.webp',
      splash: '/champions/thresh/default_splash.webp',
      loading: '/champions/thresh/default_loading.webp'
    }
  },
  {
    name: 'Quinn',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('March 1, 2013'),
    images: {
      portrait: '/champions/quinn/default_portrait.webp',
      splash: '/champions/quinn/default_splash.webp',
      loading: '/champions/quinn/default_loading.webp'
    }
  },
  {
    name: 'Zac',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('March 29, 2013'),
    images: {
      portrait: '/champions/zac/default_portrait.webp',
      splash: '/champions/zac/default_splash.webp',
      loading: '/champions/zac/default_loading.webp'
    }
  },
  {
    name: 'Lissandra',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 30, 2013'),
    images: {
      portrait: '/champions/lissandra/default_portrait.webp',
      splash: '/champions/lissandra/default_splash.webp',
      loading: '/champions/lissandra/default_loading.webp'
    }
  },
  {
    name: 'Aatrox',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('June 13, 2013'),
    images: {
      portrait: '/champions/aatrox/default_portrait.webp',
      splash: '/champions/aatrox/default_splash.webp',
      loading: '/champions/aatrox/default_loading.webp'
    }
  },
  {
    name: 'Lucian',
    rarityTier: 'EPIC',
    releasedAt: new Date('August 22, 2013'),
    images: {
      portrait: '/champions/lucian/default_portrait.webp',
      splash: '/champions/lucian/default_splash.webp',
      loading: '/champions/lucian/default_loading.webp'
    }
  },
  {
    name: 'Jinx',
    rarityTier: 'EPIC',
    releasedAt: new Date('October 10, 2013'),
    images: {
      portrait: '/champions/jinx/default_portrait.webp',
      splash: '/champions/jinx/default_splash.webp',
      loading: '/champions/jinx/default_loading.webp'
    }
  },
  {
    name: 'Yasuo',
    rarityTier: 'EPIC',
    releasedAt: new Date('December 13, 2013'),
    images: {
      portrait: '/champions/yasuo/default_portrait.webp',
      splash: '/champions/yasuo/default_splash.webp',
      loading: '/champions/yasuo/default_loading.webp'
    }
  },
  {
    name: 'Vel\'Koz',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('February 27, 2014'),
    images: {
      portrait: '/champions/velkoz/default_portrait.webp',
      splash: '/champions/velkoz/default_splash.webp',
      loading: '/champions/velkoz/default_loading.webp'
    }
  },
  {
    name: 'Braum',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('May 12, 2014'),
    images: {
      portrait: '/champions/braum/default_portrait.webp',
      splash: '/champions/braum/default_splash.webp',
      loading: '/champions/braum/default_loading.webp'
    }
  },
  {
    name: 'Gnar',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('August 14, 2014'),
    images: {
      portrait: '/champions/gnar/default_portrait.webp',
      splash: '/champions/gnar/default_splash.webp',
      loading: '/champions/gnar/default_loading.webp'
    }
  },
  {
    name: 'Azir',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('September 16, 2014'),
    images: {
      portrait: '/champions/azir/default_portrait.webp',
      splash: '/champions/azir/default_splash.webp',
      loading: '/champions/azir/default_loading.webp'
    }
  },
  {
    name: 'Azir',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('September 16, 2014'),
    images: {
      portrait: '/champions/azir/default_portrait.webp',
      splash: '/champions/azir/default_splash.webp',
      loading: '/champions/azir/default_loading.webp'
    }
  },
  {
    name: 'Kalista',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('November 20, 2014'),
    images: {
      portrait: '/champions/kalista/default_portrait.webp',
      splash: '/champions/kalista/default_splash.webp',
      loading: '/champions/kalista/default_loading.webp'
    }
  },
  {
    name: 'Rek\'Sai',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 11, 2014'),
    images: {
      portrait: '/champions/reksai/default_portrait.webp',
      splash: '/champions/reksai/default_splash.webp',
      loading: '/champions/reksai/default_loading.webp'
    }
  },
  {
    name: 'Bard',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('March 12, 2015'),
    images: {
      portrait: '/champions/bard/default_portrait.webp',
      splash: '/champions/bard/default_splash.webp',
      loading: '/champions/bard/default_loading.webp'
    }
  },
  {
    name: 'Ekko',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('May 29, 2015'),
    images: {
      portrait: '/champions/ekko/default_portrait.webp',
      splash: '/champions/ekko/default_splash.webp',
      loading: '/champions/ekko/default_loading.webp'
    }
  },
  {
    name: 'Tahm Kench',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('July 9, 2015'),
    images: {
      portrait: '/champions/tahm_kench/default_portrait.webp',
      splash: '/champions/tahm_kench/default_splash.webp',
      loading: '/champions/tahm_kench/default_loading.webp'
    }
  },
  {
    name: 'Kindred',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('October 14, 2015'),
    images: {
      portrait: '/champions/kindred/default_portrait.webp',
      splash: '/champions/kindred/default_splash.webp',
      loading: '/champions/kindred/default_loading.webp'
    }
  },
  {
    name: 'Illaoi',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('November 24, 2015'),
    images: {
      portrait: '/champions/illaoi/default_portrait.webp',
      splash: '/champions/illaoi/default_splash.webp',
      loading: '/champions/illaoi/default_loading.webp'
    }
  },
  {
    name: 'Jhin',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('February 1, 2016'),
    images: {
      portrait: '/champions/jhin/default_portrait.webp',
      splash: '/champions/jhin/default_splash.webp',
      loading: '/champions/jhin/default_loading.webp'
    }
  },
  {
    name: 'Aurelion Sol',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('March 24, 2016'),
    images: {
      portrait: '/champions/aurelion_sol/default_portrait.webp',
      splash: '/champions/aurelion_sol/default_splash.webp',
      loading: '/champions/aurelion_sol/default_loading.webp'
    }
  },
  {
    name: 'Taliyah',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('May 18, 2016'),
    images: {
      portrait: '/champions/taliyah/default_portrait.webp',
      splash: '/champions/taliyah/default_splash.webp',
      loading: '/champions/taliyah/default_loading.webp'
    }
  },
  {
    name: 'Kled',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('August 10, 2016'),
    images: {
      portrait: '/champions/kled/default_portrait.webp',
      splash: '/champions/kled/default_splash.webp',
      loading: '/champions/kled/default_loading.webp'
    }
  },
  {
    name: 'Ivern',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('October 5, 2016'),
    images: {
      portrait: '/champions/ivern/default_portrait.webp',
      splash: '/champions/ivern/default_splash.webp',
      loading: '/champions/ivern/default_loading.webp'
    }
  },
  {
    name: 'Camille',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 7, 2016'),
    images: {
      portrait: '/champions/camille/default_portrait.webp',
      splash: '/champions/camille/default_splash.webp',
      loading: '/champions/camille/default_loading.webp'
    }
  },
  {
    name: 'Rakan',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 19, 2017'),
    images: {
      portrait: '/champions/rakan/default_portrait.webp',
      splash: '/champions/rakan/default_splash.webp',
      loading: '/champions/rakan/default_loading.webp'
    }
  },
  {
    name: 'Xayah',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 19, 2017'),
    images: {
      portrait: '/champions/xayah/default_portrait.webp',
      splash: '/champions/xayah/default_splash.webp',
      loading: '/champions/xayah/default_loading.webp'
    }
  },
  {
    name: 'Kayn',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('July 12, 2017'),
    images: {
      portrait: '/champions/kayn/default_portrait.webp',
      splash: '/champions/kayn/default_splash.webp',
      loading: '/champions/kayn/default_loading.webp'
    }
  },
  {
    name: 'Ornn',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('August 23, 2017'),
    images: {
      portrait: '/champions/ornn/default_portrait.webp',
      splash: '/champions/ornn/default_splash.webp',
      loading: '/champions/ornn/default_loading.webp'
    }
  },
  {
    name: 'Zoe',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('November 21, 2017'),
    images: {
      portrait: '/champions/zoe/default_portrait.webp',
      splash: '/champions/zoe/default_splash.webp',
      loading: '/champions/zoe/default_loading.webp'
    }
  },
  {
    name: 'Kai\'Sa',
    rarityTier: 'EPIC',
    releasedAt: new Date('March 7, 2018'),
    images: {
      portrait: '/champions/kaisa/default_portrait.webp',
      splash: '/champions/kaisa/default_splash.webp',
      loading: '/champions/kaisa/default_loading.webp'
    }
  },
  {
    name: 'Pyke',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('May 31, 2018'),
    images: {
      portrait: '/champions/pyke/default_portrait.webp',
      splash: '/champions/pyke/default_splash.webp',
      loading: '/champions/pyke/default_loading.webp'
    }
  },
  {
    name: 'Neeko',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 5, 2018'),
    images: {
      portrait: '/champions/neeko/default_portrait.webp',
      splash: '/champions/neeko/default_splash.webp',
      loading: '/champions/neeko/default_loading.webp'
    }
  },
  {
    name: 'Sylas',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('January 25, 2019'),
    images: {
      portrait: '/champions/sylas/default_portrait.webp',
      splash: '/champions/sylas/default_splash.webp',
      loading: '/champions/sylas/default_loading.webp'
    }
  },
  {
    name: 'Yuumi',
    rarityTier: 'STANDARD',
    releasedAt: new Date('May 14, 2019'),
    images: {
      portrait: '/champions/yuumi/default_portrait.webp',
      splash: '/champions/yuumi/default_splash.webp',
      loading: '/champions/yuumi/default_loading.webp'
    }
  },
  {
    name: 'Qiyana',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('May 14, 2019'),
    images: {
      portrait: '/champions/qiyana/default_portrait.webp',
      splash: '/champions/qiyana/default_splash.webp',
      loading: '/champions/qiyana/default_loading.webp'
    }
  },
  {
    name: 'Senna',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('November 10, 2019'),
    images: {
      portrait: '/champions/senna/default_portrait.webp',
      splash: '/champions/senna/default_splash.webp',
      loading: '/champions/senna/default_loading.webp'
    }
  },
  {
    name: 'Aphelios',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 11, 2019'),
    images: {
      portrait: '/champions/aphelios/default_portrait.webp',
      splash: '/champions/aphelios/default_splash.webp',
      loading: '/champions/aphelios/default_loading.webp'
    }
  },
  {
    name: 'Sett',
    rarityTier: 'EPIC',
    releasedAt: new Date('January 14, 2020'),
    images: {
      portrait: '/champions/sett/default_portrait.webp',
      splash: '/champions/sett/default_splash.webp',
      loading: '/champions/sett/default_loading.webp'
    }
  },
  {
    name: 'Lillia',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('July 22, 2020'),
    images: {
      portrait: '/champions/lillia/default_portrait.webp',
      splash: '/champions/lillia/default_splash.webp',
      loading: '/champions/lillia/default_loading.webp'
    }
  },
  {
    name: 'Yone',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('August 6, 2020'),
    images: {
      portrait: '/champions/yone/default_portrait.webp',
      splash: '/champions/yone/default_splash.webp',
      loading: '/champions/yone/default_loading.webp'
    }
  },
  {
    name: 'Samira',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('September 21, 2020'),
    images: {
      portrait: '/champions/samira/default_portrait.webp',
      splash: '/champions/samira/default_splash.webp',
      loading: '/champions/samira/default_loading.webp'
    }
  },
  {
    name: 'Seraphine',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('October 29, 2020'),
    images: {
      portrait: '/champions/seraphine/default_portrait.webp',
      splash: '/champions/seraphine/default_splash.webp',
      loading: '/champions/seraphine/default_loading.webp'
    }
  },
  {
    name: 'Rell',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('December 10, 2020'),
    images: {
      portrait: '/champions/rell/default_portrait.webp',
      splash: '/champions/rell/default_splash.webp',
      loading: '/champions/rell/default_loading.webp'
    }
  },
  {
    name: 'Viego',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('January 21, 2021'),
    images: {
      portrait: '/champions/viego/default_portrait.webp',
      splash: '/champions/viego/default_splash.webp',
      loading: '/champions/viego/default_loading.webp'
    }
  },
  {
    name: 'Gwen',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('April 15, 2021'),
    images: {
      portrait: '/champions/gwen/default_portrait.webp',
      splash: '/champions/gwen/default_splash.webp',
      loading: '/champions/gwen/default_loading.webp'
    }
  },
  {
    name: 'Akshan',
    rarityTier: 'MYTHIC',
    releasedAt: new Date('July 22, 2021'),
    images: {
      portrait: '/champions/akshan/default_portrait.webp',
      splash: '/champions/akshan/default_splash.webp',
      loading: '/champions/akshan/default_loading.webp'
    }
  },
  {
    name: 'Vex',
    rarityTier: 'LEGENDARY',
    releasedAt: new Date('September 23, 2021'),
    images: {
      portrait: '/champions/vex/default_portrait.webp',
      splash: '/champions/vex/default_splash.webp',
      loading: '/champions/vex/default_loading.webp'
    }
  },
  {
    name: 'Zeri',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('January 20, 2022'),
    images: {
      portrait: '/champions/zeri/default_portrait.webp',
      splash: '/champions/zeri/default_splash.webp',
      loading: '/champions/zeri/default_loading.webp'
    }
  },
  {
    name: 'Renata Glasc',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('February 17, 2022'),
    images: {
      portrait: '/champions/renata_glasc/default_portrait.webp',
      splash: '/champions/renata_glasc/default_splash.webp',
      loading: '/champions/renata_glasc/default_loading.webp'
    }
  },
  {
    name: 'Bel\'Veth',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('June 9, 2022'),
    images: {
      portrait: '/champions/belveth/default_portrait.webp',
      splash: '/champions/belveth/default_splash.webp',
      loading: '/champions/belveth/default_loading.webp'
    }
  },
  {
    name: 'Nilah',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('July 13, 2022'),
    images: {
      portrait: '/champions/nilah/default_portrait.webp',
      splash: '/champions/nilah/default_splash.webp',
      loading: '/champions/nilah/default_loading.webp'
    }
  },
  {
    name: 'K\'Sante',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('November 2, 2022'),
    images: {
      portrait: '/champions/ksante/default_portrait.webp',
      splash: '/champions/ksante/default_splash.webp',
      loading: '/champions/ksante/default_loading.webp'
    }
  },
  {
    name: 'Milio',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('March 23, 2023'),
    images: {
      portrait: '/champions/milio/default_portrait.webp',
      splash: '/champions/milio/default_splash.webp',
      loading: '/champions/milio/default_loading.webp'
    }
  },
  {
    name: 'Naafiri',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('July 19, 2023'),
    images: {
      portrait: '/champions/naafiri/default_portrait.webp',
      splash: '/champions/naafiri/default_splash.webp',
      loading: '/champions/naafiri/default_loading.webp'
    }
  },
  {
    name: 'Briar',
    rarityTier: 'ULTIMATE',
    releasedAt: new Date('September 14, 2023'),
    images: {
      portrait: '/champions/briar/default_portrait.webp',
      splash: '/champions/briar/default_splash.webp',
      loading: '/champions/briar/default_loading.webp'
    }
  },
]
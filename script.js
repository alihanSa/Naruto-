const $Container = document.querySelector('.cardContainer')
let shinobiWorld = [
    {
        name:'Naruto',
        clan:'Uzumaki',
        gender:'Male',
        rang: 'Genin',
        vallage: 'Leafy Village',
        image: "https://a-static.besthdwallpaper.com/naruto-uzumaki-mudrets-mod-oboi-750x1334-55095_164.jpg" 
        
    },
    {
        name:'Saske',
        clan:'Uchiha',
        gender:'Male',
        rang: 'Genin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/772/105/265/naruto-shippuuden-anime-fox-hatake-kakashi-wallpaper-preview.jpg" 
        
    },
    {
        name:'Sakura',
        clan:'Haruno',
        gender:'Female',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/777/893/228/cropped-anime-girls-bunny-ears-mx-shimmer-wallpaper-preview.jpg" 
        
    },
    {
        name:'Kakashi',
        clan:'hatake',
        gender:'Male',
        rang: 'Sennin',
        vallage: 'Leafy Village',
        image: "https://minecraftch.ru/uploads/posts/2018-03/1521238840_kakashihatake.jpg" 
        
    },
    {
        name:'Orochimaru',
        clan:'',
        gender:'Male',
        rang: 'Sanin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/301/665/108/naruto-orochimaru-naruto-hd-wallpaper-preview.jpg" 
        
    },
    {
        name:'Madara',
        clan:'Uchiha',
        gender:'Male',
        rang: 'dancer(died)',
        vallage: 'Leafy Village',
        image: "https://sun9-56.userapi.com/impf/c850124/v850124490/cbafc/pqpDEyxae-Y.jpg?size=807x533&quality=96&sign=925f8a5abd5f8f0cd885e09ce61f7323&type=album" 
        
    },
    {
        name:'Gaara',
        clan:'',
        gender:'Male',
        rang: 'Kazekage',
        vallage: 'Sand Village',
        image: "https://c4.wallpaperflare.com/wallpaper/803/819/660/gaara-naruto-wallpaper-preview.jpg" 
        
    },
    {
        name:'Yamato',
        clan:'',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/733/184/1016/one-piece-yamato-one-piece-hd-wallpaper-preview.jpg" 
        
    },
    {
        name:'Jiraya',
        clan:'',
        gender:'Male',
        rang: 'Sanin (died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/1003/762/374/jiraya-master-naruto-giraiya-wallpaper-preview.jpg" 
        
    },
    {
        name:'Gay',
        clan:'Maito',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/280/721/206/kiba-naruto-art-itachi-wallpaper-preview.jpg" 
        
    },
    {
        name:'Sunade',
        clan:'Senju',
        gender:'Female',
        rang: 'Sanin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/972/987/822/anime-naruto-shippuuden-uzumaki-naruto-tsunade-wallpaper-preview.jpg" 
        
    },
    {
        name:'Hirusen',
        clan:'Sarutobi',
        gender:'Male',
        rang: 'Hockage (died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/708/846/337/anime-demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Tobirama',
        clan:'Senju',
        gender:'Male',
        rang: 'Hockage (died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/222/54/376/anime-naruto-tobirama-senju-wallpaper-preview.jpg" 
        
    },
    {
        name:'Killer',
        clan:'Be',
        gender:'Male',
        rang: 'Jinchuriki',
        vallage: 'Clouds Village',
        image: "https://c4.wallpaperflare.com/wallpaper/640/1007/702/snow-mountains-weapons-back-wallpaper-preview.jpg" 
        
    },
    {
        name:'Minato',
        clan:'Namikaze',
        gender:'Male',
        rang: 'Hockage(died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/538/943/706/anime-naruto-minato-namikaze-naruto-uzumaki-wallpaper-preview.jpg" 
        
    },
    {
        name:'Danzo',
        clan:'Shimuro',
        gender:'Male',
        rang: 'Hockage(died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/706/904/957/video-game-naruto-shippuden-ultimate-ninja-storm-revolution-2-mizukage-danzo-wallpaper-preview.jpg" 
        
    },
    {
        name:'Onoki',
        clan:'',
        gender:'Male',
        rang: 'Suchikage',
        vallage: 'Rock Village',
        image: "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Choji',
        clan:'Akimichi',
        gender:'Male',
        rang: 'lonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/509/816/12/akimichi-choji-naruto-shippuden-wallpaper-preview.jpg" 
        
    },
    {
        name:'Deydara',
        clan:'',
        gender:'Male',
        rang: 'Bomber(died)',
        vallage: 'Rock Village',
        image: "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Hinata',
        clan:'Huiga',
        gender:'Female',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://i.pinimg.com/originals/63/91/be/6391be5cac6f10c57c9a5eaa83a7b473.jpg" 
        
    },
    {
        name:'Ino',
        clan:'Yamanako',
        gender:'Female',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/83/13/228/naruto-hinata-hy%C5%ABga-ino-yamanaka-sakura-haruno-hd-wallpaper-preview.jpg" 
        
    },
    {
        name:'Itachi',
        clan:'Uchiha',
        gender:'Male',
        rang: 'Killer(programmer(died))',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/817/397/84/naruto-shippuuden-akatsuki-uchiha-itachi-wallpaper-preview.jpg" 
        
    },
    {
        name:'Asuma',
        clan:'Sarutobi',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/522/912/44/asuma-kurinai-naruto-anime-naruto-hd-art-wallpaper-preview.jpg" 
        
    },
    {
        name:'Shikamaru',
        clan:'Nara',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/700/801/71/nara-shikamaru-naruto-shippuuden-japan-flag-wallpaper-preview.jpg" 
        
    },
    {
        name:'Iruka',
        clan:'Umino',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/20/455/817/naruto-shippuuden-umino-iruka-wallpaper-preview.jpg" 
        
    },
    {
        name:'Ten Ten',
        clan:'',
        gender:'Female',
        rang: 'Jonin',
        vallage: 'Sand Village',
        image: "https://c4.wallpaperflare.com/wallpaper/1004/126/381/naruto-shippuuden-uzumaki-naruto-jiraiya-nara-shikamaru-wallpaper-preview.jpg" 
        
    },
    {
        name:'Neji',
        clan:'Huiga',
        gender:'Male',
        rang: 'chunin(died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/870/223/789/anime-naruto-sharingan-naruto-shisui-uchiha-wallpaper-preview.jpg" 
        
    },
    {
        name:'Shisui',
        clan:'Uchiha',
        gender:'Male',
        rang: 'chunin(died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/335/493/129/anime-naruto-shisui-uchiha-wallpaper-preview.jpg" 
        
    },
    {
        name:'Nagato',
        clan:'Uzumaki',
        gender:'Male',
        rang: 'Genin(died)',
        vallage: 'Rain Village',
        image: "https://c4.wallpaperflare.com/wallpaper/842/824/33/1kosn-action-adventure-animation-wallpaper-preview.jpg" 
        
    },
    {
        name:'Obito',
        clan:'Uchiha',
        gender:'Male',
        rang: 'Genin(died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/384/350/430/digital-art-artwork-cyber-cyberpunk-neon-hd-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Hashirama',
        clan:'Senju',
        gender:'Male',
        rang: 'Hockage(died)',
        vallage: 'Leafy Village',
        image: "https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/anime/26/01e7547513569738.jpg" 
        
    },
    {
        name:'Rock',
        clan:'Li',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-preview.jpg" 
        
    },
    {
        name:'Sasori',
        clan:'',
        gender:'Male',
        rang: 'Kuklovod(died)',
        vallage: 'Sand Village',
        image: "https://c4.wallpaperflare.com/wallpaper/767/566/501/anime-naruto-akatsuki-naruto-deidara-naruto-wallpaper-preview.jpg" 
        
    },
    {
        name:'Kankuro',
        clan:'',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Sand Village',
        image: "https://c4.wallpaperflare.com/wallpaper/493/732/942/anime-gaara-naruto-shippuuden-kankuro-wallpaper-preview.jpg" 
        
    },
    {
        name:'Kisame',
        clan:'hoshigake',
        gender:'Male',
        rang: 'Skark(died)',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/521/739/601/naruto-itachi-akatsuki-deidara-wallpaper-preview.jpg" 
        
    },
    {
        name:'Kiba',
        clan:'Inuzuka',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/380/492/18/inuzuka-kiba-naruto-shippuuden-wallpaper-preview.jpg" 
        
    },
    {
        name:'May',
        clan:'Terumi',
        gender:'Female',
        rang: 'Mizukage(was)',
        vallage: 'Leafy Village',
        image: "http://pm1.narvii.com/7333/63648fc32a5c89533ff7fef55ae270be736a3a4cr1-600-1003v2_uhq.jpg" 
        
    },
    {
        name:'Suygesu',
        clan:'Hozuki',
        gender:'Male',
        rang: 'Water',
        vallage: "Orochimaru lab",
        image: "https://c4.wallpaperflare.com/wallpaper/910/24/10/night-artwork-futuristic-city-cyberpunk-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Ibicki',
        clan:'Morino',
        gender:'Male',
        rang: 'jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Hamura',
        clan:'Otsusuki',
        gender:'Male',
        rang: 'Bro',
        vallage: 'Bishkek',
        image: "https://c4.wallpaperflare.com/wallpaper/451/766/342/anime-naruto-hagoromo-%C5%8Ctsutsuki-hamura-%C5%8Ctsutsuki-wallpaper-preview.jpg" 
        
    },
    {
        name:'Izumo',
        clan:'Kamizuki',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/251/585/67/anime-k-project-anna-kushina-izumo-kusanagi-wallpaper-preview.jpg" 
        
    },
    {
        name:'Konohomaru',
        clan:'Sarutobi',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Hagoromo',
        clan:'Otsusuki',
        gender:'Male',
        rang: 'Мудрец 6',
        vallage: 'Village',
        image: "https://c4.wallpaperflare.com/wallpaper/570/368/922/naruto-manga-rinnegan-rikudo-sennin-wallpaper-preview.jpg" 
        
    },
    {
        name:'Zabuza',
        clan:'Momochi',
        gender:'Male',
        rang: 'Killer(died)',
        vallage: 'Tooman Village',
        image: "https://jut.su/forum/uploads/attachment/2016-08/1470513375_zabuza_momochi_anime_hd.png" 
        
    },
    {
        name:'Darui',
        clan:'',
        gender:'Male',
        rang: 'jonin',
        vallage: 'Rain Village',
        image: "https://c4.wallpaperflare.com/wallpaper/186/923/764/video-game-naruto-shippuden-ultimate-ninja-storm-revolution-darui-naruto-naruto-wallpaper-preview.jpg" 
        
    },
    {
        name:'Karin',
        clan:'Uzumaki',
        gender:'Female',
        rang: 'Genin',
        vallage: 'Orochimaru lab',
        image: "https://c4.wallpaperflare.com/wallpaper/537/360/992/love-live-love-live-series-asaka-karin-hd-wallpaper-preview.jpg" 
        
    },
    {
        name:'Sai',
        clan:'',
        gender:'Male',
        rang: 'Jonin',
        vallage: 'Leafy Village',
        image: "https://c4.wallpaperflare.com/wallpaper/692/81/181/naruto-shippuuden-sai-wallpaper-preview.jpg" 
        
    },
    {
        name:'Momshiki',
        clan:'Otsusiki',
        gender:'Male',
        rang: 'God(died)',
        vallage: 'Space',
        image: "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg" 
        
    },
    {
        name:'Toneri',
        clan:'Otsusuki',
        gender:'Male',
        rang: '',
        vallage: 'Moon',
        image: "https://c4.wallpaperflare.com/wallpaper/25/427/648/night-the-moon-naruto-art-wallpaper-preview.jpg" 
        
    },
]
function generateCards(arr){
 const res = arr.map(item => 
  `<div class="card">
    <img class="card_img" src=${item.image} />
    <ul>
      <li>
        name: ${item.name}
      <li/>
      <li>
        clan: ${item.clan}
      <li/>
      <li>
        gender: ${item.gender}
      <li/>
      <li>
        rang: ${item.rang}
      <li/>
      <li>
        vallage: ${item.village}
      <li/>
    <ul/>
  </div>`
  ).join('')
 return res
}

$Container.innerHTML = generateCards(shinobiWorld)
const container = document.querySelector('.cardContainer'); // container div
const nameShinobi = document.querySelector('.nameShinobi'); // input
const clanShinobi = document.querySelector('.clanShinobi'); // input
const rangShinobi = document.querySelector('.rangShinobi'); // input
const villageShinobi = document.querySelector('.villageShinobi'); // input

function showCards(arr){
  const cards = arr.map(({ name, clan,gender, rang, vallage ,image }) => {
      return`
      <div class="cards">
          <div class="shinobiPhoto" style="background: url('${image}')center/cover no-repeat;"></div>
          <div class="shibiInfo">
              <ul class="shinobiParameters">
                  <li>Name:${name}</li>
                  <li>Clan:${clan}</li>
                  <li>Gender:${gender}</li>
                  <li>Rang:${rang}</li>
                  <li>Village:${vallage}</li>
              </ul>
          </div>
      </div>
      `
  }).join('');
  container.innerHTML = cards // inner html добавляет && заменяет
  
}


window.addEventListener('load' , showCards(shinobiWorld)); // load - это когда страница загрузилась


// search by name
nameShinobi.addEventListener('input', e=> {
  const value = e.target.value.toUpperCase();

  const filteredArr = shinobiWorld.filter(({name}) => name.toUpperCase().includes(value));
  showCards(filteredArr)
})

clanShinobi.addEventListener('input' , e=> {
  const value = e.target.value.toUpperCase();

  const filteredClans = shinobiWorld.filter(({clan}) => clan.toUpperCase().includes(value));

  showCards(filteredClans);
})
rangShinobi.addEventListener('input' , e=> {
  const value = e.target.value.toUpperCase();

  const filteredClans = shinobiWorld.filter(({rang}) => rang.toUpperCase().includes(value));

  showCards(filteredClans);
})
villageShinobi.addEventListener('input' , e=> {
  const value = e.target.value.toUpperCase();

  const filteredClans = shinobiWorld.filter(({vallage}) => vallage.toUpperCase().includes(value));

  showCards(filteredClans);
})

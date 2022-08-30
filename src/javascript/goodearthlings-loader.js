var goodearthlingsList = [
  {
    name: 'Shiro',
    imageURL: './src/images/avatar_shiro.jpg',
    profession: 'Geek Vtuber/Cookie Thief',
    facebookURL: 'https://www.facebook.com/profile.php?id=100058698823483',
    twitterURL: 'https://twitter.com/ShiroChLounge',
    youtubeURL: 'https://www.youtube.com/channel/UCTHdNrMvnpr6kez7kNnJ4Lw',
    rating: 5, // max-rating is 5
  },
  {
    name: 'Rayne Fujita',
    imageURL: 'https://pbs.twimg.com/profile_images/1554959978426925057/Z4S_K2GA_400x400.jpg',
    profession: 'UnSeiso Vtuber/Ice Wizard',
    facebookURL: null,
    twitterURL: 'https://twitter.com/FujitaRayne',
    youtubeURL: 'https://www.youtube.com/c/RayneFujitaCh',
    rating: 5, // max-rating is 5
  },
  {
    name: 'Cielo',
    imageURL: './src/images/avatar_cielo.jpg',
    profession: 'Earthman Vtuber',
    facebookURL: null,
    twitterURL: null,
    youtubeURL: 'https://www.youtube.com/channel/UCXNKAX0dD1teqpRGpR8W6PA',
    rating: 5, // max-rating is 5
  },
  {
    name: 'Tanaka Daisuke',
    imageURL: 'https://pbs.twimg.com/profile_images/1508781446844272648/q6JB1JPM_400x400.jpg',
    profession: 'Retired Detective Vtuber/Cook',
    facebookURL: null,
    twitterURL: 'https://twitter.com/tantan_dai',
    youtubeURL: 'https://www.youtube.com/channel/UCNveiZXBevVnDk79fPXp9WA',
    rating: 5, // max-rating is 5
  },
  {
    name: 'Patrick',
    imageURL: './src/images/avatar_patrick.jpg',
    profession: 'Cyclist/Gamer Earthman',
    facebookURL: 'https://web.facebook.com/Patrick.official05',
    twitterURL: null,
    youtubeURL: 'https://www.youtube.com/channel/UCW8d2-oCovqSSBshJskA8ew',
    rating: 5, // max-rating is 5
  },
  {
    name: 'Wendy Wen',
    imageURL: './src/images/avatar_wen.jpg',
    profession: 'Professional Earthman',
    facebookURL: 'https://web.facebook.com/nnotwen',
    twitterURL: ' https://twitter.com/wen_bolongaita',
    youtubeURL: 'https://www.youtube.com/channel/UCYqemyCb2yiMqfrVeMNMmAw',
    rating: 5, // max-rating is 5
  },
  {
    name: 'Klessy',
    imageURL: './src/images/avatar_klessy.jpg',
    profession: 'Joe Papa / Moon Boy',
    facebookURL: null,
    twitterURL: null,
    youtubeURL: 'https://www.youtube.com/channel/UCYIuKWf3zYKWDc6j_IqWvxg',
    rating: 5, // max-rating is 5
  },
  {
    name: 'wasd',
    imageURL: 'https://pbs.twimg.com/profile_images/1538395383189352449/GfyK16CS_400x400.jpg',
    profession: 'Transparent Earthman',
    facebookURL: null,
    twitterURL: 'https://twitter.com/wasdwasd42',
    youtubeURL: null,
    rating: 5, // max-rating is 5
  },
  {
    name: 'Eri',
    imageURL: './src/images/avatar_eri.jpg',
    profession: 'Star-shaped Potato / Erikapter',
    facebookURL: 'https://web.facebook.com/profile.php?id=100074425643923',
    twitterURL: null,
    youtubeURL: null,
    rating: 5, // max-rating is 5
  },
  {
    name: 'Tratachuli',
    imageURL: './src/images/avatar_trata.jpg',
    profession: 'Earthman FB Streamer',
    facebookURL: 'https://web.facebook.com/Tratachuli-103989062191157/',
    twitterURL: null,
    youtubeURL: null,
    rating: 5, // max-rating is 5
  },
  {
    name: 'Maya',
    imageURL: './src/images/avatar_maya.jpg',
    profession: 'Artistic Earthman Maddae',
    facebookURL: 'https://www.facebook.com/profile.php?id=100081383273468',
    twitterURL: null,
    youtubeURL: null,
    rating: 5, // max-rating is 5
  },
  {
    name: 'XiaoMogi',
    imageURL: 'https://cdn.discordapp.com/attachments/958362883941597184/958365749083250718/HAHAHAHA.png',
    profession: 'Game Enjoyer Earthman',
    facebookURL: 'https://web.facebook.com/kwak1kiii',
    twitterURL: null,
    youtubeURL: null,
    rating: 5
  },
  {
    name: 'Cation',
    imageURL: 'https://cdn.discordapp.com/avatars/681694709080391702/899902bc981c21f2a0b9c5d4a1862060.png?size=256',
    profession: 'Meme-sama',
    youtubeURL: 'https://youtube.com/channel/UC204Lwn8PlWRPSjsGjSHZXA',
    rating: 5
  },
  {
    name: 'magikarp',
    profession: 'Earth fishda / osu!mania Smasher',
    imageURL: 'https://images-ext-2.discordapp.net/external/9-PKJiO0q19oYcwkVHDniyfPm2e10ZMc29LHgx37y50/%3Fq%3Dtbn%3AANd9GcQ03qZDMB0OGk8ZN6grqEh03Le2MhFuu-Cw-Q%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images?width=440&height=498',
    rating: 5
  },
  {
    name: 'Yoshi',
    profession: 'Artistic Earthman',
    imageURL: 'https://cdn.discordapp.com/attachments/826336865572749375/1014061786003157002/272fe811848bb06da74f6bdd3313ced5.jpg',
    rating: 5
  }
]

$(function(){
    var $cardContent = $('.swiper-content');

    $.each(shuffleArray(goodearthlingsList)/*.splice(0,9)*/, function(_, entry){
        if (entry.rating > 5) entry.rating = 5;
        if (entry.rating < 0) entry.rating = 0;
        if (isNaN(entry.rating)) entry.rating = 0;

        $cardContent.append(
          `<div class="card swiper-slide">
            <div class="card-content">
              <div class="image">
                <img src="${entry.imageURL}" alt="">
              </div>

              <div class="media-icons">
                <a ${entry.facebookURL ? `title="Facebook" href="${entry.facebookURL}" target="_blank"` : 'title="Facebook: Not Found" class="swiper-media-disabled"'}>
                  <i class="fab fa-facebook"></i>
                </a>
                <a ${entry.youtubeURL ? `title="YouTube" href="${entry.youtubeURL}" target="_blank"` : 'title="YouTube: Not Found" class="swiper-media-disabled"'}>
                  <i class="fab fa-youtube"></i>
                </a>
                <a ${entry.twitterURL ? `title="Twitter" href="${entry.twitterURL}" target="_blank"` : 'title="Twitter: Not Found"class="swiper-media-disabled"'}>
                  <i class="fab fa-twitter"></i>
                </a>
              </div>

              <div class="name-profession">
                <span class="name">${entry.name}</span>
                <span class="profession">${entry.profession}</span>
              </div>

              <div class="rating">
                ${('<i class="fas fa-star"> </i>').repeat(parseInt(entry.rating))}
                ${('<i class="far fa-star"> </i>').repeat(5 - parseInt(entry.rating))}
              </div>
            </div>
          </div>`
        )
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'coverflow',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                // slidesPerGroup: 2, //enable on default effect (slide) disable on effect: coverflow
            },
            950: {
                slidesPerView: 3,
                // slidesPerGroup: 3  //enable on default effect (slide) disable on effect: coverflow
            }
        }
    });
});

function shuffleArray(array) {
  let curId = array.length;
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  };
  return array;
};

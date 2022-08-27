var goodearthlingsList = [
  {
    name: 'notwen',
    imageURL: 'https://avatarfiles.alphacoders.com/894/89424.jpg',
    profession: 'Professional Human',
    facebookURL: 'https://facebook.com/notwen',
    twitterURL: null,
    youtubeURL: null,
    rating: 4, // max-rating is 5
  },
  {
    name: 'Bean, Mr.',
    imageURL: 'https://avatarfiles.alphacoders.com/894/89424.jpg',
    profession: 'Comedian',
    facebookURL: 'https://facebook.com/notwen',
    twitterURL: null,
    youtubeURL: null,
    rating: 3, // max-rating is 5
  },
  {
    name: 'notwen',
    imageURL: 'https://avatarfiles.alphacoders.com/894/89424.jpg',
    profession: 'Sakurajimai#6742',
    facebookURL: 'https://facebook.com/notwen',
    twitterURL: null,
    youtubeURL: null,
    rating: 4, // max-rating is 5
  },
  {
    name: 'notwen',
    imageURL: 'https://avatarfiles.alphacoders.com/894/89424.jpg',
    profession: 'Sakurajimai#6742',
    facebookURL: 'https://facebook.com/notwen',
    twitterURL: null,
    youtubeURL: null,
    rating: 4, // max-rating is 5
  },
]

$(function(){
    var $cardContent = $('.carousel-content');

    $.each(goodearthlingsList, function(_, entry){
        if (entry.rating > 5) entry.rating = 5;
        if (entry.rating < 0) entry.rating = 0;
        if (isNaN(entry.rating)) entry.rating = 0;

        $cardContent.append(
          `<div class=" carousel-card swiper-slide">
            <div class="carousel-card-content">
              <div class="image">
                <img src="${entry.imageURL}" alt="">
              </div>

              <div class="media-icons">
                <a title="Facebook" ${entry.facebookURL ? `href="${entry.facebookURL}" target="_blank"` : 'style="cursor:not-allowed"'}>
                  <i class="fab fa-facebook"></i>
                </a>
                <a title="YouTub" ${entry.youtubeURL ? `href="${entry.youtubeURL}" target="_blank"` : 'style="cursor:not-allowed"'}>
                  <i class="fab fa-youtube"></i>
                </a>
                <a title="Twitter" ${entry.twitterURL ? `href="${entry.twitterURL}" target="_blank"` : 'style="cursor:not-allowed"'}>
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
});

const accounts = [
  {
    siteName: 'YouTube',
    siteURL: 'https://www.youtube.com/channel/UC6nRmYgZEs5sedJnEvCq9Aw',
    siteBanner: 'https://www.color-name.com/color-image?c=D6C9AF&square',
    siteLogo: 'https://img.icons8.com/fluency/344/youtube-play.png',
    siteAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9IjPTy-QrY5Vdu7Y1W2HEbjdTXL2QdkMCMxf-p=s88-c-k-c0x00ffffff-no-rj',
    accountNamePrimary: 'Khaki Alien',
    accountNameSecondary: null,
    description: 'yo, I am Khaki Alien that can sing ig lol',
  },
  {
    siteName: 'TikTok',
    siteURL: 'https://www.tiktok.com/@khaki_alien',
    siteBanner: 'https://i.imgur.com/EH534Xc.png',
    siteLogo: 'https://img.icons8.com/fluency/344/tiktok.png',
    siteAvatar: './src/images/khaki_tiktok_avatar.jpeg',
    accountNamePrimary: 'Khaki Alien',
    accountNameSecondary: '@khaki_alien',
    description: 'yo, i am Khaki Alien that can sing ig lol',
  },
  {
    siteName: 'BandLab',
    siteURL: 'https://www.bandlab.com/khaki_alien',
    siteBanner: 'https://bandlabimages.azureedge.net/v1.0/users/670c0fd5-91d1-46f0-a1c2-18718a5eb035/320x320/blur',
    siteLogo: 'https://www.techwibe.com/wp-content/uploads/2015/11/icon1.png',
    siteAvatar: 'https://bandlabimages.azureedge.net/v1.0/users/670c0fd5-91d1-46f0-a1c2-18718a5eb035/160x160',
    accountNamePrimary: 'Khaki Alien',
    accountNameSecondary: '@khaki_alien',
    description: 'yo, i am Khaki Alien that can sing ig lol',
  },
  {
    siteName: 'osu!',
    siteURL: 'https://osu.ppy.sh/users/26302221',
    siteBanner: './src/images/banner_osu.webp',
    siteLogo: 'https://www.speedrun.com/gameasset/kdkn7xdm/cover?v=8703de7',
    siteAvatar: 'https://a.ppy.sh/26302221?1635864599.jpeg',
    accountNamePrimary: 'Khaki ALien',
    accountNameSecondary: '<img style="height:15px;" src="https://osu.ppy.sh/assets/images/flags/1f1f5-1f1ed.svg"></img> Philippines',
    description: 'yo, i am Khaki Alien that can sing ig lol',
  },
  {
    siteName: 'steam',
    siteURL: 'https://steamcommunity.com/profiles/76561199211022971',
    siteBanner: 'https://cache.desktopnexus.com/thumbseg/2064/2064070-bigthumbnail.jpg',
    siteLogo: 'https://img.icons8.com/fluency/344/steam.png',
    siteAvatar: 'https://avatars.cloudflare.steamstatic.com/97b76e0e35ded7419524cda89c30bf2ff41a53f1_full.jpg',
    accountNamePrimary: 'khakialien',
    accountNameSecondary: '',
    description: ''
  },
  {
    siteName: 'twitch',
    siteURL: 'https://www.twitch.tv/khakialien',
    siteBanner: 'https://cdn.windowsreport.com/wp-content/uploads/2019/09/Twitch-2.jpg',
    siteLogo: 'https://www.freepnglogos.com/uploads/twitch-logo-transparent-png-20.png',
    siteAvatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7c0b6355-d7b0-4078-9636-c4eeb123ec32-profile_image-70x70.png',
    accountNamePrimary: 'KhakiAlien',
    accountNameSecondary: '',
    description: 'An alien. Probably a different alien. Not your child.'
  },
  {
    siteName: 'facebook',
    siteURL: 'https://www.facebook.com/profile.php?id=100079412396828',
    siteBanner: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/292858659_139443382046074_3715263490918368060_n.jpg?stp=dst-jpg_p640x640&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ps-rAL_1AHMAX9Q-TMJ&_nc_ht=scontent.fceb2-2.fna&oh=00_AT8JbhphctOTGMN-2NFVhk-c4u7k1oLuZ98wN9CTF7vqVw&oe=63157EB0',
    siteLogo: 'https://img.icons8.com/fluency/344/facebook-new.png',
    siteAvatar: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/277503038_109861808337565_8923409232688172661_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PlTkyhil574AX8bD9yw&_nc_ht=scontent.fceb2-2.fna&oh=00_AT9eZaoIE4YEZJOHZt_69vxMt2iUfgbuGyfiAz-wVl4A2Q&oe=631403F7',
    accountNamePrimary: 'Khaki Kaniki',
    accountNameSecondary: '',
    description: 'yo, i am Khaki Alien that can sing ig lol',
  }
]

$(function(){
  $(document).ready(function(){
      const container = $('.container');
      $.each(accounts, function(_, entry){
          container.append(
              `<div class="account-card">
                <div class="site-avatar">
                  <img src="${entry.siteAvatar}"></img>
                </div>
                <div class="site-logo">
                  <img src="${entry.siteLogo}"></img>
                </div>
                <div class="banner">
                  <span class="site-name">${entry.siteName}</span>
                  <img src="${entry.siteBanner}"></img>
                </div>
                <div class="content">
                  <div class="name">
                      <h2>${entry.accountNamePrimary}</h2>
                      ${entry.accountNameSecondary || '\u200b'}
                  </div>
                  <span class="divider"></span>
                  <div class="description">${entry.description || '\u200b'}</div>
                  <div class="button-container">
                    <a href="${entry.siteURL}" class="button-link" target="_blank">Visit</a>
                  </div>
                </div>
              </div>`
          );
      });
      container.append(`<div class="account-card invisible">`);
      container.append(`<div class="account-card invisible">`);
  });
});

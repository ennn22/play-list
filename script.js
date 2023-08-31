const musicvideo = [
  {
    title: "Interstellar: A Trip Hop Mix",
    img: "https://i.ytimg.com/vi/n61ULEU7CO0/maxresdefault.jpg",
    name: "Confused Bi-Product of a Misinformed Culture",
    duration: "1:15:55"
  },
  {
    title: "Best of lofi hip hop 2021",
    img: "https://static.vecteezy.com/system/resources/thumbnails/020/734/052/small_2x/animated-studying-lo-fi-background-late-night-homework-2d-cartoon-character-animation-with-nighttime-cozy-bedroom-interior-on-background-4k-footage-with-alpha-channel-for-lofi-music-aesthetic-video.jpg",
    name: "S!X - Music",
    duration: "2:02:50"
  },
  {
    title: "Inspiring mix | lofi hip hop | Chillhop, Jazzhop, Chillout [Study/Sleep/Game]",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05k3_OhVUWaY4ADjbnvLrIis1bWfv9L3-Wg&usqp=CAU",
    name: "Dreamy",
    duration: "1:00:07"
  },
  {
    title: "Chill Study Beats 4 · jazz & lofi hiphop Mix [2017]",
    img: "https://static.vecteezy.com/system/resources/thumbnails/024/805/080/original/dusk-forest-skyline-lo-fi-animation-twilight-sky-spruces-sunset-beauty-in-nature-animated-2d-cartoon-landscape-chill-lofi-music-4k-vaporwave-background-alpha-channel-transparency-video.jpg",
    name: "Chillhop Music",
    duration: "2:02:52"
  },
  {
    title: "Hip Hop 'Funk' Jazz - Ours Samplus",
    img: "https://fiverr-res.cloudinary.com/videos/so_71.701272,t_main1,q_auto,f_auto/xeanzaum3r4omqbp5qru/create-youtube-channel-and-10-lofi-music-animation-videos-8200.png",
    name: "Stay See",
    duration: "2:02:50"
  },
  {
    title: "Interstellar: A Trip Hop Mix",
    img: "https://i.ytimg.com/vi/n61ULEU7CO0/maxresdefault.jpg",
    name: "Confused Bi-Product of a Misinformed Culture",
    duration: "1:15:55"
  },
  {
    title: "Interstellar: A Trip Hop Mix",
    img: "https://i.ytimg.com/vi/n61ULEU7CO0/maxresdefault.jpg",
    name: "Confused Bi-Product of a Misinformed Culture",
    duration: "1:15:55"
  },
  {
    title: "Best of lofi hip hop 2021",
    img: "https://static.vecteezy.com/system/resources/thumbnails/020/734/052/small_2x/animated-studying-lo-fi-background-late-night-homework-2d-cartoon-character-animation-with-nighttime-cozy-bedroom-interior-on-background-4k-footage-with-alpha-channel-for-lofi-music-aesthetic-video.jpg",
    name: "S!X - Music",
    duration: "2:02:50"
  },
  {
    title: "Inspiring mix | lofi hip hop | Chillhop, Jazzhop, Chillout [Study/Sleep/Game]",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05k3_OhVUWaY4ADjbnvLrIis1bWfv9L3-Wg&usqp=CAU",
    name: "Dreamy",
    duration: "1:00:07"
  }
]

const playList = document.querySelector(".playlist");

const addToList = (musicvideo) => {
  const list = document.createElement('div');
  list.classList.add('video-wrapper');
  
  list.innerHTML = `
    <div class="mv-img">
      <img src="${musicvideo.img}">
      <p class="duration">${musicvideo.duration}</p>
    </div>
    <div class="mv-details">
      <h5 class="mv-title">${musicvideo.title}</h5>
      <h6 class="mv-name">${musicvideo.name}</h6>
    </div>
  `
  playList.appendChild(list);
};

musicvideo.forEach(addToList);



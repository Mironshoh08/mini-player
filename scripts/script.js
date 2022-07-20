new Vue({
  el: "#app",
  data() {
    return {
    
      tracks: [
        {
          name: "none",
          artist: "Se Acabo",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/1.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "Вот как и так",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/2.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "Middle of the night",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/3.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "Ты и я",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/4.mp3",

          favorited: true
        },
        {
          name: "none",
          artist: "Наверно ты меня не помнишь",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/5.mp3",
          favorited: true
        },
        {
          name: "none",
          artist: "Deep dancing",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/6.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "Go gyal",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/7.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "Моя душа",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/8.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "Devil Eyes",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/9.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "Number Frozen",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/10.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/10.mp3",
      
          favorited: true
        },
        {
          name: "none",
          artist: "Налей мне херес",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/11.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/11.mp3",
         
          favorited: true
        },
        {
          name: "none",
          artist: "Extazy",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/12.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/12.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "This is my life",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/13.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/13.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "Volna",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/14.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/14.mp3",
        
          favorited: true
        },

        {
          name: "none",
          artist: "Catharsis",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/15.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/15.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "Jiggle Jiggle",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/16.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/16.mp3",
       
          favorited: true
        },
        {
          name: "none",
          artist: "No Lie",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/17.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "WE DON'T TALK ANYMORE",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/18.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/18.mp3",
          
          favorited: true
        },
        {
          name: "none",
          artist: "Paro",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/19.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/19.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "Qara 07",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/20.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/20.mp3",
      
          favorited: true
        },
        {
          name: "none",
          artist: "Close Eyes",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/21.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/21.mp3",
        
          favorited: true
        },
        {
          name: "none",
          artist: "My Baby",
          cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/22.jpg",
          source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/22.mp3",
        
          favorited: true
        },
        /*    
         {
           name: "Overdose",
           artist: "Grandson",
           cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/22.jpg",
           source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/22.mp3",
           url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
           favorited: true
         },
         {
           name: "Rag'n'Bone Man",
           artist: "Human",
           cover: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/img/23.jpg",
           source: "https://raw.githubusercontent.com/Mironshoh08/mini-player/master/mp3/23.mp3",
           url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
           favorited: true
         } */
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

<template>
  <div id="app">
    <div class="wrapper">
      <div class="logo"></div>
      <div class="big_slider" :style="{backgroundImage: `url(../assets/1.jpg)`}">
        <!-- ${activeSlide} -->
        <div class="small_carousel">
          <div v-for="(item, index) in items" :key="index" class="small_carousel_item" :style="{backgroundImage: `url(${item.img})`}"></div>
        </div>
        <div class="big_slider_nav"></div>
        <div class="big_slider_counter"></div>
      </div>
    </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/> -->
  </div>
</template>
<script>
export default {
  components:{
    
  },
  data() {
    return {
      activeSlide: '',
      items: [
        {
          title: "Test title slide 1",
          text: "Test exemplet zalupa text slide 1",
          img: "./assets/images/1.jpg",
        },
        {
          title: "Test title slide 2",
          text: "Test exemplet zalupa text slide 2",
          img: "./assets/images/2.jpg",
        },
        {
          title: "Test title slide 3",
          text: "Test exemplet zalupa text slide 3",
          img: "./assets/images/4.jpg",
        },
        {
          title: "Test title slide 4",
          text: "Test exemplet zalupa text slide 4",
          img: "./assets/images/4.jpg",
        },
      ],
    };
  },
  methods: {
    prev(item){
      this.activeSlide = item.img
    },
    next(item){
      this.activeSlide = item.img
    }
  }
};
</script>
<style lang="sass">
*
  padding: 0
  margin: 0
  box-sizing: border-box
::selection
  background: tomato
body
  color: #fff
  background-color: transparent
  overflow: hidden
.wrapper
  position: relative
  width: 100%
  height: 100vh
.logo
  position: absolute
  left: 20px
  top: 20px
  width: 100px
  height: 22px
  background-color: green
  border-radius: 30px
  z-index: 100
.big_slider
  width: 100%
  height: 100vh
  position: relative
  display: flex
  justify-content: flex-start
  flex-direction: column
  &_list
    width: 100%
    height: 100%
    padding: 20px
    background-color: #fff
    background-position: 50% 50%
    background-attachment: scroll
    background-size: cover
    background-repeat: no-repeat
  &_nav
    background: #000
    position: relative
.small
  &_carousel
    position: relative
    display: flex
    max-width: 700px
    justify-content: flex-start
    flex-direction: row
    z-index: 110
    &_item
      margin: 20px
      background-color: #333
</style>

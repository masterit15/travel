<template>
  <div id="app">
    <div class="wrapper">
      <div class="logo"></div>
      <div class="big_slider">
        <div class="big_slider_list">
          <div v-for="(item, index) in items" :key="index" class="big_slider_item" :style="{backgroundImage: `url(${item.img})`}"></div>
        </div>
        <div class="small_carousel">
            <alignable-carousel :align="dynamicAlign">
              <rl-carousel-slide v-for="(item, index) in items" :key="index">
                          <div class="small_slider_item" :style="{backgroundImage: `url(${item.img})`}"></div>

              </rl-carousel-slide>
            </alignable-carousel>
          <div class="flex justify-around">
            <button @click="dynamicAlign = 'left'">
              Left
            </button>
            <button @click="dynamicAlign = 'center'">
              Centre
            </button>
            <button @click="dynamicAlign = 'right'">
              Right
            </button>
          </div>
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
import AlignableCarousel from './components/AlignableCarousel'
export default {
  components:{
    AlignableCarousel
  },
  data() {
    return {
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
    dynamicAlign(){
      console.log('dynamicAlign');
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
    z-index: 110
  &_slider
    &_item
      width: 300px
      height: 400px
      background-color: #333
</style>

<template>
  <div id="app">
    <div class="wrapper">
      <div class="logo">
        travel
      </div>
      <div class="big_slider" :style="{backgroundImage: `url(${activeSlide})`}">
        <div class="big_slider_wrap">
          <div class="big_slider_content">
              <div class="big_slider_hidden"><h1 class="big_slider_title">{{title}}</h1></div>
              <div class="big_slider_hidden"><p class="big_slider_text">{{text}}</p></div>
          </div>
          <div class="small_carousel">
            <div v-for="(item, index) in items" :key="index" class="small_carousel_item" :data-img="item.img" :data-title="item.title" :data-text="item.text" :data-index="index" :style="{backgroundImage: `url(${item.img})`}"></div>
          </div>
        </div>
      </div>
    </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/> -->
  </div>
</template>
<script>
const img = require('./assets/images/1.jpg')
import { tns } from "tiny-slider/src/tiny-slider"
export default {
  components:{
    
  },
  data() {
    return {
      activeSlide: img,
      title: 'pizdaty travel',
      text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова?',
      options: {
          autoplay: true,
          type   : 'slide',
          // loop
			  	// rewind : true,
          speed: 1000,
          easing: 'cubic-bezier(0.795, 0.005, 0.260, 1.010)',
          updateOnMove: true,
				  width  : '1000px',
				  perPage: 3,
          perMove: 1,
				  gap    : '30px',
          fixedHeight: '400px',
          fixedWidth: '300px',
			  },
      items: [
        {
          title: "Test title slide 1",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 1",
          img: require('./assets/images/1.jpg'),
        },
        {
          title: "Test title slide 2",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 2",
          img: require('./assets/images/2.jpg'),
        },
        {
          title: "Test title slide 3",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 3",
          img: require('./assets/images/3.jpg'),
        },
        {
          title: "Test title slide 4",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 4",
          img: require('./assets/images/4.jpg'),
        },
        {
          title: "Test title slide 5",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 5",
          img: require('./assets/images/1.jpg'),
        },
        {
          title: "Test title slide 6",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 6",
          img: require('./assets/images/2.jpg'),
        },
        {
          title: "Test title slide 7",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 7",
          img: require('./assets/images/3.jpg'),
        },
        {
          title: "Test title slide 8",
          text: "Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Выйти залетают lorem там до точках повстречался вдали океана пояс, за предупредила ipsum реторический дал строчка, свой правилами оксмокс снова? 8",
          img: require('./assets/images/4.jpg'),
        },
      ],
    };
  },
  mounted(){
    let slider = tns({
      container: '.small_carousel',
      items: 3,
      slideBy: 'page',
      autoplay: true
    });
  },
  methods: {
    onMounted(splide){
      let activeItem = document.querySelector('.splide__slide.is-active>.small_carousel_item')
      this.activeSlide = activeItem.dataset.img
      this.title = activeItem.dataset.title
      this.text = activeItem.dataset.text
    },
    onActive(splide){
      let activeItem = document.querySelector('.splide__slide.is-active>.small_carousel_item')
      let slideTitle = document.querySelector('.big_slider_title')
      let slideText = document.querySelector('.big_slider_text')
      // slideTitle.classList.remove('show')
      // slideText.classList.remove('show')
      setTimeout(()=>{
        // slideTitle.classList.add('show')
        // slideText.classList.add('show')
        this.title = activeItem.dataset.title
        this.text = activeItem.dataset.text
      },400)
      this.activeSlide = activeItem.dataset.img
      
    },
    onInActive(splide, newIndex, oldIndex, destIndex){
      // console.log(newIndex, oldIndex);
      let slideTitle = document.querySelector('.big_slider_title')
      let slideText = document.querySelector('.big_slider_text')
      let Items = document.querySelectorAll('.splide__slide')
      Items.forEach(item=>{
        item.classList.remove('fade')
      })
      
      if(newIndex > oldIndex){
        slideTitle.style.transform = 'translateY(100px)'
        slideText.style.transform = 'translateY(100px)'
        slideTitle.style.transform = 'translateY(0px)'
        slideText.style.transform = 'translateY(0px)'
        Items[splide.index].classList.add('fade')
        setTimeout(()=>{Items[splide.index].classList.remove('fade')},400)
      }else{
        slideTitle.style.transform = 'translateY(-100px)'
        slideText.style.transform = 'translateY(-100px)'
        slideTitle.style.transform = 'translateY(0px)'
        slideText.style.transform = 'translateY(0px)'
      }
      
    },
    arrowAction(splide, newIndex, oldIndex, destIndex){
      console.log(prevIndex, nextIndex);
    }
  }
};
</script>
<template>
	<div class="swiper pb-3">
	<swiper :options="swiperOption"  class="swiper-container" ref="mySwiper">
    <!-- slides @someSwiperEvent="callback" -->
    <swiper-slide >
      <a href="http://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&e_code=501022&idataid=295187&tid=579806">
        <img class="w-100" src="@/assets/images/home/homeswiper1.jpeg" alt=""> 
      </a>
    </swiper-slide>
    <swiper-slide >
      <a href="http://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&e_code=501085&idataid=295234&tid=579912">
        <img class="w-100" src="@/assets/images/home/homeswiper2.jpeg" alt=""> 
      </a>
    </swiper-slide>
    <swiper-slide >
      <a href="http://pvp.qq.com/m/m201606/detail.shtml?G_Biz=18&e_code=500771&idataid=294923&tid=578932">
        <img class="w-100" src="@/assets/images/home/homeswiper3.jpeg" alt=""> 
      </a>
    </swiper-slide>
    <!-- <swiper-slide ><img class="w-100" src="@/assets/images/home/homeswiper2.jpeg" alt=""></swiper-slide>
    <swiper-slide ><img class="w-100" src="@/assets/images/home/homeswiper3.jpeg" alt=""></swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination pagination-home text-right px-3 pb-1"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
	</div>
  
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
  export default {
		name: 'carrousel',
		components: {
			swiper,
			swiperSlide
		},
    data() {
      return {
        swiperOption: {
					notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          // initialSlide:0,
          //自动播放
          // autoplay:true,
          autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,//手动操作后是否停止自动轮播
          },
          // 设置轮播方式
          // effect : 'flip',
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数
          // on: {
          //     slideChangeTransitionEnd: function(){
          //       // window.console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          //     },
          // },
          //左右点击
          // navigation: {
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          // },
          //分页器设置         
          // pagination: {
          //     el: '.swiper-pagination',
          //     clickable :true
          // }
					swiperSlides: [1, 2, 3],
					pagination: {
						el: '.pagination-home',
						clickable :true
					}
				}
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
			}
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      window.console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, true)
    },
    created() {
      // this.GetHomeSwiper();
    },
		methods: {
      // async GetHomeSwiper() {
      //   const res = await this.$request.get('ads')
      //   this.ads = res.data;
      //   window.console.log(res.data);
      // }
			// callback() {
			// 	const mySwiper = new Swiper('.swiper-container',{ speed: 400});
			// 	// let mySwiper = document.querySelector('.swiper-container').swiper
			// window.console.log(mySwiper)
			// }
		}
  }
</script>
<style lang="scss">
@import '@/assets/css/style.scss';
.swiper-container {
	position: relative;
	.pagination-home {
	// position: absolute;
	// bottom: 3rem;
	.swiper-pagination-bullet {
		opacity: 1;
		border-radius: 0.1538rem;
		background: map-get($map: $colors, $key: "white");

		&.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: 'info' );
    }
	}

}
}


</style>
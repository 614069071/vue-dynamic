<template>
  <div class="content">
    <div class="list list1">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

    <div class="list list2">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang='scss'>
// .content {
//   width: 1200px;
//   height: 400px;
//   perspective: 6000px;
//   transform-style: preserve-3d;
//   transform: rotateX(-10deg) rotateY(-0deg) rotateZ(0deg);
//   perspective-origin: center center;
//   position: relative;
//   top: 0px;
// }

// .list {
//   position: absolute;
//   width: 200px;
//   height: 200px;
//   left: 300px;
//   top: 100px;
//   transform-style: preserve-3d;
//   perspective-origin: center center;
// }

// .list .item {
//   width: 200px;
//   height: 200px;
//   line-height: 200px;
//   color: white;
//   position: absolute;
//   text-align: center;
// }

//方法1 使用for给每个元素设置背景色
// $color1: red blue black green;
// $color2: pink yellow orange yellowgreen;
// @for $i from 1 to 5 {
//   $c: nth($color1, $i); //对应的每一项
//   .list1 .item:nth-of-type(#{$i}) {
//     background-color: $c;
//   }
// }

//方法2 使用each给每个元素设置背景色
// @each $c in $color2 {
//   $i: index($color2, $c); //对应的每一项下标
//   .list2 .item:nth-of-type(#{$i}) {
//     background-color: $c;
//   }
// }

// .list1 {
//   transform: rotateY(45deg);
//   animation: rotate1 8s infinite linear;
// }

// .list2 {
//   animation: rotate1 8s infinite linear;
//   animation-delay: 1s;
// }

@keyframes rotate1 {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

// .list .item:nth-child(1) {
//   transform: rotateY(90deg);
//   left: -250px;
// }

// .list .item:nth-child(2) {
//   transform: rotateY(90deg);
//   left: 250px;
// }

// .list .item:nth-child(3) {
//   transform: translateZ(250px);
// }

// .list .item:nth-child(4) {
//   transform: translateZ(-250px);
// }

// $images: 1 2 1 2 3 4 3 4;

// @each $i in $images {
//   $index: index($images, $i);
//   .list div.item:nth-child(#{$index}) {
//     background-image: url(../../assets/baby#{$i}.jpg);
//     background-position: center;
//     background-size: contain;
//   }
// }

// .content div.item:nth-of-type(7) {
//   background-color: #eee !important;
// }

</style>
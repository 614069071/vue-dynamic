<template>
  <div class="home-page">
    <header class="header">Header</header>
    <section class="content">
      <div class="aside  clear-scroll-bar">
        <MenuTree />
      </div>
      <div class="main">
        Main content
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import MenuTree from '@/views/MenuTree/Menu';
export default {
  components: { MenuTree },
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eee;
}

.header {
  height: 100px;
  line-height: 100px;
  background-color: red;
  margin-bottom: 6px;
  text-align: center;
}

.content {
  flex: 1;
  background-color: #eee;
  display: flex;
  overflow: hidden;
  .aside {
    width: 200px;
    height: 100%;
    background-color: lightblue;
    margin-right: 6px;
    overflow: auto;
  }
  .main {
    flex: 1;
    background-color: #ccc;
    text-align: center;
    overflow: auto;
  }
}
</style>

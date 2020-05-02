<template>
  <div>
    <div @click="login">logins</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapMutations(['setPermission']),
    login() {
      // 模拟登录
      setTimeout(() => {
        this.setPermission(true);
        this.$router.push('/home');
      }, 3000);
    }
  }
};
</script>

<style>
</style>
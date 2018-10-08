<template>
  <div id="app">
  	<Vloading v-show="isLoading"></Vloading>
    <router-view></router-view>
  </div>
</template>

<script>
import  Vloading from '@/components/common/loading.vue'
import { mapState } from 'vuex'

export default {
    name: 'app',
    created() {
    },
    computed: {
      ...mapState({
         isLoading: state => state.load.loading
      })
    },
    components:{
        Vloading
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

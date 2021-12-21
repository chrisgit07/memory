<template>
  <div class="main">
    <Header></Header>
    <Page></Page>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Page from './Page.vue'
import Footer from './Footer.vue'

export default {
  name: 'MainLayout',
  components:{
    Header,
    Page,
    Footer
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

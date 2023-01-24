<template>
  <v-app id="inspire">
    <TopBar />
    <!-- side ber  -->
    <SideBar />
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/Components/SideBar.vue';
import TopBar from '@/Components/TopBar.vue';

  export default {
    components:{
        SideBar,
        TopBar,
    },
    
  }
</script>
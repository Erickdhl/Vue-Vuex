<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text" class="form-control" placeholder="Buscar entrada">
    </div>
  </div>

  <div class="entry-scrollarea">
    <EntryVue v-for="item in 100" :key="item"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        EntryVue: defineAsyncComponent(() => import('./EntryVue.vue'))
    }
}
</script>


<style lang="scss" scoped>
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc( 11vh - 56px );
}

.entry-scrollarea{
    height: calc( 100vh - 140px );
    overflow: scroll;
}
</style>
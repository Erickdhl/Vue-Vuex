<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text" class="form-control" placeholder="Buscar entrada" v-model="term" />
    </div>
  </div>

  <div class="mt-2 d-flex flex column">
    <button class="btn btn-primary mx-5"
      @click="$router.push({ name: 'entry', params: {id: 'new'}})">

      <i class="fa fa-plus-circle"></i>
      Nueva entrada
    </button>
  </div>
  <div class="entry-scrollarea">
    <EntryVue v-for="entry in entriesByTer" :key="entry.id" :entryE="entry"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from 'vuex'
export default {
    components: {
        EntryVue: defineAsyncComponent(() => import('./EntryVue.vue'))
    },
    computed: {

      ...mapGetters('journal',{
      getEntriesByTerm :'getEntriesByTerm'}),
      
      entriesByTer(){
        return this.getEntriesByTerm(this.term)
      }
    },
    data() {
      return {
        term: ''
      }
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
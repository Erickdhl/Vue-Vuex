<template>
  <div class="d-flex justify-content-center">
     <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <FabVue
   @sendclick="createNewEntry" 
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { ref } from "vue";

const expanded = ref(false)
export default {
    components: {
        FabVue: defineAsyncComponent(() => import('../componets/FabVue.vue'))
    },
    methods: {
        createNewEntry() {
            this.$router.push({ name: 'entry', params: { id: 'new'} })
        },
        
    }
}
</script>


<style lang="scss" scoped>
div {
    height: 100%;
}
</style>
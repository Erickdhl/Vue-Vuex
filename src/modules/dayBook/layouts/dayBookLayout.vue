<template>
    <navbarVue/>
    <div class="d-flex">
        <div class="col-4">
            <EntryListVue/>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        navbarVue: defineAsyncComponent(() => import('../componets/navbarVue.vue')),
        EntryListVue: defineAsyncComponent(() => import('../componets/EntryListVue.vue'))
    }
}
</script>

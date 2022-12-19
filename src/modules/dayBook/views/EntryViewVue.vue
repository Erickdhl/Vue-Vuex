<template>
  <template v-if="EntryData">
    <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span   class="text-success fs-3 fw-bold">{{ day }}</span>
        <span  class="mx-1 fs-3">{{month}}</span>
        <span  class="mx-2 fs-4 fw-light">{{yearDay}}</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
    </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
        <textarea v-model="EntryData.text" placeholder="¿Qué Sucedio hoy?">{}</textarea>
    </div>
  </template>
    
  <FabVue icon="fa-save" @sendclick="saveEntry" />

  <img src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg" 
  alt="entry-picture"
  class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from "vue"
import { mapGetters, mapActions } from 'vuex'
import getDayMonthYear from "../helpers/getDayMonthYear";
export default {
    props:{
        id: {
            type: String,
            required: true
        }
    },
    components: {
        FabVue: defineAsyncComponent(() => import('../componets/FabVue.vue'))
        
    },
    data() {
        return {
            EntryData: null
        }
    },
    methods: {
        ...mapActions('journal',{
        updateEntry :'updateEntry'}),
        
        loadEntry() {
            let entry;
            if( this.id === 'new'){
                entry = {
                    text: '',
                    date: new Date().getTime()
                }

            } else {
                entry = this.getEntriesByID(this.id)
            if(!entry)
            return this.$router.push({ name: 'no-entry' })
            
            }

            this.EntryData = entry

        },
        async saveEntry() {

            if( this.EntryData.id ){
                await this.updateEntry(this.EntryData)
            } else {
                console.log('Nueva entrada')
                console.log(this.EntryData);
            }

             
             
        }
    },
    computed: {

      ...mapGetters('journal',{
      getEntriesByID :'getEntryById'}),

      day(){
        const {day} = getDayMonthYear(this.EntryData.date)
        return day
        },
      month() {
        const {month} = getDayMonthYear(this.EntryData.date)
        return month
      },
      yearDay() {
        const {yearDay} = getDayMonthYear(this.EntryData.date)
        return yearDay
      }

    },
    

    created() {
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    
    &:focus{
        outline: none;
    }

}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
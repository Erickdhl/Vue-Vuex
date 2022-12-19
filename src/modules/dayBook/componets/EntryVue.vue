<template>
  <div @click="$router.push({name: 'entry', params: {id: entryE.id}})" class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold"> {{day}} </span>
        <span class="mx-1 fs-5">{{month}}</span>
        <span class="mx-2 fw-light">{{YearDay}}</span>

    </div>
    <div class="entry-description">
        {{shortText}}
    </div>
  </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

export default {

    props: {
        entryE: {
            type: Object,
            required: true
        }

    },
    computed: {
        shortText(){
            return (this.entryE.text.length > 100)
            ? this.entryE.text.substring(0,100)+ '...'
            : this.entryE.text
        },
        day(){
            const date = new Date(this.entryE.date)
            return date.getDate()
        },
        month(){
            const date = new Date(this.entryE.date)
            return months[date.getMonth()]
        },
        YearDay(){
            const date = new Date(this.entryE.date)
            return `${date.getFullYear()}, ${days[date.getDay()]}`
        }
    }
}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2 all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }

}
.entry-description{
    font-size: 15px;
}
</style>
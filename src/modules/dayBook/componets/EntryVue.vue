<template>
  <div @click="$router.push({name: 'entry', params: {id: 10}})" class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15 </span>
        <span class="mx-1 fs-5">julio</span>
        <span class="mx-2 fw-light">2022</span>

    </div>
    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel. Nemo voluptas cum libero mollitia quaerat dolorum, laudantium quidem perferendis excepturi tempore! Quidem, molestiae possimus reprehenderit explicabo soluta facilis recusandae.
    </div>
  </div>
</template>

<script>
export default {

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
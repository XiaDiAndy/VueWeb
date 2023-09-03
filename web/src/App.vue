<script setup lang="ts">
import Main from './views/MainWeb.vue'
import requset from './utils/Request'

  requset({
    method:"GET",
    url:"/front/ad/getAdList"
  }).then((res) =>{
    console.log(res);
  })
</script>

<template>
  <Main></Main>
</template>

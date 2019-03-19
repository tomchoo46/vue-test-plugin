<template>
    <div class="plugin-container" v-if="show" style="font-size: 50px; text-align: center; color: red">
      test
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  }
}
</script>
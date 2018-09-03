<template>
    <div class="right">
        <v-head></v-head>
        <router-view/>
    </div>
</template>

<script>
import vHead from "@/components/common/Head";
export default {
  components: {
    vHead
  }
};
</script>

<style scoped>
.right{background-color: #fafafa;}
</style>

<template>
    <div class="admin">
        <div class="left">
            <v-left></v-left>
        </div>
        <div class="right">
            <v-right></v-right>
        </div>
    </div>    
</template>

<script>
import vLeft from '@/components/common/Left'
import vRight from '@/components/common/Right'
export default {
    components:{
        vLeft,vRight
    }
}
</script>

<style scoped>
.admin{width: 100%;height: 100%;overflow: hidden;display:flex;}
.left{width: 200px;height: 100%;}
.right{width: 100%;height: 100%;}
</style>



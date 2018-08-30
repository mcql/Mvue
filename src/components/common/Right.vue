<template>
    <div>
        <v-head></v-head>
        <router-view/>
    </div>
</template>

<script>
import vHead from '@/components/common/Head'
export default {
    components:{
        vHead
    }
}
</script>


// 方式1：代码嵌入
<template>
    <div>
        <!-- 头部 -->
        <Header/>
        <!-- 主体 -->
        <div class="main">
            <!-- 添加代码 -->


            
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header/index.vue'

export default {
    components:{
        Header
    }
}
</script>

<style lang="stylus" scoped>
.main
    height 100%
</style>

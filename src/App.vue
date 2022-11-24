<template>
    <div class="root">
        <h1>App根组件</h1>
        <Request :request_name="book_req" :request_api="book_api"></Request>
        <hr />
        <Left>
            <Request :request_name="good_req" :request_api="good_api"></Request>
        </Left>
    </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Request from "@/components/Request.vue";

export default {
    
    components: {
        Left,
        Right,
        Request
    },

    data() {
        return {
            book_req: '书籍',
            book_api: 'getBooks',
            good_req: '商品',
            good_api: 'initGoods',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.root {
    padding: 5px 20px 260px 20px;
    background-color: #9e9b99f4;
}
</style>

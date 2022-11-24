<template>
    <div>
        <button @click="request_get">获取{{request_name}}</button>
    </div>
</template>

<script>
export default {

    props: {
        request_name: {
            type: String,
            default: '',
            required: true
        },
        request_api: {
            type: String,
            default: '',
            required: true
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        async request_get() {
            var result = await this.axios.get(this.request_api);
            /** 页面需要渲染的东西, 理论上都应该在 data 中定义! */
            console.log(result);
            if (result.status === 200) {
                this.list = result.data;
            }
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
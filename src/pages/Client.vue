<template>
    <div class="client">
        <div class="avatar">
            <img :src="client.avatar.src" alt="">
        </div>
        <div class="name-block">
            <h1>{{ client.firstName }}</h1>
            <h1>{{ client.lastName }}</h1>
        </div>
        <div class="button-block">
            <a href="" class="btn"><i class="fas fa-video"></i></a>
            <a href="" class="btn"><i class="fas fa-comment"></i></a>
        </div>
        <div class="diagnoz">
            <p>{{ client.diagnoz }}</p>
            <textarea name="" id="" cols="30" rows="10" v-model="msg" @focus="diagnozChange()" @blur="diagnozUnChange()"></textarea>
        </div>
        <div class="btn-send">
            <a href="">Отправить</a>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data: () => ({
        msg: ''
    }),

    computed:{
        ...mapState(['client'])
    },

    methods:{
        diagnozChange(){
            this.msg = this.client.diagnoz
        },

        diagnozUnChange(){
            this.msg = ''
        }
    }
}
</script>

<style scoped>
    .client{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
    }

    .avatar{
        display: flex;
        justify-content: center;
    }

    .avatar img{
        width: 210px;
        height: 210px;
        border-radius: 50%;
    }

    .name-block{
        margin-top: 30px;
    }

    .name-block h1{
        font-size: 28px !important;
        font-weight: bold;
    }

    .diagnoz{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .diagnoz p{
        width: 500px;
        text-align: left;
        font-size: 20px;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
    }

    .diagnoz textarea{
        width: 500px;
        border: 1px solid black;
        border-radius: 25px;
        margin-top: 40px;
    }

    .button-block{
        display: flex;
        max-width: 340px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .btn{
        font-size: 36px;
        width: 150px;
        background-color: green;
        color: white;
        display: block;
        border-radius: 25px;
    }

    .button-block a+a{
        margin-left: 40px;
    }

    .btn-send a{
        font-size: 36px;
        width: 200px;
        border-radius: 8px;
        color: white;
        display: block;
        background-color: green;
        padding: 5px;
    }

    .btn-send{
        margin-top: 40px;
    }
</style>
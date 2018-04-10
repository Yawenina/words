<template>
  <div class="word" @click="showDetail=!showDetail">
    <p class="flex">
      <span class="icon left">👉</span>
      <span class="right word__text">{{item.word}}</span>
    </p>
    <transition name="fade">
      <div class="flex" v-show="showDetail">
        <div class="left"></div>
        <ul class="right">
          <li class="detail__item">{{item.meaning}}</li>
          <li class="detail__item">{{item.cn}}</li>
          <li class="detail__item">{{item.en}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { WordDAO } from '../modules';

  @Component({
    props: {
      item: Object
    }
  })

  export default class WordItem extends Vue {
    item: WordDAO
    showDetail: boolean = false
  }
</script>

<style lang="scss">
  .flex {
    display: flex;
    align-items: center;
  }
  .left {
    width: 40px;
  }
  .word {
    margin-bottom: 20px;
    cursor: pointer;
  }
  .word__text {
    flex: 1;
    color: #42b983;
    font-size: 18px;
    font-weight: bold;
  }
  .detail__item {
    margin: 10px 0;
    list-style: inside;
   }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

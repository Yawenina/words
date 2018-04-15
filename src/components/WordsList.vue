<template>
  <div class="wordsList">
    <word-item v-for="(word, index) in words" :item="word" :key="index" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { getWordList } from '../service';
  import { WordDAO } from '../modules';
  import WordItem from '../views/WordItem.vue';

  @Component({
    components: {
      WordItem
    }
  })
  export default class WordsList extends Vue {
    words: WordDAO[] = []

    mounted() {
      getWordList().then(res => this.words = res.data);
    }
  }
</script>

<style lang="scss">
</style>

<template>
  <div class="addWord">
    <Alert :type="alertProp.type" :message="alertProp.message" v-show="showAlert" />
    <form class="addWord" @submit="onSubmit" ref="form">
      <div class="field">
        <label class="label">单词</label>
        <div class="control">
          <input v-model="word" :class="['input', {'is-danger': !isValidate}]"
                 type="text" @focus="isValidate=true"
                 placeholder="eg: puma">
        </div>
        <p class="help is-danger" v-show="!isValidate">{{errorMsg}}</p>
      </div>
      <div class="field">
        <label class="label">释义</label>
        <div class="control">
          <input v-model="meaning" class="input" type="text" placeholder="eg: n. 美洲狮">
        </div>
      </div>
      <div class="field">
        <label class="label">英文例句</label>
        <div class="control">
          <input v-model="en" class="input" type="text" placeholder="eg: A puma at large.">
        </div>
      </div>
      <div class="field">
        <label class="label">中文例句</label>
        <div class="control">
          <input v-model="cn" class="input" type="text" placeholder="eg: 逃窜的美洲狮">
        </div>
      </div>
      <div class="control">
        <button class="button is-link">添加</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Alert from './Alert.vue';
  import { addWord } from '../service';
  import { alertObj } from '../modules';

  @Component({
    components: {
      Alert
    }
  })
  export default class AddWord extends Vue {
    word: string = ''
    meaning: string = ''
    en: string = ''
    cn: string = ''
    isValidate: boolean = true
    errorMsg: string = ''
    showAlert: boolean = false
    alertProp: alertObj = {
      type: 'success',
      message: '添加成功！'
    }
    timerId: number

    displayAlert(): void {
      this.showAlert = true;
      this.showAlert = true;
      this.timerId = window.setTimeout(() => this.showAlert = false, 1200);
    }

    resetFormData() {
      this.word = '';
      this.meaning = '';
      this.en = '';
      this.cn = '';
    }

    onSubmit(): void {
      if (!this.word) {
        this.isValidate = false;
        this.errorMsg = '单词不能为空';
        return;
      }

      addWord({
        word: this.word,
        meaning: this.meaning,
        en: this.en,
        cn: this.cn
      }).then(() => {
        this.alertProp = {
          type: 'success',
          message: '添加成功！'
        };
        this.displayAlert();
        this.resetFormData();
      }).catch(err => {
        console.error(err);
        this.alertProp = {
          type: 'danger',
          message: `添加失败！${err.message}`
        };
        this.displayAlert();
      })
    }

    unmounted() {
      clearTimeout(this.timerId)
    }
  }
</script>

<style lang="scss">
</style>

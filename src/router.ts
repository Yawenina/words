import Vue from 'vue';
import Router from 'vue-router';
import AddWord from './components/AddWord.vue';
import WordsList from './components/WordsList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/add',
      alias: '/',
      name: 'home',
      component: AddWord,
    },{
      path: '/list',
      name: 'List',
      component: WordsList
    }
  ],
});

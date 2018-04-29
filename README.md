# 单词
![status img](https://travis-ci.org/Yawenina/words.svg?branch=master)
## 踩过的坑--后端
1. 一定要在引入 mongoose `model` 之后再引入 `app`, 否则会报错：`model doesn't register`;
2. 

## 踩过的坑--前端
1. `ts` 使用方法：
  - `<script lang=ts>`
  -  `import Vue from vue`
  - `@Component({})` 这里声明的只能是原生 JS 的数据类型，不能是 TS 中定义的，随后在 `class` 中声明 `foo: fooType`
  - `timerId：number` 需要使用`window.setTimeout`调用
  - `strictPropertyInitialization` 配置项决定是否要初始化变量
  - ` (this.$refs.form as HTMLFormElement).reset();`
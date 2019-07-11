# umi-plugin-ba

Umi plugin to support baidu analytics

## use

### install

`yarn add umi-plugin-ba`

### config

```js
export default {
  plugins: [
    [
     .....
    ],
    [
      'umi-plugin-ba',
      {
        code: 'baidu analytics code',
        judge: ()=>true // true or false
      },
    ],
  ],
  .....
}
```
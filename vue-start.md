## 升级版本
1. cnpm check
2. cnpm update xxx

## vue 2.x
vue2.x不可以在使用muscha{{}}语法绑定属性值，而是使用v-bind
### $emit

### $refs

## vue-router
路由器的实现原理
3.x
$router

## axios
### 看看常用的get与post怎么玩
GET请求
```js
//发起一个user请求，参数为给定的ID
axios.get('/user?ID=1234')
.then(function(respone){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});

//上面的请求也可选择下面的方式来写
axios.get('/user',{
    params:{
        ID:12345
    }
})
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error)
    });
```

发起一个POST请求
```js
axios.post('/user',{
    firstName:'zhao',
    lastName:'zerv'
})
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});
```
### 封装request api

## 如果你习惯jQuery的写法
axios(config)
```js
//发起 POST请求

axios({
    method:'post',//方法
    url:'/user/12345',//地址
    data:{//参数
        firstName:'Fred',
        lastName:'Flintstone'
    }
});

//通过请求获取远程图片
axios({
    method:'get',
    url:'http://bit.ly/2mTM3Ny',
    responseType:'stream'
})
    .then(function(response){
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    })

axios(url[,config])

//发起一个GET请求
axios('/user/12345/);
```

## vue组件
修改第三方ui组件的样式时，最外层包裹一个有标识的div,然后基于组件原本的css继承链添加覆盖即可
tab组件
select
table
navbar

## vuex
this.$store.dispatch触发action
action 执行异步，并commit mutation
mutation 执行同步，修改state
computed 映射state




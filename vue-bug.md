## 升级版本
1. cnpm check
2. cnpm update xxx

## vue-router
3.x

## axios
## 看看常用的get与post怎么玩
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
发起一个多重并发请求
```js
function getUserAccount(){
    return axios.get('/user/12345');
}

function getUserPermissions(){
    return axios.get('/user/12345/permissions');
}

axios.all([getUerAccount(),getUserPermissions()])
    .then(axios.spread(function(acc,pers){
        //两个请求现在都完成
}));
```

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

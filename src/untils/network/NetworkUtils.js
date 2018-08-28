
/*fetch网络请求*/
import NetworkInterface from "./NetworkInterface";
import {Loading} from '../Loading';

export default class NetworkUtils {
    /*
    * get请求
    * params object
    */
    static get(url,params,success,fail,error){
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            }else {
                url += '&' + paramsArray.join('&')
            }
        }
        console.log(url,params)
        fetch(url,{
            headers:{

            }
        })
            .then((response) => response.json())//把response转为JSON
            .then((jsonData) => {
                if (jsonData && jsonData.status == 0) {//请求成功,跟后台约定好
                    success && success(jsonData.data)

                } else {
                    fail && fail(jsonData.message)//请求失败，处理错误信息
                }
            })
            .catch((e) => {
                error && error(e)
                alert(e)

            })

    }

    /*
    * post请求
    * params FormData类型
    */
    static post(url,params,success,fail,error){

        console.log(url,params)
        Loading.show()
        fetch(url,{
            headers:{
                'Accept': 'application/json',
                //媒体格式类型key/value格式
                'Content-Type': 'multipart/form-data',
            },
            method:'POST',
            body:params
        })
            .then((response) => response.json())//把response转为JSON
            .then((jsonData) => {
                if (jsonData && jsonData.status == 0) {//请求成功,跟后台约定好
                    Loading.hidden()
                    success && success(jsonData.data)

                } else {
                    Loading.hidden()
                    fail && fail(jsonData.message)//请求失败，处理错误信息
                }
            })
            .catch((e) => {
                Loading.hidden()
                error && error(e)
                alert(e)

            })
    }
    /*
    * images uri数组
    * params FormData格式，没有传null
    */
    static uploadFile(url,images,params,success,fail,error) {
        let formData = new FormData();
        if (params) {
            formData = params;
        }
        for (var i = 0; i < images.length; i++) {
            var uri = images[i]
            var date = new Date()
            var name = date.getTime() + '.png'//用时间戳保证名字的唯一性
            let file = {uri:uri,type:'multipart/form-data',name:name}
            formData.append('file',file)
        }
        console.log(url,formData)
        fetch(url,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                //媒体格式类型key/value格式
                'Content-Type':'multipart/form-data',
                // customerId: customerId,
                // appId: appId
            },
            body: formData
        })
            .then((response) => response.json())//把response转为JSON
            .then((jsonData) => {
                if (jsonData && jsonData.status == 0) {//请求成功,跟后台约定好
                    success && success(jsonData.data)

                } else {
                    fail && fail(jsonData.message)//请求失败，处理错误信息
                }
            })
            .catch((e) => {
                error && error(e)
                alert(e)

            })
    }

}

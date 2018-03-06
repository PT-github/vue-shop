axios.defaults.baseURL ='/api';
//设置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 发送请求前处理request的数据
axios.defaults.transformRequest =[function(data){
  let newData ='';
  for(let k in data){
    newData +=encodeURIComponent(k)+'='+encodeURIComponent(data[k])+'&';
  }
  return newData;
}]
axios.defaults.withCredentials =true

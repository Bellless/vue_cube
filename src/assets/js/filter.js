// 过滤器 处理后台返回的数据格式
/* 
    日期处理
        time：源时间戳
        type：要处理的格式 默认 xxxx年xx月xx日
            /: xxxx/xx/xx
            .: xxxx.xx.xx
            -: xxxx-xx-xx
 */
export const normalDate = (time, type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) * 1 : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    if (type == '-') {
      return year + '-' + month + '-' + day;
    } else if (type == '/') {
      return year + '/' + month + '/' + day;
    } else if (type == '.') {
      return year + '.' + month + '.' + day;
    } else {
      return year + '年' + month + '月' + day + '日';
    }
  }
}
/* 
    时间处理
        time：源时间戳(精确到分和秒)
        type：要处理的格式 默认 xxxx年xx月xx日 xx:xx:xx
            /: xxxx/xx/xx xx:xx:xx
            .: xxxx.xx.xx xx:xx:xx
            -: xxxx-xx-xx xx:xx:xx
 */
export const normalTime = (time, type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) * 1 : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    if (type == '-') {
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    } else if (type == '/') {
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    } else if (type == '.') {
      return year + '.' + month + '.' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    } else {
      return year + '年' + month + '月' + day + '日' + ' ' + hours + ':' + minutes + ':' + seconds;
    }
  }
}
// 全局注册完之后，页面使用
{/* <p>{{time | normalDate('/')}}</p> //这样时间戳就会转化为xxxx/xx/xx的格式 */}
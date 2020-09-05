$.ajaxPrefilter(function (options) {
    // 在ajax请求前，会先拼接根路径
    options.url = "http://ajax.frontend.itheima.net" + options.url
    // console.log(options.url)
})
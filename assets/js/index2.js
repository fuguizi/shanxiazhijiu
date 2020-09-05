$(function () {
    // 1.点击"去注册"显示注册，点击"去登陆"显示登陆
    $("#link_reg").on("click", function () {
        $(".reg-box").show()
        $(".login-box").hide()
    })
    $("#link_login").on("click", function () {
        $(".login-box").show()
        $(".reg-box").hide()
    })

    // 2.1注册密码校验规则
    // layui是自动注入的对象
    // 必须给表单体系所在的父元素加上class="layui-form"
    // 用form变量接收layui里的form
    var form = layui.form;
    // 通过form.verify()函数自定义校验规则
    form.verify({
        // 自定义pwd的校验规则
        // 自定义规则加进密码lay-verify里（3个） |pwd
        "pwd": [
            // 非空格，6-12位之间
            /^[\S]{6,12}$/,
            '密码必须6到12位，且不能出现空格'],
        // 2.2  校验两次密码是否一致
        repwd: function (value) {
            // 通过形参拿到的是确认密码框中的内容
            // 还要拿到密码框中的内容，再次判断
            console.log(1);
            var pwd = $(".reg-box [name=password]").val()
            //   如果密码的值pwd 不等于确认密码的值
            if (pwd !== value) {
                // 如果判断失败提示错误消息
                return "两次密码不一致"
            }
        }
    })

    

})
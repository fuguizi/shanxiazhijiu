$(function () {
    //1.改页面框 去注册
    $("#link_reg").on("click", function () {
        $(".reg-box").show()
        $(".login-box").hide()
    })
    // 登陆
    $("#link_login").on("click", function () {
        $(".login-box").show()
        $(".reg-box").hide()
    })

    // 2.校验两次密码是否一致
    var form = layui.form;
    var layer = layui.layer;

    form.verify({
        "pwd": [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            var pwd = $(".reg-box [name=password]").val()
            if (pwd !== value) {
                return "输入不一致"
            }
        }
    });

    // 3.监听注册表单提交请求。调用接口发起注册数据请求
    $("#form_reg").on("submit", function (e) {
        //    阻止默认行为
        e.preventDefault();
        $.post("http://ajax.frontend.itheima.net/api/reguser",
            // 设置的2个值，一个是表单下面的名字，一个是表单下的密码
            { username: $("#form_reg [name=username]").val(), password: $("#form_reg [name=password]").val() },
            function (res) {
                if (res.status !== 0) {
                    return console.log(res.message)
                }
                console.log("注册成功")
            })

    })





})

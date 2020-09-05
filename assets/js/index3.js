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

    // 3.监听注册表单提交事件。调用接口发起注册数据请求
    $("#form_reg").on("submit", function (e) {
        //    阻止默认行为
        e.preventDefault();
        // 优化代码
        var data = {
            username: $("#form_reg [name=username]").val(),
            password: $("#form_reg [name=password]").val()
        }
        $.post("/api/reguser",
            // 设置的2个值，一个是表单下面的名字，一个是表单下的密码
            data,
            function (res) {
                if (res.status !== 0) {
                    // return console.log(res.message)
                    // 引入layer.js后，使用lager.msg加入弹出层
                    return layer.msg(res.message)
                }
                // console.log("注册成功")
                // layer弹出层
                layer.msg("注册成功，请登录！")

                // 模拟人的点击行为
                $("#link_login").click()
            })
    })

    // 4.监听登陆表单提交事件
    $("#form_login").submit(function (e) {
        e.preventDefault()
        $.ajax({
            url: "/api/login",
            method: "POST",
            // 参数值是 这个表单里面的 属性和属性值
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("登陆失败！")
                }
                layer.msg("登陆成功！")
                // 获取token 并保存出来
                console.log(res.token)

                // 跳转到后台主页
                location.href = "/index.html"
            }

        })
    })





})

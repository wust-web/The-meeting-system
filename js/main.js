/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-10-01 20:00:07
 * @version $Id$
 */
//通知弹窗的实现
$(function() {
    $(".gb-new").click(function() {
        $('.new').animate({
            top: '-600px'
        }, 500, function() {
            $('.mask').hide()
        });
        $('.pay2').animate({
            top: '-600px'
        }, 500, function() {
            $('.mask').hide()
        });
    })

    $('#go_cover').click(function() {
        $('.mask').show()
        $('.pay2').animate({
            top: '120px'
        }, 500);
    });

    // var logins = $('.bodyb').height() - 95
    // $('.logins').height(logins)


    $('.t-t').click(function() {
        $('html,body').stop();
        $('html,body').animate({
                scrollTop: $('.header').offset().top
            },
            1000);
    });

    var lh = $(window).height()
    $('.l-h').height(lh)

    var bodyb = $('.contents').height() + 171
    $('.bodyb').height(bodyb)

    $('.bk').click(function() {
        $('.mask').show()
        $('.bk-tc').animate({
            top: '40%'
        }, 500);
    });

    $(".tc").click(function() {
        $('.bk-tc').animate({
            top: '-100%'
        }, 500, function() {
            $('.mask').hide()
        });
    })
})


// $(window).resize(function() {
//     var logins = $('.bodyb').height() - 95
//     $('.logins').height(logins)

//     var bodyb = $('.contents').height() + 171
//         //alert($('.contents').height());
//     $('.bodyb').height(bodyb)
// });

$(window).resize(function() {
    var lh = $(window).height()
    $('.l-h').height(lh)
});




// 系统主框架

$(function() {
    // 退出系统
    $("#quit").click(function() {
        // alert( $("#quit"));
        window.location.href = "login.html";
    });

    // 左侧主导航
    //初始化，保存刷新前的信息。刷新后加载之前的状态
    var cookie = {
        "setCookie": function(name, value, iDay) {
            var oDate = new Date();

            oDate.setDate(oDate.getDate() + iDay);

            document.cookie = name + '=' + value + ';expires=' + oDate;
        },
        "getCookie": function(name) {
            //'username=abc; password=123456; aaa=123; bbb=4r4er'
            var arr = document.cookie.split('; ');
            var i = 0;

            //arr->['username=abc', 'password=123456', ...]

            for (i = 0; i < arr.length; i++) {
                //arr2->['username', 'abc']
                var arr2 = arr[i].split('=');

                if (arr2[0] == name) {
                    return arr2[1];
                }
            }

            return '';
        },
        "removeCookie": function(name) {
            setCookie(name, '1', -1);
        }
    };

    $(window).bind('beforeunload', function() {
        alert('您输入的内容尚未保存，确定离开此页面吗？');
    });

    // cookie.getCookie('currentShow').addClass("active");
    // $(".info").css("display","block");
    $("#navBar").find("li").click(function() {
        $(this).addClass("active")
            .siblings().removeClass();
        $("#container").children().eq($(this).index()).css("display", "block")
            .siblings().css("display", "none");
        // cookie.setCookie('currentShow',$(this),30);

    });

    // 页面刷新。这里应该是刷新表格
    $("#sync").click(function() {
        window.location.reload();
    });

    // 新增数据.弹出表单
    // 关闭弹出层
    $(".gb-new").click(function() {
        $('.new').animate({
            top: '-600px'
        }, 500, function() {
            $('.mask').hide()
        });
        $('.formAlert,.manageAlert,.infoAlert').animate({
            top: '-600px'
        }, 500, function() {
            $('.mask').hide()
        });
    });
     // 增加信息公告
    $("#addAd").click(function() {
        $('.mask').show();
        $('.infoAlert').animate({
            "top": "120px"
        }, 500).show();
    });
    // 添加数据
    $("#edit").click(function() {
        // alert($('.mask'));
        $('.mask').show();
        $('.formAlert').animate({
            "top": "120px"
        }, 500).show();
    });
    // 添加用户
    $("#add").click(function() {
        $('.mask').show();
        $('.manageAlert').animate({
            "top": "50%"
        }, 1000).show();
    });


    // 批量操作
    $("#batchDel").click(function() {
        $checked = $(".showData table tr td input:checked");
        if ($checked.is(":checked")) {
            $(".showData table tr td input:checked").parents("tr").remove();
        } else {
            alert("请选择数据记录之后，再操作！");
            // $("<span>").html("请选择数据记录之后，再操作！").appendTo($(".control"));
        }

    });
    // 删除数据
    $("span[id='delete']").click(function() {
        // alert( $(this).parents("tr").html());
        $(this).parents("tr").remove();
    });
    // 修改数据



});





/*----------------------------------------------------------------------------------------------*/
// 管理系统
$(function() {
    // 二级页面的切换
    $("#secondTab").find("h3").click(function() {
        $(this).addClass("mlTab")
            .siblings().removeClass("mlTab");
        $(this).parent().siblings("#showData").eq($(this).index()).css("display", "block")
            .siblings("#showData").css("display", "none");
        // cookie.setCookie('currentShow',$(this),30);

    });
    $("#secondTabMeet").find("h3").click(function() {
        $(this).addClass("mlTab")
            .siblings().removeClass("mlTab");
        $(this).parent().siblings("#showData").eq($(this).index()).css("display", "block")
            .siblings("#showData").css("display", "none");
        $(this).parent().siblings(".control").eq($(this).index()).css("display", "block")
            .siblings(".control").css("display", "none");
        // cookie.setCookie('currentShow',$(this),30);

    });
    // 三级页面的切换
    $(".control").find("button").not("button[class='export']").click(function() {
        $(this).addClass("unitOpacity")
            .siblings("button").removeClass("unitOpacity");
        /* $(this).parent().siblings("#showData").eq($(this).index()).css("display","block")
             .siblings("#showData").css("display", "none");*/
        // cookie.setCookie('currentShow',$(this),30);

    });

    // 用户公告的一些功能
    // 历史记录管理(有问题，并没有解决)
    show();

    function show() {
        $("#goDetail").click(function() {
            $(this).attr({
                "data-hash": $(this).index(),
                "href": "javascript:;"
            });

            var $hash = $(this).data("hash");
            window.location.hash = $hash;
            $("#infoDetail").attr("data-detail", $hash);
            // alert($("#infoDetail").data("detail"));
            if ($("#infoDetail").data("detail") == $hash) {
                $("#infoPub").css("display", "none").next("#infoDetail").css("display", "block");
            } else {
                $("#infoPub").css("display", "block").next("#infoDetail").css("display", "none");
            };
            return false;
        });
    };

    window.onhashchange = function() {
        //监听hash值的
        showHash();
    };
    showHash();

    function showHash() {
        var $hash = window.location.hash.substring(1);
        if ($("#infoDetail").data("detail") == $hash) {
            $("#infoPub").css("display", "none").next("#infoDetail").css("display", "block");
        } else {
            $("#infoPub").css("display", "block").next("#infoDetail").css("display", "none");
        };
    };


    // 日志查询

    // 全选
    $("#allChe").click(function() {
        // alert($(".rizhi").find("input:checkbox"));
        $(".rizhi").find("input:checkbox").prop('checked',true);
    });
    $("#invert").click(function() {
        // alert($("#showData").find("table tr td input:checkbox"));
        // 全选使用attr有bug，jQuery对attr做了很明显的区分
        $(".rizhi").find("input:checkbox").each(function() {
            this.checked=!this.checked;
        });
    });
    //表单的锁定效果

        $(".userLock").click(function() {
           // alert($(".formRow input[class='userLock']").is(":ckecked"));
            if ($(".formRow input[class='userLock']").is(":checked")) {
                $("label[class='userLock']").text("已锁定").css("color","#FF4200");
            }else{
                 $("label[class='userLock']").text("未锁定").css("color","#aaa");
            };
        });





})

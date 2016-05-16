/**
 * Created by Action on 2016/3/31 0031.
 */
$(document).ready(function(){
    $("#btn1").on("click",function(){
        alert("1111")
    })
    $("#btn2").click(function(){
        alert("2222")
    })
    $("#btn4").click(function(){
        $("#btn2").click()
    })
})

function change(){
    $("div").text("77777")
}
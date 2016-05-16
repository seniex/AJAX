/**
 * Created by Action on 2016/3/31 0031.
 */
$(document).ready(function(){
    $("#btn").on("click",function(){
        $.get("http://localhost/myservice/ajax.php",{name:$("#name").val()},function(data){
            $("#resultd").text(data)
        })
    })
})
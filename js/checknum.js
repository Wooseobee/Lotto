function checknum(obj){
    var max = 6;
    var length = $("#checked").find("input[type='checkbox']:checked").length;

    if(length>max){
        alert("최대 6개의 숫자를 선택할 수 있습니다.");
        obj.prop("checked", false)
    } else {
        if(obj.prop("checked")==true){
            obj.closest("label").css("background-color", "rgb(0, 112, 82)");
        } else {
            obj.closest("label").css("background-color", "white");
        }
    }
}

function resetAll(){
    var checked = $("#checked").find("input[type='checkbox']:checked");
    checked.prop("checked", false);
    checked.css("background-color", "white");
}
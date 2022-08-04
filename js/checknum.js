function checknum(obj){
    var max = 6;
    var length = $("#checked").find("input[type='checkbox']:checked").length;
    if(length>max){
        alert("최대 6개의 숫자를 선택할 수 있습니다.");
        obj.prop("checked", false)
    }
}

function resetAll(){
    $("#checked").find("input[type='checkbox']:checked").prop("checked", false);
}
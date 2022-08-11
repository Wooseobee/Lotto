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
    document.getElementById("totalMoney").innerHTML = "원";
}

function checkTotalMoney(){
    var sel = document.getElementById("count");
    var cnt = sel.options[sel.selectedIndex].value;
    var money = document.getElementById("totalMoney");
    var nums1 = document.getElementById("nums1");


    switch (cnt) {
        case '1':
            money.innerHTML = "1000원";
            $("#nums1").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums2").find(".ball").css("background-color", "rgb(240,240,240)");
            $("#nums3").find(".ball").css("background-color", "rgb(240,240,240)");
            $("#nums4").find(".ball").css("background-color", "rgb(240,240,240)");
            $("#nums5").find(".ball").css("background-color", "rgb(240,240,240)");
            break;
        case '2':
            money.innerHTML = "2000원";
            $("#nums1").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums2").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums3").find(".ball").css("background-color", "rgb(240,240,240)");
            $("#nums4").find(".ball").css("background-color", "rgb(240,240,240)");
            $("#nums5").find(".ball").css("background-color", "rgb(240,240,240)");
            break;
        case '3':
            money.innerHTML = "3000원";
            $("#nums1").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums2").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums3").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums4").find(".ball").css("background-color", "rgb(240,240,240)");
            $("#nums5").find(".ball").css("background-color", "rgb(240,240,240)");
            break;
        case '4':
            money.innerHTML = "4000원";
            $("#nums1").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums2").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums3").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums4").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums5").find(".ball").css("background-color", "rgb(240,240,240)");
            break;
        case '5':
            money.innerHTML = "5000원";
            $("#nums1").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums2").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums3").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums4").find(".ball").css("background-color", "rgb(0, 112, 82)");
            $("#nums5").find(".ball").css("background-color", "rgb(0, 112, 82)");
            break;
        default:
            break;
    }
}

function resetAutoNums(){
    $("#nums1").find(".ball").css("background-color", "rgb(240,240,240)");
    $("#nums2").find(".ball").css("background-color", "rgb(240,240,240)");
    $("#nums3").find(".ball").css("background-color", "rgb(240,240,240)");
    $("#nums4").find(".ball").css("background-color", "rgb(240,240,240)");
    $("#nums5").find(".ball").css("background-color", "rgb(240,240,240)");
    $("#totalMoney").html("원");
}
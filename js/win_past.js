$(document).ready(function () {
	$("#myNumbers input[type='text']").blur(function () {
		var id = eval($(this).attr('id').replace('txtMyNo_1_0', ''));
		var check = false;
		var obj = $(this);

		if (obj.val() == "") {
			return;
		} else if (isNaN($(this).val())) {
			alert("숫자만 입력 가능합니다.");
			obj.val("");
			obj.focus();
			return;
		} else if (obj.val() < 1 || obj.val() > 45) {
			alert("숫자는 1 ~ 45 사이의 숫자만 입력 가능합니다.");
			obj.val("");
			obj.focus();
			return;
		} else {
			$("#myNumbers input[type='text']").each(function (index) {
				if (id != index && obj.val() == $(this).val()) {
					check = true;
					return false;
				}
			});
			if (check) {
				alert("중복된 값은 입력하실 수 없습니다.");
				obj.val("");
				obj.focus();
				return;
			}
		}
	});
	$("#myNumSrch").click(function() {
		var check = false;
		//$('.txtNo_1').each(function(index) {
		$('#frmSrch input[name="txtNo_1"]').each(function(index) {
			if ($(this).val() == "") {
				check = true;
				if (index == 0) {
					alert("첫번째 숫자를 입력해 주세요.");
				} else if (index == 1) {
					alert("두번째 숫자를 입력해 주세요.");
				} else if (index == 2) {
					alert("세번째 숫자를 입력해 주세요.");
				} else if (index == 3) {
					alert("네번째 숫자를 입력해 주세요.");
				} else if (index == 4) {
					alert("다섯번째 숫자를 입력해 주세요.");
				} else if (index == 5) {
					alert("여섯번째 숫자를 입력해 주세요.");
				}
				return false;
			}
			$(this).val(Number($(this).val()));
			
		});
		if (check) {
			return;
		} else {
			myWinNumSearch("main", 1);
		}
	});
});
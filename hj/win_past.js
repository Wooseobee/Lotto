{/* <script type="text/javascript">
var pageCode = "03-01-02";
var pageName = "내번호당첨확인";
$(document).ready(function(){
	$('#numberTable').find('tr').each(function(index) {
		var objId = $(this);
		objId.find("input[type='text']").blur(function() {
			//var id = eval($(objId).find(this).attr('id').replace('txtNo1_0', ''));
			var id = eval($(objId).find(this).attr('id').slice(-1));
			var check = false;
			//var obj = $(objId).find(this);
			var obj = $(this);
	
			if (obj.val() == "") {
				return;
			} else if (isNaN(obj.val())) {
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
				objId.find("input[type='text']").each(function(index) {
					if (id != index && obj.val() == $(objId).find(this).val()) {
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
	});
	function search(obj, txtNo) {
		var requestParam = null;
		requestParam = new Object();			
		requestParam.txtNo00 = Number(txtNo[0]);
		requestParam.txtNo01 = Number(txtNo[1]);
		requestParam.txtNo02 = Number(txtNo[2]);
		requestParam.txtNo03 = Number(txtNo[3]);
		requestParam.txtNo04 = Number(txtNo[4]);
		requestParam.txtNo05 = Number(txtNo[5]);
		requestParam.drwNo = $("#drwNo").val();

		$.ajax({
			url : "/gameResult.do?method=myWinSearch", //  url
			dataType : 'json',
			data : requestParam,
			success : function(data) { // 성공했을때 콜백함수
				$(obj).find('.resultNumber').html(ltNumCleanXss(data.lottoNumber));
				//$(obj).find('.resultNumber').html(select);
				$(obj).find('.resultNumberSu').text(data.txtLottoNumberSu);
				$(obj).find('.resultBonus').html(data.txtBnusNo);
				$(obj).find('.resultNumberGrade').html(data.lottoNumberGrade);
								
				$('#numberTable').find('tr').each(function(index) {
					var objId = $(this);
					if($(objId).find("input[type='text']").val() != ""){
						//$(objId).find("input[type='text']").removeClass("txtNo1 inputNormal").addClass("txtNo1 inputResult");	
						$(objId).find("input[type='text']").addClass("fill");	
					}
					
				})
				//$('#numberTable').find(".f_sky").attr("class","color_key1");
			},
			error : function(data) {
			}
		});
	}
	
	$("#btnSearch").click(function(e) {
		e.preventDefault();
		//var obj = $(".btnSearch3").parent().parent().parent();
		var rownum = 0;

		//$('#numberTable').find('tr:not(:last)').each(function(index) {				
		$('#numberTable').find('tr').each(function(index) {				
			var nums ="";
			//$(this).find('.txtNo1').each(function(index) {
			$(this).find('input[type="text"]').each(function(index) {
				if ($(this).val() ==''){
					return false;
				}else{
					nums += $(this).val() +",";
				}
			});
			
			rownum++;				
			nums = nums.substring(0, nums.length-1);
			
			*//* 6개 번호를 모두 입력한 행만 조회요청 보냄(파라미터 tr객체+ 사용자 입력번호Array) *//*
			var numArr = nums.split(',');
			if(numArr.length==6){					
				search($(this),numArr);
			}
			
		});
	});	
	$('#searchBtn').click(function() {	
		$("#frm").attr({action:"/gameResult.do?method=myWin"}).submit();
	});	
	$('#drwNo').val("");	
	$("#btnDefault").click(function(e) {
		e.preventDefault();	
		$("#numberTable").find("input[type='text']").val("").removeClass("fill");
		$('.resultNumber').html("");
		$('.resultNumberSu').text("");
		$('.resultBonus').html("");
		$('.resultNumberGrade').html("");
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
	$("#myNumbers input[type='text']").blur(function() {
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
			$("#myNumbers input[type='text']").each(function(index) {
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
	$("#myWinNumber").css("display","none");
	
	$(".inputs1").keyup(function () {
	    if (this.value.length == this.maxLength) {
	      $(this).next('.inputs1').focus();
	    }
	});
	$(".inputs2").keyup(function () {
	    if (this.value.length == this.maxLength) {
	      $(this).next('.inputs2').focus();
	    }
	});
	$(".inputs3").keyup(function () {
	    if (this.value.length == this.maxLength) {
	      $(this).next('.inputs3').focus();
	    }
	});
	$(".inputs4").keyup(function () {
	    if (this.value.length == this.maxLength) {
	      $(this).next('.inputs4').focus();
	    }
	});
	$(".inputs5").keyup(function () {
	    if (this.value.length == this.maxLength) {
	      $(this).next('.inputs5').focus();
	    }
	});
	$(".inputs6").keyup(function () {
	    if (this.value.length == this.maxLength) {
	      $(this).next('.inputs6').focus();
	    }
	});
}); */}
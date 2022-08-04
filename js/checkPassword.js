$('.password').focusout(function () {
    var pw1 = $('#pw_1').val();
    var pw2 = $('#pw_2').val();

    if (pw1 != '' && pw2 != '') {
        if (pw1 == pw2) {
            $('#checkPassword').css('visibility', 'visible');
            $('#checkPassword').html('비밀번호가 일치합니다.');
        }
        else {
            $('#checkPassword').css('visibility', 'visible');
            $('#checkPassword').html('비밀번호가 일치하지 않습니다.');
        }
    }
});
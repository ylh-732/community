$(function () {
    $("#verifyCodeBtn").click(getVerifyCode);
    }
);

function getVerifyCode() {
    var email = $("#your-email").val();

    if (!email) {
        alert("Please enter your email address.");
        return false;
    }

    $.get(
        CONTEXT_PATH + "/forget/code",
        {"email":email},
        function (data) {
            data = $.parseJSON(data);

            if (data.code == 0) {
                alert("Check your email for a verification code to reset your password.");
            } else {
                alert(data.msg);
            }
        }
    );
}
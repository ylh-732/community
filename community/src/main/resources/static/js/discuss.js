$(function(){
    $("#topBtn").click(setTop);
    $("#deleteBtn").click(setDelete);
});

function like(btn, entityType, entityId, entityUserId, postId) {
    $.post(
        CONTEXT_PATH + "/like",
        {"entityType":entityType,"entityId":entityId,"entityUserId":entityUserId,"postId":postId},
        function (data) {
            data = $.parseJSON(data);

            if (data.code == 0) {
                $(btn).children("span").text(data.likeCount);

                if (data.likeStatus == 1)  {
                    $(btn).children("i").attr('class', "fa-solid fa-heart");
                    $(btn).children("i").css('color', "#A91B0D");
                } else {
                    $(btn).children("i").attr('class', "fa-regular fa-heart");
                    $(btn).children("i").css('color', "#2D3238");
                }
            } else {
                alert(data.msg);
            }
        }
    )
}

function setTop() {
    $.post(
        CONTEXT_PATH + "/discuss/top",
        {"id":$("#postId").val()},
        function (data) {
            data = $.parseJSON(data);
            if (data.code == 0) {
                window.location.reload();
            } else {
                alert(data.msg);
            }
        }
    );
}

function setDelete() {
    $.post(
        CONTEXT_PATH + "/discuss/delete",
        {"id":$("#postId").val()},
        function (data) {
            data = $.parseJSON(data);
            if (data.code == 0) {
                location.href = CONTEXT_PATH + "/index";
            } else {
                alert(data.msg);
            }
        }
    );
}
$(function(){
	$(".follow-btn").click(follow);
});

function follow() {
	var btn = this;

	if($(btn).hasClass("btn-dark")) {
		// follow
		$.post(
			CONTEXT_PATH + "/follow",
			{"entityType":3,"entityId":$(btn).prev().val()},
			function (data) {
				data = $.parseJSON(data);
				if (data.code == 0) {
					window.location.reload();
				}
			}
		);
	} else {
		// unfollow
		$.post(
			CONTEXT_PATH + "/unfollow",
			{"entityType":3,"entityId":$(btn).prev().val()},
			function (data) {
				data = $.parseJSON(data);
				if (data.code == 0) {
					window.location.reload();
				}
			}
		);
	}
}
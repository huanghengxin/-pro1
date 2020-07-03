//返回顶部
var totop = document.getElementById("toTop");
window.onscroll = function() {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop < 500) {
		totop.style.display = "none";
	} else {
		totop.style.display = "block";
	}
}
//显示更多
var showMore = document.getElementById("btn_last")
showMore.onclick = function() {
	var lastimg = document.getElementById("lastimg")
	lastimg.style.display = "block";
	showMore.style.display = "none"
}


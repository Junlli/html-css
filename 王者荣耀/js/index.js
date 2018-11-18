// 鼠标指向游戏排行榜触发事件
var rank = document.getElementsByClassName("rank")[0];
rank.onmouseover = function () {
    this.children[0].style.backgroundPosition = "-170px -134px";
    this.style.color = "#ff4e00";
};

rank.onmouseout = function () {
    this.children[0].style.backgroundPosition = "-150px -134px";
    this.style.color = "";
};
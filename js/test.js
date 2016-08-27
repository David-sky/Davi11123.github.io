/**
 * Created by EEXWEI on 2016/8/25.
 */
var div = document.getElementsByTagName("div");
div[0].onclick = function () {
    var p =document.createElement("p");
    p.innerHTML = "插入的P标签";
    div[0].appendChild(p);
};

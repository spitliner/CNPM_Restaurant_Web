var zone = document.getElementsByClassName("open-mini-zone");
for (var i = 0; i < zone.length; i++) {
    var open_zone = zone[i];
    open_zone.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement.parentElement;
        var id_name = product.getElementsByClassName("content-product-h3")[0].innerText;
        var dis = document.getElementById(id_name);
        dis.style.display = "block";
    })
}
var mini_zone_close = document.getElementsByClassName("mini-zone-close");
for (var i = 0; i < mini_zone_close.length; i++) {
    close_btn = mini_zone_close[i]
    close_btn.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement.parentElement.parentElement;
        product.style.display = "none";
    })
}
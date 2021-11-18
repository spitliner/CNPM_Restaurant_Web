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
    mini_zone_close[i].onclick = function () {
        var product = mini_zone_close[i].parentElement;
        var id_name = product.getElementsByClassName("mini-zone-modal-title")[0].innerText;
        var dis = document.getElementById(id_name);
        dis.style.display = "none";
    }
}
var add_cart = document.getElementsByClassName("mini-zone-btn-cart");
var modal = document.getElementById("myModal");
for (var i = 0; i < add_cart.length; i++) {
    var add = add_cart[i];
    add.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement.parentElement.parentElement.parentElement.parentElement;
        var img = product.parentElement.getElementsByClassName("img-prd")[0].src;
        var title = product.getElementsByClassName("mini-zone-modal-title")[0].innerText;
        var price = product.getElementsByClassName("mini-zone-money")[0].innerText;
        addItemToCart(title, price, img);
        var dis = document.getElementById(title);
        dis.style.display = "none";
        modal.style.display = "block";
        updatecart()
    })
}
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_item = cart_row.getElementsByClassName("cart-price ")[0]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item.innerText)
        var quantity = quantity_item.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + '$'
}
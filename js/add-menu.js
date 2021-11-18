function loadMenu(category) {
    // var menu = chỗ này đặt code trả về menu theo category
    var menu;
    for (item in menu) {
        // thêm item mới trong menu ở đây
        var contentmenu = `
<div class="main-product" >
    <div class="open-mini-zone">
        <div class="img-product">
            <img class="img-prd" src="${item.img}" alt="">
        </div>
        <div class="content-product">
            <h3 class="content-product-h3">${item.title}</h3>
            <span class="content-product-des">${item.des}</span>

        </div>
    </div>
    <div class="content-product-deltals">
        <span class="price">${item.price}$</span>
        <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
    </div>
</div >
        `
        var main_menu = document.getElementsByClassName("products")
        main_menu.append(contentmenu)
        // dưới đây là thêm phần mở ra
    }
}
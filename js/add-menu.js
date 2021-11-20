loadMenu(0)
// var category_btn = document.getElementsByClassName("category-item")
// for (var i = 0; i < category_btn.length; i++) {
//     var category = category_btn[i];
//     category.addEventListener("click", function (event) {
//         document.getElementsByClassName("products").innerHTML = "";
//         document.getElementsByClassName("mini-zone").innerHTML = "";
//         loadMenu(i)
//     })
// }
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
            <h3 class="content-product-h3">${item.name}</h3>
            <span class="content-product-des">${item.name-eng}</span>
        </div>
    </div>
    <div class="content-product-deltals">
        <span class="price">${item.price}</span>
        <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
    </div>
</div >
        `;
        var main_menu = document.getElementsByClassName("products");
        main_menu.append(contentmenu);
        // dưới đây là thêm phần mở ra
        var mini_zone = document.getElementsByClassName("mini-zone");
        var mini_zone_content = `
<div id="${item.name}" class="modal">
    <div class="mini-zone-content">
        <div class="mini-zone-header">
            <h5 class="mini-zone-modal-title">${item.name}</h5>
            <span class="mini-zone-close">&times;</span>
        </div>
        <div class="mini-zone-body">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <img class="img-prd" style="width: 100%;border-radius: 30px" src="${item.img}" alt="">
                    </div>
                    <div class="col-sm-6">
                        <span class="mini-zone-description">${item.desciption}</span>
                        <span class="mini-zone-price">Price:<span class="mini-zone-money">${item.price}</span></span>
                        <button type="button" class="btn mini-zone-btn-cart">Thêm Vào Giỏ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
        mini_zone.append(mini_zone_content);

    }
}
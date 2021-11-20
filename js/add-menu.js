// loadMenu(0)
var category_btn = document.getElementsByClassName("category-item")
for (var i = 0; i < category_btn.length; i++) {
    var category = category_btn[i];
    category.addEventListener("click", function (event) {
        var button = event.target;
        document.getElementsByClassName("products")[0].innerHTML = "";
        document.getElementsByClassName("mini-zone")[0].innerHTML = "";
        var item = button.parentElement;
        loadMenu(item.id)
    })
}
function loadMenu(category) {
    // var menu = chỗ này đặt code trả về menu theo category
    fetch("http://127.0.0.1:5500/php/connectDB.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: `cate=${category}`,
    })
        .then((response) => response.text())
        .then((res) => (document.getElementById("result").innerHTML = res));
    // var menu = <?php echo getDB(category)?>;
        // thêm item mới trong menu ở đây
    return
        // dưới đây là thêm phần mở ra
//         var mini_zone = document.getElementsByClassName("mini-zone");
//         var mini_zone_content = `
// <div id="${item.name}" class="modal">
//     <div class="mini-zone-content">
//         <div class="mini-zone-header">
//             <h5 class="mini-zone-modal-title">${item.name}</h5>
//             <span class="mini-zone-close">&times;</span>
//         </div>
//         <div class="mini-zone-body">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-sm-6">
//                         <img class="img-prd" style="width: 100%;border-radius: 30px" src="${item.img}" alt="">
//                     </div>
//                     <div class="col-sm-6">
//                         <span class="mini-zone-description">${item.description}</span>
//                         <span class="mini-zone-price">Price:<span class="mini-zone-money">${item.price}</span></span>
//                         <button type="button" class="btn mini-zone-btn-cart">Thêm Vào Giỏ</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//         `;
//         mini_zone.append(mini_zone_content);
}
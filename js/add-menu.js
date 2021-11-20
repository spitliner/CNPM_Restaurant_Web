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
    //alert(category)
    const dbParam = JSON.stringify({ "id_cate": category });
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        const myObj = JSON.parse(this.responseText);
        let menu = "";
        let mini = "";
        let name_a = "";
        for (let x in myObj) {
            name_a += myObj[x].name_item + " ";
            menu += `
<div class="main - product">
    <div class="open-mini-zone" >
        <div class="img-product">
            <img class="img-prd" src="` + myObj[x].img + `" alt="">
        </div>
        <div class="content-product">
            <h3 class="content-product-h3">`+ myObj[x].name_item +`</h3>
            <span class="content-product-des">`+ myObj[x].name_eng +`</span>
        </div>
    </div>
    <div class="content-product-deltals">
        <span class="price">`+ myObj[x].price +`</span>
        <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
    </div>
</div>
            `;
            mini += `
        <div id="`+ myObj[x].name_item +`" class="modal">
            <div class="mini-zone-content">
                <div class="mini-zone-header">
                    <h5 class="mini-zone-modal-title">`+ myObj[x].name_item +`</h5>
                    <span class="mini-zone-close">&times;</span>
                </div>
                <div class="mini-zone-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <img class="img-prd" style="width: 100%;border-radius: 30px" src="` + myObj[x].img + `" alt="">
                            </div>
                            <div class="col-sm-6">
                                <span class="mini-zone-description">` + myObj[x].desc_item + `</span>
                                <span class="mini-zone-price">Price:<span class="mini-zone-money">`+ myObj[x].price +`</span></span>
                                <button type="button" class="btn mini-zone-btn-cart">Thêm Vào Giỏ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
        }
        document.getElementsByClassName("products")[0].innerHTML = menu;
        document.getElementsByClassName("mini-zone")[0].innerHTML = mini;
        alert(name_a)
    }
    xmlhttp.open("POST", "php/connectDB.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
}
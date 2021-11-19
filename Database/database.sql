DROP DATABASE pos_system;
CREATE DATABASE pos_system;
USE pos_system;
/*================================ ADD TABLE ================================*/
CREATE TABLE category (
 id SMALLINT UNSIGNED NOT NULL,
 name VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE menu (
 id   CHAR(3) NOT NULL,
    name   VARCHAR(30) NOT NULL,
    name_eng  VARCHAR(30) NOT NULL,
    price   VARCHAR(10) NOT NULL,
    desciption VARCHAR(100) NOT NULL,
    img   VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE category_food (
 id  CHAR(3) NOT NULL,
    id_cate SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (id,id_cate)
);
/*================================ ADD CONSTRAINT ================================*/
ALTER TABLE category_food
ADD CONSTRAINT fk_id_to_menu FOREIGN KEY (id) REFERENCES menu(id),
ADD CONSTRAINT fk_id_to_category FOREIGN KEY (id_cate) REFERENCES category(id);
/*================================ ADD TRIGGER ================================*/
DELIMITER $$
CREATE TRIGGER delete_category_on_category_food BEFORE DELETE ON category
FOR EACH ROW
BEGIN
 DELETE FROM category_food WHERE id_cate = OLD.id;
END;
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER auto_add_category_default AFTER INSERT ON menu
FOR EACH ROW
BEGIN
 INSERT INTO category_food VALUES (NEW.id,0);
END;
$$
DELIMITER ;
/*================================ ADD DATA ================================*/
INSERT INTO category VALUES (0,"Toàn bộ"),(1,"Món chính"),(2,"Rau"),(3,"Bánh"),(4,"Nước");
INSERT INTO menu VALUES
("000","Hamburger bò phô mai","Hamburger","5$","Hamberger được làm từ thịt bò, cà chua, xà lách, phô mai.","images/menu/item01.jpg"),
("001","Pizza Pepperoni","Pizza Pepperoni","10$","Pizza Pepperoni được làm từ bột mỳ, phô mai, thịt, xúc xích, rau chuẩn Ý.","images/menu/item02.jpg"),
("002","Nước cam có đường","Orange juice","1$","Nước cam được làm từ cam sành mua trực tiếp tại vườn. Mỗi ngày luôn là nước mới.","images/menu/item03.jpg"),
("003","Mỳ Ý bò bằm","Spaghetti with minced beef","10$","Mỳ được sản xuất trong ngày kèm theo nước sốt cà chua nguyên chất và thịt bò nhập khẩu từ Nhật Bản.","images/menu/item04.jpg"),
("004","Salad bơ","Avocado salad","3$","Salad được trộn bằng nước sốt bí mật của nhà hàng, bơ vừa chín tới giúp tăng độ béo.","images/menu/item05.jpg"),
("005","Rượu vang Đà Lạt","Dalat Wine","10$","Rượu được ủ 10 năm bằng những quả nho chín mọng được trồng tại Đà Lạt.","images/menu/item06.jpg"),
("006","Bánh kem Hàn Quốc","Korean ice cream cake","15$","Bánh kem được làm theo phong cách Hàn Quốc. Do đầu bếp người Hàn trực tiếp làm.","images/menu/item07.jpg"),
("007","Bánh xèo miền Nam","Banh Xeo","3$","Bánh xèo giòn rụm nhờ chiện giòn trong chảo ngập dầu.","images/menu/item08.jpg");
INSERT INTO category_food VALUES ("000",1),("000",3),("001",1),("001",3),("002",4),("003",1),("004",2),("005",4),("006",3),("007",1),("007",3);

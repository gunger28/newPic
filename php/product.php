<!DOCTYPE html>
<html lang="en">
<head>
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="./products.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="menu">
        <div class="logo"></div>
        <a class="element" href="./pages/category/category.php">
            <div class="image" style="background-image: url(../../assets/icons/menu/menu_contacts.png)"></div>
            <div class="title">
            <?php
$category = $_GET['category'];
echo $category;
echo "- -";
    ?>    
            Каталог</div>
        </a>
        <a class="element" href="./pages/product/product.html">
            <div class="image" style="background-image: url(../../assets/icons/menu/menu_contacts.png)"></div>
            <div class="title">Контакты</div>

        </a>
        <a class="element" href="./pages/gallery/gallery.php">
            <div class="image" style="background-image: url(../../assets/icons/menu/menu_gallery.png)"></div>
            <div class="title">Галерея</div>

        </a>
        <a class="element" href="../../pages/company/company.html">
            <div class="image" style="background-image: url(../../assets/icons/menu/menu_company.png)"></div>
            <div class="title">Компакния</div>
<?php
echo $category;
?>
        </a>

        <div class="office">
            <div class="item" style="color: #FF5C00;">Адрес:</div>
            <div class="item">г. Бердск, улица Промышленный переулок 2а/5</div>
        </div>
        <div class="contacts1">
            <div class="item">8 (913) 456-97-93</div>
            <div class="item">Gunger.K@yandex.ru</div>
        </div>


    </div>
    <div class="contets">
<div class="step12">
    <div class="title">Откатные ворота</div>
    <div class="s1">
        <div class="image"></div>
        <div class="textBlock">
            <div class="text">Главное преимущество откатных ворот — экономия пространства. Отодвигаясь в любую сторону вдоль забора, откатные ворота, в отличие от распашных, не нуждаются в дополнительном пространстве для хода створок. Данная конструкция предпологает исключительно ручное использование. 
                
        </div>
        <div class="cost">от 70800
            <div class="image"></div>
        </div>
        </div>
   
    </div>
    <div class="s2">
        <div class="title">Дополнения:</div>
        <div class="advantage">
            <div class="card">
                <div class="image"></div>
                <div class="text">Калитка</div>
            </div>
        </div>
        <div class="advantage">
            <div class="card">
                <div class="image"></div>
                <div class="text">Замок</div>
            </div>
        </div>
        <div class="advantage">
            <div class="card">
                <div class="image"></div>
                <div class="text">Консольная балка</div>
            </div>
        </div>
        
    </div>
</div>

<div class="step3456">
    <div class="s3">
        <div class="title">Стандартный пакет:</div>
        <div class="text">
            — Столб "приемный" 60х60мм;
            — Каркас полотна ворот 60х60мм+40х20мм;
            — Каретка + рамка для бетонирования;
            — Ручка "стандарт";
            — Ловители верх/низ;
            — Засов + проушины под навесной замок;
            — Профнастил С8 под заполнение ворот;
            — Покраска металлокаркаса нитроэмалью;
            — Пластиковые заглушки;
        </div>
    </div>
    <div class="s4">
        <div class="title">Длина:</div>
        <div class="option">3 метра</div>
        <div class="option">4 метра</div>
        <div class="option">5 метра</div>
    </div>
    <div class="s5">
        <div class="materials">
            <div class="title">Материал:</div>
            <div class="cardsBlock">
                <div class="card" style="background-image: url(../../assets/product/der_sht.jpg);"></div>
                <div class="card" style="background-image: url(../../assets/product/met_sht.jpg);"></div>
                <div class="card" style="background-image: url(../../assets/product/prof.webp);"></div>
                <div class="card" style="background-image: url(../../assets/product/setka.webp);"></div>
                <div class="card" style="background-image: url(../../assets/product/setka_3d.jpg);"></div>
                <div class="card" style="background-image: url(../../assets/product/truba.webp);"></div>
            </div>
        </div>
        <div class="colors">
                <div class="title">Цвет:</div>
                <div class="colorsBlock">
                    <div class="color" style="background-color: #FF5C00;"></div>
                    <div class="color" style="background-color: #7fbb47;"></div>
                    <div class="color" style="background-color: #434bbe;"></div>
                    <div class="color" style="background-color: #b32f2f;"></div>
                    <div class="color" style="background-color: #ceb132;"></div>
                    <div class="color" style="background-color: #44beae;"></div>
                </div>
        </div>
    </div>
    <div class="s6">
<div class="info"> Выберите нужные параметры сверху, отправьте свои контакты и мы свяжемся с вами.</div>
<div class="connection">
    <input type="text" placeholder="Имя">
    <input type="text" placeholder="Телефон">
    <input type="text" placeholder="Сообщение">
    <input type="button" value="Отправить" class="btn">
</div>
    </div>
</div>

<div class="miniGallery">
    <div class="pic" style="background-image: url();"></div>
    <div class="pic" style="background-image: url();"></div>
    <div class="pic" style="background-image: url();"></div>
    <div class="pic" style="background-image: url();"></div>
    <div class="pic" style="background-image: url();"></div>
</div>
    </div>
</body>
</html>
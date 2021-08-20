<?php
    
    $type = $_POST['type'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mes = 'Связаться';
    $mes = $_POST['mes'];

    $product = $_POST['product'];
    $addons = $_POST['addons'];
    $lenght = $_POST['lenght'];
    $material = $_POST['material'];
    $color = $_POST['color'];
   

if ($type == 'simple') {
    sendSimpleOrder($name, $phone, $mes);
}else{
sendProdOrder($name, $phone, $mes, $product, $addons, $lenght, $material, $color);
}

    // message settings
    // $to = 'Gunger.K@yandex.ru';
            function sendSimpleOrder($name, $phone, $mes){

                $to = 'gungeranton@gmail.com';
                $subject = 'PicNik (Заявка на звонок)';
            
                    $message = "Заявка!\r\n"
                    ."<br>"."Имя: "."<strong>"."$name"."</strong>"."\r\n\n"."<br>"
                        ."Телефон: "."<strong>"."$phone"."</strong>"."\r\n\n"."<br>"
                        ."Сообщение: "."<strong>"."$mes"."</strong>"."\r\n\n"."<br>";

                        $from = "PicNik";
                        $headers  = "From: $from\r\nContent-type: text/html; charset=utf-8\r\n";
                     
                         // try to post
                         if (mail($to, $subject, $message, $headers)) {
                             echo 1;
                         } else {
                             echo 0;
                         };
            

            }

             function sendProdOrder($name, $phone, $mes, $product, $addons, $lenght, $material, $color){

                $to = 'gungeranton@gmail.com';
                $subject = 'PicNik (Заявка на звонок)';
            
                    $message = "Заявка!\r\n"
                    ."<br>"."Имя: "."<strong>"."$name"."</strong>"."\r\n\n"."<br>"
                        ."Телефон: "."<strong>"."$phone"."</strong>"."\r\n\n"."<br>"
                        ."Сообщение: "."<strong>"."$mes"."</strong>"."\r\n\n"."<br> <br>"
                        
                        ."Продукт: "."<strong>"."$product"."</strong>"."\r\n\n"."<br>"
                        ."Дополнительно: "."<strong>"."$addons"."</strong>"."\r\n\n"."<br>"
                        ."Длина: "."<strong>"."$lenght"."</strong>"."\r\n\n"."<br>"
                        ."Материал: "."<strong>"."$material"."</strong>"."\r\n\n"."<br>"
                        ."Цвет: "."<div style=\"width: 70px; height: 70px; background-color:"."$color"."\"></div>"."\r\n\n"."<br>";
                
                        $from = "PicNik";
                        $headers  = "From: $from\r\nContent-type: text/html; charset=utf-8\r\n";
                     
                         // try to post
                         if (mail($to, $subject, $message, $headers)) {
                             echo 1;
                         } else {
                             echo 0;
                         };
            

             }


         ?>
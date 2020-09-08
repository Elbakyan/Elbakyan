<?php


class AddAuto
{
    public static function Add_User_Auto($data,$file){
        global $mysql;
        $tmp_img_name = explode('/',$file['type']);
        $img_name =ROOT . '/img/user/auto/'.$data['user_id']. '.'. $data['vin']. '.' .$tmp_img_name[1];
        $img_name_for_db = 'https://elbakyan.am/Server/img/user/auto/'.$data['user_id'].'.'.$data['vin'].'.'.$tmp_img_name[1];

       $res = $mysql->query("INSERT INTO `user_auto` (`id`, `user_id`, `mark`, `model`, `color`, `year`, `engine_power`, `auto_number`, `vin`, `img`, `data`) 
                                        VALUES (NULL, '$data[user_id]', '$data[mark]', '$data[model]', '$data[color]', '$data[year]', '$data[engine]', '$data[auto_number]', '$data[vin]', '$img_name_for_db', CURRENT_TIMESTAMP);");
       if ($res){
        mkdir(ROOT .'/Test', 777,true);
          move_uploaded_file($file['tmp_name'],$img_name);
       }


    }
}
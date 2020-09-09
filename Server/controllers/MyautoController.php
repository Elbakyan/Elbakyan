<?php


class MyautoController
{
    public static $Error = [];

    public function actionindex()
    {
        require ROOT . '/models/AddAuto.php';
        if (!empty($_POST)){
            if ($_POST['mark']  == '') {
                MyautoController::$Error = 'Մակնիշը պետք է դատարկ չլինի․․․';
            }
            if ($_POST['model'] == '') {
                MyautoController::$Error = 'Մոդելը պետք է դատարկ չլինի․․․';
            }
            if ($_POST['year']  == '') {
                MyautoController::$Error = 'Տարեթիվը պետք է դատարկ չլինի․․․';
            }
            if ($_POST['engine'] == '') {
                MyautoController::$Error = 'Շարժիչի ծավալը պետք է դատարկ չլինի․․․';
            }
            if (strlen($_POST['vin'] ) <= 7) {
                MyautoController::$Error = 'Նույնականացման համարը պետք է դատարկ չլինի․․․';
            }
            if(empty(MyautoController::$Error)){
                AddAuto::Add_User_Auto($_POST,$_FILES['user_img']);
            }else{
                echo  json_encode([
                    'status'=> false,
                    'message' => MyautoController::$Error
                ]);

            }



        }
        return true;
    }
    public function actionGetUserAuto() {
        global $mysql;
        if (!empty($_POST)){
            $data = $mysql->query("SELECT * FROM `user_auto` WHERE `user_id` = $_POST[user_id]");
            $tmp = [];
            while ($row = $data->fetch_assoc()){
                $tmp[] =  $row;
            }
            if ($data->num_rows> 0){
                echo json_encode([
                    'status' => true,
                    'data' => $tmp
                ]);
            }else{
                echo json_encode([
                    'status' => false
                ]);
            }
        }
    }
    public function actionDeleteUserAuto(){
        global  $mysql;
        if (!empty($_POST)){
            $res = $mysql->query( "DELETE FROM `user_auto` WHERE `user_auto`.`id` = $_POST[id]");
            echo  json_encode(['status' => $res]);
            if ($_POST['img_name'] != 'https://elbakyan.am/Server/img/default.png'){
                unlink($_POST['img_name']);
            }

        }

    }

}
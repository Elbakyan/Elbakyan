<?php


class MyautoController
{
    public static $Error = [];

    public function actionindex()
    {
        require ROOT . '/models/AddAuto.php';
        if (!empty($_POST)){
            if (strlen($_POST['mark'] ) <= 3) {
                MyautoController::$Error = 'Մակնիշը պետք է դատարկ չլինի․․․';
            }
            if (strlen($_POST['model'] ) <= 3) {
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
            http_response_code(201);
            echo json_encode([
                'status' => true,
                'data' => $data->fetch_assoc()
            ]);
        }


    }

}
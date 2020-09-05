<?php


class UserController
{
    public static $Error = [];
    public static $ErrorReg = [];

    public function actionLogin()
    {


        require ROOT . '/models/User.php';
        if (!empty($_POST)) {
            if (strlen($_POST['phone'] ) <= 11) {
                UserController::$Error = 'Հեռախոսահամարը սխալ է․․․';
            }
            if (strlen($_POST['password']) < 6) {
                UserController::$Error = 'Գախտնաբաոը պետք է լինի նվազագույնը 6 նիշ․․․';
            }
            User::User_Login_DB($_POST['phone'], md5($_POST['password']));
        }else{
            header('Location: https://elbakyan.am/');
        }


        return true;
    }
    public function actionReg()
    {

        require ROOT . '/models/User.php';
        if (!empty($_POST)){

            if (strlen($_POST['name'] ) < 3) {
                UserController::$ErrorReg = 'Անունը սխալ է․․․';
            }
            if (strlen($_POST['surname']) < 3) {
                UserController::$ErrorReg = 'Ազգանունը սխալ է․․․';
            }
            if (strlen($_POST['phone'] ) < 11) {
                UserController::$ErrorReg = 'Հեռախոսահամարը սխալ է․․․';
            }
            if (strlen($_POST['email']) < 6) {
                UserController::$ErrorReg = 'E-mail սխալ է․․․';
            }
            if (strlen($_POST['password'] ) < 6) {
                UserController::$ErrorReg = 'Գախտնաբաոը պետք է լինի նվազագույնը 6 նիշ․․․';
            }
            if ($_POST['password'] != $_POST['password2']) {
                UserController::$ErrorReg = 'Գախտնաբառերը չեն համապատասխանում․․․';
            }
            if ($_POST['sircle'] ==  '') {
                UserController::$ErrorReg = 'Անհրաժեշտ է նշել տարածաշրջանը․․․';
            }
            if ($_POST['city'] == '') {
                UserController::$ErrorReg = 'Անհրաժեշտ է նշել քաղաքը կամ շրջանը․․․';
            }
            call_user_func_array('User::User_Reg_DB', $_POST);
        }


        return true;
    }
    public function actionExist()
    {
        if (!empty($_SESSION)) {

            echo json_encode([
                'status' => true,
                'data' => $_SESSION['user']
            ]);
            die;
        } else {
            echo json_encode([
                'status' => false,
            ]);
        }
    }
    public function actionLogout()
    {

        unset($_SESSION['user']);
        session_unset();
        session_destroy();
        header('Location: https://elbakyan.am/');
    }
}

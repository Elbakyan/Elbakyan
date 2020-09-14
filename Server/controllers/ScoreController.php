<?php


class ScoreController
{
    private $Error = [];
    public function actionAddScoreAccount(){
        require ROOT . '/models/Score.php';
        $_POST['name'] = 'V8a';
        $_POST['sircle'] = 'erevan';
        $_POST['city'] = 'erebuni';
        $_POST['adress'] = 'raffi19';
        $_POST['phone'] = '3749a4419699';
        $_POST['email'] = 'n@amail.ru';
        $_POST['url'] = 'noaro.com';
        $_POST['img'] = '';
        if (!empty($_POST)){
            if (empty($_POST['name'])){
                $this->Error[] = 'Անունը պետք է դատարկ չլինի․․․';
            }
            if (empty($_POST['phone'])){
                $this->Error[] = 'Հեռախոսահամարը պետք է դատարկ չլինի․․․';
            }
            if (empty($_POST['email'])){
                $this->Error[] = 'E-mail-ը պետք է դատարկ չլինի․․․';
            }
            if (empty($this->Error)){
                Score::AddScore($_POST);
            }else{
                echo json_encode([
                    'status' => false,
                    'message' => $this->Error[0]
                ]);
            }
        }


      return true;
    }
}
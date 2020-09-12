<?php


class ScoreController
{
    private $Error = [];
    public function actionAddScoreAccount(){
        global  $mysql;
        $_POST['name'] = 'V8';
        $_POST['sircle'] = 'V8';
        $_POST['city'] = 'V8';
        $_POST['adress'] = 'V8';
        $_POST['phone'] = 'V8';
        $_POST['email'] = 'V8';
        $_POST['url'] = 'V8';
        $_POST['img'] = 'V8';
        if (!empty($_POST)){
            if ($_POST['name']){

            }
        }
        print_r($mysql);

      return true;
    }
}
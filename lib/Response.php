<?php
/*
 * 返回请求类
 */
class Response
{
    public static function send($response)
    {
        $json=json_encode($response);
        header('Content-Type:application/json;charset=utf8');
        echo $json;
    }
    
    public static function error($e)
    {
        $json=json_encode(array(
                                "Code"=>$e->getCode(),
                                "Message"=>$e->getMessage()
                                ));
        header('Content-Type:application/json;charset=utf8');
        echo $json;
    }

}
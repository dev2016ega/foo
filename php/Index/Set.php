<?php
/**
 * Created by PhpStorm.
 * User: wxr
 * Date: 16/9/30
 * Time: 18:39
 */
class IndexSetController
{
    public function execute($request)
    {
        if (!isset($request['type']) || !isset($request['label'])|| !isset($request['content']))
        {
            throw new Exception('参数错误!',1000);
        }
        else {
            return IndexModel::setIndex($request);
        }
    }
}
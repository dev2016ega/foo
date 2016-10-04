<?php
/**
 * Created by PhpStorm.
 * User: wxr
 * Date: 16/9/29
 * Time: 20:10
 */
class IndexGetController
{
    public function execute($request)
    {
        return IndexModel::getIndex($request);
    }
}
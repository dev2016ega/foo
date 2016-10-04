<?php
/**
 * Created by PhpStorm.
 * User: wxr
 * Date: 16/9/29
 * Time: 19:20
 */

class IndexModel {

    public static function getIndex($request){
        $banners=\DB::table('indexs')->getAll(array('field'=>'label,link','type'=>"banner",'order'=>'label'));
        $about=\DB::table('indexs')->getAll(array('field'=>'label,title,content,link','type'=>"about",'order'=>'label'));
        $video=\DB::table('indexs')->getAll(array('field'=>'link','type'=>"video"));
        $news=\DB::table('news')->getAll(array('field'=>'title,abstract,createtime','order'=>'createtime desc','limit'=>'0,4'));
        foreach($news as &$aNew){
            $createtime=$aNew['createtime'];
            $aNew['createtime']=substr($createtime,0,10);
        }

        $result['banner']=$banners;
        $result['about']=$about;
        $result['video']=$video;
        $result['news']=$news;
        return array(
            'Code'=>0,
            'Message'=>"获取首页成功",
            'Data'=>$result
        );
    }

    public static function setIndex($request){
        \DB::table('indexs')->update(array('content'=>$request['content']),array('type'=>$request['type'],'label'=>$request['label']));
        return array(
            'Code'=>0,
            'Message'=>"首页设置成功"
        );
    }

}
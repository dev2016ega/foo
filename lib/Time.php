<?php
/**
 * Created by PhpStorm.
 * User: wxr
 * Date: 16/1/13
 * Time: 10:44
 */
class Time{
    //计算时间差
    public static function timeDiff( $begin_time, $end_time )
    {
        $begin_time=strtotime($begin_time);
        $end_time=strtotime($end_time);
        if ( $begin_time < $end_time ) {
            $start_time = $begin_time;
            $end_time = $end_time;
        } else {
            $start_time = $end_time;
            $end_time = $begin_time;
        }
        $time_diff = $end_time - $start_time;

        $years=intval( $time_diff / 31536000 );
        if($years>0){
            return $years.'年前';
        }

        $months=intval( $time_diff / 2592000 );
        if($months>0){
            return $months.'月前';
        }

        $days = intval( $time_diff / 86400 );
        if($days>0){
            return $days.'天前';
        }

        $hours = intval( $time_diff / 3600 );
        if($hours>0){
            return $hours.'小时前';
        }

        $mins = intval( $time_diff / 60 );
        if($mins>0){
            return $mins.'分钟前';
        }

        return '刚刚';
    }
}
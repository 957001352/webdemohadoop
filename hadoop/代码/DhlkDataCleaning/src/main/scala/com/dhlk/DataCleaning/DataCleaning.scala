package com.dhlk.DataCleaning


import java.text.SimpleDateFormat
import java.util.Date

import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.sql.SparkSession

object DataCleaning {
  def main(args: Array[String]): Unit = {


    /**
      *
      *  各个租户下面目录下的数据生成
      *
      */


    System.setProperty("HADOOP_USER_NAME", "root")
    val sparkConf = new SparkConf().setAppName("dwd_qz_controller").setMaster("local[*]")

    val spark = SparkSession.builder().config(sparkConf).enableHiveSupport().getOrCreate()
    val ssc = spark.sparkContext

    val now: Date = new Date()
    val dateFormat: SimpleDateFormat = new SimpleDateFormat("yyyy-MM-dd")
    val date = dateFormat.format(now)
    // spark.sql("select   *  from  dhlk_platdb.hive_meta_machine").show()

    import spark.implicits._


    //val frame = spark.sql("select   TRIM(BOTH '\"' FROM device_number)  device_number,TRIM(BOTH '\"' FROM device_name)  device_name,     TRIM(BOTH '\"' FROM params_name)  params_name,TRIM(BOTH '\"' FROM params_name)  params_name,params_value,to_date(TRIM(BOTH '\"' FROM createtime)) date,TRIM(BOTH '\"' FROM factorycode)  factorycode  from  dhlk_platdb.hive_meta_machine   where  unix_timestamp(to_date(TRIM(BOTH '\"' FROM createtime)),'yyyy-MM-dd') >=  unix_timestamp("+date+",'yyyy-MM-dd') - 86400  and   unix_timestamp(to_date(TRIM(BOTH '\"' FROM createtime)),'yyyy-MM-dd') <= unix_timestamp("+date+",'yyyy-MM-dd') - 86400")


    // val frame = spark.sql("select   TRIM(BOTH '\"' FROM device_number)  device_number,TRIM(BOTH '\"' FROM device_name)  device_name,     TRIM(BOTH '\"' FROM params_name)  params_name,params_value,to_date(TRIM(BOTH '\"' FROM create_time)) date,TRIM(BOTH '\"' FROM factorycode)  factorycode  from  dhlk_platdb.hive_meta_machine   where  unix_timestamp(to_date(TRIM(BOTH '\"' FROM create_time)),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400 ")

    /**
      * 租户dhlk 下面目录生成
      * 上料信息
      */
    val  hive_meta_shangliao = spark.sql("select   *    from    dhlk_platdb.hive_meta_shangliao     where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")




    //state, state_info, run_state,airValve,leftAndRightAirCylinder,upAndDownAirCylinder,create_time,deviceId
    hive_meta_shangliao.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("airValve", "true")
      .option("leftAndRightAirCylinder", "true")
      .option("upAndDownAirCylinder", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_shangliao/"+date+"")




   /**
      * 点胶信息
      */

     //state,state_info,run_state,upAndDownAirCylinder,leftAndRightAirCylinder,MoveHeadAndBackState,create_time,deviceId
    val  hive_meta_dianjiao = spark.sql("select   *    from    dhlk_platdb.hive_meta_dianjiao     where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    hive_meta_dianjiao.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("upAndDownAirCylinder", "true")
      .option("leftAndRightAirCylinder", "true")
      .option("MoveHeadAndBackState", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_dianjiao/"+date+"")




    /**
      *压合信息
      */

    //state, state_info,run_state,DIzhuaquwei,MoveHeadAndBackState,upAndDownAirCylinder,create_time,deviceId
    val  hive_meta_yahe = spark.sql("select   *    from    dhlk_platdb.hive_meta_yahe      where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    hive_meta_yahe.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("DIzhuaquwei", "true")
      .option("MoveHeadAndBackState", "true")
      .option("upAndDownAirCylinder", "true")
      .option("create_time", "true")
      .option("deviceId ", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_yahe/"+date+"")





    /**
      *镭雕信息
      */
    //state, state_info,run_state,airValve,upAndDownAirCylinder,leftAndRightAirCylinder,create_time,deviceId
    val  hive_meta_leidiao = spark.sql("select   *    from    dhlk_platdb.hive_meta_leidiao      where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    hive_meta_leidiao.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("airValve", "true")
      .option("upAndDownAirCylinder", "true")
      // .option("leftAndRightAirCylinder", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_leidiao/"+date+"")






    /**
      *检测信息
      */
    //state, state_info,run_state,upAndDownAirCylinder,leftAndRightAirCylinder,unqualifiedState,create_time,deviceId
    val  hive_meta_jiance = spark.sql("select   *    from    dhlk_platdb.hive_meta_jiance      where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    hive_meta_jiance.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("upAndDownAirCylinder", "true")
      .option("leftAndRightAirCylinder", "true")
      .option("unqualifiedState", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_jiance/"+date+"")





    /**
      *封盖信息
      */

     //state, state_info,run_state,zidongxialiao,gaishoukai,zhangzhuaqu,create_time,deviceId
     //state, state_info,run_state,zidongxialiao,gaishoukai,zhangzhuaqu,create_time,deviceId
    val  hive_meta_fenggai = spark.sql("select   *    from    dhlk_platdb.hive_meta_fenggai      where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    hive_meta_fenggai.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("zidongxialiao", "true")
      .option("gaishoukai", "true")
      .option("zhangzhuaqu", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_fenggai/"+date+"")




    /**
      *下料信息
      */
    //state, state_info,run_state,upAndDownAirCylinder,zhuaqushoukai,leftAndRightAirCylinder,create_time,deviceId

    //state, state_info,run_state,upAndDownAirCylinder,zhuaqushoukai,leftAndRightAirCylinder,create_time,deviceId
    val  hive_meta_xialiao = spark.sql("select   *    from    dhlk_platdb.hive_meta_xialiao     where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    hive_meta_xialiao.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("state", "true")
      .option("state_info", "true")
      .option("run_state", "true")
      .option("upAndDownAirCylinder", "true")
      .option("zhuaqushoukai", "true")
      .option("leftAndRightAirCylinder", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk/hive_meta_xialiao/"+date+"")





    /**
      * 租户dhlk2 下面目录生成
      *
      */
    /**
      * hive_meta_D0
       */
    val  hive_meta_D0 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D0      where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D0.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D0/"+date+"")


    /**
      * hive_meta_D1
      */
    val  hive_meta_D1 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D1      where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D1.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D1/"+date+"")


    /**
      * hive_meta_D2
      */
    val  hive_meta_D2 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D2       where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D2.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D2/"+date+"")


    /**
      * hive_meta_D3
      */
    val  hive_meta_D3 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D3       where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D3.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D3/"+date+"")


    /**
      * hive_meta_D4
      */
    val  hive_meta_D4 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D4       where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400 ")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D4.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D4/"+date+"")


    /**
      * hive_meta_D5
      */
    val  hive_meta_D5 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D5        where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D5.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D5/"+date+"")


    /**
      * hive_meta_D6
      */
    val  hive_meta_D6 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D6    where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D6.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D6/"+date+"")


    /**
      * hive_meta_D7
      */
    val  hive_meta_D7 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D7   where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D7.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D7/"+date+"")


    /**
      * hive_meta_D8
      */
    val  hive_meta_D8 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D8   where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D8.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D8/"+date+"")


    /**
      * hive_meta_D9
      */
    val  hive_meta_D9 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D9    where  unix_timestamp(to_date(create_time),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400")
    //device_num,temperature,pressure,ts, create_time,deviceId
    hive_meta_D9.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_num", "true")
      .option("temperature", "true")
      .option("pressure", "true")
      .option("ts", "true")
      .option("create_time", "true")
      .option("deviceId", "true")
      //.save("/data/"+date+"")
      .save("/data/dhlk2/hive_meta_D9/"+date+"")






    spark.close()

  }
}

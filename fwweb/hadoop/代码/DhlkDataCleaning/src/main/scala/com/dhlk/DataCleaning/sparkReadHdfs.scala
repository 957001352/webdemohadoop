package com.dhlk.DataCleaning

import java.text.SimpleDateFormat
import java.util.{Date, Properties}

import com.alibaba.fastjson.JSONObject
import com.google.gson.{JsonObject, JsonParser}
import org.apache.spark.SparkConf
import org.apache.spark.sql.{SaveMode, SparkSession}
import org.apache.spark.storage.StorageLevel

object sparkReadHdfs {
  def main(args: Array[String]): Unit = {

    System.setProperty("HADOOP_USER_NAME", "root")
    val sparkConf = new SparkConf().setAppName("dwd_qz_controller").setMaster("local[*]")

    val spark = SparkSession.builder().config(sparkConf).enableHiveSupport().getOrCreate()
    val ssc = spark.sparkContext

    val now: Date = new Date()
    val dateFormat: SimpleDateFormat = new SimpleDateFormat("yyyy-MM-dd")
    val date = dateFormat.format(now)
    // spark.sql("select   *  from  dhlk_platdb.hive_meta_machine").show()

    import spark.implicits._


    /**
      *
      * 解析各个目录的下面的json数据进入各个hive表中
      *
      * 实现思路都一样
      * 1.ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_565980")
      * 修改textFile里面的文件存储路径，每个目录的数据字段不一样,对应不同的表结构
      * 2.这个举个例子说明一下
      * val jsonObject = ParseJsonData.getJsonData(item)
      * val state = jsonObject.getInteger("state")
      * val state_info = jsonObject.getString("state_info")
      * val run_state = jsonObject.getInteger("run_state")
      * val airValve = jsonObject.getString("airValve")
      * val leftAndRightAirCylinder = jsonObject.getString("leftAndRightAirCylinder")
      * val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
      * val create_time = jsonObject.getString("create_time")
      * val deviceId = jsonObject.getString("deviceId")
      * (state, state_info, run_state,airValve,leftAndRightAirCylinder,upAndDownAirCylinder,create_time,deviceId)
      * 只需要解析的时候修改字段值就行
      *
      * 3.只需要修改insertInto("dhlk_platdb.hive_meta_yahe")里面的表名
      *  }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_yahe")
      *
      */

    //state Int,state_info String,run_state Int,airValve Int,leftAndRightAirCylinder Int,upAndDownAirCylinder Int

    //state Int,state_info String,run_state Int,airValve String,leftAndRightAirCylinder String,upAndDownAirCylinder String,create_time String,factoryCode String
    //上料信息


    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_565980").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")
        val airValve = jsonObject.getString("airValve")
        val leftAndRightAirCylinder = jsonObject.getString("leftAndRightAirCylinder")
        val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state, state_info, run_state,airValve,leftAndRightAirCylinder,upAndDownAirCylinder,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_shangliao")

    spark.sql("select  *   from   dhlk_platdb.hive_meta_shangliao").show()

    //点胶信息
    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_708550").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
     //state Int,state_info String,upAndDownAirCylinder String,leftAndRightAirCylinder String,MoveHeadAndBackState String,create_time String,factoryCode String)
        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")
        val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
        val leftAndRightAirCylinder = jsonObject.getString("leftAndRightAirCylinder")
        val MoveHeadAndBackState = jsonObject.getString("MoveHeadAndBackState")
        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state,state_info,run_state,upAndDownAirCylinder,leftAndRightAirCylinder,MoveHeadAndBackState,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_dianjiao")


    //压合信息
    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_594395").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {

        //hive_meta_yahe(state Int,state_info String,run_state Int,DIzhuaquwei String,MoveHeadAndBackState String,upAndDownAirCylinder String,create_time String);
        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")

        val DIzhuaquwei = jsonObject.getString("DIzhuaquwei")
        val MoveHeadAndBackState = jsonObject.getString("MoveHeadAndBackState")
        val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state, state_info,run_state,DIzhuaquwei,MoveHeadAndBackState,upAndDownAirCylinder,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_yahe")



    //镭雕信息
    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_443747").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        //hive_meta_leidiao(state Int,state_info String,run_state Int,airValve String,upAndDownAirCylinder String,leftAndRightAirCylinder String,create_time String);
        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")
        val airValve = jsonObject.getString("airValve")
        //val MoveHeadAndBackState = jsonObject.getString("MoveHeadAndBackState")
        val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
        val leftAndRightAirCylinder = jsonObject.getString("leftAndRightAirCylinder")
        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state, state_info,run_state,airValve,upAndDownAirCylinder,leftAndRightAirCylinder,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_leidiao")



    //检测信息
    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_248666").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        // hive_meta_jiance(state Int,state_info String,run_state Int,upAndDownAirCylinder String,leftAndRightAirCylinder String,unqualifiedState String,create_time String);

       //{"run_state":10,"deviceId":"dhlk_tb_product_248666","create_time":"2020-05-21 8:43:6"}}
       //{"upAndDownAirCylinder":"up","leftAndRightAirCylinder":"right","unqualifiedState":"close","deviceId":"dhlk_tb_product_248666","create_time":"2020-05-21 8:43:6"}}
       //{"state":0,"state_info":"停止","deviceId":"dhlk_tb_product_248666","create_time":"2020-05-21 8:43:6"}}


        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")
        //val airValve = jsonObject.getString("airValve")
        //val MoveHeadAndBackState = jsonObject.getString("MoveHeadAndBackState")
        val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
        val leftAndRightAirCylinder = jsonObject.getString("leftAndRightAirCylinder")
        val unqualifiedState = jsonObject.getString("unqualifiedState")
        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state, state_info,run_state,upAndDownAirCylinder,leftAndRightAirCylinder,unqualifiedState,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_jiance")


    //封盖信息
    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_625315").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        // hive_meta_fenggai(state Int,state_info String,run_state Int,zidongxialiao String,gaishoukai String,zhangzhuaqu String,create_time String);
        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")
        //val airValve = jsonObject.getString("airValve")
        //val MoveHeadAndBackState = jsonObject.getString("MoveHeadAndBackState")
        val zidongxialiao = jsonObject.getString("zidongxialiao")
        val gaishoukai = jsonObject.getString("gaishoukai")
        val zhangzhuaqu = jsonObject.getString("zhangzhuaqu")
        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state, state_info,run_state,zidongxialiao,gaishoukai,zhangzhuaqu,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_fenggai")


    //下料信息
    ssc.textFile("/dhlk/hive_meta/dhlk/hive_meta_dhlk_tb_product_575874").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        //hive_meta_xialiao(state Int,state_info String,run_state Int,upAndDownAirCylinder String,zhuaqushoukai String,leftAndRightAirCylinder String,create_time String)
        val jsonObject = ParseJsonData.getJsonData(item)
        val state = jsonObject.getInteger("state")
        val state_info = jsonObject.getString("state_info")
        val run_state = jsonObject.getInteger("run_state")
        //val airValve = jsonObject.getString("airValve")
        //val MoveHeadAndBackState = jsonObject.getString("MoveHeadAndBackState")

        val upAndDownAirCylinder = jsonObject.getString("upAndDownAirCylinder")
        val zhuaqushoukai = jsonObject.getString("zhuaqushoukai")
        val leftAndRightAirCylinder = jsonObject.getString("leftAndRightAirCylinder")

        val create_time = jsonObject.getString("create_time")
        val deviceId = jsonObject.getString("deviceId")
        (state, state_info,run_state,upAndDownAirCylinder,zhuaqushoukai,leftAndRightAirCylinder,create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_xialiao")





    /**
      * 多租户的租户dhlk2的数据进入hive
      */
    //  /dhlk/hive_meta/dhlk2/hive_meta_D0
    //{"device_num":5,"temperature":59,"pressure":0,"ts":1.5900505906105156E9,"createtime":"2020-05-21 08:43:10","deviceId":"D5","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D0").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getDouble("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D0")



    //  /dhlk/hive_meta/dhlk2/hive_meta_D1
    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D1").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getDouble("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D1")



    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D2").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D2")




    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D3").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D3")




    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D4").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D4")




    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D5").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D5")




    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D6").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D6")



    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D7").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D7")




    //{"device_num":0,"temperature":10,"pressure":73,"ts":1.5900505906097822E9,"createtime":"2020-05-21 08:43:10","deviceId":"D0","create_time":"2020-05-21 8:43:10"}
    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D8").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D8")




    ssc.textFile("/dhlk/hive_meta/dhlk2/hive_meta_D9").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_num = jsonObject.getInteger("device_num")
        val temperature = jsonObject.getInteger("temperature")
        val pressure = jsonObject.getInteger("pressure")
        val ts = jsonObject.getInteger("ts")
        val create_time = jsonObject.getString("createtime")
        val deviceId = jsonObject.getString("deviceId")
        (device_num,temperature,pressure,ts, create_time,deviceId)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_D9")












    //  hive_meta_machine
    //"device_number": "NULL", "device_name": "总控 ", "params_name": "bao_jing_zhi", "params_value": 1.0, "create_time": "2020-05-14 01:48:19", "ts": 1589420899.0863934, "factoryCode": "dhlk"
    /*  ssc.textFile("/dhlk/hive_meta/hive_meta_machine").filter(item => {
      val obj = ParseJsonData.getJsonData(item)
      obj.isInstanceOf[JSONObject]
    }).mapPartitions(partitions => {
      partitions.map(item => {
        val jsonObject = ParseJsonData.getJsonData(item)
        val device_number = jsonObject.getString("device_number")
        val device_name = jsonObject.getString("device_name")
        val params_name = jsonObject.getString("params_name")
        val params_value = jsonObject.getDouble("params_value")
        val create_time = jsonObject.getString("create_time")

        val ts = jsonObject.getDouble("ts")
        val factoryCode = jsonObject.getString("factoryCode")
        (device_number,device_name,params_name,params_value,create_time,ts,factoryCode)
      })
    }).toDF().coalesce(1).write.mode(SaveMode.Append).insertInto("dhlk_platdb.hive_meta_machine")


    val  hive_meta_machine = spark.sql("select    *   from     dhlk_platdb.hive_meta_machine     where  unix_timestamp(to_date(TRIM(BOTH '\"' FROM create_time)),'yyyy-MM-dd') >=  unix_timestamp(current_date, 'yyyy-MM-dd') - 86400 ")
    hive_meta_machine.coalesce(1).write.format("com.databricks.spark.csv")
      .mode("overwrite")
      .option("header", "true")
      .option("device_number", "true")
      .option("device_name", "true")
      .option("params_name", "true")
      .option("params_value", "true")
      .option("create_time", "true")
      .option("ts", "true")
      .option("factoryCode", "true")
      .save("/data/"+date+"/")
    */
  }
}

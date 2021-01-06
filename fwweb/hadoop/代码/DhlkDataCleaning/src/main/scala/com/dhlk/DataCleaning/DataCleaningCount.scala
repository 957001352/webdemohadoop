package com.dhlk.DataCleaning

import java.text.SimpleDateFormat
import java.util.{Date, Properties}

import org.apache.spark.SparkConf
import org.apache.spark.sql.{SaveMode, SparkSession}

object DataCleaningCount {
  def main(args: Array[String]): Unit = {

    /**
      *
      * 租户下面各个表的条数
      *
      *
      */
    System.setProperty("HADOOP_USER_NAME", "root")
    val sparkConf = new SparkConf().setAppName("dwd_qz_controller").setMaster("local[*]")

    val spark = SparkSession.builder().config(sparkConf).enableHiveSupport().getOrCreate()
    val ssc = spark.sparkContext

    val now: Date = new Date()
    val dateFormat: SimpleDateFormat = new SimpleDateFormat("yyyy-MM-dd")
    val date = dateFormat.format(now)

    import spark.implicits._


    /**
      * 租户dhlk 下面目录生成
      * 上料信息
      */
    val hive_meta_shangliao = spark.sql("select   *    from    dhlk_platdb.hive_meta_shangliao  ")

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
      .save("/data/dhlk/hive_meta_shangliao/" + date + "")


    val shangliao = spark.sql("select   count(*)  count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from    dhlk_platdb.hive_meta_shangliao    group  by  deviceId,to_date(create_time)")


    /**
      * 点胶信息
      */

    //state,state_info,run_state,upAndDownAirCylinder,leftAndRightAirCylinder,MoveHeadAndBackState,create_time,deviceId
    val hive_meta_dianjiao = spark.sql("select   *    from    dhlk_platdb.hive_meta_dianjiao")
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
      .save("/data/dhlk/hive_meta_dianjiao/" + date + "")


    val dianjiao = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from    dhlk_platdb.hive_meta_dianjiao   group   by   deviceId,to_date(create_time)")

    //todo:写入mysql时，可以配置插入mode，overwrite覆盖，append追加，ignore忽略，error默认表存在报错
    // dianjiao.write.mode(SaveMode.Append).jdbc("jdbc:mysql://192.168.2.162:3306/dhlk_multi_tenant","dhlk_count_size",prop)



    /**
       *压合信息
       */

     //state, state_info,run_state,DIzhuaquwei,MoveHeadAndBackState,upAndDownAirCylinder,create_time,deviceId
     val  hive_meta_yahe = spark.sql("select   *    from    dhlk_platdb.hive_meta_yahe  ")
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

     val  yahe = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from    dhlk_platdb.hive_meta_yahe   group   by   deviceId,to_date(create_time)")




     /**
       *镭雕信息
       */
     //state, state_info,run_state,airValve,upAndDownAirCylinder,leftAndRightAirCylinder,create_time,deviceId
     val  hive_meta_leidiao = spark.sql("select   *    from    dhlk_platdb.hive_meta_leidiao ")
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


     val  leidiao  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from    dhlk_platdb.hive_meta_leidiao   group   by   deviceId,to_date(create_time)")


     /**
       *检测信息
       */
     //state, state_info,run_state,upAndDownAirCylinder,leftAndRightAirCylinder,unqualifiedState,create_time,deviceId
     val  hive_meta_jiance = spark.sql("select   *    from    dhlk_platdb.hive_meta_jiance")
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

     val  jiance  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_jiance   group   by   deviceId,to_date(create_time)")



     /**
       *封盖信息
       */

     //state, state_info,run_state,zidongxialiao,gaishoukai,zhangzhuaqu,create_time,deviceId
     //state, state_info,run_state,zidongxialiao,gaishoukai,zhangzhuaqu,create_time,deviceId
     val  hive_meta_fenggai = spark.sql("select   *    from    dhlk_platdb.hive_meta_fenggai")
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
     val  fenggai  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_fenggai   group   by   deviceId,to_date(create_time)")



     /**
       *下料信息
       */
     //state, state_info,run_state,upAndDownAirCylinder,zhuaqushoukai,leftAndRightAirCylinder,create_time,deviceId

     //state, state_info,run_state,upAndDownAirCylinder,zhuaqushoukai,leftAndRightAirCylinder,create_time,deviceId
     val  hive_meta_xialiao = spark.sql("select   *    from    dhlk_platdb.hive_meta_xialiao  ")
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

     val  xialiao  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_xialiao   group   by   deviceId,to_date(create_time)")



     /**
       * 租户dhlk2 下面目录生成
       *
       */
     /**
       * hive_meta_D0
       */
     val  hive_meta_D0 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D0")
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

       val  D0  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D0   group   by   deviceId,to_date(create_time)")

     /**
       * hive_meta_D1
       */
     val  hive_meta_D1 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D1")
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


     val  D1  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D1   group   by   deviceId,to_date(create_time)")

     /**
       * hive_meta_D2
       */
     val  hive_meta_D2 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D2")
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

     val  D2  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D2   group   by   deviceId,to_date(create_time)")


     /**
       * hive_meta_D3
       */
     val  hive_meta_D3 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D3")
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

     val  D3  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D3   group   by   deviceId,to_date(create_time)")

     /**
       * hive_meta_D4
       */
     val  hive_meta_D4 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D4")
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

     val  D4  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D4   group   by   deviceId,to_date(create_time)")


     /**
       * hive_meta_D5
       */
     val  hive_meta_D5 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D5")
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

     val  D5  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D5   group   by   deviceId,to_date(create_time)")


     /**
       * hive_meta_D6
       */
     val  hive_meta_D6 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D6")
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

     val  D6  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D6   group   by   deviceId,to_date(create_time)")

     /**
       * hive_meta_D7
       */
     val  hive_meta_D7 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D7")
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
     val  D7  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D7   group   by   deviceId,to_date(create_time)")


     /**
       * hive_meta_D8
       */
     val  hive_meta_D8 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D8")
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
     val  D8  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D8   group   by   deviceId,to_date(create_time)")

     /**
       * hive_meta_D9
       */
     val  hive_meta_D9 = spark.sql("select   *    from     dhlk_platdb.hive_meta_D9")
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
     val  D9  = spark.sql("select  count(*) count,'dhlk'  as  tenant,deviceId,to_date(create_time)  date    from     dhlk_platdb.hive_meta_D9   group   by   deviceId,to_date(create_time)")


    /**
      * 每天的条数
      */
    val  count_size = shangliao.union(dianjiao)
                                .union(yahe)
                                .union(leidiao)
                                .union(jiance)
                                .union(fenggai)
                                .union(xialiao)
                                .union(D0)
                                .union(D1)
                                .union(D2)
                                .union(D3)
                                .union(D4)
                                .union(D5)
                                .union(D6)
                                .union(D7)
                                .union(D8)
                                .union(D9)
                                .select("count", "date")
                                .groupBy("date").agg(("count", "sum")).withColumnRenamed("sum(count)","count")
    val prop =new Properties()
   prop.setProperty("user","root")
   prop.setProperty("password","123456")
    //todo:写入mysql时，可以配置插入mode，overwrite覆盖，append追加，ignore忽略，error默认表存在报错
    count_size.write.mode(SaveMode.Append).jdbc("jdbc:mysql://192.168.2.162:3306/dhlk_multi_tenant","dhlk_count_size",prop)
    spark.close()

  }
}

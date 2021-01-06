package com.dhlk.DataCleaning;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;


/**
 * hdfs具体的目录文件所占内存大小
 */
public class HdfsPathMonitor {
    // submit shell
    /*
     * main类的路径不需要指定，否则会被认为是参数传递进入。
     * yarn jar /app/m_user1/service/Hangzhou_HdfsFileMananger.jar /hive_tenant_account/hivedbname/
     */

    public static void main(String[] args) throws Exception {
        System.out.println("the args is " + String.join(",", args));

        //String  args ="/dhlk/hive_meta/dhlk/hive_meta_machine";
        String dirPath = "/dhlk/hive_meta/";

        Configuration conf = new Configuration();
        /*
         * <property> <name>fs.defaultFS</name> <value>hdfs://mycluster</value>
         * </property>
         */
        conf.set("fs.defaultFS", "hdfs://nameservice1");

        FileSystem fileSystem = FileSystem.get(conf);
        Path path = new Path(dirPath);

        // 获取文件列表
        FileStatus[] files = fileSystem.listStatus(path);
        if (files == null || files.length == 0) {
            throw new FileNotFoundException("Cannot access " + dirPath + ": No such file or directory.");
        }

        System.out.println("dirpath \t total file size \t total file count");
        for (int i = 0; i < files.length; i++) {
            String pathStr = files[i].getPath().toString();

            FileSystem fs = files[i].getPath().getFileSystem(conf);
            long totalSize_count = fs.getContentSummary(files[i].getPath()).getLength();
            long totalFileCount = listAll(conf, files[i].getPath());

            System.out.println(("".equals(pathStr) ? "." : pathStr) + "\t" + totalSize_count + "\t" + totalFileCount);

            long  totalSize = totalSize_count/1024;
            int index=pathStr.lastIndexOf("/");

            String tenant=pathStr.substring(index+1);

            SimpleDateFormat  df=new SimpleDateFormat("yyyy-MM-dd");
            Date now= new Date();  //获取当前系统时间

            String  date=df.format(now);


            Connection conn = DBUtil.getConnection();

            String sql = "insert into dhlk_memory_size(shift_date,path,tenant,totalSize) values('"+date+"', '"+pathStr+"','"+tenant+"',"+totalSize+")";
            System.out.println(sql);
            PreparedStatement ptmt = conn.prepareStatement(sql);

            ptmt.executeUpdate();
            System.out.println(sql);
            //conn.close();



            fs.close();
        }
    }

    /**
     * @Title: listAll @Description: 列出目录下所有文件 @return void 返回类型 @throws
     */
    public static Long listAll(Configuration conf, Path path) throws IOException {
        long totalFileCount = 0;
        FileSystem fs = FileSystem.get(conf);

        if (fs.exists(path)) {
            FileStatus[] stats = fs.listStatus(path);
            for (int i = 0; i < stats.length; ++i) {
                if (!stats[i].isDir()) {
                    // regular file
                    // System.out.println(stats[i].getPath().toString());
                    totalFileCount++;
                } else {
                    // dir
                    // System.out.println(stats[i].getPath().toString());
                    totalFileCount += listAll(conf, stats[i].getPath());
                }
            }
        }
        fs.close();

        return totalFileCount;
    }

}
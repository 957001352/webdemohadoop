package com.dhlk.DataCleaning;


import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import java.sql.DriverManager;
import java.sql.ResultSet;

public class JDBCTest {
    public static void main(String[] args) throws Exception {
        Connection connection = null;
        PreparedStatement prepareStatement = null;
        ResultSet rs = null;

        try {
            // 加载驱动
            Class.forName("com.mysql.jdbc.Driver");
            // 获取连接
            String url = "jdbc:mysql://192.168.2.161:3306/dhlk_platdb";
            String user = "root";
            String password = "1111";
            connection = (Connection) DriverManager.getConnection(url, user, password);
            // 获取statement，preparedStatement
            String sql = "select * from dhlk_basic_meta_table_column  where id=?";
            prepareStatement = (PreparedStatement) connection.prepareStatement(sql);
            // 设置参数
            prepareStatement.setLong(1, 1);
            // 执行查询
            rs = prepareStatement.executeQuery();
            // 处理结果集
            while (rs.next()) {
                System.out.println("table_id："+rs.getInt("table_id"));

            }
        } finally {
            // 关闭连接，释放资源
            if (rs != null) {
                rs.close();
            }
            if (prepareStatement != null) {
                prepareStatement.close();
            }
            if (connection != null) {
                connection.close();
            }
        }
    }
}

package com.dhlk.DataCleaning;


import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;

public class KafkaSend {

    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "192.168.2.161:9092,192.168.2.162:9092,192.168.2.163:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        //生产者发送消息
        String topic = "aaa";//topic
        Producer<String, String> procuder = new KafkaProducer<String,String>(props);
        for (int i = 1; i <= 10000; i++) {
            //String value = "1,201.105.101.108,http://mystore.jsp/?productid=1,2017020029,2,1";

            //String  value ="{\"table\": \"hive_meta_machine\", \"after\": {\"device_number\": \"H14-181-295\", \"device_name\": \"小流水线6\", \"params_name\": \"R-_wei_zhi_zhi\", \"params_value\": 1.0, \"create_time\": \"2020-04-29 01:30:46\", \"ts\": 1588123846.6927314, \"factoryCode\": \"dhlk\"}}";
            //String   value ="1,201.105.101.108,http://mystore.jsp/?productid=1,2017020029,2,1";

            String   value ="{\"device_number\": \"H14-181-295\", \"device_name\": \"小流水线6\", \"params_name\": \"R-_wei_zhi_zhi\", \"params_value\": 1.0, \"create_time\": \"2020-04-29 01:30:46\", \"ts\": 1588123846.6927314, \"factoryCode\": \"dhlk\"}";
           // String  value ="{\"code\":0,\"msg\":\"\",\"data\":{\"pageNum\":1,\"pageSize\":10,\"size\":6,\"orderBy\":null,\"startRow\":1,\"endRow\":6,\"total\":6,\"pages\":1,\"list\":[{\"id\":8,\"code\":\"dhlk_tenant_420370\",\"name\":\"xxx001\",\"telephone\":\"029-22556655\",\"adress\":\"北京市,市辖区,东城区\",\"companyEmail\":\"xxx001@qq.com\",\"linkman\":\"xxx\",\"phone\":\"15191985655\",\"email\":\"xxx001@qq.com\",\"startTime\":\"2020-05-25T16:00:00.000+0000\",\"endTime\":\"2020-06-29T16:00:00.000+0000\",\"createTime\":\"2020-05-26T09:15:58.000+0000\",\"devices\":100,\"status\":0,\"isSystem\":1,\"tbLoginname\":\"dhlk_tenant_420370@dhlk-tech.com\",\"tbPassword\":\"dhlk_tenant_420370\",\"orgId\":8,\"roleId\":2,\"fileId\":\"6493a672a5e34400a8d82613bcf765c2\",\"imagePath\":\"/attach/2020-05-26\\\\d01102cd33ae402d9543481a7be5f247.png\",\"detailAddress\":\"xxx001\",\"expire\":null,\"tbId\":\"823c8680-9f31-11ea-8dd6-8f3fdfa9a7d0\"},{\"id\":6,\"code\":\"dhlk_tenant_283646\",\"name\":\"测试租户01\",\"telephone\":\"029-1234567\",\"adress\":\"陕西省,西安市,碑林区\",\"companyEmail\":\"1234@qq.com\",\"linkman\":\"赵继\",\"phone\":\"13772531670\",\"email\":\"1234@qq.com\",\"startTime\":\"2020-05-25T08:00:00.000+0000\",\"endTime\":\"2020-05-26T08:00:00.000+0000\",\"createTime\":\"2020-05-26T08:56:25.000+0000\",\"devices\":100,\"status\":0,\"isSystem\":1,\"tbLoginname\":\"dhlk_tenant_283646@dhlk-tech.com\",\"tbPassword\":\"dhlk_tenant_283646\",\"orgId\":7,\"roleId\":2,\"fileId\":\"fa479e7a3e934b259abd30be25246019\",\"imagePath\":\"/attach/2020-05-26\\\\262460ef7100477fa0b772c2b5c913cd.png\",\"detailAddress\":\"029\",\"expire\":null,\"tbId\":\"c75e27d0-9f2e-11ea-8dd6-8f3fdfa9a7d0\"},{\"id\":5,\"code\":\"dhlk_tenant_961846\",\"name\":\"测试租户改改改\",\"telephone\":\"021-22222222\",\"adress\":\"北京市,市辖区,朝阳区\",\"companyEmail\":\"zxcc@126.com\",\"linkman\":\"张三三\",\"phone\":\"13200000000\",\"email\":\"12346@qq.com\",\"startTime\":\"2020-05-21T08:00:00.000+0000\",\"endTime\":\"2020-06-29T08:00:00.000+0000\",\"createTime\":\"2020-05-26T08:53:56.000+0000\",\"devices\":101,\"status\":0,\"isSystem\":1,\"tbLoginname\":\"dhlk_tenant_961846@dhlk-tech.com\",\"tbPassword\":\"dhlk_tenant_961846\",\"orgId\":6,\"roleId\":2,\"fileId\":\"ab7c286da0724c6c99c8775ed199d05a\",\"imagePath\":\"/attach/2020-05-26\\\\f21f4c463a6e403296fcea49bed46e4e.png\",\"detailAddress\":\"东三环中路\",\"expire\":null,\"tbId\":\"6e70ce20-9f2e-11ea-8dd6-8f3fdfa9a7d0\"},{\"id\":4,\"code\":\"dhlk_tenant_565034\",\"name\":\"随便xxx\",\"telephone\":\"029-56566565\",\"adress\":\"北京市,市辖区,东城区\",\"companyEmail\":\"xxx@qq.com\",\"linkman\":\"xxx\",\"phone\":\"15195654656\",\"email\":\"xxx@qq.com\",\"startTime\":\"2020-05-27T08:00:00.000+0000\",\"endTime\":\"2020-06-29T08:00:00.000+0000\",\"createTime\":\"2020-05-26T08:49:05.000+0000\",\"devices\":100,\"status\":0,\"isSystem\":1,\"tbLoginname\":\"dhlk_tenant_565034@dhlk-tech.com\",\"tbPassword\":\"dhlk_tenant_565034\",\"orgId\":5,\"roleId\":2,\"fileId\":\"e26a57650f864bb0af52622a49209158\",\"imagePath\":\"/attach/2020-05-26\\\\d66e98d843e348c28f61b6a079ab2dc2.png\",\"detailAddress\":\"xxx\",\"expire\":null,\"tbId\":\"c0e63b00-9f2d-11ea-8dd6-8f3fdfa9a7d0\"},{\"id\":3,\"code\":\"dhlk_tenant_288486\",\"name\":\"泛沃集团\",\"telephone\":\"029-55565623\",\"adress\":\"北京市,市辖区,东城区\",\"companyEmail\":\"xxx@qq.com\",\"linkman\":\"xxx\",\"phone\":\"15191856546\",\"email\":\"xxx@qq.com\",\"startTime\":\"2020-05-25T08:00:00.000+0000\",\"endTime\":\"2020-06-29T08:00:00.000+0000\",\"createTime\":\"2020-05-26T08:35:57.000+0000\",\"devices\":100,\"status\":0,\"isSystem\":1,\"tbLoginname\":\"dhlk_tenant_288486@dhlk-tech.com\",\"tbPassword\":\"dhlk_tenant_288486\",\"orgId\":4,\"roleId\":2,\"fileId\":\"99105977cf554fdabdbce59b99cb8711\",\"imagePath\":\"/attach/2020-05-26\\\\8654ffa533dc43329e57183ce2adeb95.png\",\"detailAddress\":\"xxx\",\"expire\":null,\"tbId\":\"eb43ca40-9f2b-11ea-8dd6-8f3fdfa9a7d0\"},{\"id\":2,\"code\":\"dhlk_tenant_969551\",\"name\":\"镇江莱尼\",\"telephone\":\"029-85265695\",\"adress\":\"北京市,市辖区,东城区\",\"companyEmail\":\"xxx@qq.com\",\"linkman\":\"xxx\",\"phone\":\"15119856556\",\"email\":\"xxx@qq.com\",\"startTime\":\"2020-05-25T08:00:00.000+0000\",\"endTime\":\"2020-06-29T08:00:00.000+0000\",\"createTime\":\"2020-05-26T08:23:27.000+0000\",\"devices\":100,\"status\":0,\"isSystem\":1,\"tbLoginname\":\"dhlk_tenant_969551@dhlk-tech.com\",\"tbPassword\":\"dhlk_tenant_969551\",\"orgId\":3,\"roleId\":2,\"fileId\":\"3b3edf0490c54baa859a4613257b6286\",\"imagePath\":\"/attach/2020-05-26\\\\cc2fcdbe9c064fd6bcb06ad9e5fd9383.png\",\"detailAddress\":\"xxx\",\"expire\":null,\"tbId\":\"2c7947d0-9f2a-11ea-8dd6-8f3fdfa9a7d0\"}],\"prePage\":0,\"nextPage\":0,\"isFirstPage\":true,\"isLastPage\":true,\"hasPreviousPage\":false,\"hasNextPage\":false,\"navigatePages\":8,\"navigatepageNums\":[1],\"navigateFirstPage\":1,\"navigateLastPage\":1,\"firstPage\":1,\"lastPage\":1}}\n";
            ProducerRecord<String, String> msg = new ProducerRecord<String, String>(topic, value);
            procuder.send(msg);
            try {
                Thread.sleep(10);
                System.out.println(msg.toString());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("send message over.");
        procuder.close();
    }
}

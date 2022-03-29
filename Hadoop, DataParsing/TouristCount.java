package ssafy;

import java.io.IOException;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

public class TouristCount {
    /*관광지 */
    public static class Tourist {
        private String name;        //명칭
        private String address;     //주소
        //private double latitude;    //위도
        //private double longtitude;  //경도
        //private String description; //개요

        public Tourist(Text text){
            try{
                String[] columns = text.toString().split(",");
                if(!columns[0].equals("NA") && !columns[0].equals(null)){
                    name = columns[0];
                }
                else
                    name = "no Name";

                if(!columns[1].equals("NA") && !columns[1].trim().equals("") ){
                    address = columns[1].split(" ")[0];
                }
                else{
                    address = "no Adress";
                }
            }catch (Exception e) {
                System.out.println("Error parsing a record : " + e.getMessage());

            }
        }

        public String getAddress(){return address;}

    }


    /*
    관광지 데이터
    */
    public static class TouristMapper
            extends Mapper<LongWritable,Text,Text,IntWritable> {

        // 갯수
        private final static IntWritable one = new IntWritable(1);

        //지역
        private Text word = new Text();

        public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            Tourist parser = new Tourist(value);
            word.set(parser.getAddress());
            context.write(word, one);
        }
    }

    public static class IntSumReducer
            extends Reducer<Text,IntWritable,Text,IntWritable> {

        // variables
        private IntWritable result = new IntWritable();

        public void reduce(Text key, Iterable<IntWritable> values, Context context)
                throws IOException, InterruptedException {

            int sum = 0;
            for ( IntWritable val : values ) {
                sum += val.get();
            }
            result.set(sum);
            context.write(key,result);
        }
    }


    /* Main function */
    public static void main(String[] args) throws Exception {
        Configuration conf = new Configuration();
        String[] otherArgs = new GenericOptionsParser(conf,args).getRemainingArgs();
        if ( otherArgs.length != 2 ) {
            System.err.println("Usage: <in> <out>");
            System.exit(2);
        }

        conf.set("mapred.textoutputformat.separator", ",");
        FileSystem hdfs = FileSystem.get(conf);
        Path output = new Path(otherArgs[1]);
        if (hdfs.exists(output))
            hdfs.delete(output, true);

        Job job = new Job(conf,"tourtist count");
        job.setJarByClass(TouristCount.class);

        // let hadoop know my map and reduce classes
        job.setMapperClass(TouristMapper.class);
        job.setReducerClass(IntSumReducer.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        // set number of reduces
        //job.setNumReduceTasks(2);

        // set input and output directories
        FileInputFormat.addInputPath(job,new Path(otherArgs[0]));
        FileOutputFormat.setOutputPath(job,output);

        System.exit(job.waitForCompletion(true) ? 0 : 1 );
    }
}



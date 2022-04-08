package ssafy;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;

import java.io.IOException;

public class Keywords2 {

    public static class KeywordMapper
            extends Mapper<LongWritable,Text,Text,IntWritable> {
        
        private Text keyTxt = new Text();
        private final static IntWritable one = new IntWritable();

        private String[] keywordValue = {"자연","산","바다","강","호수",
                "가을","여름","봄","겨울",
                "전통","체험",
                "공원","역사","힐링",
                "혼자","홀로",
                "음식","식당"};

        public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
            //데이터 배열로 저장
            String[] columns = value.toString().split(",");

            //이름과 번호 지정
            String checkValue = columns[2]+" "+columns[3];
            one.set(Integer.parseInt(columns[1]));

            
            //이름과 설명안에 키워드가 있는 지 확인한다.
            for (String keyw : keywordValue) {

                if (checkValue.contains(keyw)) {
                    keyTxt.set(keyw);
                    context.write(keyTxt, one);
                }
            }


        }
    }

    public static class KeywordReducer
            extends Reducer<Text,IntWritable,Text,IntWritable> {
        
        public void reduce(Text key, Iterable<IntWritable> values, Context context)
                throws IOException, InterruptedException {

	    //키워드 번호 이름
	    //체험 1018 박물관에서 놀고 자연에서 배우다.
            for(IntWritable val : values) {
                context.write(key,val);
            }
            
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

        Job job = new Job(conf,"keywords2");
        job.setJarByClass(Keywords2.class);

        // let hadoop know my map and reduce classes
        job.setMapperClass(KeywordMapper.class);
        job.setReducerClass(KeywordReducer.class);

        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);

        // set number of reduces
        //job.setNumReduceTasks(5);

        // set input and output directories
        FileInputFormat.addInputPath(job,new Path(otherArgs[0]));
        FileOutputFormat.setOutputPath(job,output);

        System.exit(job.waitForCompletion(true) ? 0 : 1 );
    }
}


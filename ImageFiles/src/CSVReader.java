import java.io.*;
import java.util.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import java.io.File;
public class CSVReader {
    public static void main(String[] args) {
        // List<List<String>> csvList = new ArrayList<List<String>>();
        File csv = new File("C:\\tourdata.csv");
        BufferedReader br = null;
        String line = "";
        Map<String, String> map = new HashMap<String, String>();

        try {
            br = new BufferedReader(new FileReader(csv));
            while ((line = br.readLine()) != null) {
                List<String> aLine = new ArrayList<String>();
                String[] lineArr = line.split(",");
                //aLine = Arrays.asList(lineArr);
                //csvList.add(aLine);
                String name = lineArr[1].replace("\"","");
                System.out.println(lineArr[0] +","+name);
                map.put(name, lineArr[0]);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        //for(Entry<String, String> entrySet : map.entrySet()) {
            //파일이름 변경
            //System.out.println(entrySet.getKey());
            //File file4 = new File("C:\\관광지 이미지\\관광지 총 데이터\\"+entrySet.getKey().replace("/","_")+"4.jpg");
            //File file1 = new File("C:\\테스트\\"+entrySet.getKey().replace("/","_")+"1.jpg");
            //File file2 = new File("C:\\테스트\\"+entrySet.getKey().replace("/","_")+"2.jpg");
            //File file3 = new File("C:\\테스트\\"+entrySet.getKey().replace("/","_")+"3.jpg");

            //File file44 = new File("C:\\관광지 이미지\\관광지 총 데이터\\"+entrySet.getValue()+"_4.jpg");
            //File file11 = new File("C:\\테스트\\"+entrySet.getValue()+"_1.jpg");
            //File file22 = new File("C:\\테스트\\"+entrySet.getValue()+"_2.jpg");
            //File file33 = new File("C:\\테스트\\"+entrySet.getValue()+"_3.jpg");

//            if(file4.exists()){
//                System.out.println("s3"+file4.renameTo(file44));
//            }

        //}
    }
}
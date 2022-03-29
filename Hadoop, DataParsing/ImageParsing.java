import java.io.*;
import java.util.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import java.io.File;
public class CSVReader {
    public static void main(String[] args) {
        // List<List<String>> csvList = new ArrayList<List<String>>();
        File csv = new File("C:\\Users\\<경로>\\tourist_data (1).csv");
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
        for(Entry<String, String> entrySet : map.entrySet()) {
            //파일이름 변경
            //System.out.println(entrySet.getKey());
            File file1 = new File("경로"+entrySet.getKey().replace("/","_")+"1.jpeg");
            File file2 = new File("경로"+entrySet.getKey().replace("/","_")+"2.jpeg");
            File file3 = new File("경로"+entrySet.getKey().replace("/","_")+"3.jpeg");


            File file11 = new File("경로"+entrySet.getValue()+"_1.png");
            File file22 = new File("경로"+entrySet.getValue()+"_2.png");
            File file33 = new File("경로"+entrySet.getValue()+"_3.png");

            if(file1.exists()){

                System.out.println("s1"+file1.renameTo(file11));
            }

            if(file2.exists()){

                System.out.println("s2"+file2.renameTo(file22));
            }
            if(file3.exists()){
                System.out.println("s3"+file3.renameTo(file33));
            }

        }
    }
}
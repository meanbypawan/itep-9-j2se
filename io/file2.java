/*
  OutputStream (Abstract class)
     |
  FileOutputStream   

 */
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
class TestMain{
    public static void main(String args[]){
     try{   
      File f = new File("data.txt");
      FileOutputStream fout = new FileOutputStream(f,true);
      
      String data = "Java is architecutral neural";
      byte b[] = data.getBytes();
      fout.write(b);
      System.out.println("Operation Success....");
     }
     catch(IOException e){
        System.out.println(e);
     } 
    }
}
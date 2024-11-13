/*
   Write Operation
     OutputStream
     FileOutputStream
       write()
   Read Operation
     InputStream
     FileInputStream  -------> ByteStream
       read()
   ObjectOutputStream
   ObjectInputStream
   Serializable
---------------------------------------------
  Write Operation
    Writer
    FileWriter
  Read Operation
    Reader    
    FileReader         

  public void close() throws IOException;  
 */
import java.io.FileWriter;
import java.util.Scanner;

class TestMain{
    public static void main(String args[]){
        try(FileWriter fw = new FileWriter("abc.txt")){
          Scanner sc = new Scanner(System.in);
          System.out.println("Enter some text..");
          String data = sc.nextLine();
          fw.write(data);
          System.out.println("Operation success...");
        }
        catch(java.io.IOException e){
            e.printStackTrace();
        }
    }
}











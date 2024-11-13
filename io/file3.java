import java.io.File;
import java.io.FileInputStream;
class TestMain{
    public static void main(String args[]){
        try{
           File file = new File("data.txt");
           FileInputStream fin = new FileInputStream(file);
           String data = "";
           while(true){
             int x = fin.read();
             if(x == -1)
               break;
             data = data + (char)x;  
           }
           System.out.println(data);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
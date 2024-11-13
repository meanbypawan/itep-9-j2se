import java.io.File;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
class TestMain{
    public static void main(String args[]){
        try{
          File file = new File("customer.txt");
          FileOutputStream fout = new FileOutputStream(file);
          ObjectOutputStream oos = new ObjectOutputStream(fout);
          Customer c = new Customer(100,"ABC","9009111222",23);

          oos.writeObject(c); 
          System.out.println("Operation Success....");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
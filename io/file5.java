import java.io.File;
import java.io.FileInputStream;
import java.io.ObjectInputStream;
class TestMain{
    public static void main(String args[]){
       try{
         FileInputStream fin = new FileInputStream("customer.txt");
         ObjectInputStream ois = new ObjectInputStream(fin);
         Customer c = (Customer)ois.readObject(); // Object
         System.out.println(c.getId()+" "+c.getName()+"  "+c.getContact()+" "+c.getAge());
       }
       catch(Exception e){
        e.printStackTrace();
       }
    }
}
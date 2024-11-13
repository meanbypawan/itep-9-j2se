/*
   getName()
   getAbosultePath()
   length()
   canWrite()
   canRead()
   canExecute()
   isHidden()
   lastModified()
   isFile()
   isDirectory()
   -----------------------
   Instance Method
 */
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
class TestMain{
    public static void main(String args[]){
        File file = new File("data.txt");
        System.out.println("Name : "+file.getName());
        System.out.println("Path : "+file.getAbsolutePath());
        System.out.println("Size : "+file.length());
        System.out.println("canRead : "+file.canRead());
        System.out.println("canWrite : "+file.canWrite());
        System.out.println("canExecute : "+file.canExecute());
        System.out.println("isHidden : "+file.isHidden());
        System.out.println("isFile : "+file.isFile());
        System.out.println("isDirectory  : "+file.isDirectory());

        long timeStatamp = file.lastModified();
        SimpleDateFormat sd = new SimpleDateFormat("dd/MM/yyyy hh:mm");        
        String date = sd.format(new Date(timeStatamp)).toString();
        
        System.out.println("lastModified : "+date); 
    }
}








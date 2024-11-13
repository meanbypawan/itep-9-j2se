
import java.util.Scanner;
class VoterException extends Exception{
   public VoterException(){
      super("Invalid Voter Exception : You are less then 18");
   }
   public VoterException(String message){
    super(message);
   }
}
class TestMain{
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       try{      
        System.out.println("Enter Age");
        int age = sc.nextInt();

        if(age < 18)
         throw new VoterException("Abhi app chote hai....");
        else
          System.out.println("You can vote..."); 
       }
       catch(VoterException e){
          e.printStackTrace();
       }
    }
}
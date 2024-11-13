import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       try{
       System.out.println("Enter 1st value");
       int a = sc.nextInt();

       System.out.println("Enter 2nd valude");
       int b = sc.nextInt();

       int c = a/b;
       System.out.println("Result : "+c);
       }
       catch(ArithmeticException e){
         e.printStackTrace();       
       }
       catch(Exception e){
         e.printStackTrace();
       }
       finally{
         System.out.println("Finally executed....");         
       }
       System.out.println("At the end...");
    }
}
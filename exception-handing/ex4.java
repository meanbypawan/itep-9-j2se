class Test{
    public int m1(){
     try{   
      /*------ */  
      System.out.println("m1()-executed...");
      //return 100;
     }
     catch(Exception e){
        System.out.println("Catch executed...");
        //return 200;
     } 
     finally{
        System.out.println("Finally executed..");
        //return 300;
     }
     return 400;
    }
}

class TestMain{
    public static void main(String args[]){
       Test obj = new Test();
       System.out.println(obj.m1());
    }
}
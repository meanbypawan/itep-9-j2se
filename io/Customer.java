import java.io.Serializable;

public class Customer implements Serializable{
    private int id;
    private String name;
    transient private String contact; // "9009111222"
    private int age;

    public Customer(int id, String name, String contact, int age){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.age = age;
    }
    public Customer(){}
    public int getId(){
       return id;
    }
    public String getName(){
        return name;
    }
    public String getContact(){
        return contact;
    }
    public int getAge(){
        return age;
    }
}
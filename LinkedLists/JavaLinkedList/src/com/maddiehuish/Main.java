package com.maddiehuish;

public class Main {

    private static void greeting1() {
        System.out.println("Hello Madeleine!");
    }

    public static void main(String[] args) {
        String message = "This goes to Greeting and gets called in main!";
        greeting1(); //called from class Main, here
        Greeting.greeting2(); //no import statement needed, this pulls a function from Greeting.java,possible because Greeting.greeting is static
        Greeting.greeting3(message);

        Node node1 = new Node(100);
        System.out.println(node1.data);

        node1.appendToTail(200);
        System.out.print(node1.next.data);

    }
}

export const javaCurriculum = [
  {
    id: "java-basics",
    title: "Java Foundations",
    level: "Basic",
    summary: "Understand Java, the JVM, syntax, variables, data types, operators, input, and first programs.",
    topics: [
      {
        id: "what-is-java",
        title: "What is Java?",
        goal: "Understand Java's role, strengths, and execution model.",
        article: "Java is a class-based, object-oriented language built for portability. Source code is compiled into bytecode, and the JVM runs that bytecode across operating systems.",
        videoUrl: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Welcome to Java");
  }
}`,
        practice: ["Install JDK and run Hello World", "Explain JDK, JRE, JVM in your own words"],
      },
      {
        id: "variables-datatypes",
        title: "Variables and Data Types",
        goal: "Store and work with primitive and reference values.",
        article: "Java variables have a declared type. Primitive types store simple values, while reference types point to objects.",
        videoUrl: "https://www.youtube.com/watch?v=Le25I331_yU",
        code: `int age = 21;
double score = 92.5;
boolean active = true;
String name = "Asha";`,
        practice: ["Create variables for a student profile", "Convert Celsius to Fahrenheit"],
      },
      {
        id: "operators-input",
        title: "Operators and User Input",
        goal: "Use arithmetic, comparison, logical operators, and Scanner.",
        article: "Operators let programs calculate and make decisions. Scanner reads typed input from the console.",
        videoUrl: "https://www.youtube.com/watch?v=wAEPokhj5Q4",
        code: `Scanner sc = new Scanner(System.in);
System.out.print("Enter marks: ");
int marks = sc.nextInt();
System.out.println(marks >= 40 ? "Pass" : "Fail");`,
        practice: ["Build a simple calculator", "Ask for name and age, then print a message"],
      },
    ],
  },
  {
    id: "control-flow",
    title: "Control Flow",
    level: "Basic",
    summary: "Write programs that branch and repeat using if, switch, loops, and nested loops.",
    topics: [
      {
        id: "if-switch",
        title: "if-else and switch",
        goal: "Choose different execution paths based on conditions.",
        article: "Use if-else for ranges and complex conditions. Use switch for clean matching against known values.",
        videoUrl: "https://www.youtube.com/watch?v=WfnP_INzOEM",
        code: `int day = 2;
switch (day) {
  case 1 -> System.out.println("Monday");
  case 2 -> System.out.println("Tuesday");
  default -> System.out.println("Other day");
}`,
        practice: ["Grade checker", "Menu-driven calculator"],
      },
      {
        id: "loops-patterns",
        title: "Loops and Patterns",
        goal: "Use for, while, and nested loops to solve repeated tasks.",
        article: "Loops reduce repetition. Nested loops are useful for grids, matrices, and pattern programs.",
        videoUrl: "https://www.youtube.com/watch?v=MWV3HSC4bNs",
        code: `for (int row = 1; row <= 5; row++) {
  for (int col = 1; col <= row; col++) {
    System.out.print("* ");
  }
  System.out.println();
}`,
        practice: ["Print a multiplication table", "Print triangle and diamond star patterns"],
      },
    ],
  },
  {
    id: "methods-arrays",
    title: "Methods, Arrays, and Strings",
    level: "Intermediate",
    summary: "Organize logic into methods and handle collections of values using arrays and strings.",
    topics: [
      {
        id: "methods-recursion",
        title: "Methods and Recursion",
        goal: "Break programs into reusable blocks and understand recursive thinking.",
        article: "Methods improve readability and reuse. Recursion solves a problem by reducing it into smaller versions of itself with a base case.",
        videoUrl: "https://www.youtube.com/watch?v=M2uO2nMT0Bk",
        code: `static int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`,
        practice: ["Write methods for max, min, average", "Solve factorial and Fibonacci recursively"],
      },
      {
        id: "arrays-strings",
        title: "Arrays and Strings",
        goal: "Store multiple values and process text safely.",
        article: "Arrays store fixed-size collections. Strings are immutable objects with helpful methods such as charAt, substring, split, and equals.",
        videoUrl: "https://www.youtube.com/watch?v=ei_4Nt7XWOw",
        code: `int[] marks = {82, 91, 76};
int max = marks[0];
for (int mark : marks) {
  if (mark > max) max = mark;
}`,
        practice: ["Reverse an array", "Check if a string is a palindrome"],
      },
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    level: "Intermediate",
    summary: "Master classes, objects, inheritance, polymorphism, abstraction, and encapsulation.",
    topics: [
      {
        id: "classes-objects",
        title: "Classes and Objects",
        goal: "Model real-world entities with fields and methods.",
        article: "A class is a blueprint. An object is an instance created from that blueprint with its own state.",
        videoUrl: "https://www.youtube.com/watch?v=OHw2t8BaIUg",
        code: `class Student {
  String name;
  int marks;

  void printResult() {
    System.out.println(name + " scored " + marks);
  }
}`,
        practice: ["Create Student and Course classes", "Add methods to update marks"],
      },
      {
        id: "inheritance-polymorphism",
        title: "Inheritance and Polymorphism",
        goal: "Reuse behavior and write flexible object-oriented code.",
        article: "Inheritance shares behavior through parent classes. Polymorphism lets one interface represent multiple concrete behaviors.",
        videoUrl: "https://www.youtube.com/watch?v=9k9GEeKbqMk",
        code: `class Animal {
  void speak() { System.out.println("Sound"); }
}

class Dog extends Animal {
  @Override void speak() { System.out.println("Bark"); }
}`,
        practice: ["Build a Shape hierarchy", "Override methods for different payment types"],
      },
      {
        id: "interfaces-encapsulation",
        title: "Interfaces and Encapsulation",
        goal: "Hide internal state and define contracts for behavior.",
        article: "Encapsulation protects data with private fields and public methods. Interfaces define what a class can do without forcing implementation details.",
        videoUrl: "https://www.youtube.com/watch?v=GhslBwrRsnE",
        code: `interface Payable {
  double calculatePay();
}

class Employee implements Payable {
  private double salary;
  public double calculatePay() { return salary; }
}`,
        practice: ["Create a BankAccount class", "Implement Comparable for Student"],
      },
    ],
  },
  {
    id: "advanced-java",
    title: "Advanced Java",
    level: "Advanced",
    summary: "Work with exceptions, collections, generics, Java 8 features, and file handling.",
    topics: [
      {
        id: "exceptions",
        title: "Exception Handling",
        goal: "Handle runtime failures without crashing the application.",
        article: "Exceptions represent abnormal situations. Use try-catch-finally for recovery and custom exceptions for domain-specific errors.",
        videoUrl: "https://www.youtube.com/watch?v=1XAfapkBQjk",
        code: `try {
  int value = Integer.parseInt(input);
  System.out.println(value);
} catch (NumberFormatException ex) {
  System.out.println("Please enter a valid number.");
}`,
        practice: ["Handle invalid user input", "Create InsufficientFundsException"],
      },
      {
        id: "collections",
        title: "Collections Framework",
        goal: "Use ArrayList, HashMap, HashSet, and queues effectively.",
        article: "Collections provide dynamic data structures. Choose List for ordered items, Set for uniqueness, and Map for key-value lookup.",
        videoUrl: "https://www.youtube.com/watch?v=H62Jfv1DZMc",
        code: `Map<String, Integer> scores = new HashMap<>();
scores.put("Java", 95);
scores.put("DSA", 88);
System.out.println(scores.get("Java"));`,
        practice: ["Build a word frequency counter", "Remove duplicates from a list"],
      },
      {
        id: "java8-streams",
        title: "Lambda and Stream API",
        goal: "Process collections with modern Java functional style.",
        article: "Streams let you filter, map, sort, and collect data through expressive pipelines.",
        videoUrl: "https://www.youtube.com/watch?v=tj5sLSFjVj4",
        code: `List<String> names = List.of("Asha", "Rahul", "Neha");
List<String> result = names.stream()
  .filter(name -> name.startsWith("A"))
  .toList();`,
        practice: ["Filter students above 80 marks", "Group employees by department"],
      },
    ],
  },
  {
    id: "java-dsa",
    title: "DSA with Java",
    level: "Advanced",
    summary: "Prepare for interviews with complexity analysis, arrays, linked lists, trees, graphs, and dynamic programming.",
    topics: [
      {
        id: "complexity-search-sort",
        title: "Complexity, Searching, and Sorting",
        goal: "Analyze time and space, then implement common algorithms.",
        article: "Big O describes how runtime or memory grows as input size increases. Sorting and searching teach essential tradeoffs.",
        videoUrl: "https://www.youtube.com/watch?v=BgLTDT03QtU",
        code: `static int binarySearch(int[] arr, int target) {
  int left = 0, right = arr.length - 1;
  while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
        practice: ["Implement binary search", "Compare bubble sort and merge sort"],
      },
      {
        id: "trees-graphs-dp",
        title: "Trees, Graphs, and Dynamic Programming",
        goal: "Solve advanced problems with structured traversal and state reuse.",
        article: "Trees and graphs model relationships. Dynamic programming avoids repeated work by storing answers to subproblems.",
        videoUrl: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        code: `static int climbStairs(int n) {
  if (n <= 2) return n;
  int a = 1, b = 2;
  for (int i = 3; i <= n; i++) {
    int next = a + b;
    a = b;
    b = next;
  }
  return b;
}`,
        practice: ["Find max depth of a tree", "Solve climbing stairs and coin change"],
      },
    ],
  },
];

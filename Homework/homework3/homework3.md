# Homework Assignment #3
### Joshua Kuroda // 2017-03-13

* 7.1

```java
     // Use Euclid's algorithm to calculate the GCD.
     // The Euclidean algorithm is an efficient method for calculating the GCD of two numbers. 
     // Its description can be found here: https://en.wikipedia.org/wiki/Euclidean_algorithm
     
     private long GCD ( long a, long b ) {
        a = Math.abs( a );
        b = Math.abs( b );

        for ( ; ; ) {
           long remainder = a % b;
           If( remainder == 0 ) return b;
           a = b;
           b = remainder;
        };
     }
```

* 7.2

    One reason why this kind of commenting may have occurred is due to the coder following the top-down design plan all the way down to the minute details of it. Although it is good practice to use this method, simply describing what each part of the code does will not make for more readable code.
    Another reason why these comments may have been written is due to the coder simply adding in descriptive comments after writing the code. Maybe it made sense to simply describe what each line did, since he/she already had the idea of why everything was happening.

* 7.4

    The code for exercise 3 could be made offensive by adding validation for the input and the result, as well as having the `Debug.Assert` method throw an exception for any problems that come up.

* 7.5
    
    You could add error handling, but it would be better for the calling code to handle the errors. As it stands now, the exceptions are passed up to the calling code to be handled at that level. So error handling doesn't need to be added.

* 7.7

    _Instructions_
    - Walk to car
    - Unlock car
    - Enter car
    - Start car engine
    - Drive to parking lot exit
    - Turn right and drive until intersection
    - Turn left and drive until supermarket
    - Turn left into supermarket parking lot
    - Find parking spot and park car
    - Turn off car engine
    - Exit car
    - Lock car

    _Assumptions_
    - Seat and mirrors are set up properly for driver
    - The car has enough fuel for the trip
    - Driver has driver's license
    - There are no obstacles in the parking lots or roads
    - There are parking spots open at the supermarket
    - Driver understands English

* 8.1

    ```java

    // another method to test against our more efficient method
    public bool IsRelativelyPrime2 (int a, int b) {
        a = Math.abs(a); b = Math.abs(b);
        if (a == 1 || b == 1) {
            return true;
        }
        if (a == 0 || b == 0) {
            return false;
        }
        int min = Math.min(a, b);
        for (int i = 2; i <= min; i++) {
            if (a % i == 0 && b % i == 0) {
                return false;
            }
        }
        return true;
    }

    ```
    ```
    test method in pseudocode:

    for 1200 trials, pick random a, b:
        Assert IsRelativelyPrime(a, b) = IsRelativelyPrime2(a, b)

    for 1200 trials, pick random a:
        Assert IsRelativelyPrime(a, a) = IsRelativelyPrime2(a, a)

    for 1200 trials, pick random a:
        Assert IsRelativelyPrime(a, 1) is relatively prime
        Assert IsRelativelyPrime(a, -1) is relatively prime
        Assert IsRelativelyPrime(1, a) is relatively prime
        Assert IsRelativelyPrime(-1, a) is relatively prime

    for 1200 trials, pick random a (aside from 1, -1):
        Assert IsRelativelyPrime(a, 0) is relatively prime
        Assert IsRelativelyPrime(0, a) is relatively prime

    for 1200 trials, pick random a:
        Assert IsRelativelyPrime(a, -1000000) = IsRelativelyPrime2(a, -1000000)
        Assert IsRelativelyPrime(a, 1000000) = IsRelativelyPrime2(a, 1000000)
        Assert IsRelativelyPrime(-1000000, a) = IsRelativelyPrime2(-1000000, a)
        Assert IsRelativelyPrime(1000000, a) = IsRelativelyPrime2(1000000, a)

    Assert IsRelativelyPrime(-1000000, -1000000) = IsRelativelyPrime2(-1000000, -1000000)
    Assert IsRelativelyPrime(1000000, 1000000) = IsRelativelyPrime2(1000000, 1000000)
    Assert IsRelativelyPrime(-1000000, 1000000) = IsRelativelyPrime2(-1000000, 1000000)
    Assert IsRelativelyPrime(1000000, -1000000) = IsRelativelyPrime2(1000000, -1000000)

    ```

* 8.3

    Exercise 1 didn't specifiy how the more efficient `IsRelativelyPrime` method works, so the test could be classified as a black-box test. However, if we were told how the method worked, white-box or gray-box tests could have been written. Although you could make an exhaustive test with allowed values ranging from -1,000,000 to 1,000,000, that would make for trillions of paired values to test, so using a range of [-1000, 1000] would be more feasible. 

* 8.5

    ```java

    // Return true if a and b are relatively prime.
    public bool AreRelativelyPrime (int a, int b) {
        // Only 1 and -1 are relatively prime to 0.
        if (a == 0) {
            return ((b == 1) || (b == -1));
        }
        if (b == 0) {
            return ((a == 1) || (a == -1));
        }

        int gcd = GCD(a, b);
        return ((gcd == 1) || (gcd == -1));
    }

    // Use Euclid's algorithm to calculate the
    // greatest common divisor (GCD) of two numbers.
    // See https://en.wikipedia.org/wiki/Euclidean_algorighm
    public int GCD (int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);

        // if a or b is 0, return the other value.
        if (a == 0) {
            return b;
        }
        if (b == 0) {
            return a;
        }

        while (remainder > 0) {
            int remainder = a % b;
            if (remainder == 0) {
                return b;
            }
            a = b;
            b = remainder;
        };
    }

    ```

    ```java

    import java.lang.Math.*;

    public class Test {
        
        int testNum = 1200;
        int a, b;

        public int randomWithRange (int min, int max) {    
           return (random.nextInt(max + 1 -min) + min);
        }

        
        for (i = 0; i < testNum; i++) {
            a = randomWithRange(-1000, 1000);
            b = randomWithRange(-1000, 1000);
            Assert IsRelativelyPrime(a, b) == IsRelativelyPrime2(a, b);
        }

        for (i = 0; i < testNum; i++) {
            a = randomWithRange(-1000, 1000);
            Assert IsRelativelyPrime(a, a) == IsRelativelyPrime2(a, a);
        }

        for (i = 0; i < testNum; i++) {
            a = randomWithRange(-1000, 1000);
            Assert IsRelativelyPrime(a, 1);
            Assert IsRelativelyPrime(a, -1);
            Assert IsRelativelyPrime(1, a);
            Assert IsRelativelyPrime(-1, a);
        }

        for (i = 0; i < testNum; i++) {
            a = randomWithRange(-1000, 1000);
            while (a == 1 || a == -1) {
                a = randomWithRange(-1000, 1000);
            }
            Assert IsRelativelyPrime(a, 0);
            Assert IsRelativelyPrime(0, a);
        }
        
        for (i = 0; i < testNum; i++) {
            a = randomWithRange(-1000000, 1000000);
            Assert IsRelativelyPrime(a, -1000000) == IsRelativelyPrime2(a, -1000000);
            Assert IsRelativelyPrime(a, 1000000) == IsRelativelyPrime2(a, 1000000);
            Assert IsRelativelyPrime(-1000000, a) == IsRelativelyPrime2(-1000000, a);
            Assert IsRelativelyPrime(1000000, a) == IsRelativelyPrime2(1000000, a);
        }

        Assert IsRelativelyPrime(-1000000, -1000000) == IsRelativelyPrime2(-1000000, -1000000);
        Assert IsRelativelyPrime(1000000, 1000000) == IsRelativelyPrime2(1000000, 1000000);
        Assert IsRelativelyPrime(-1000000, 1000000) == IsRelativelyPrime2(-1000000, 1000000);
        Assert IsRelativelyPrime(1000000, -1000000) == IsRelativelyPrime2(1000000, -1000000);

    }
    ```
    As I was implementing this in Java, I found that my original version didn't give ranges to a or b, and so I added in some ranges to facilitate the testing. Writing the testing code forced me to think more about what exactly I was testing, and to consider the edge cases as well.
    
* 8.9

    Exhaustive tests are black-box tests because they don't have a reliance on knowledge of what's actually happening in the method that is being tested.

* 8.11

    Pairing the testers can allow you to calculate three Lincoln indices. 
    - Alice & Bob: `5*4 / 2 = 10`
    - Alice & Carmen: `5*5 / 2 = 12.5`
    - Bob & Carmen: `4*5 / 1 = 20`

    Taking an average of the three would give you an estimated 14 bugs. On the other hand, you could assume the worst-case scenario and prepare for 20 bugs. Either way, tracking the number of found bugs will let you revise your estimate once you have more data.

* 8.12

    If the testers don't find any bugs in common, the equation for the Lincoln index will have a division by zero, oops! This means you won't have any idea of how many bugs exist.
    There is a way to get a lower bound if you feign that the testers found a single bug in common. Say one tester found 2 bugs while another found 3, then the lower bound index would be `2*3 / 1 = 6` bugs.
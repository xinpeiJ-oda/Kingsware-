## Loop Statements

Loop statements are used to handle tasks that need to be repeated. Depending on the requirements, common loop syntax includes while loops, FOR Each loops, FOR loops, Continue, Break, Repeats, and Case&Case Value. Below is a detailed description and examples of these.

### While loop

A while loop executes the loop body as long as a specified condition is true, and it stops when the condition is no longer satisfied.

#### Example: Input a number between 0 and 10, check if it is greater than 0, and if it is, decrement it until the condition is no longer met (i.e., i = 0), then exit the loop.

1. Add the "Sequence" function, with settings as follows:

   ![image-20230607155303148](For.assets/image-20230607155303148.png)

2. Add the "Input Dialog" function, with settings as follows:

   ![image-20230607163141837](For.assets/image-20230607163141837.png)

3. Add the "Assign" function, with settings as follows:

   ![image-20230607163203519](For.assets/image-20230607163203519.png)

4. Add the "While" function, with settings as follows:

   ![image-20230607163231044](For.assets/image-20230607163231044.png)

5. In the "While" section, add two "Assign" functions, with settings as follows:

   ![image-20230607163251066](For.assets/image-20230607163251066.png)

   Create a variable A, convert the decremented value of i to a string, and assign the converted result to variable A. 

   ![image-20230607163312012](For.assets/image-20230607163312012.png)

6. Add the "Log Message" function, with settings as follows:

   ![image-20230607163326920](For.assets/image-20230607163326920.png)

7. Add the "Message Box" function, with settings as follows:

   ![image-20230607163340998](For.assets/image-20230607163340998.png)

8. Once the component is edited, Execute the component.

9. The execution results are as follows:

   ![image-20230607163614557](For.assets/image-20230607163614557.png)

   ![image-20230607163636916](For.assets/image-20230607163636916.png)

   ![image-20230607163648727](For.assets/image-20230607163648727.png)

   ![image-20230607163704019](For.assets/image-20230607163704019.png)

### For Each Loop

A "For Each" loop is used to iterate over an array or a collection object, repeating a block of statements for each element in the collection.

#### Example: Traverse and output the contents of a string list.

1. Add the "Sequence" function, with settings as follows:

   ![image-20230607115622308](For.assets/image-20230607115622308.png)

2. Add the "Build String List" function, with settings as follows:

   ![image-20230607115709775](For.assets/image-20230607115709775.png)

3. Add the "For Each" function, with settings as follows:

   ![image-20230607115755444](For.assets/image-20230607115755444.png)

4. In the "For Each" section, add "Log Message" functions, with settings as follows:

   ![image-20230607115840276](For.assets/image-20230607115840276.png)

   ![image-20230607115854453](For.assets/image-20230607115854453.png)

### FOR Loop

The "FOR Loop" allows you to specify the number of iterations, and the loop exits when the maximum range is reached.

#### Example: Output numbers from 1 to 10.

1. Add the "Sequence" function, with settings as follows:

   ![image-20230607121715760](For.assets/image-20230607121715760.png)

2. Add the "FOR Loop" function, with settings as follows:

   ![image-20230607121746198](For.assets/image-20230607121746198.png)

3. Add the "Assign" function, with settings as follows:

   ![image-20230607121810244](For.assets/image-20230607121810244.png)

4. Add the "Log Message" function, with settings as follows:

   ![image-20230607121838215](For.assets/image-20230607121838215.png)

5. Once the component is edited, Execute the component.

   ![image-20230607122016995](For.assets/image-20230607122016995.png)

6. The execution results are as follows:

   ![image-20230607122044881](For.assets/image-20230607122044881.png)

### Continue

The "Continue" statement is used to skip the current iteration of a loop and proceed to the next iteration, meaning that the code following "Continue" in the current iteration will not be executed.

#### Example: Skip records with a value of "AA" in the list based on the previous For Each example.

1. Add an "IF" function below the "For Each" function, with the condition set as follows:

   ![image-20230607122344114](For.assets/image-20230607122344114.png)

2. Add a "Continue" function below the "IF" function.

3. Once the component is edited, Execute the component.

4. The execution results are as follows:

   ![image-20230607122435685](For.assets/image-20230607122435685.png)

### Break

The "Break" statement is used to exit a loop, meaning that no further statements in the current loop body will be executed, and the loop will be terminated immediately.

#### Example: Exit the loop when a record with a value of "BB" is found in the list based on the previous For Each example.

1. Set the condition for the "IF" function as follows:

   ![image-20230607122609845](For.assets/image-20230607122609845.png)

2. Add a "Break" function below the "IF" function.

   ![image-20230607122644030](For.assets/image-20230607122644030.png)

3. After editing the component, Execute the component.

4. The execution results are as follows:

   ![image-20230607122715210](For.assets/image-20230607122715210.png)

### Repeat Loop

The Repeat loop repeatedly executes a block of statements until a specified condition becomes true.

**Difference from While loop:** A While loop checks the condition before executing, while a Repeat loop executes first and then checks the condition.

#### **Example 1** (Single loop): Create a variable `x` and initialize it to 1, Inc `x`, and stop when “x>3”.

1. Add the "Repeat" function, setting the termination condition to "x>3".

   ![image-20230630094632442](For.assets/image-20230630094632442.png)

2. Add an "Inc" function below the "Repeat" function, create variable `x` and set it to 1.

   ![image-20230630095225432](For.assets/image-20230630095225432.png)

   ![image-20230630095301462](For.assets/image-20230630095301462.png)

3. Add a "Log Message" function below the "Inc" function to output the Inced result.

   In the message editor, right-click and select "Show Smart Tips" to choose the variable to output.

   ![image-20230630095557723](For.assets/image-20230630095557723.png)

4. Execute the component. The loop stops when “x>3”, as shown:

   ![image-20230630095717749](For.assets/image-20230630095717749.png)

#### **Example 2** (Nested loop): Create an outer loop variable `i` initialized to 1, and an inner loop variable `j` initialized to 2. Increment `i` and `j`, stop the inner loop when “j>5” and the outer loop when “i>1”.

1. Add the "Repeat" function, setting the termination condition to "i>1".

   ![image-20230630102101615](For.assets/image-20230630102101615.png)

2. Inside the "Repeat", add an "Inc" function, create variable `i` and set it to 1.

   ![image-20230630102814158](For.assets/image-20230630102814158.png)

3. Add another "Repeat" function inside the outer loop, setting the termination condition to "j>5".

   ![image-20230630103005052](For.assets/image-20230630103005052.png)

4. Inside the inner "Repeat", add an "Inc" function, create variable `j` and set it to 2.

   ![image-20230630103110392](For.assets/image-20230630103110392.png)

5. Add a "Log Message" function below the inner "Inc" function to output the value of `j`.

   ![image-20230630103243104](For.assets/image-20230630103243104.png)

6. Add a "Log Message" function below the inner "Repeat" to output the value of `i`.

   ![image-20230630103449594](For.assets/image-20230630103449594.png)

7. Execute the component. The inner loop stops when “j>5”, and the outer loop stops when “i>1”.

   ![image-20230630103756881](For.assets/image-20230630103756881.png)

### Case & Case Value

The Case statement is a branch within "Switch' statement used to match specific values. Case and Case Value work together, executing the statements under the first matching Case Value branch and then exiting the Case statement, skipping the remaining Case Value branches.

#### Example 1:

Multiple branches with boolean expression conditions. Case values 0 and 1 represent “False” and “True”.

Execution result: The nested statement with the second Case Value executes, outputting "a < b, result is True".

![image-20240308102441603](For.assets/image-20240308102441603.png)

#### Example 2:

Looping with a Case and Case Value function under a While loop. Assign variable “test” a value of 1. Set the While loop’s condition to "test<=5", and Case Value conditions to 1, 2, 3, 4, 6, Incing the variable “test”.

Execution result: When a Case Value condition matches the Case condition, execute the statements under that Case Value, then exit the Case statement and re-execute the While loop until the condition is no longer met.

![image-20240308102500895](For.assets/image-20240308102500895.png)


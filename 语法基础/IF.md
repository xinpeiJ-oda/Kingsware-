## IF Statements

If statements, also known as conditinal statements, are characterized by selecting and executing different statements based on conditions.

### Example: Input a number, use an `if` condition to check if it is between 0 and 10, and output the result.

1. Create a component named “Conditional Statements”:

   - **Add Group**

     In the [Component Management] interface, click "Add" - "Add Group" to create a component group (skip this step if a group already exists).

     ![image-20230607095519870](IF.assets/image-20230607095519870.png)

   - **Add Component**

     Select a group, right-click and choose "Add Component", or click "Add" - "Add Component" to add a component.

     ![image-20230607095115729](IF.assets/image-20230607095115729.png)

     ![image-20230607095425880](IF.assets/image-20230607095425880.png)

2. Add the "Sequence" function to the component editing panel.

   > **[info] Note**
   >
   > <span>&emsp;</span><font color="black"> The "Sequence" function allows you to perform operations such as commenting and copying on components within the Sequence, making editing easier. This function can be omitted if not needed.</font>

   Search for "Sequence" in the search bar, then double-click on "Sequence" in the component editing panel to add it.

   ![image-20230607100919321](IF.assets/image-20230607100919321.png)

   > **[Tips]**
   >
   > <span>&emsp;</span><font color="black"> In the component editing panel, you can click on the "Sequence" function to modify its display name for easier script reference, as shown below. Change the display name to "IF Statement Operation".</font>

   ![image-20230607101157473](IF.assets/image-20230607101157473.png)

   After changing the display name, the effect is as follows:

   ![image-20230607101221661](IF.assets/image-20230607101221661.png)

3. Under the "Sequence" function, add the "Input Dialog" function, using the same method as described in step 1.

   > **[Note]**
   >
   > <span>&emsp;</span><font color="black"> The "Input Dialog" function can pop up a dialog for user interaction during script execution. This function is used here to prompt the user to input a number for comparison.</font>

   ![image-20230607101402874](IF.assets/image-20230607101402874.png)

   (1) Set the "Title" property: Change the title of the "Input Dialog" function to: "Please enter a number between 0 and 10".

   ![image-20230607101757511](IF.assets/image-20230607101757511.png)

   (2) Set the "Result" property: Create an output variable for the "Input Dialog" function and assign the result to the variable "digit".

   > **[Tips]**
   >
   > <span>&emsp;</span><font color="black"> Right-click the edit box next to "Result" and select "Create Variable" from the prompt.</font>

   ![image-20230607102029506](IF.assets/image-20230607102029506.png)

   > **[Tips]**
   >
   > <span>&emsp;</span><font color="black"> In the variable creation window, enter the desired variable name.</font>

   ![image-20230607102223073](IF.assets/image-20230607102223073.png)

   (3) Complete the property settings for the "Input Dialog" function as shown:

   ![image-20230607102343832](IF.assets/image-20230607102343832.png)

4. Add the "Assign" function and convert the "digit" variable from the "Input Dialog" function to an `int` type.

   > **[Note]**
   >
   > <span>&emsp;</span><font color="black"> The "digit" variable output from the "Input Dialog" function is of string type and cannot be compared directly. Therefore, it needs to be converted to `int` type for comparison. The "Assign" function can assign the converted result to a new variable for further comparison.</font>

   (1) Add the "Assign" function.

   ![image-20230607102531876](IF.assets/image-20230607102531876.png)

   (2) In the "Value" property of the "Assign" function, enter "StrToInt(digit)" for type conversion.

   ![image-20230607102811845](IF.assets/image-20230607102811845.png)

   (3) Create a variable `a` and assign the converted result to `a`. The specific operations are as follows: <span id ="variablea"></span>

   ![image-20230607102952725](IF.assets/image-20230607102952725.png)

   ![image-20230607103105338](IF.assets/image-20230607103105338.png)

   > **[Tips] **
   >
   > <span>&emsp;</span><font color="black"> To change the variable type, press F2 to enter edit mode and select “Integer” from the type dropdown list.</font>

   ![image-20230607103218504](IF.assets/image-20230607103218504.png)

   > **[Tips]**
   >
   > <span>&emsp;</span><font color="black"> In the "Target" property of the "Assign" function, right-click and select "Show Smart Tips" from the prompt, then select the created variable `a`.</font>

   ![image-20230607103316066](IF.assets/image-20230607103316066.png)

   ![image-20230607103357513](IF.assets/image-20230607103357513.png)

   (4) After completing the settings for the "Assign" function, the result is as shown:

   ![image-20230607103427833](IF.assets/image-20230607103427833.png)

5. Add the "IF" function and set its condition to: "(a > 0) and (a < 10)".

   ![image-20230607103557725](IF.assets/image-20230607103557725.png)

   ![image-20230607103651944](IF.assets/image-20230607103651944.png)

6. Below the "IF" function, add the "Message Box" function and set the "Title" property to: 'True' and the "Text" property to:	

   ```
   'The entered number is: '+ digit + ': Meets the condition'
   ```

> **[Note]**
>
> <span>&emsp;</span><font color="black"> The "Message Box" function here is used to display the result when the condition is met.</font>

![image-20230607103800304](IF.assets/image-20230607103800304.png)

![image-20230607103949005](IF.assets/image-20230607103949005.png)

7. After the "IF" function's "Else" part, add another "Message Box" function with the "Title" property set to: 'False' and the "Text" property set to:

   ```
   'The entered number is: '+ digit + ': Does not meet the condition'
   ```

> **[Note]**
>
> <span>&emsp;</span><font color="black"> The "Message Box" function here is used to display the result when the condition is not met.</font>

![image-20230607104604464](IF.assets/image-20230607104604464.png)

8. Once the component editing is complete, click "Save", then click "Run" - "Run" to execute the component.

![image-20230607104657604](IF.assets/image-20230607104657604.png)

9. The results of the execution are as follows:

- Results meeting the condition:

  ![image-20230607104728810](IF.assets/image-20230607104728810.png)

  ![image-20230607104747582](IF.assets/image-20230607104747582.png)

- Results not meeting the condition:

  ![image-20230607104837615](IF.assets/image-20230607104837615.png)

  ![image-20230607104854668](IF.assets/image-20230607104854668.png)




   

   
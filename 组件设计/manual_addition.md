### Developing the First Component

**Example: Open the Baidu webpage using Google Chrome and perform operations on the Baidu webpage.**

1. In the component editing interface, Search "Open Browser" and double-click to add this function to the editing panel.

   ![image-20230802091459383](manual_addition.assets/image-20230802091459383.png)

2. Add the "Open Browser" function, enter the Baidu URL in the function's address bar, and select "Chrome" as the browser type.

   ![image-20230802091253108](manual_addition.assets/image-20230802091253108.png)

3. Search "Type Into" and double-click to add this function to the editing panel.

   ![image-20230802091652745](manual_addition.assets/image-20230802091652745.png)

4. In the 【Type Into】 function's "Text" property panel, enter the content you want to input, and use "Indicate on Screen" to indicate the location where the content should be entered (in this case, specify all input fields on the Baidu page).

   ![image-20230802091907454](manual_addition.assets/image-20230802091907454.png)

   ![image-20230802092001610](manual_addition.assets/image-20230802092001610.png)

5. Search "Click" and double-click to add the 【Click】 function, and use "Indicate on Screen" to indicate the 【Search ("百度一下")】 button.

   ![image-20230802092159349](manual_addition.assets/image-20230802092159349.png)

   ![image-20230802092226839](manual_addition.assets/image-20230802092226839.png)

   ![image-20230802092241392](manual_addition.assets/image-20230802092241392.png)

6. Search for "Get Attribute", add the 【Get Attribute】 function, use "Indicate on Screen" to indicate the element from which to get the attribute, and select the attribute in the "Attribute" panel (the attribute type can be viewed by pressing F12 on the webpage).

   ![image-20230802094116103](manual_addition.assets/image-20230802094116103.png)

7. Create an output variable "text" in the 【Get Attribute】 function.

   ![image-20230802094237890](manual_addition.assets/image-20230802094237890.png)

   ![image-20230802094309088](manual_addition.assets/image-20230802094309088.png)

8. Add the 【Log Message】 function, and use the output variable "text" from the 【Get Attribute】 function as the input variable for the 【Log Message】.

   ![image-20230802094445681](manual_addition.assets/image-20230802094445681.png)

   ![image-20230802094513279](manual_addition.assets/image-20230802094513279.png)

   ![image-20230802094530378](manual_addition.assets/image-20230802094530378.png)

9. After completing the script editing, execute the script.

   

   

   

   

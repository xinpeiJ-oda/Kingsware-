## 条件语句

条件语句又被称为选择语句或分支语句，其特点是根据条件选择执行不同的语句。

### 示例：输入一个数字，通过if条件语句判断其是否在0到10之间，并输出结果提示。

1. 创建一个名为“条件语句”的组件；

   - 增加分组

     在【组件管理】界面，单击“增加”-“增加分组”进行组件分组的创建（若有分组存在，则可忽略该步骤）。

     ![image-20230607095519870](IF.assets/image-20230607095519870.png)

   - 增加组件

     选中某个分组，鼠标右击选择“增加组件”，或通过单击“增加”-“增加组件”的方式进行组件的增加。

     ![image-20230607095115729](IF.assets/image-20230607095115729.png)

     ![image-20230607095425880](IF.assets/image-20230607095425880.png)

2. 添加【活动范围】函数到组件编辑面板。

   > **[info] 说明**
   >
   > <span>&emsp;</span><font color="black"> 【活动范围】函数可对活动范围内的组件，进行整体注释、复制等操作，方便编辑操作，也可以不使用此函数 。</font>

   在搜索栏中输入“活动范围”进行搜索，然后在组件编辑面板选择需要插入函数位置后双击【活动范围】，即可将【活动范围】函数添加到组件编辑面板中。

   ![image-20230607100919321](IF.assets/image-20230607100919321.png)

   > **[info] 操作提示**
   >
   > <span>&emsp;</span><font color="black"> 在组件编辑面板，单击【活动范围】函数，可修改其显示名称，便于用户查阅脚本，如下图所示，将显示名称修改为“IF条件语句的操作”。</font>

   ![image-20230607101157473](IF.assets/image-20230607101157473.png)

   显示名称修改完成后，效果如下：

   ![image-20230607101221661](IF.assets/image-20230607101221661.png)

3. 在【活动范围】函数下，添加【输入对话框】函数，添加的方式同上述步骤1。

   > **[info] 说明**
   >
   > <span>&emsp;</span><font color="black"> 【输入对话框】函数在脚本执行过程中可弹出一个对话框与用户进行交互。示例中使用此函数是为了弹出一个对话框，以供用户输入一个数字进行大小判断。</font>

   ![image-20230607101402874](IF.assets/image-20230607101402874.png)

   （1）设置“标题”属性：将【输入对话框】函数的标题属性设置为：“请输入一个0到10的数字”。

   ![image-20230607101757511](IF.assets/image-20230607101757511.png)

   （2）设置“结果”属性：创建【输入对话框】函数的输出变量，并将输出的结果赋给变量“digit”。

   > **[info] 操作提示**
   >
   > <span>&emsp;</span><font color="black"> 鼠标右击“结果”后方的编辑框，然后在弹出的提示框中选择“创建变量”。</font>

   ![image-20230607102029506](IF.assets/image-20230607102029506.png)

   > **[info] 操作提示**
   >
   > <span>&emsp;</span><font color="black"> 在创建变量窗口中，填入所要创建的变量名称。</font>

   ![image-20230607102223073](IF.assets/image-20230607102223073.png)

   （3）完成【输入对话框】函数的属性设置，如下图所示：

   ![image-20230607102343832](IF.assets/image-20230607102343832.png)

4. 添加【赋值】函数，并将【输入对话框】函数中创建的 “digit” 变量转换为 int 类型。

   > **[info] 说明**
   >
   > <span>&emsp;</span><font color="black">【输入对话框】函数输出的 “digit” 变量属性为 string 类型，无法进行大小比较，因此需要将其转换为 int 类型才能进行比较。【赋值】函数可以将转换后的结果赋值到新的变量里，以便后续使用新变量进行大小比较。</font>

   （1）添加【赋值】函数。

   ![image-20230607102531876](IF.assets/image-20230607102531876.png)

   （2） 在【赋值】函数的“值”属性中，输入 “StrToInt(digit)” 进行类型转化。

   ![image-20230607102811845](IF.assets/image-20230607102811845.png)

   （3）创建一个变量 a，将转化后的结果赋给 a，具体操作如下：<span id ="变量a"></span>

   ![image-20230607102952725](IF.assets/image-20230607102952725.png)

   ![image-20230607103105338](IF.assets/image-20230607103105338.png)

   > **[info] 操作提示**
   >
   > <span>&emsp;</span><font color="black">变量类型，需要按 F2 切换为编辑状态，在可选择类型下拉框中，选择“Integer”。</font>

   ![image-20230607103218504](IF.assets/image-20230607103218504.png)

   > **[info] 操作提示**
   >
   > <span>&emsp;</span><font color="black">在【赋值】函数的“目标”属性栏，鼠标右击，在提示框中选择“显示智能提示”，然后选择已创建的变量 “a”。</font>

   ![image-20230607103316066](IF.assets/image-20230607103316066.png)

   ![image-20230607103357513](IF.assets/image-20230607103357513.png)

   （4）【赋值】函数设置完成后，效果如下图所示：

   ![image-20230607103427833](IF.assets/image-20230607103427833.png)

5. 添加【IF条件】函数，并将【IF条件】函数的条件设置为：“(a > 0) and (a < 10)”。

   ![image-20230607103557725](IF.assets/image-20230607103557725.png)

   ![image-20230607103651944](IF.assets/image-20230607103651944.png)

6. 在【IF条件】函数下方，添加【消息框】函数，并将【消息框】函数的“标题”属性设置为：'True' ，“文本”属性设置为：	

   ```
   '输入的数字为：'+ digit +': 符合条件'
   ```

   > **[info] 函数说明**
   >
   > <span>&emsp;</span><font color="black">此处【消息框】函数用于提示符合条件的结果。</font>

   ![image-20230607103800304](IF.assets/image-20230607103800304.png)

   ![image-20230607103949005](IF.assets/image-20230607103949005.png)

7. 在【IF条件】函数“否则”的后方，添加【消息框】函数，并将【消息框】函数的“标题”属性设置为：'True' ，“文本”属性设置为：	

   ```
   '输入的数字为：'+ digit +': 不符合条件'
   ```

   >  **[info] 函数说明**
   >
   > <span>&emsp;</span><font color="black">此处【消息框】函数用于提示不符合条件的结果。</font>

   ![image-20230607104604464](IF.assets/image-20230607104604464.png)

8. 组件编辑完成后，单击“保存”，单击“运行”-“运行”执行该组件。

   ![image-20230607104657604](IF.assets/image-20230607104657604.png)

9. 执行的结果如下：

   - 符合条件的结果

     ![image-20230607104728810](IF.assets/image-20230607104728810.png)

     ![image-20230607104747582](IF.assets/image-20230607104747582.png)

   - 不符合条件的结果

     ![image-20230607104837615](IF.assets/image-20230607104837615.png)

     ![image-20230607104854668](IF.assets/image-20230607104854668.png)



## Conditional Statements

Conditional statements, also known as selection or branching statements, are characterized by selecting and executing different statements based on conditions.

### Example: Input a number, use an `if` condition to check if it is between 0 and 10, and output the result.

1. Create a component named “Conditional Statements”:

   - **Add Group**

     In the [Component Management] interface, click "Add" - "Add Group" to create a component group (skip this step if a group already exists).

     ![image-20230607095519870](IF.assets/image-20230607095519870.png)

   - **Add Component**

     Select a group, right-click and choose "Add Component", or click "Add" - "Add Component" to add a component.

     ![image-20230607095115729](IF.assets/image-20230607095115729.png)

     ![image-20230607095425880](IF.assets/image-20230607095425880.png)

2. Add the "Activity Scope" function to the component editing panel.

   > **[info] Note**
   >
   > <span>&emsp;</span><font color="black"> The "Activity Scope" function allows you to perform operations such as commenting and copying on components within the activity scope, making editing easier. This function can be omitted if not needed.</font>

   Search for "Activity Scope" in the search bar, then double-click on "Activity Scope" in the component editing panel to add it.

   ![image-20230607100919321](IF.assets/image-20230607100919321.png)

   > **[info] Operation Tips**
   >
   > <span>&emsp;</span><font color="black"> In the component editing panel, you can click on the "Activity Scope" function to modify its display name for easier script reference, as shown below. Change the display name to "IF Condition Operation".</font>

   ![image-20230607101157473](IF.assets/image-20230607101157473.png)

   After changing the display name, the effect is as follows:

   ![image-20230607101221661](IF.assets/image-20230607101221661.png)

3. Under the "Activity Scope" function, add the "Input Dialog" function, using the same method as described in step 1.

   > **[info] Note**
   >
   > <span>&emsp;</span><font color="black"> The "Input Dialog" function can pop up a dialog for user interaction during script execution. This function is used here to prompt the user to input a number for comparison.</font>

   ![image-20230607101402874](IF.assets/image-20230607101402874.png)

   (1) Set the "Title" property: Change the title of the "Input Dialog" function to: "Please enter a number between 0 and 10".

   ![image-20230607101757511](IF.assets/image-20230607101757511.png)

   (2) Set the "Result" property: Create an output variable for the "Input Dialog" function and assign the result to the variable "digit".

   > **[info] Operation Tips**
   >
   > <span>&emsp;</span><font color="black"> Right-click the edit box next to "Result" and select "Create Variable" from the prompt.</font>

   ![image-20230607102029506](IF.assets/image-20230607102029506.png)

   > **[info] Operation Tips**
   >
   > <span>&emsp;</span><font color="black"> In the variable creation window, enter the desired variable name.</font>

   ![image-20230607102223073](IF.assets/image-20230607102223073.png)

   (3) Complete the property settings for the "Input Dialog" function as shown:

   ![image-20230607102343832](IF.assets/image-20230607102343832.png)

4. Add the "Assignment" function and convert the "digit" variable from the "Input Dialog" function to an `int` type.

   > **[info] Note**
   >
   > <span>&emsp;</span><font color="black"> The "digit" variable output from the "Input Dialog" function is of string type and cannot be compared directly. Therefore, it needs to be converted to `int` type for comparison. The "Assignment" function can assign the converted result to a new variable for further comparison.</font>

   (1) Add the "Assignment" function.

   ![image-20230607102531876](IF.assets/image-20230607102531876.png)

   (2) In the "Value" property of the "Assignment" function, enter "StrToInt(digit)" for type conversion.

   ![image-20230607102811845](IF.assets/image-20230607102811845.png)

   (3) Create a variable `a` and assign the converted result to `a`. The specific operations are as follows: <span id ="variablea"></span>

   ![image-20230607102952725](IF.assets/image-20230607102952725.png)

   ![image-20230607103105338](IF.assets/image-20230607103105338.png)

   > **[info] Operation Tips**
   >
   > <span>&emsp;</span><font color="black"> To change the variable type, press F2 to enter edit mode and select “Integer” from the type dropdown list.</font>

   ![image-20230607103218504](IF.assets/image-20230607103218504.png)

   > **[info] Operation Tips**
   >
   > <span>&emsp;</span><font color="black"> In the "Target" property of the "Assignment" function, right-click and select "Show Smart Tips" from the prompt, then select the created variable `a`.</font>

   ![image-20230607103316066](IF.assets/image-20230607103316066.png)

   ![image-20230607103357513](IF.assets/image-20230607103357513.png)

   (4) After completing the settings for the "Assignment" function, the result is as shown:

   ![image-20230607103427833](IF.assets/image-20230607103427833.png)

5. Add the "IF Condition" function and set its condition to: "(a > 0) and (a < 10)".

   ![image-20230607103557725](IF.assets/image-20230607103557725.png)

   ![image-20230607103651944](IF.assets/image-20230607103651944.png)

6. Below the "IF Condition" function, add the "Message Box" function and set the "Title" property to: 'True' and the "Text" property to:	

   ```
   'The entered number is: '+ digit + ': Meets the condition'
   ```

> **[info] Function Explanation**
>
> <span>&emsp;</span><font color="black"> The "Message Box" function here is used to display the result when the condition is met.</font>

![image-20230607103800304](IF.assets/image-20230607103800304.png)

![image-20230607103949005](IF.assets/image-20230607103949005.png)

7. After the "IF Condition" function's "Else" part, add another "Message Box" function with the "Title" property set to: 'False' and the "Text" property set to:

   ```
   'The entered number is: '+ digit + ': Does not meet the condition'
   ```

> **[info] Function Explanation**
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




   

   
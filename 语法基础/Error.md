## 异常处理

### 异常传递<span id="异常传递"></span>

异常传递，相当于try finally end。

当【尝试执行】下的函数出现异常，则会直接跳转到【传递执行】下的函数执行，待【传递执行】下的函数执行完成后，退出整个组件的执行。

示例如下：

1. 在组件编辑面板中，添加【异常传递】函数；

   ![image-20230630161147859](Error.assets/image-20230630161147859.png)

2. 在【尝试执行】函数下添加【日志消息】函数，属性设置如下图所示：

   ![image-20230630161305883](Error.assets/image-20230630161305883.png)

3. 在【日志消息】函数下添加【Excel应用程序范围】，传入指定的文件路径；

   ![image-20230630161435963](Error.assets/image-20230630161435963.png)

4. 在【Excel应用程序范围】函数下添加【写入单元格】函数，此处可设置出错点（如：工作表名称不存在）函数属性设置如下：

   ![image-20230630161825638](Error.assets/image-20230630161825638.png)

5. 在【写入单元格】函数下，添加【读取单元格】函数和【日志消息】函数，设置如下图所示：

   ![image-20230712143747264](Error.assets/image-20230712143747264.png)

   ![image-20230712143811845](Error.assets/image-20230712143811845.png)

6. 在【传递执行】函数下，添加【日志消息】函数、【读取单元格】函数，如下图所示：

   ![image-20230712144002646](Error.assets/image-20230712144002646.png)

   ![image-20230712144015145](Error.assets/image-20230712144015145.png)

   ![image-20230712144032148](Error.assets/image-20230712144032148.png)

7. 在【尝试执行】的整个循环外，添加【日志消息】函数，配置入下图所示：

   ![image-20230712144250710](Error.assets/image-20230712144250710.png)

8. 组件设置完成后，执行组件。在【写入单元格】函数处出现异常，则跳转到【传递执行】下的函数执行，执行结果如图所示：

   ![image-20230712144736478](Error.assets/image-20230712144736478.png)

### 异常捕捉<span id ="异常捕捉"></span>

【异常捕捉】函数，即对异常进行捕捉，相当于try except end。

当函数里的“出错时继续”下拉选择了“RaiseException”，那么组件执行到此函数时，若有异常错误就会执行到【捕捉错误】函数。

示例如下：

1. 在组件编辑界面，添加【异常捕捉】函数；

   ![image-20230712150150640](Error.assets/image-20230712150150640.png)

2. 在【尝试执行】函数下添加【获取下一个交易日】函数和【日志消息】函数，【获取下一个交易日】函数的“出错时继续”的属性栏选择“RaiseException”，（可在此处设置出错点：如日历名称填写一个不存在的日历名称）设置如下图所示：

   ![image-20230712150547992](Error.assets/image-20230712150547992.png)

   ① ：“出错时继续”类型选择“RaiseException”；

   ② ：“日历名称”填写一个不存在的日历名称；

   ③ ： “结果”，创建一个输出变量名称为“交易日”，通过鼠标右击-选择“创建变量”的方式进行创建。

   将变量“交易日”的结果进行输出：

   ![image-20230712150940037](Error.assets/image-20230712150940037.png)

3. 添加【是否交易日】函数和【日志消息】函数，设置的结果如下所示：

   ![image-20230712151129713](Error.assets/image-20230712151129713.png)

   ① ： “出错时继续”类型选择“RaiseException”；

   ② ： “日历名称”填写一个存在的日历名称；

   ③ ：  “结果”，创建一个输出变量名称为“是否交易日”，通过鼠标右击-选择“创建变量”的方式进行创建。

   将变量“是否交易日”的结果进行输出：

   ![image-20230712151422288](Error.assets/image-20230712151422288.png)

4. 在【捕捉错误】函数下添加【日志消息】函数，设置如下所示：

   ![image-20230712151550722](Error.assets/image-20230712151550722.png)

5. 待组件设置完成后，执行组件。【获取下一个交易日】函数有异常错误，因此会跳过【是否交易日】函数，直接执行到【捕捉错误】下的函数，执行结果如下图所示：

   ![image-20230712151713952](Error.assets/image-20230712151713952.png)

### 命令执行异常处理<span id ="命令执行异常处理"></span>

在大部分函数的“常见”属性中，都有执行异常处理的选项，如“出错时继续”的两种情况如下：

- True：表示出错时继续往下执行。
- False：表示出错时停止脚本执行并退出，并提示错误信息。默认值为False。

错误信息包含以下几项内容：

![image-20230608110850421](Error.assets/image-20230608110850421.png)

- 级别：正常、离线、未知、提示、警告、次要、主要、严重这8种情况供选择，一般情况下设置为“严重”。
- 数据：可选填，默认的值为系统返回的错误信息。
- 描述：可选填，可自定义增加描述信息。
- 返回：组件相互调用时的直接返回值。

### 条件判断结果异常处理<span id="条件判断结果异常处理"></span>

根据自定义的条件判断，若结果非预期，则主动触发执行中断。

示例：如获取文本内容，若获取到的内容为“ABC”时，终止执行并报告异常退出。

1. 在组件编辑面板中，添加"获取文本"函数，单击该函数的“指明在屏幕上”，指明需要获取的文本，待指明完成后，创建输出变量即可。设置效果如下：

   ![image-20230608112506189](Error.assets/image-20230608112506189.png)

2. 添加“IF条件”函数，条件设置为“text = ABC”，当满足该条件时，则进行报错处理，设置效果如下：

   ![image-20230608112622672](Error.assets/image-20230608112622672.png)

3. 添加“终止”函数，填写级别、数据、描述、返回等信息，设置效果如下图所示：

   ![image-20230608112838627](Error.assets/image-20230608112838627.png)

4. 执行组件，效果如下：

   ![image-20230608112904973](Error.assets/image-20230608112904973.png)
   
## Exception Handling

### Exception Propagation <span id="exception-propagation"></span>

Exception propagation is similar to `try finally end`.

When an exception occurs in the functions under the “Try” section, the execution will jump directly to the functions under the “Propagate” section. After the functions in the “Propagate” section are executed, the entire component execution will exit.

Example:

1. Add the “Exception Propagation” function in the component editor panel.

   ![image-20230630161147859](Error.assets/image-20230630161147859.png)

2. Add the “Log Message” function under the “Try” section, with the properties set as shown in the image below:

   ![image-20230630161305883](Error.assets/image-20230630161305883.png)

3. Add the “Excel Application Scope” function under the “Log Message” function, and specify the file path.

   ![image-20230630161435963](Error.assets/image-20230630161435963.png)

4. Add the “Write Cell” function under the “Excel Application Scope” function, where you can set the error point (e.g., worksheet name does not exist). The function properties are set as follows:

   ![image-20230630161825638](Error.assets/image-20230630161825638.png)

5. Add the “Read Cell” function and the “Log Message” function under the “Write Cell” function, with the settings as shown below:

   ![image-20230712143747264](Error.assets/image-20230712143747264.png)

   ![image-20230712143811845](Error.assets/image-20230712143811845.png)

6. Add the “Log Message” function and the “Read Cell” function under the “Propagate” section, as shown below:

   ![image-20230712144002646](Error.assets/image-20230712144002646.png)

   ![image-20230712144015145](Error.assets/image-20230712144015145.png)

   ![image-20230712144032148](Error.assets/image-20230712144032148.png)

7. Add the “Log Message” function outside the entire loop of the “Try” section, configured as shown below:

   ![image-20230712144250710](Error.assets/image-20230712144250710.png)

8. After completing the component setup, execute the component. If an exception occurs at the “Write Cell” function, it will jump to the functions under the “Propagate” section, with the execution result shown below:

   ![image-20230712144736478](Error.assets/image-20230712144736478.png)

### Exception Catching <span id="exception-catching"></span>

The “Exception Catching” function is used to catch exceptions, similar to `try except end`.

When the “Continue on Error” dropdown is set to “RaiseException”, if there is an exception error when the component reaches this function, it will execute the “Catch Error” function.

Example:

1. Add the “Exception Catching” function in the component editor panel.

   ![image-20230712150150640](Error.assets/image-20230712150150640.png)

2. Add the “Get Next Trading Day” function and the “Log Message” function under the “Try” section. Set the “Continue on Error” property of the “Get Next Trading Day” function to “RaiseException” (you can set an error point here, such as entering a non-existent calendar name). The settings are as follows:

   ![image-20230712150547992](Error.assets/image-20230712150547992.png)

   ①: Set “Continue on Error” type to “RaiseException”;

   ②: Enter a non-existent calendar name for “Calendar Name”;

   ③: For “Result”, create an output variable named “Trading Day” by right-clicking and selecting “Create Variable”.

   Output the result of the variable “Trading Day”:

   ![image-20230712150940037](Error.assets/image-20230712150940037.png)

3. Add the “Is Trading Day” function and the “Log Message” function, with the settings as follows:

   ![image-20230712151129713](Error.assets/image-20230712151129713.png)

   ①: Set “Continue on Error” type to “RaiseException”;

   ②: Enter an existing calendar name for “Calendar Name”;

   ③: For “Result”, create an output variable named “Is Trading Day” by right-clicking and selecting “Create Variable”.

   Output the result of the variable “Is Trading Day”:

   ![image-20230712151422288](Error.assets/image-20230712151422288.png)

4. Add the “Log Message” function under the “Catch Error” function, with the settings as shown:

   ![image-20230712151550722](Error.assets/image-20230712151550722.png)

5. After completing the component setup, execute the component. The “Get Next Trading Day” function has an exception error, so the “Is Trading Day” function is skipped and execution proceeds directly to the functions under “Catch Error”, with the result shown below:

   ![image-20230712151713952](Error.assets/image-20230712151713952.png)

### Command Execution Exception Handling <span id="command-execution-exception-handling"></span>

Most functions have options for exception handling in the “Common” properties, such as the two cases for “Continue on Error”:

- True: Indicates to continue execution even if an error occurs.
- False: Indicates to stop script execution and exit, and display an error message. The default value is False.

Error information includes the following:

![image-20230608110850421](Error.assets/image-20230608110850421.png)

- Level: Choose from Normal, Offline, Unknown, Information, Warning, Minor, Major, Critical. Generally set to “Critical”.
- Data: Optional, default value is the system's returned error message.
- Description: Optional, can be customized to add descriptive information.
- Return: Direct return value when components call each other.

### Conditional Judgment Result Exception Handling <span id="conditional-judgment-result-exception-handling"></span>

Based on custom conditions, if the result is not as expected, actively trigger an execution halt.

Example: If the retrieved text content is “ABC”, terminate the execution and report an abnormal exit.

1. In the component editor panel, add the “Get Text” function, click “Indicate on Screen” to specify the text to be retrieved, and create an output variable. The settings are as follows:

   ![image-20230608112506189](Error.assets/image-20230608112506189.png)

2. Add the “IF Condition” function, set the condition to “text = ABC”, and handle the error when the condition is met. The settings are as follows:

   ![image-20230608112622672](Error.assets/image-20230608112622672.png)

3. Add the “Terminate” function, fill in the level, data, description, and return information. The settings are as follows:

   ![image-20230608112838627](Error.assets/image-20230608112838627.png)

4. Execute the component. The result is shown below:

   ![image-20230608112904973](Error.assets/image-20230608112904973.png)


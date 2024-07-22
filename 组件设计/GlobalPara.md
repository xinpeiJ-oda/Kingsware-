#### 全局参数

【全局参数】界面提供统一配置参数的入口，用户可在此处进行全局参数的维护与管理。组件可通过使用相关函数进行调用；流程可在进行参数配置的时候选择全局参数。

比如有10台机器上有 KCXP 程序，且安装路径一致，此时可以设置一个 KCXP 程序路径的全局参数，配制流程选择程序路径时，只需引用此参数即可。

##### 全局参数创建

全局参数的创建，可在【全局参数】界面进行创建，也可在组件中通过使用相关函数进行创建。具体如下：

（一）在【全局参数】界面创建：

1. 进入【全局参数】界面：

   在左边树栏单击“脚本管理”，在界面中选择并单击“全局参数”，进入全局参数界面；

   ![image-20240307154440093](GlobalPara.assets/image-20240307154440093.png)

2. 创建全局参数：

   在【全局参数】界面，单击“增加”-“增加参数”。

   ![image-20240307172052600](GlobalPara.assets/image-20240307172052600.png)

   ![image-20240307172139253](GlobalPara.assets/image-20240307172139253.png)

（二）通过使用相关函数进行创建：

1. 通过使用【设置全局参数】函数，创建全局参数：

   在组件编辑界面，添加【设置全局参数】函数；

   ![image-20240307172355449](GlobalPara.assets/image-20240307172355449.png)

2. 编辑【设置全局参数】函数：

   ![image-20240307174948227](GlobalPara.assets/image-20240307174948227.png)

3. 执行函数，则全局参数设置完成。

   ![image-20240307175051975](GlobalPara.assets/image-20240307175051975.png)

##### 全局参数使用

用户可通过在组件中调用【获取全局参数】函数或在流程中调用全局参数，从而进行参数、组件、流程之间的交互。

（一）通过函数获取全局参数的值：

1. 通过使用【获取全局参数】函数，创建全局参数：

   ![image-20240308092417800](GlobalPara.assets/image-20240308092417800.png)

2. 编辑【获取全局参数】函数：

   ![image-20240308092821296](GlobalPara.assets/image-20240308092821296.png)

3. 执行函数，将会获取指定全局参数的值。

   ![image-20240308093137707](GlobalPara.assets/image-20240308093137707.png)

   ![image-20240308093200094](GlobalPara.assets/image-20240308093200094.png)

（二）通过流程调用流程参数：

​			示例：将指定全局参数值写入excel单元格中。

1. 在组件中调用【Excel应用程序范围】、【写入单元格】函数；

   ![image-20240308100419495](GlobalPara.assets/image-20240308100419495.png)

2. 在【Excel应用程序范围】函数的“工作簿路径”传入excel文件路径；

   ![image-20240308100601424](GlobalPara.assets/image-20240308100601424.png)

3. 创建一个名为“gitbook”的输入参数，并将该变量传入到【写入单元格】函数的“值”属性处，写编辑写入“范围”和“工作表名称”；

   ![image-20240308100806791](GlobalPara.assets/image-20240308100806791.png)

4. 在流程设计中，调用该组件，且参数选择时，选择需要传入的全局参数；

   ![image-20240308100938497](GlobalPara.assets/image-20240308100938497.png)

5. 执行流程，查看执行结果：成功将所选择的全局参数的值写入到excel文件指定单元格中。

   ![image-20240308101052189](GlobalPara.assets/image-20240308101052189.png)
   
   
   #### Global Parameters

The 【Global Parameters】 interface provides a unified entry for configuring parameters, allowing users to maintain and manage global parameters. Components can use relevant functions to call these parameters, and processes can select global parameters during parameter configuration.

For example, if there are 10 machines with the KCXP program installed in the same directory, you can set a global parameter for the KCXP program path. When configuring the process, you only need to reference this parameter.

##### Creating Global Parameters

Global parameters can be created either through the 【Global Parameters】 interface or by using relevant functions in the component. The details are as follows:

（一）Create in the 【Global Parameters】 Interface:

1. Enter the 【Global Parameters】 Interface:

   Click “Script Management” in the left tree bar, then select and click “Global Parameters” to enter the global parameters interface;

   ![image-20240307154440093](GlobalPara.assets/image-20240307154440093.png)

2. Create Global Parameters:

   In the 【Global Parameters】 interface, click “Add” - “Add Parameter”.

   ![image-20240307172052600](GlobalPara.assets/image-20240307172052600.png)

   ![image-20240307172139253](GlobalPara.assets/image-20240307172139253.png)

（二）Create Using Relevant Functions:

1. Create Global Parameters Using the 【Set Global Parameter】 Function:

   In the component editing interface, add the 【Set Global Parameter】 function;

   ![image-20240307172355449](GlobalPara.assets/image-20240307172355449.png)

2. Edit the 【Set Global Parameter】 Function:

   ![image-20240307174948227](GlobalPara.assets/image-20240307174948227.png)

3. Execute the Function to Complete the Global Parameter Setting.

   ![image-20240307175051975](GlobalPara.assets/image-20240307175051975.png)

##### Using Global Parameters

Users can interact between parameters, components, and processes by calling the 【Get Global Parameter】 function in components or using global parameters in processes.

（一）Get the Value of a Global Parameter Using a Function:

1. Create a Global Parameter Using the 【Get Global Parameter】 Function:

   ![image-20240308092417800](GlobalPara.assets/image-20240308092417800.png)

2. Edit the 【Get Global Parameter】 Function:

   ![image-20240308092821296](GlobalPara.assets/image-20240308092821296.png)

3. Execute the Function to Get the Value of the Specified Global Parameter.

   ![image-20240308093137707](GlobalPara.assets/image-20240308093137707.png)

   ![image-20240308093200094](GlobalPara.assets/image-20240308093200094.png)

（二）Call Global Parameters in a Process:

   Example: Write the value of a specified global parameter into an Excel cell.

1. In the component, call the 【Excel Application Scope】 and 【Write Cell】 functions;

   ![image-20240308100419495](GlobalPara.assets/image-20240308100419495.png)

2. Pass the Excel file path into the “Workbook Path” of the 【Excel Application Scope】 function;

   ![image-20240308100601424](GlobalPara.assets/image-20240308100601424.png)

3. Create an input parameter named “gitbook” and pass this variable into the “Value” property of the 【Write Cell】 function. Edit the “Range” and “Sheet Name” properties;

   ![image-20240308100806791](GlobalPara.assets/image-20240308100806791.png)

4. In the process design, call this component and select the required global parameter during parameter selection;

   ![image-20240308100938497](GlobalPara.assets/image-20240308100938497.png)

5. Execute the process and view the result: The selected global parameter's value will be successfully written to the specified cell in the Excel file.

   ![image-20240308101052189](GlobalPara.assets/image-20240308101052189.png)


### 全局参数

The **Global Parameters** interface provides a unified entry for configuring parameters, allowing users to maintain and manage global parameters. Components can invoke these parameters using related functions, and processes can select global parameters during parameter configuration.

For instance, if there are 10 machines with the KCXP program installed in the same path, a global parameter for the KCXP program path can be set. When configuring the process to select the program path, simply reference this parameter.

#### 全局参数创建

Global parameters can be created in the **Global Parameters** interface or through related functions in components. Here are the detailed steps:

**(一) In the Global Parameters interface:**

1. **Access the Global Parameters interface:**

   Click "Script Management" in the left tree bar and select "Global Parameters" to enter the Global Parameters interface.

   ![image-20240307154440093](GlobalPara.assets/image-20240307154440093.png)

2. **Create a global parameter:**

   In the Global Parameters interface, click "Add" - "Add Parameter."

   ![image-20240307172052600](GlobalPara.assets/image-20240307172052600.png)

   ![image-20240307172139253](GlobalPara.assets/image-20240307172139253.png)

**(二) Through related functions:**

1. **Using the Set Global Parameter function to create a global parameter:**

   In the component editing interface, add the **Set Global Parameter** function.

   ![image-20240307172355449](GlobalPara.assets/image-20240307172355449.png)

2. **Edit the Set Global Parameter function:**

   ![image-20240307174948227](GlobalPara.assets/image-20240307174948227.png)

3. **Execute the function to complete the global parameter setting:**

   ![image-20240307175051975](GlobalPara.assets/image-20240307175051975.png)

#### 全局参数使用

Users can retrieve global parameters by invoking the **Get Global Parameter** function in components or selecting global parameters during process parameter configuration for interactions between parameters, components, and processes.

**(一) Using functions to get the value of a global parameter:**

1. **Using the Get Global Parameter function to create a global parameter:**

   ![image-20240308092417800](GlobalPara.assets/image-20240308092417800.png)

2. **Edit the Get Global Parameter function:**

   ![image-20240308092821296](GlobalPara.assets/image-20240308092821296.png)

3. **Execute the function to retrieve the value of the specified global parameter:**

   ![image-20240308093137707](GlobalPara.assets/image-20240308093137707.png)

   ![image-20240308093200094](GlobalPara.assets/image-20240308093200094.png)

**(二) Invoking global parameters in a process:**

Example: Writing the value of a specified global parameter into an Excel cell.

1. **In the component, use the **Excel Application Scope** and **Write Cell** functions:**

   ![image-20240308100419495](GlobalPara.assets/image-20240308100419495.png)

2. **In the Excel Application Scope function, input the Excel file path for the "Workbook Path" attribute:**

   ![image-20240308100601424](GlobalPara.assets/image-20240308100601424.png)

3. **Create an input parameter named "gitbook" and pass this variable to the "Value" attribute of the Write Cell function. Specify the "Range" and "Sheet Name":**

   ![image-20240308100806791](GlobalPara.assets/image-20240308100806791.png)

4. **In the process design, invoke this component and select the global parameter to be passed in:**

   ![image-20240308100938497](GlobalPara.assets/image-20240308100938497.png)

5. **Execute the process and check the result: the value of the selected global parameter is successfully written into the specified cell in the Excel file.**

   ![image-20240308101052189](GlobalPara.assets/image-20240308101052189.png)



### 流程参数

脚本向导编辑界面新增了“流程参数”面板，此处可以对引用当前组件的流程进行流程参数的设置与获取。

- 根据参数类型，可分为 “String” 和 “File” ，即设置/获取流程的 “String” 和 “File” 类型参数；
- 根据流程类型，可分为“流程”和“节点”，即设置/获取“流程”参数或者流程的“节点”参数
- 根据状态类型，可分为“设计时”和“运行时”，即设置/获取流程“设计时”或者“运行时”状态参数
- 根据参数传递方向，可分为“输入”和“输出”。
  - 输入：类似于在组件中使用“获取流程参数”和“获取流程参数文件”函数，可以获取流程设计状态或者运行状态下的参数值。
  - 输出：类似于在组件中使用“设置流程参数”或者“设置流程结果文件”，可以设置流程设计状态或者运行状态下的参数值。

#### 创建流程参数<span id ="创建流程参数"></span>

在流程参数面板中创建，若组件编辑界面下方未显示流程参数面板，则可单击下图的“流程参数”，展开流程参数面板：

![1701250039964](FlowPara.assets/1701250039964.png)

在展开的流程参数面板中，单击 F2 可进入编辑状态，可新建流程参数。

> **[info] 提示**
>
> <span>&emsp;</span><font color="black">流程参数支持的方向、参数类型、流程类型和状态类型，可通过单击对应列后按 F2 进行下拉选择，此处建立的流程参数名称需保证与调用该组件的流程的参数名称一致。</font>

![1701250419189](FlowPara.assets/1701250419189.png)

####  使用与传递流程参数<span id ="使用与传递流程参数"></span>

- 字符串类型

  1. 新建向导组件，并编辑和审核组件

     打开【组件管理】界面，新增一个名为“流程参数测试”的脚本向导组件，打开后切换到“流程参数”面板中新建 一个名为“参数1”的输入参数和一个名为“参数2”的输出参数，同时在在脚本编辑界面添加两行【日志消息】函数，分别打印“参数1”和“参数2”。

     > **[info] 提示**
     >
     > <span>&emsp;</span><font color="black">“参数1”为输入参数，无需设置默认值；“参数2”为输出参数，需设置默认值。</font>

     ![1701260571994](FlowPara.assets/1701260571994.png)

     编辑并调试完成后，保存和审核组件。

     ![1701260811253](FlowPara.assets/1701260811253.png)

  2. 新建流程，并调用“流程参数测试”组件

     打开【流程设计】界面，新建一个名为“流程参数流程”的流程，并调用“流程参数测试”组件。

     ![1701261050868](FlowPara.assets/1701261050868.png)

     流程中设置与“流程参数测试”组件中“流程参数”面板同名同类型的流程参数，其中“参数1”赋予相应的参数值。

     > **[info] 提示**
     >
     > <span>&emsp;</span><font color="black">“参数1”设置参数值；“参数2”无需设置值。</font>

     ![1701262731614](FlowPara.assets/1701262731614.png)

  3. 保存并执行该流程，可查看到流程日志中已打印“参数1”和“参数2”的值

     > **[info] 说明**
     >
     > - <font color="black">第一行日志打印的是“参数1”的值，可以发现该值来源于【流程设计】界面中“参数1”设置的值，即【流程设计】界面中“参数1”设置的值传入到了组件的“参数1”中。</font>
     > - <font color="black">第二行日志打印的是“参数2”的值，可以发现该值来源于组件的“参数2”中设置的默认值，即组件的“参数2”中设置的默认值传入到了【流程设计】界面的“参数2”中。</font>

     ![1701263447359](FlowPara.assets/1701263447359.png)

     ![1701262902652](FlowPara.assets/1701262902652.png)

  4. 综上可知，“字符串”类型流程参数“：组件中**输入流程参数**可以获取到流程的同名参数值，并将获取到的参数值在组件中传递使用；组件中**输出流程参数**设置的默认值可以传递给流程的同名参数里，并将设置的默认值在流程中传递使用。

     > **[info] 说明**
     >
     > - <font color="black">运行状态下的操作类似，不同在于设计状态下可以在界面查看，而运行状态下无法查看到界面。</font>
     > - <font color="black">节点类型下的操作类似，不同在于若组件中流程参数为“流程”类型，则在流程中无需选中节点新建同名参数；若组件中流程参数为“节点”类型，则需在流程中选中调用该组件的节点后，再新建流程节点的同名参数</font>。

     

- 文件类型

  1. 新建向导组件，并编辑和审核组件

     打开【组件管理】界面，新增一个名为“流程参数test”的脚本向导组件，打开后切换到“流程参数”面板中新建 一个名为“文件参数1”的输入参数和一个名为“文件参数2”的输出参数，同时在在脚本编辑界面添加两行【日志消息】函数，分别打印“文件参数1”和“文件参数2”。

     > **[info] 提示**
   >
     > <span>&emsp;</span><font color="black">由于“文件参数1”和“文件参数2”都为“文件”类型流程参数，因此都需要设置默认值，即需要设置两个默认文件路径，下面为设置的两个默认文件 “D:\1.txt” 和 “D:\1.txt” 的内容。</font>
   >
     > ![1701328569440](FlowPara.assets/1701328569440.png)
  
     ![1701328118260](FlowPara.assets/1701328118260.png)
  
     编辑并调试完成后，保存和审核组件。
  
     ![1701328263012](FlowPara.assets/1701328263012.png)
  
  2. 新建流程，并调用“流程参数test”组件
  
     打开【流程设计】界面，新建一个名为“流程参数test测试”的流程，并调用“流程参数test”组件。
  
     ![1701314974061](FlowPara.assets/1701314974061.png)
  
     流程中设置与“流程参数测试”组件中“流程参数”面板同名同类型的流程参数，并勾选“手动执行流程弹出参数设置”选项。
  
     ![1701315021540](FlowPara.assets/1701315021540.png)
  
  3. 保存并执行该流程
  
     流程执行时，会弹出“运行配置”窗口，此时分别上传 “D:\3.txt” 和 “D:\4.txt” 两个文件。
  
     > **[info] 提示**
     >
     > <span>&emsp;</span><font color="black">由于“文件参数1”和“文件参数2”都为“文件”类型参数，因此都需要上传文件，下面为上传的两个文件 “D:\3.txt” 和 “D:\4.txt” 的内容。</font>
     >
     > ![1701329115816](FlowPara.assets/1701329115816.png)
  
     ![1701328891123](FlowPara.assets/1701328891123.png)
  
  4. 查看流程日志
  
     ① 第一行日志打印的是“文件参数1”的值，可以发现该值来源于【流程设计】界面中“文件参数1”上传的文件路径（“D:\3.txt”），即【流程设计】界面中“文件参数1”上传的文件路径（“D:\3.txt”）传入到了组件的“文件参数1”中。
  
     ② 第二行日志打印的是“文件参数2”的值，可以发现该值来源于组件的“文件参数2”中设置的文件路径（“D:\2.txt”），即组件的“文件参数2”中设置的文件路径（“D:\2.txt”）传入到了【流程设计】界面的“文件参数2”中。
  
     ![1701329165522](FlowPara.assets/1701329165522.png)
  
  5. 查看参数
  
     ① 流程执行过程中上传的 “D:\3.txt” 和 “D:\4.txt”文件可在执行后的“参数”-“文件”里下载；
  
     ② 【流程设计】界面中“文件参数1”上传的文件（“D:\3.txt”）内容覆盖了组件的“文件参数1”中设置的文件（“D:\1.txt”）内容，可供组件使用，即【流程设计】界面中“文件参数1”上传的文件内容传入到了组件的“文件参数1”的文件中；
  
     ![1701330644069](FlowPara.assets/1701330644069.png)
  
     ③ 组件中“文件参数2”中设置的文件（“D:\2.txt”）已传入到流程中，可在执行后的“参数”-“文件”里下载使用，即组件中“文件参数2”中设置的文件传递到流程中使用；
  
     ![1701329591329](FlowPara.assets/1701329591329.png)
  
  6. 综上可知，“文件”类型流程参数：组件中**输入流程参数**可以获取到流程同名参数中上传文件的内容，并将获取到的文件在组件中传递使用；组件中**输出流程参数**设置的文件可以上传到流程的同名参数中，并将设置的文件在流程中传递下载使用。
  
     > **[info] 说明**
     >
     > - <font color="black">运行状态下的操作类似，不同在于设计状态下可以在界面查看，而运行状态下无法查看到界面。</font>
     > - <font color="black">节点类型下的操作类似，不同在于若组件中流程参数为“流程”类型，则在流程中无需选中节点新建同名参数；若组件中流程参数为“节点”类型，则需在流程中选中调用该组件的节点后，再新建流程节点的同名参数</font>。
     
### Process Parameters

In the script wizard editing interface, a "Process Parameters" panel has been added, where you can set and obtain process parameters for the current component.

- By parameter type, they can be divided into "String" and "File", i.e., setting/getting "String" and "File" type parameters for the process;
- By process type, they can be divided into "Process" and "Node", i.e., setting/getting "Process" parameters or process "Node" parameters;
- By status type, they can be divided into "Design-time" and "Run-time", i.e., setting/getting process "Design-time" or "Run-time" status parameters;
- By parameter direction, they can be divided into "Input" and "Output":
  - Input: Similar to using "Get Process Parameter" and "Get Process Parameter File" functions in the component, you can get the parameter values during the design or run-time states.
  - Output: Similar to using "Set Process Parameter" or "Set Process Result File" in the component, you can set parameter values during the design or run-time states.

#### Creating Process Parameters <span id="Creating Process Parameters"></span>

Create process parameters in the process parameter panel. If the process parameter panel is not displayed at the bottom of the component editing interface, click on "Process Parameters" as shown in the figure below to expand the process parameter panel:

![1701250039964](FlowPara.assets/1701250039964.png)

In the expanded process parameter panel, click F2 to enter edit mode and create new process parameters.

> **[info] Tip**
>
> <span>&emsp;</span><font color="black">Supported directions, parameter types, process types, and status types for process parameters can be selected by clicking the corresponding column and pressing F2 for a dropdown selection. The process parameter names established here need to be consistent with the parameter names of the process calling this component.</font>

![1701250419189](FlowPara.assets/1701250419189.png)

#### Using and Passing Process Parameters <span id="Using and Passing Process Parameters"></span>

- String Type

  1. Create a wizard component, and edit and review the component

     Open the 【Component Management】 interface, add a script wizard component named "Process Parameter Test", switch to the "Process Parameters" panel to create an input parameter named "Parameter 1" and an output parameter named "Parameter 2", and add two lines of 【Log Message】 function in the script editing interface to print "Parameter 1" and "Parameter 2".

     > **[info] Tip**
     >
     > <span>&emsp;</span><font color="black">"Parameter 1" is an input parameter and does not require a default value; "Parameter 2" is an output parameter and requires a default value.</font>

     ![1701260571994](FlowPara.assets/1701260571994.png)

     After editing and debugging, save and review the component.

     ![1701260811253](FlowPara.assets/1701260811253.png)

  2. Create a new process and call the "Process Parameter Test" component

     Open the 【Process Design】 interface, create a process named "Process Parameter Process", and call the "Process Parameter Test" component.

     ![1701261050868](FlowPara.assets/1701261050868.png)

     Set process parameters with the same name and type as those in the "Process Parameter Test" component in the process parameters panel, assigning the appropriate parameter value to "Parameter 1".

     > **[info] Tip**
     >
     > <span>&emsp;</span><font color="black">Set the parameter value for "Parameter 1"; "Parameter 2" does not need a value.</font>

     ![1701262731614](FlowPara.assets/1701262731614.png)

  3. Save and execute the process, and view the printed values of "Parameter 1" and "Parameter 2" in the process logs.

     > **[info] Explanation**
     >
     > - <font color="black">The first line of the log prints the value of "Parameter 1", which comes from the value set for "Parameter 1" in the 【Process Design】 interface, indicating that the value set for "Parameter 1" in the 【Process Design】 interface was passed to "Parameter 1" in the component.</font>
     > - <font color="black">The second line of the log prints the value of "Parameter 2", which comes from the default value set for "Parameter 2" in the component, indicating that the default value set for "Parameter 2" in the component was passed to "Parameter 2" in the 【Process Design】 interface.</font>

     ![1701263447359](FlowPara.assets/1701263447359.png)

     ![1701262902652](FlowPara.assets/1701262902652.png)

  4. In summary, for "String" type process parameters: **Input process parameters** in the component can get the same name parameter values of the process and use the obtained parameter values in the component; **Output process parameters** in the component can pass the set default values to the same name parameters of the process and use the set default values in the process.

     > **[info] Explanation**
     >
     > - <font color="black">Operations during run-time are similar, except that in design-time you can view it in the interface, while in run-time you cannot.</font>
     > - <font color="black">Operations under node type are similar. If the process parameter in the component is of the "Process" type, there is no need to select the node and create a parameter with the same name in the process. If the process parameter in the component is of the "Node" type, you need to select the node that calls the component in the process and then create a process node parameter with the same name.</font>

- File Type

  1. Create a wizard component, and edit and review the component

     Open the 【Component Management】 interface, add a script wizard component named "Process Parameter Test", switch to the "Process Parameters" panel to create an input parameter named "File Parameter 1" and an output parameter named "File Parameter 2", and add two lines of 【Log Message】 function in the script editing interface to print "File Parameter 1" and "File Parameter 2".

     > **[info] Tip**
     >
     > <span>&emsp;</span><font color="black">Since both "File Parameter 1" and "File Parameter 2" are "File" type process parameters, default values need to be set for both, i.e., two default file paths need to be set. Below are the contents of the two default files "D:\1.txt" and "D:\2.txt".</font>
     >
     > ![1701328569440](FlowPara.assets/1701328569440.png)
  
     ![1701328118260](FlowPara.assets/1701328118260.png)
  
     After editing and debugging, save and review the component.
  
     ![1701328263012](FlowPara.assets/1701328263012.png)
  
  2. Create a new process and call the "Process Parameter Test" component
  
     Open the 【Process Design】 interface, create a process named "Process Parameter Test", and call the "Process Parameter Test" component.
  
     ![1701314974061](FlowPara.assets/1701314974061.png)
  
     Set process parameters with the same name and type as those in the "Process Parameter Test" component in the process parameters panel, and check the "Manually Execute Process Pop-up Parameter Setting" option.
  
     ![1701315021540](FlowPara.assets/1701315021540.png)
  
  3. Save and execute the process
  
     When the process executes, the "Run Configuration" window will pop up. At this point, upload the two files "D:\3.txt" and "D:\4.txt".
  
     > **[info] Tip**
     >
     > <span>&emsp;</span><font color="black">Since both "File Parameter 1" and "File Parameter 2" are "File" type parameters, files need to be uploaded. Below are the contents of the uploaded files "D:\3.txt" and "D:\4.txt".</font>
     >
     > ![1701329115816](FlowPara.assets/1701329115816.png)
  
     ![1701328891123](FlowPara.assets/1701328891123.png)
  
  4. View the process logs
  
     ① The first line of the log prints the value of "File Parameter 1", which comes from the file path ("D:\3.txt") uploaded in the 【Process Design】 interface for "File Parameter 1", indicating that the file path ("D:\3.txt") uploaded in the 【Process Design】 interface for "File Parameter 1" was passed to "File Parameter 1" in the component.
  
     ② The second line of the log prints the value of "File Parameter 2", which comes from the file path ("D:\2.txt") set in the component for "File Parameter 2", indicating that the file path ("D:\2.txt") set in the component for "File Parameter 2" was passed to "File Parameter 2" in the 【Process Design】 interface.
  
     ![1701329165522](FlowPara.assets/1701329165522.png)
  
  5. View the parameters
  
     ① The files uploaded during the process execution, "D:\3.txt" and "D:\4.txt", can be downloaded in "Parameters" - "Files" after execution;
  
     ② The file uploaded in the 【Process Design】 interface for "File Parameter 1" ("D:\3.txt") overwrites the file content set in "File Parameter 1" of the component ("D:\1.txt"), making it available for the component to use, i.e., the file content uploaded in the 【Process Design】 interface for "File Parameter 1" was passed to the file in "File Parameter 1" of the component;
  
     ![1701330644069](FlowPara.assets/1701330644069.png)
  
     ③ The file set in "File Parameter 2" of the component ("D:\2.txt") has been passed to the process and can be downloaded and used in "Parameters" - "Files" after execution, i.e., the file set in "File Parameter 2" of the component was passed to the process for use;
  
     ![1701329591329](FlowPara.assets/1701329591329.png)
  
  6. In summary, for "File" type process parameters: **Input process parameters** in the component can get the content of the uploaded file from the same name parameter of the process and use the obtained file in the component; **Output process parameters** in the component can upload the set file to the same name parameter of the process and use the set file in the process for download.
  
     > **[info] Explanation**
     >
     > - <font color="black">Operations during run-time are similar, except that in design-time you can view it in the interface, while in run-time you cannot.</font>
     > - <font color="black">Operations under node type are similar. If the process parameter in the component is of the "Process" type, there is no need to select the node and create a parameter with the same name in the process. If the process parameter in the component is of the "Node" type, you need to select the node that calls the component in the process and then create a process node parameter with the same name.</font>

  
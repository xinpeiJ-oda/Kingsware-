##  组件开发

### 组件参数<span id="组件参数"></span>

类似程序设计的函数，组件支持数据的参数动态传递，有助于提高组件的重用性。例如网银登录组件，用户名、密码可作为参数由外部传入，实现用不同账户进行网银的登录。

根据参数的传递方向，可分为输入、输出两种（input、output）。

####  创建参数<span id ="创建参数"></span>

1. 从上下文菜单中选择创建。

   在脚本函数的属性面板中，单击编辑框后右键，可从上下文菜单中选择“创建输入参数”/“创建输出参数”，然后在弹出框中输入参数名称。参数类型会根据属性框中所需要的类型自动定义。

   ![1699842064389](Parameter.assets/1699842064389.png)

   ![1699842143605](Parameter.assets/1699842143605.png)

   ![1699842208694](Parameter.assets/1699842208694.png)

2. 参数面板中创建

   若组件编辑界面下方未显示参数面板，则可单击下图的“参数”，展开参数面板：

   ![1699842332478](Parameter.assets/1699842332478.png)

   在展开的参数面板中，单击 F2 可进入编辑状态，可新建参数，其中通过【定位】按钮，可定位到所调用该参数的函数。

   ![1704766609246](Parameter.assets/1704766609246.png)
   
   > **[info] 提示**
   >
   > - <font color="black">选中参数名称按 F2 修改名称后，再单击其后方的“修改”按钮，可将修改后的参数名称同步到引用该参数的函数里。（2023.12.27（不包含）之后版本才支持该功能。）</font>
   > - <font color="black">参数支持的类型可通过单击“参数类型”列后按 F2 进行下拉选择，此处建立的参数被组件引用时，需保证变量类型与属性类型一致。</font>



#### 使用参数<span id ="使用参数"></span>

参数的使用，可直接输入参数名称，或通过“显示智能提示”方式进行选择：

1. 直接输入关键字名称（无需带引号）。

   ![image-20220509153449244](Parameter.assets/image-20220509153449244.png)

2. 单击编辑框后右键，通过“显示智能提示”方式进行选择。

   ![1699843155730](Parameter.assets/1699843155730.png)

   ![1699843242854](Parameter.assets/1699843242854.png)

#### 传递参数<span id ="传递参数"></span>

参数传递有两种传递的方式：组件调用组件时的参数传递和流程调用组件时的参数传递。

1. 组件调用组件时的参数传递。

   ![1699843649553](Parameter.assets/1699843649553.png)

2. 流程调用时的参数传递。

   ![1699843845487](Parameter.assets/1699843845487.png)

## Component Development

### Component Parameters<span id="component-parameters"></span>

Similar to function design in programming, components support dynamic data parameter passing, which helps improve the reusability of components. For example, in an online banking login component, the username and password can be passed as parameters from outside, allowing different accounts to log in to the online banking system.

Parameters can be divided into input and output based on the direction of transmission.

#### Creating Parameters<span id="creating-parameters"></span>

1. Create from the context menu.

   In the property panel of the script function, right-click the edit box, and select "Create Input Parameter" / "Create Output Parameter" from the context menu. Then enter the parameter name in the pop-up box. The parameter type will be automatically defined according to the type required in the property box.

   ![1699842064389](Parameter.assets/1699842064389.png)

   ![1699842143605](Parameter.assets/1699842143605.png)

   ![1699842208694](Parameter.assets/1699842208694.png)

2. Create in the parameter panel.

   If the parameter panel is not displayed at the bottom of the component editing interface, click "Parameters" as shown below to expand the parameter panel:

   ![1699842332478](Parameter.assets/1699842332478.png)

   In the expanded parameter panel, press F2 to enter the editing state and create a new parameter. Use the 【Locate】 button to locate the function that calls the parameter.

   ![1704766609246](Parameter.assets/1704766609246.png)
   
   > **[info] Tip**
   >
   > - <font color="black">After selecting the parameter name and pressing F2 to change the name, click the "Modify" button to synchronize the modified parameter name to the functions referencing the parameter. (This feature is supported in versions after 2023.12.27).</font>
   > - <font color="black">The supported types of parameters can be selected by clicking the "Parameter Type" column and pressing F2 for a dropdown selection. When the parameter established here is referenced by the component, ensure that the variable type matches the property type.</font>

#### Using Parameters<span id="using-parameters"></span>

Parameters can be used by directly entering the parameter name or by selecting it through the "Show Smart Tips" method:

1. Directly enter the keyword name (without quotes).

   ![image-20220509153449244](Parameter.assets/image-20220509153449244.png)

2. Right-click the edit box and select "Show Smart Tips".

   ![1699843155730](Parameter.assets/1699843155730.png)

   ![1699843242854](Parameter.assets/1699843242854.png)

#### Passing Parameters<span id="passing-parameters"></span>

Parameters can be passed in two ways: parameter passing when a component calls another component, and parameter passing when a process calls a component.

1. Parameter passing when a component calls another component.

   ![1699843649553](Parameter.assets/1699843649553.png)

2. Parameter passing when a process calls a component.

   ![1699843845487](Parameter.assets/1699843845487.png)

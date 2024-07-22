

### 用户界面探测器

“用户界面探测器”界面，展示的是当前系统中打开的所有程序的元素信息。

#### 功能说明<span id="功能说明"></span>

当用户无法直接指明元素时，可手动展开“用户界面探测器”界面获取的所有程序元素信息，当在界面中查看到目标元素时，即可将该元素的表达式直接复制到脚本向导函数“选取器”属性的表达式栏。

> **[warning] 注意**
>
> <span>&emsp;</span><font color="black">若用户通过该探测器获取到元素信息后无法验证成功，则可适当对该元素信息进行删减操作，直到验证成功为止（一般仅会在获取到的元素表达式信息的中间行进行删减操作）。</font>



界面如下所示：

![image-20230721160936045](Module.assets/image-20230721160936045.png)

- 界面左上角的![1689930623443](Module.assets/1689930623443.jpg)按钮，可筛选用户界面框架，界面展示的元素是根据所选择的界面框架进行展示。
- 指出元素：可通过【指出元素】操作，指明元素。
- 验证：当选中元素后，可通过单击【验证】按钮，查看是否验证通过，若验证通过，则表明元素存在；若验证不通过，则表明元素不存在。
- 高亮显示：当指明元素时，可通过“高亮显示”，用红框框住所指明的元素。
- 显示隐藏窗口：当勾选“显示隐藏窗口”，则对于系统中隐藏的窗口都将会在该界面进行显示。
- 刷新：刷新当前界面，当切换了用户界面框架时，需要对界面进行刷新。

当在界面中选中所需要的元素，则在界面左下角及右侧的对应区域会显示出元素详情信息；

![image-20230724104220935](Module.assets/image-20230724104220935.png)

界面右下角所显示的元素表达式，是根据右上角区域所勾选的字段来生成的，如：当取消勾选界面中的“role”字段，则在表达式中将会无“role”字段生成。

未取消勾选“role”字段，表达式如下所示：

![image-20230724104529491](Module.assets/image-20230724104529491.png)

取消勾选“role”字段，表达式如下所示：

![image-20230724104606402](Module.assets/image-20230724104606402.png)

用户验证通过目标元素信息后，可将所生成的元素表达式复制到函数的“选取器”-“表达式编辑器”中，如下图所示

![1713151055954](Module.assets/1713151055954.png)

#### 场景示例<span id="场景示例"></span>

示例：通过谷歌浏览器打开百度界面，在百度界面进行操作。

1. 在组件编辑界面，添加【打开浏览器】函数，输入需要打开的网页地址（此处打开百度）；

   ![image-20230801153704764](Module.assets/image-20230801153704764.png)

   ![image-20230801154334974](Module.assets/image-20230801154334974.png)

2. 添加【单击】函数，在组件编辑界面，单击【用户界面探测器】；

   ![image-20230801154442057](Module.assets/image-20230801154442057.png)

3. 在“用户界面探测器”界面，单击【指出元素】，鼠标指明需要指定的元素，则在界面的下方会生成元素的表达式；

   ![image-20230801160321153](Module.assets/image-20230801160321153.png)

4. 将界面下方的表达式，复制到【单击】函数的选取器属性的表达式编辑处；

   ![image-20230801160526290](Module.assets/image-20230801160526290.png)

   ![image-20230801160624957](Module.assets/image-20230801160624957.png)

5. 可通过【验证】以及【高亮显示】，判断所选择的元素是否正确；

   ![image-20230801160827449](Module.assets/image-20230801160827449.png)

6. 待设置完成后，可关闭“用户界面探测器”，回到脚本编辑界面，进行脚本执行等其他操作。

### User Interface Detector

The "User Interface Detector" interface displays information about all open program elements in the current system.

#### Function Description<span id="function-description"></span>

When users cannot directly specify elements, they can manually expand the "User Interface Detector" interface to get all program element information. When the target element is found in the interface, the element expression can be copied directly to the "Selector" property of the script guide function.

> **[warning] Note**
>
> <span>&emsp;</span><font color="black">If users cannot successfully verify the element information obtained through the detector, they can appropriately trim the element information until verification is successful (usually, only middle lines of the obtained element expression information need to be trimmed).</font>

The interface is shown as follows:

![image-20230721160936045](Module.assets/image-20230721160936045.png)

- The button in the top left corner ![1689930623443](Module.assets/1689930623443.jpg) can filter the user interface framework. The elements displayed in the interface are based on the selected interface framework.
- Specify Element: Elements can be specified through the 【Specify Element】 operation.
- Verify: After selecting an element, click the 【Verify】 button to check whether the verification is successful. If it passes, it indicates that the element exists; if it fails, it indicates that the element does not exist.
- Highlight: When specifying an element, it can be highlighted with a red frame.
- Show Hidden Windows: If "Show Hidden Windows" is checked, hidden windows in the system will be displayed in this interface.
- Refresh: Refresh the current interface. If the user interface framework is switched, the interface needs to be refreshed.

When the required element is selected in the interface, the detailed element information will be displayed in the corresponding area at the bottom left and right sides of the interface;

![image-20230724104220935](Module.assets/image-20230724104220935.png)

The element expression displayed in the lower right corner of the interface is generated based on the fields checked in the upper right area. For example, if the "role" field in the interface is unchecked, the "role" field will not be generated in the expression.

When the "role" field is not unchecked, the expression is as follows:

![image-20230724104529491](Module.assets/image-20230724104529491.png)

When the "role" field is unchecked, the expression is as follows:

![image-20230724104606402](Module.assets/image-20230724104606402.png)

After the target element information is successfully verified, the generated element expression can be copied to the "Expression Editor" of the "Selector" in the function, as shown below

![1713151055954](Module.assets/1713151055954.png)

#### Scenario Example<span id="scenario-example"></span>

Example: Open the Baidu page through Google Chrome and operate on the Baidu page.

1. In the component editing interface, add the 【Open Browser】 function and enter the webpage address to be opened (here, open Baidu);

   ![image-20230801153704764](Module.assets/image-20230801153704764.png)

   ![image-20230801154334974](Module.assets/image-20230801154334974.png)

2. Add the 【Click】 function, and in the component editing interface, click 【User Interface Detector】;

   ![image-20230801154442057](Module.assets/image-20230801154442057.png)

3. In the "User Interface Detector" interface, click 【Specify Element】 and use the mouse to point to the element to be specified. The element expression will be generated at the bottom of the interface;

   ![image-20230801160321153](Module.assets/image-20230801160321153.png)

4. Copy the expression at the bottom of the interface to the expression editor of the "Selector" property of the 【Click】 function;

   ![image-20230801160526290](Module.assets/image-20230801160526290.png)

   ![image-20230801160624957](Module.assets/image-20230801160624957.png)

5. Use 【Verify】 and 【Highlight】 to determine whether the selected element is correct;

   ![image-20230801160827449](Module.assets/image-20230801160827449.png)

6. After setting is completed, the "User Interface Detector" can be closed, returning to the script editing interface to execute the script and perform other operations.


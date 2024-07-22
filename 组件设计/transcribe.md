# 组件设计

## 组件工具

### 录制

录制器是脚本向导工具的重要组成部分，其可以帮助人们在设置自动化业务流程时节省大量时间，此功能可以在屏幕上捕获用户的动作并将其转换为活动范围。

支持的浏览器类型有 IE、Edge、Chrome、Firefox、360 以及金智维自研的KRPA浏览器。值得注意的是，除 IE 和金智维浏览器不需要安装插件外，其他浏览器都需要安装对应插件才可以正常录制。浏览器对应插件的安装方法，可以查看[《支持工具部署手册》](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/index.html?id=F0944F2961EC4D2C8652AE6D41645BE8&hex=7b2275736572223a2276697369746f72222c22656473223a226331656638323763303034653861393338373534313836623539346139663863222c226465734b6579223a224630304632384146222c22646f634964223a224630393434463239363145433444324338363532414536443431363435424538222c22697341646d696e223a66616c73657d)。

#### 功能说明

单击【录制】按钮，可显示录制器面板，该面板可分为：连续录制、单步录制和结束录制三部分。

![image-20230609164938418](transcribe.assets/image-20230609164938418.png)

##### ① 结束录制模块

结束当前录制，并把录制结果自动生成脚本。

##### ② 连续录制模块

连续性地录制用户在界面上地操作，自动生成活动范围。其中，录制可分为RPA、前台以及智能推荐三种录制方式。

- RPA：RPA后台录制操作。

- 前台：前台操作，会记录鼠标移动、单击等各种操作，

- 智能推荐：可智能选择或搜索需要的操作动作。

  ![image-20230801100151368](transcribe.assets/image-20230801100151368.png)

##### ③ 单步录制模块

指录制用户在界面的单步操作，其中用户的单步操作包括：鼠标操作、键盘操作、复制文本操作、界面元素操作、结合文字识别界面操作以及结合图像识别操作。

[应用程序操作](#应用程序操作)

[鼠标操作](#鼠标操作)

[键盘录制](#键盘录制)

[复制文本操作](#复制文本操作)

[界面元素操作](#界面元素操作)

[结合文字识别操作](#结合文字识别操作)

[结合图像识别操作](#结合图像识别操作)

[手机操作](#手机操作)

- ###### 应用程序操作：<span id ="应用程序操作"></span>

  ![image-20230609170009230](transcribe.assets/image-20230609170009230.png)

  **示例：如打开且关闭“Chrome.exe”应用程序，打开百度界面，关闭百度界面选项卡。**

  1. 手动打开谷歌浏览器，单击【录制】按钮，弹出的录制选项界面；

     ![image-20230712154652067](transcribe.assets/image-20230712154652067.png)

  2. 在弹出的录制选项界面，单击【应用程序】，下拉栏中选择【启用应用程序】，在所打开的谷歌浏览器的空白处单击，即可自动获取当前程序的路径，单击【确定】，实现打开谷歌浏览器的动作；

     ![image-20230712154945469](transcribe.assets/image-20230712154945469.png)

     ![image-20230712155028753](transcribe.assets/image-20230712155028753.png)

  3. 在弹出的录制界面，单击【应用程序】-【关闭应用程序】，选中并单击谷歌浏览器的关闭按钮，此时即可完成实现关闭谷歌浏览器的动作；

     ![image-20230712155259430](transcribe.assets/image-20230712155259430.png)

  4. 打开百度界面，单击【应用程序】-【打开浏览器】，在百度界面任意地方单击，会弹出一个URL弹框，此时会自动生成百度界面的网址，单击【确认】即可实现打开百度界面操作；

     ![image-20230712161141841](transcribe.assets/image-20230712161141841.png)

     ![image-20230712161309573](transcribe.assets/image-20230712161309573.png)

  5. 单击【应用程序】-【关闭选项卡】，选中并单击百度界面的关闭按钮，即可实现关闭百度界面操作；

     ![image-20230712161445736](transcribe.assets/image-20230712161445736.png)

  6. 单击【保存并退出】按钮，即可在组件编辑界面生成相关的操作组件；

     ![image-20230712161531801](transcribe.assets/image-20230712161531801.png)

     ![image-20230712161551905](transcribe.assets/image-20230712161551905.png)

- ###### 鼠标操作：<span id ="鼠标操作"></span>

  ![image-20230609165617336](transcribe.assets/image-20230609165617336.png)

  **示例：选择展示指定的系统信息。**

  1. 在录制界面，单击【单击】-【单击】，指明需要单击的元素；

     ![image-20240311154136636](transcribe.assets/image-20240311154136636.png)

  2. 通过单击下拉箭头，在展开的下拉选项框中，通过单击【选择项目】，指明需要选择的元素；

     ![image-20240311154303402](transcribe.assets/image-20240311154303402.png)

     > **[info] 提示**
   >
     > <span> &emsp;</span><font color="black">在通过【选择项目】选择指定选项时，可先按F2延迟选择，再手动单击下拉箭头展开下拉选项，最后在出现红色框框时再进行元素的指明。</font>

  5. 单击【保存并退出】按钮，会在组件编辑界面生成相应的操作组件；
  
     ![image-20240311161102669](transcribe.assets/image-20240311161102669.png)

- ###### 键盘录制：<span id ="键盘录制"></span>

  ![image-20230609165702336](transcribe.assets/image-20230609165702336.png)

  **示例：在记事本输入内容，并通过发送热键方式选中全部内容。**

  1. 打开一个记事本，在录制界面，单击【键入】-【输入信息】，在记事本空白处单击，此时会弹出一个弹框，在弹出的编辑框中写入需要输入的内容，单击【确定】即可完成输入操作；

     ![image-20230712164729387](transcribe.assets/image-20230712164729387.png)

     ![image-20230712164912866](transcribe.assets/image-20230712164912866.png)

     ![image-20230712165019178](transcribe.assets/image-20230712165019178.png)

  2. 在录制界面，单击【键入】-【发送热键】，此时会出现一个红框，选中记事本单击，会弹出“热键”弹框，在该弹框中，可自定搭配热键操作。如全选的快捷方式为“Ctrl+A”，则需勾选“Ctrl”，然后在输入框中输入a（大小写不区分）；

     ![image-20230712165413219](transcribe.assets/image-20230712165413219.png)

     ![image-20230712165111548](transcribe.assets/image-20230712165111548.png)

     ![image-20230712165539281](transcribe.assets/image-20230712165539281.png)

  3. 单击【确定】后，将会选中记事本中所有内容；

     ![ ](transcribe.assets/image-20230712165619115.png)

  4. 录制完成后，单击【保存并退出】，在组件编辑界面将会生成对应的组件。

     ![image-20230712165657551](transcribe.assets/image-20230712165657551.png)

- ###### 复制文本操作<span id ="复制文本操作"></span>

  ![image-20230609165727186](transcribe.assets/image-20230609165727186.png)

  - 【复制文本】：即为【获取文本】函数的功能。
  - 【屏幕抓取】：当抓取方法选择“原生”时，则是使用【获取全文本】函数进行抓取；当抓取方法选择“OCR”时，则是使用【获取OCR文本】函数进行抓取。

  **示例：抓取记事本的内容**。

  1. 打开待抓取内容的记事本，在录制界面，单击【复制】-【复制文本】，指明要抓取的内容；

     ![image-20230713100649018](transcribe.assets/image-20230713100649018.png)

  2. 在录制界面，单击【复制】-【屏幕抓取】，在记事本中指明需要抓取的内容，此时会弹出一个“屏幕抓取器”弹框，在该弹框中可选择“原生”或“OCR”的抓取方法，选择完成后，单击【确定】，即可实现屏幕录制操作；

     ![image-20230713103118870](transcribe.assets/image-20230713103118870.png)

     ![image-20230713100825949](transcribe.assets/image-20230713100825949.png)

- ###### 界面元素操作<span id ="界面元素操作"></span>

  界面元素的操作，对应的是元素分组下的函数。

  ![image-20230609165750286](transcribe.assets/image-20230609165750286.png)

  

- ###### 结合文字识别操作<span id ="结合文字识别操作"></span>

  文字识别操作，对应的是文本分组下的函数。

  ![image-20230609165811229](transcribe.assets/image-20230609165811229.png)

  

- ###### 结合图像识别操作<span id ="结合图像识别操作"></span>

  图像识别操作，对应的是图像分组下的函数。

  ![image-20230609165850997](transcribe.assets/image-20230609165850997.png)

- ###### 手机操作<span id ="手机操作"></span>

  手机操作，对应的时手机操作分组下的函数。
  
  ![image-20230609165920895](transcribe.assets/image-20230609165920895.png)
  
  
  # Component Design

## Component Tools

### Recording

The recorder is an essential part of the script wizard tool, helping to save a significant amount of time when setting up automated business processes. This feature captures user actions on the screen and converts them into activity ranges.

Supported browsers include IE, Edge, Chrome, Firefox, 360, and Kingsware's self-developed KRPA browser. Note that, except for IE and Kingsware browsers, other browsers require the installation of corresponding plugins for proper recording. For installation methods of the browser plugins, refer to the [“Supported Tools Deployment Manual”](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/index.html?id=F0944F2961EC4D2C8652AE6D41645BE8&hex=7b2275736572223a2276697369746f72222c22656473223a226331656638323763303034653861393338373534313836623539346139663863222c226465734b6579223a224630304632384146222c22646f634964223a224630393434463239363145433444324338363532414536443431363435424538222c22697341646d696e223a66616c73657d).

#### Function Description

Click the **[Record]** button to display the recorder panel, which is divided into: Continuous Recording, Step-by-Step Recording, and End Recording sections.

![image-20230609164938418](transcribe.assets/image-20230609164938418.png)

##### ① End Recording Module

Ends the current recording and automatically generates a script from the recorded results.

##### ② Continuous Recording Module

Continuously records user actions on the interface, automatically generating activity ranges. Recording can be categorized into RPA, Frontend, and Smart Recommendations.

- **RPA**: RPA backend recording operations.
- **Frontend**: Frontend operations, recording mouse movements, clicks, and other actions.
- **Smart Recommendations**: Can intelligently select or search for required operation actions.

  ![image-20230801100151368](transcribe.assets/image-20230801100151368.png)

##### ③ Step-by-Step Recording Module

Records individual user operations on the interface, including mouse operations, keyboard operations, text copying operations, interface element operations, text recognition operations, and image recognition operations.

[Application Operations](#application-operations)

[Mouse Operations](#mouse-operations)

[Keyboard Recording](#keyboard-recording)

[Text Copying Operation](#text-copying-operation)

[Interface Element Operations](#interface-element-operations)

[Text Recognition Operations](#text-recognition-operations)

[Image Recognition Operations](#image-recognition-operations)

[Mobile Operations](#mobile-operations)

- ###### Application Operations: <span id="application-operations"></span>

  ![image-20230609170009230](transcribe.assets/image-20230609170009230.png)

  **Example: Opening and closing the “Chrome.exe” application, opening the Baidu page, and closing the Baidu tab.**

  1. Manually open Google Chrome and click the **[Record]** button to open the recording options interface;

     ![image-20230712154652067](transcribe.assets/image-20230712154652067.png)

  2. In the recording options interface, click **[Application]**, select **[Enable Application]** from the dropdown, click on a blank area in the opened Google Chrome, and the current program path will be automatically obtained. Click **[OK]** to perform the action of opening Google Chrome;

     ![image-20230712154945469](transcribe.assets/image-20230712154945469.png)

     ![image-20230712155028753](transcribe.assets/image-20230712155028753.png)

  3. In the recording interface, click **[Application]** - **[Close Application]**, select and click the close button of Google Chrome to complete the action of closing Google Chrome;

     ![image-20230712155259430](transcribe.assets/image-20230712155259430.png)

  4. Open the Baidu page, click **[Application]** - **[Open Browser]**, click anywhere on the Baidu page, a URL pop-up will appear, automatically generating the URL of the Baidu page. Click **[Confirm]** to perform the action of opening the Baidu page;

     ![image-20230712161141841](transcribe.assets/image-20230712161141841.png)

     ![image-20230712161309573](transcribe.assets/image-20230712161309573.png)

  5. Click **[Application]** - **[Close Tab]**, select and click the close button of the Baidu page to perform the action of closing the Baidu page;

     ![image-20230712161445736](transcribe.assets/image-20230712161445736.png)

  6. Click **[Save and Exit]** to generate the corresponding operation component in the component editing interface;

     ![image-20230712161531801](transcribe.assets/image-20230712161531801.png)

     ![image-20230712161551905](transcribe.assets/image-20230712161551905.png)

- ###### Mouse Operations: <span id="mouse-operations"></span>

  ![image-20230609165617336](transcribe.assets/image-20230609165617336.png)

  **Example: Selecting to display specific system information.**

  1. In the recording interface, click **[Click]** - **[Click]**, specify the element to click;

     ![image-20240311154136636](transcribe.assets/image-20240311154136636.png)

  2. By clicking the dropdown arrow, in the expanded dropdown options box, click **[Select Item]** to specify the element to select;

     ![image-20240311154303402](transcribe.assets/image-20240311154303402.png)

     > **[info] Tip**
   >
   > <span> &emsp;</span><font color="black">When selecting a specific option through **[Select Item]**, you can first press F2 to delay the selection, then manually click the dropdown arrow to expand the dropdown options, and finally specify the element when the red box appears.</font>

  5. Click **[Save and Exit]** to generate the corresponding operation component in the component editing interface;
  
     ![image-20240311161102669](transcribe.assets/image-20240311161102669.png)

- ###### Keyboard Recording: <span id="keyboard-recording"></span>

  ![image-20230609165702336](transcribe.assets/image-20230609165702336.png)

  **Example: Entering content in Notepad and selecting all content using a hotkey.**

  1. Open a Notepad, in the recording interface, click **[Type]** - **[Input Information]**, click in the blank area of Notepad, an input box will pop up where you can write the content to be entered. Click **[OK]** to complete the input operation;

     ![image-20230712164729387](transcribe.assets/image-20230712164729387.png)

     ![image-20230712164912866](transcribe.assets/image-20230712164912866.png)

     ![image-20230712165019178](transcribe.assets/image-20230712165019178.png)

  2. In the recording interface, click **[Type]** - **[Send Hotkey]**, a red box will appear, select Notepad, and click. A “Hotkey” pop-up will appear, where you can customize hotkey operations. For example, to select all, use the shortcut “Ctrl+A”, check “Ctrl” and then input a (case-insensitive) in the input box;

     ![image-20230712165413219](transcribe.assets/image-20230712165413219.png)

     ![image-20230712165111548](transcribe.assets/image-20230712165111548.png)

     ![image-20230712165539281](transcribe.assets/image-20230712165539281.png)

  3. Click **[OK]** to select all content in Notepad;

     ![ ](transcribe.assets/image-20230712165619115.png)

  4. After recording is complete, click **[Save and Exit]** to generate the corresponding component in the component editing interface.

     ![image-20230712165657551](transcribe.assets/image-20230712165657551.png)

- ###### Text Copying Operation <span id="text-copying-operation"></span>

  ![image-20230609165727186](transcribe.assets/image-20230609165727186.png)

  - **[Copy Text]**: This corresponds to the **[Get Text]** function.
  - **[Screen Capture]**: When the capture method is set to “Native”, it uses the **[Get Full Text]** function; when the capture method is set to “OCR”, it uses the **[Get OCR Text]** function.

  **Example: Capturing the content of Notepad.**

  1. Open the Notepad with the content to capture. In the recording interface, click **[Copy]** - **[Copy Text]**, specify the content to capture;

     ![image-20230713100649018](transcribe.assets/image-20230713100649018.png)

  2. In the recording interface, click **[Copy]** - **[Screen Capture]**, specify the content to capture in Notepad. A “Screen Capture” pop-up will appear where you can choose between “Native” or “OCR” methods for capturing text. Select the appropriate method and click **[OK]** to perform the screen capture;

     ![image-20230713103118870](transcribe.assets/image-20230713103118870.png)

     ![image-20230713100825949](transcribe.assets/image-20230713100825949.png)

- ###### Interface Element Operations <span id="interface-element-operations"></span>

  Interface element operations correspond to functions under the element grouping.

  ![image-20230609165750286](transcribe.assets/image-20230609165750286.png)

- ###### Text Recognition Operations <span id="text-recognition-operations"></span>

  Text recognition operations correspond to functions under the text grouping.

  ![image-20230609165811229](transcribe.assets/image-20230609165811229.png)

- ###### Image Recognition Operations <span id="image-recognition-operations"></span>

  Image recognition operations correspond to functions under the image grouping.

  ![image-20230609165850997](transcribe.assets/image-20230609165850997.png)

- ###### Mobile Operations <span id="mobile-operations"></span>

  Mobile operations correspond to functions under the mobile operations grouping.
  
  ![image-20230609165920895](transcribe.assets/image-20230609165920895.png)



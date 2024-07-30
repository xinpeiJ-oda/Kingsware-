# Component Design

## Component Tools

### Recording

The recorder is an essential part of the script wizard tool, helping to save a significant amount of time when setting up automated business processes. This feature captures user actions on the screen and converts them into activity ranges.

Supported browsers include IE, Edge, Chrome, Firefox, 360, and Kingsware's self-developed KRPA browser. Note that, except for IE and Kingsware browsers, other browsers require the installation of corresponding plugins for proper recording. For installation methods of the browser plugins, refer to the [“Supported Tools Deployment Manual”](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/index.html?id=F0944F2961EC4D2C8652AE6D41645BE8&hex=7b2275736572223a2276697369746f72222c22656473223a226331656638323763303034653861393338373534313836623539346139663863222c226465734b6579223a224630304632384146222c22646f634964223a224630393434463239363145433444324338363532414536443431363435424538222c22697341646d696e223a66616c73657d).

#### Function Description

Click the **[Record]** button to display the recorder panel, which is divided into: "Continuous Record", "Step-by-Step Record", and "End Recording" sections.

![image-20230609164938418](transcribe.assets/image-20230609164938418.png)

##### ① End Recording Section

Ends the current recording and automatically generates a script from the recorded results.

##### ② Continuous Record Section

Continuously records user actions on the interface, automatically generating activity ranges. Recording can be categorized into RPA, Frontend, and Smart Recommendations.

- **RPA**: RPA backend recording operations.
- **Frontend**: Frontend operations, record mouse movements, clicks, and other actions.
- **Smart Recommendations**: Can intelligently select or search for required operation actions.

  ![image-20230801100151368](transcribe.assets/image-20230801100151368.png)

##### ③ Step-by-Step Recording Section

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

  2. In the recording options interface, click **[Application]**, select **[Start App]** from the dropdown, click on a blank area in the opened Google Chrome, and the current program path will be automatically obtained. Click **[OK]** to perform the action of opening Google Chrome;

     ![image-20230712154945469](transcribe.assets/image-20230712154945469.png)

     ![image-20230712155028753](transcribe.assets/image-20230712155028753.png)

  3. In the recording interface, click **[Application]** - **[Close App]**, select and click the close button of Google Chrome to complete the action of closing Google Chrome;

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

  **Example: Select to display specific system information.**

  1. In the recording interface, click **[Click]** - **[Click]**, specify the element to click;

     ![image-20240311154136636](transcribe.assets/image-20240311154136636.png)

  2. By clicking the dropdown arrow, in the expanded dropdown options box, click **[Select Item]** to specify the element to select;

     ![image-20240311154303402](transcribe.assets/image-20240311154303402.png)

     > **[Tips]**
   >
   > <span> &emsp;</span><font color="black">When selecting a specific option through **[Select Item]**, you can first press F2 to delay the selection, then manually click the dropdown arrow to expand the dropdown options, and finally specify the element when the red box appears.</font>

  5. Click **[Save and Exit]** to generate the corresponding operation component in the component editing interface;
  
     ![image-20240311161102669](transcribe.assets/image-20240311161102669.png)

- ###### Keyboard Recording: <span id="keyboard-recording"></span>

  ![image-20230609165702336](transcribe.assets/image-20230609165702336.png)

  **Example: Entering content in Notepad and selecting all content using a hotkey.**

  1. Open a Notepad, in the recording interface, click **[Type]** - **[Type]**, click in the blank area of Notepad, an input box will pop up where you can write the content to be entered. Click **[OK]** to complete the input operation;

     ![image-20230712164729387](transcribe.assets/image-20230712164729387.png)

     ![image-20230712164912866](transcribe.assets/image-20230712164912866.png)

     ![image-20230712165019178](transcribe.assets/image-20230712165019178.png)

  2. In the recording interface, click **[Type]** - **[Send Hotkey]**, a red box will appear, select Notepad, and click. A “Hotkey” pop-up will appear, where you can customize hotkey operations. For example, to select all, use the shortcut “Ctrl+A”, check “Ctrl” and then input letter "a" (case-insensitive) in the input box;

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



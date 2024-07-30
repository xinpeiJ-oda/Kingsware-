### Toolbar

In the component editing panel, the toolbar provides additional collaboration functions for script wizard component creation, such as automatic plugin installation and script breakpoint debugging. The functionalities of the 【Tools】 button menu are as follows:

![1698312020670](toolbar.assets/向导工具栏.png)

- **Chinese Script**: Switch the script wizard component to a Chinese script type component. After switching, you need to reopen it.

  > **[Note]**
  >
  > <span>&emsp;</span><font color="black">Switching will not automatically convert the current code to Chinese script code.</font>

- **Plugin Installation**: Some functions require corresponding plugins. Here, you can automatically install specified plugins. The list of plugins is as follows:

  | Name         | Purpose                                                   | Plugin Installation                                        |
  | ------------ | -------------------------------------------------------- | ---------------------------------------------------------- |
  | Image Plugin | Needed for functions using OpenCV, for image searching.  | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Image.html) |
  | Text Plugin  | Needed for the “Get Window Content” function; requires activation of the window. Useful for non-standard windows where content cannot be retrieved without this plugin. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Word.html) |
  | Java Plugin  | Mainly used for capturing Java client program elements. After successful installation, you can use the “Indicate on Screen” function in the script wizard editor to capture Java client program elements. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Java1.html) |
  | PDF Plugin   | Used for functions related to PDF operations.            | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Pdf.html) |
  | Firefox Plugin | Installation of Firefox browser plugin, configuring extensions to use automation system functions for Firefox, and capturing single elements during script wizard recording. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/FirefoxNew.html) |
  | Chrome Plugin | V2 version plugin, for installing Google Chrome plugin and configuring extensions to use automation system functions for Google Chrome (currently only supports the development version of Google Chrome), and capturing single elements during script wizard recording. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Chrome.html) |
  | ChromeV3 Plugin | Upgraded Google plugin, generally used after Google version 120. It is recommended to use the Chrome plugin. Install Google Chrome plugin and configure extensions to use automation system functions and capture elements during script wizard recording. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/ChromeV3.html) |
  | Edge Plugin  | Installation of Edge browser plugin, configuring extensions to use automation system functions for Edge, and capturing single elements during script wizard recording. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Edge.html) |
  | 360 Plugin    | Installation of 360 browser plugin, configuring extensions to use automation system functions for 360 browser, and capturing single elements during script wizard recording. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/360.html) |
  | SSLLibrary    | SSLLibrary plugin installation, mainly for AI recognition functions and http/https related functions. When using AI functions with proxy endpoints, this plugin is required; if using server endpoints, copy the two DLL files to the server directory. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/SSLLibrary.html) |
  | TesseractOCR  | TesseractOCR plugin used for OCR recognition functions, such as text recognition in images and files, and recognizing invoices, documents, etc. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/TesseractOCR.html) |
  | Email Plugin  | Email plugin for the “Get IMAP Email Messages” function, required when the parameter “Connection Type” is selected as Chilkat. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Email.html) |
  | .NET Plugin   | Required for functions under the “CSharp” group to capture “.net” type window elements. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Net.html) |
  | Excel Plugin  | Install the Excel plugin to operate on Excel functions in the script wizard. | [Installation Guide](http://doc.kingsware.cn:8096/public/Uploads/Doc/D04D0AF3E2674A8692DE2D31E543A0DF/%E6%94%AF%E6%8C%81%E5%B7%A5%E5%85%B7%E5%AE%89%E8%A3%85%E8%AF%B4%E6%98%8E/Excel.html) |

- **The Plugin Checks**: Includes checks for Google and Firefox plugin usage, as well as plugin file checks. You can check if Google or Firefox plugins have abnormal usage or if specific plugins are installed.

  Plugin File Check:

  ![image-20230609095512044](toolbar.assets/image-20230609095512044.png)

- **Export**: Export the current component in various formats: “.kws” file, hexadecimal, JSON format, or visual component (“.vis” file).

- **Import**: The formats for importing components here match those for exporting components.

- **Export Steps**: Export the steps of the current component and save screenshots of the execution results of each step. The exported file is in “.docx” format.

- **Delete Unreferenced Variables**: Remove unnecessary and unreferenced variables from the current component.

- **Show Functions**: Display Chinese functions in the left tree view of the component editing panel. If you want to call Chinese functions in the script wizard component, check “Show Functions” to select the desired Chinese functions from the left tree view.

- **Show Screenshot**: This feature is for functions with “Specify on Screen” functionality. When specifying an element or information on the screen, it will display a screenshot of the specified area. If unchecked, no screenshot will be shown.

  Check “Show Screenshot”:

  ![image-20230609101131191](toolbar.assets/image-20230609101131191.png)

  Uncheck “Show Screenshot”: The above screenshot will not be displayed.

- **Execution Progress**: Check “Execution Progress” to output detailed information about each step of the component’s execution progress.

- **Breakpoint Management**: When “Breakpoint Management” is checked, a “Debug” bar will be added at the bottom of the component editing panel. Breakpoints set in any function will be displayed in this “Debug” bar, where you can enable, disable, or delete them.

  ![image-20230609102116949](toolbar.assets/image-20230609102116949.png)

- **Auto Save**: Enable auto-save so that if an unexpected situation occurs that closes the console, upon logging back in and reopening the component, a prompt will appear to import the local new component. Clicking “Yes” will restore the component to its last edited state.

- **Rich Text Mode**: When “Rich Text Mode” is checked, the component’s execution output will include rich text content such as execution time, component name, and variable names and values within the component. Currently, it supports string, integer, and boolean outputs.

  ![image-20230609103148492](toolbar.assets/image-20230609103148492.png)

- **Auto Compile**: Check “Auto Compile” and set the start time for compilation (must be greater than or equal to 30 seconds). The current component will be automatically compiled after the set time.

- **Attach Mode**: This feature is used for the 【Attach Window】/【Attach Browser】 function to quickly update the “Selector” content of all functions under the window/browser element when changes occur. When “Attach Mode” is checked, modifying the “Selector” content in the 【Attach Window】/【Attach Browser】 function will synchronize updates to all functions under it. If unchecked, it will not automatically update the “Selector” content.

- **Real-Time View**: This feature allows real-time viewing of function/component help information. By default, it is not checked. When checked, you can view function/component information in real time by clicking on a function/custom component line in the wizard script.

  > **[Note]**
  >
  > <span>&emsp;</span><font color="black">The “Control” group functions do not support the real-time view feature.</font>

  ![image-20240530145453278](toolbar.assets/image-20240530145453278.png)


​		

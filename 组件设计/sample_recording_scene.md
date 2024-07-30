#### Scenario Examples

In the script wizard recording operations, there are three recording methods: RPA, Frontend, and Intelligent Recommendation. Each recording method generates different script component examples. Below is an introduction to these three recording methods. The recording methods used for different examples are as follows:

Example 1: [CS Application Automation](#cs-application-automation), using RPA recording method;

Example 2: [BS Web Page Automation](#bs-web-page-automation), using Intelligent Recommendation recording method;

Example 3: ["Image Recognition"-Based UI Automation](#image-recognition-based-ui-automation).

##### CS Application Automation<span id="cs-application-automation"></span>

This example demonstrates the operation of Notepad.

Example: Open Notepad, write content, then save and exit.

1. Open a new Notepad file. Click the【Record】button in the script editing page;

   ![image-20230801092803364](sample_recording_scene.assets/image-20230801092803364.png)

2. In the pop-up window, click 【Application】, select "Launch App" from the dropdown options, click on the blank area of Notepad opened in step 1, and the current program path will be automatically obtained to perform the action of opening Notepad;

   ![image-20230801093040709](sample_recording_scene.assets/image-20230801093040709.png)

   ![image-20230801093120711](sample_recording_scene.assets/image-20230801093120711.png)

3. In the recording options interface, click "Record" - "RPA", click on the Notepad text box, in the pop-up window, enter the content to be written (e.g., "Kingsware RPA") and click【OK】;

   ![image-20230801102150915](sample_recording_scene.assets/image-20230801102150915.png)

   ![image-20230801102220214](sample_recording_scene.assets/image-20230801102220214.png)

4. Click the close button on Notepad, choose a save path, and after recording is complete, press the ESC key to exit;

   ![image-20230801102351514](sample_recording_scene.assets/image-20230801102351514.png)

   ![image-20230801102522485](sample_recording_scene.assets/image-20230801102522485.png)

5. After recording is complete, click the 【View】 button to view the recorded steps. You can delete recorded steps or export them here;

   ![image-20230801102741490](sample_recording_scene.assets/image-20230801102741490.png)

   Exported steps will be stored in a ".docx" file, divided into "business requirement background description" and "business operation processes" sections. Each step in the "business operation processes" will include an operation screenshot, as shown below:

   ![image-20230801103202887](sample_recording_scene.assets/image-20230801103202887.png)

6. After recording is complete, click 【Save and Exit】 to return to the script editing interface;

   ![image-20230801103505887](sample_recording_scene.assets/image-20230801103505887.png)

7. If you want to view functions in Chinese, in the script wizard's editing interface, click 【Tools】-【Show Functions】;

   ![image-20230801103725417](sample_recording_scene.assets/image-20230801103725417.png)

   ![image-20230801103807291](sample_recording_scene.assets/image-20230801103807291.png)

8. In the script wizard editing interface, for functions marked as "Indicate on Screen", you can choose to display or hide the screenshots of the specified elements. This can be controlled using 【Tools】-【Show Screenshots】;

   ![image-20230801104127706](sample_recording_scene.assets/image-20230801104127706.png)

   Check "Show Screenshots":

   ![image-20230801104055959](sample_recording_scene.assets/image-20230801104055959.png)

   Uncheck "Show Screenshots":

   ![image-20230801104036493](sample_recording_scene.assets/image-20230801104036493.png)

9. Once the settings are complete, click 【Run】-【Run】 the script.

##### BS Web Page Automation<span id="bs-web-page-automation"></span>

This example demonstrates using Google Chrome.

Example: Open Google Chrome, enter specified content for search.

1. Open Google Chrome, navigate to the webpage to be operated on (e.g., Baidu webpage), and click the 【Record】 button;

   ![image-20230801105415427](sample_recording_scene.assets/image-20230801105415427.png)

2. In the recording options interface, click 【Application】-【Open Browser】, select and click on the Baidu browser opened in step 1, and the current webpage URL will be automatically obtained to perform the action of opening the browser;

   ![image-20230801105539154](sample_recording_scene.assets/image-20230801105539154.png)

   ![image-20230801112119662](sample_recording_scene.assets/image-20230801112119662.png)

3. In the recording options interface, click 【Record】- “Intelligent Recommendation“, click on the Baidu input box, and an intelligent selection box will appear. You can search for the required operation actions in the intelligent selection box;

   ![image-20230801112334955](sample_recording_scene.assets/image-20230801112334955.png)

   ![image-20230801112522846](sample_recording_scene.assets/image-20230801112522846.png)

4. In the pop-up intelligent search box, click 【Type Into】, a dialog box will appear where you can enter the search content. Click the 【OK】 button to confirm;

   ![image-20230801112842220](sample_recording_scene.assets/image-20230801112842220.png)

   ![image-20230801112927167](sample_recording_scene.assets/image-20230801112927167.png)

5. After entering the search content, click the 【Search】 button to perform the search. Select the 【Search】 button in the intelligent search box, and choose the 【Click】 operation;

   ![image-20230801113329864](sample_recording_scene.assets/image-20230801113329864.png)

6. Select the element to operate on, click, and search for the operations needed in the intelligent search box. For example, click "Get Location" to perform the operation of obtaining location;

   ![image-20230801140613790](sample_recording_scene.assets/image-20230801140613790.png)

7. After recording is complete, press the ESC key to exit the operation. Click 【Save and Exit】 to return to the script editing interface, and then execute the script.

   ![image-20230801140749279](sample_recording_scene.assets/image-20230801140749279.png)

##### Image Recognition-Based UI Automation<span id="image-recognition-based-ui-automation"></span>

Example: Send a file to a WeChat friend.

1. Click the 【Record】 button to bring up the recording options interface;

   ![image-20230801142124567](sample_recording_scene.assets/image-20230801142124567.png)

2. Open the WeChat interface, click 【Image】-【Mouse】-【Click】, hold the left mouse button to select a range for searching the image, then complete the screenshot and click【OK】in the pop-up prompt;

   ![image-20230801142637329](sample_recording_scene.assets/image-20230801142637329.png)

   ![image-20230801142808112](sample_recording_scene.assets/image-20230801142808112.png)

   ![image-20230801142910834](sample_recording_scene.assets/image-20230801142910834.png)

3. In the recording options interface, click 【Type】-【Type】, enter the WeChat friend's name in the search box;

   ![image-20240312104542946](sample_recording_scene.assets/image-20240312104542946.png)

4. Click 【Image】-【Mouse】-【Click】, select the range of the friend's avatar with the left mouse button, then choose and complete the screenshot, and click 【OK】 in the pop-up prompt;

5. In the chat interface, click 【Image】-【Mouse】-【Click】, hold the left mouse button to select a range for the "file" icon, then complete the screenshot and click【OK】in the pop-up prompt;

   ![image-20230801143524679](sample_recording_scene.assets/image-20230801143524679.png)

6. Click the file icon, in the pop-up interface, click 【Type】-【Type】, set the file's path and name, then click the【Click】button, and click【Open】;

   ![image-20230801143614989](sample_recording_scene.assets/image-20230801143614989.png)

7. In the chat interface, click 【Image】-【Mouse】-【Click】, hold the left mouse button to select a range for the "send" icon, then complete the screenshot and click【OK】in the pop-up prompt;

   ![image-20230801143715449](sample_recording_scene.assets/image-20230801143715449.png)

8. After recording is complete, press the ESC key to exit the recording interface, and click 【Save and Exit】 to exit the recording interface;

   ![image-20230801143809606](sample_recording_scene.assets/image-20230801143809606.png)

9. After recording is complete, you can execute the component.



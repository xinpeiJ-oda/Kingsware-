### Selector

When certain software programs have layouts and property nodes with variable values, RPA robots need to manually modify selectors to adapt to these unpredictable changes, such as in some web applications.

#### Function Description<span id="function-description"></span>

For functions that can indicate elements on screen, there will be a "Selector" property. When inficate an element on screen, the value of the "Selector" property is automatically generated, but users can also modify the content of the "Selector" according to the actual situation. The functions and usage of selectors are as follows, illustrated with an example of the 【Click】 function:

- Click the icon on the right side of the “Selector” property field;

  ![image-20230717111025087](selector.assets/image-20230717111025087.png)

- A dropdown menu will appear, allowing you to choose between “Indicate on Screen”, “Edit Selector”, and “Expression Editor”;

  ![image-20230717111820437](selector.assets/image-20230717111820437.png)

  - Indicate on Screen

    The "Indicate on Screen” feature here is the same as the “Indicate on Screen” feature on the right side of the function. Simply click and select the element you want to specify.

    ![image-20230717113513380](selector.assets/image-20230717113513380.png)

    > **[Tips]**
    >
    > - <font color="black">To cancel the selection when in indicating element mode, press “Esc”.</font>
    > - <font color="black">To delay the selection when in indicating element mode, press “F2”.</font>
    > - <font color="black">To select a region when in indicating element mode, press “F3”.</font>
    > - <font color="black">To switch user interface frameworks when in indicating element mode, press “F4”.</font>

    After indicating the element, if you click in the “Indicate on Screen” area on the right side of the function, a dropdown menu will appear with options including: Indicate on Screen, Edit Selector, Expression Editor, View Screenshot, and Delete Screenshot.

    ![image-20230721102842820](selector.assets/image-20230721102842820.png)

  - Edit Selector: In the “Selector Editor” interface, you can view the properties, data, variables, and expressions of the specified element. Additionally, you can validate and highlight the element's location on the interface.

    Taking Baidu's “Search”(百度一下) button as an example:

    - When the element is not specified, the “Selector Editor” interface appears as follows:

      ![image-20230721103813084](selector.assets/image-20230721103813084.png)

    - When the element is specified, the “Selector Editor” interface appears as follows, and you can customize the content of this interface;

      ![image-20230721103840328](selector.assets/image-20230721103840328.png)

      Clicking the 【Verify】 button changes ![1689907228585](selector.assets/1689907228585.jpg) to ![1689907290936](selector.assets/1689907290936.jpg), indicating that verification is successful and the element exists. If it changes to ![1689907390058](selector.assets/1689907390058.jpg), it indicates verification fails and the element does not exist.

      ![image-20230721104418923](selector.assets/image-20230721104418923.png)

      Clicking 【Indicate Element】 allows you to reselect the element.

      ![image-20230721104631858](selector.assets/image-20230721104631858.png)

      Clicking 【Highlight】 will outline the specified element with a red box.

      ![image-20230721104739506](selector.assets/image-20230721104739506.png)

      ![image-20230721104801921](selector.assets/image-20230721104801921.png)

  - Expression Editor: After indicating an element, in the “Expression Editor” page, you can view the expression of the element and customize it here.

    ![image-20230721110220725](selector.assets/image-20230721110220725.png)

#### Scenario Example<span id="scenario-example"></span>

Example: Open the Baidu search page using Google Chrome and perform operations on the Baidu page.

1. In the component editing interface, add the 【Open Browser】 function and enter the URL of the webpage to open (in this case, open Baidu);

   ![image-20230801144704626](selector.assets/image-20230801144704626.png)

   ![image-20230801144803879](selector.assets/image-20230801144803879.png)

2. Add the 【Click】 function, click 【Indicate on Screen】, and select the element to click on the Baidu page (in this case, click on “News”);

   ![image-20230801145314858](selector.assets/image-20230801145314858.png)

   The selector expression is as follows:

   ![image-20230801145354920](selector.assets/image-20230801145354920.png)

3. If you need to switch the element to click, you can directly modify the selector expression from step 2. For example, to click on the “Map” element on the Baidu page, change “aaname” to “Map” as shown below:

   The specific modifications can be determined based on the webpage elements, which can be viewed by pressing F12 on the webpage.

   ![image-20230801145811347](selector.assets/image-20230801145811347.png)

   ![image-20230801145658520](selector.assets/image-20230801145658520.png)

4. After completing the setup, execute the component. The result will be: Open the Baidu page using Google Chrome and navigate to the “Map” page.


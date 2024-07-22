# Process Design

## Process Editing

### Setting Component Parameters <span id="setting-component-parameters"></span>

When a process calls a component node, you can set the component's runtime parameters. This allows for easy modification of parameter values during subsequent runs. If the component's runtime parameters need to change, you only need to modify the parameters in the process, without changing the called component itself.

- Setting component parameters

  The setting method is shown in the figure:

  ![image-20240312095926471](Flowchart.assets/image-20240312095926471.png)

- Setting component parameters in the process

  Call the component named "Interface" in the process, pass in the component parameters, and output the parameter results.

  ![image-20230804093449773](Flowchart.assets/image-20230804093449773.png)

  Execute the process, and after completion, select the component node, right-click, and choose to view the step log to see the results.

  ![image-20230804093607423](Flowchart.assets/image-20230804093607423.png)

  ![image-20230804093546111](Flowchart.assets/image-20230804093546111.png)

### Setting Process Properties <span id="setting-process-properties"></span>

#### Entire Process <span id="entire-process"></span>

When designing a process, users can set different properties according to different needs. See the descriptions below for details.

In the process design interface, you can only edit the process when "Design" is checked. When "Design" is unchecked, you can perform "Execute" operations on the process.

Currently in editable state:

![image-20230804094909160](Flowchart.assets/image-20230804094909160.png)

Currently in executable state:

![image-20230804094941423](Flowchart.assets/image-20230804094941423.png)

Click on the blank space of the process editing interface. On the right side of the interface, process property settings will be displayed. These properties are for the entire process and can be divided into three parts:

[Execution Options](#execution-options)

[Execution Restrictions](#execution-restrictions)

[Notification Settings](#notification-settings)

##### Execution Options

![image-20230804100537909](Flowchart.assets/image-20230804100537909.png)

- Process: When "Process" is checked, after the process execution is complete, you can replay the process execution in the [Execution History] interface.

- Screenshot: When "Screenshot" is checked, screenshots of the process execution can be taken. After the process execution is complete, you can click to view the screenshot results.

  ![image-20230804101137017](Flowchart.assets/image-20230804101137017.png)

  ![image-20230804101201058](Flowchart.assets/image-20230804101201058.png)

  ![image-20230804101219555](Flowchart.assets/image-20230804101219555.png)

- Screen Recording: Record the process execution. To use the screen recording function, you need to configure it first. For specific screen recording configurations, see [Screen Recording Function Operation Manual](http://doc.kingsware.cn:8096/public/Uploads/Doc/B5A01561B0E24FB614BF110AB8650F93/index.html).

- Check Node: When "Check Node" is checked, the status of the proxy endpoint and the node status associated with the process will be checked during execution.

  - If "Check Node" is not checked, click [Execute], and there will be no node-related information in the "Prompt" window;

    ![image-20230804101921804](Flowchart.assets/image-20230804101921804.png)

  - If "Check Node" is checked, click [Execute], and the "Prompt" dialog will display relevant node information.

    ![image-20230804102030829](Flowchart.assets/image-20230804102030829.png)

- Edit Parameters:

  Click the [Edit Parameters] button to edit parameters. In the process design editing interface, click [Edit Parameters] - define a parameter in the "Run Configuration" pop-up dialog.

  ![image-20230804110642296](Flowchart.assets/image-20230804110642296.png)

##### Execution Restrictions

To set execution restrictions for the process, click "Unlimited", and the "Execution Restrictions" window will pop up. In this window, you can set restrictions such as daily execution times, daily execution hours, process execution dates, weekly execution dates, user confirmation, process mutex, etc., as shown below:

![image-20230804111550033](Flowchart.assets/image-20230804111550033.png)

For specific execution restrictions, see [K-RPA Software Robot User Manual](http://doc.kingsware.cn:8096/public/Uploads/Doc/F9E2872F5A30B7E3A2F482499F3ED0B3/index.html).

##### Notification Settings

Process execution results or other status information can be notified to specified personnel via SMS, WeChat, email, or events. Before using SMS, WeChat, or email notifications, relevant configurations need to be made, and the notified personnel need to have mobile phone numbers, WeChat IDs, or email accounts.

![image-20230804113616396](Flowchart.assets/image-20230804113616396.png)

#### Process Nodes <span id="process-nodes"></span>

In process design, there are 10 nodes to choose from: Start, End, Operation, Confirmation, Summary, Prompt, Reference, Nested, Component, and Batch. These 10 nodes are introduced below.

- Start Node: The starting point of the process, marking the beginning of the process. There must be a "Start" node in a complete process.

- End Node: The endpoint of the process, marking the completion of the process. There must be an "End" node in a complete process.

- Operation Node: Double-click the operation node, and in the "Select Indicator" pop-up dialog, select the corresponding indicator from the resource pool.

  **Using Scenario:** Call the operation node in the process to execute the action by selecting indicators.

  ![image-20230804141030120](Flowchart.assets/image-20230804141030120.png)

- Confirmation Node: Specifies the confirmation user. When the process reaches this node, the user must enter a password for confirmation before the process can continue.

  **Using Scenario:** Use the confirmation node in scenarios where a reviewer needs to confirm to continue the process.

- Summary Node: Summarizes multiple branch processes into one, as shown in the connection below:

  **Using Scenario:** Call the summary node in the process to verify that at least one process branch before this node has executed successfully. If executed successfully, this node will be executed.

  ![image-20230804141209221](Flowchart.assets/image-20230804141209221.png)

- Prompt Node: In a process, if the prompt node is connected to multiple process nodes before it, all previous process nodes must execute successfully for the prompt node to be executed. If any previous node fails, the process will not continue.

  **Using Scenario:** Call the prompt node in the process to verify if all branches before this node have executed successfully. If all executed successfully, this node will be executed.

  ![image-20230804141516231](Flowchart.assets/image-20230804141516231.png)

- Reference Node: Double-click the reference node, and in the "Reference Process" pop-up dialog, select the process to be referenced. The referenced process must be an approved process.

  **Using Scenario:** Call the reference node in the main process to reference a single existing process, making the main process more concise.

- Nested Node: Double-click the nested node to enter the sub-process interface of the nested node. In this interface, you can edit the sub-process, save it after editing, and return to [Previous Level].

  **Using Scenario:** When a process has many complex activities or branches, use the nested node to nest multiple independent sub-processes, making the main process more concise.

- Component Node: Select and double-click the component node to enter the component node editing interface. In this interface, select the component to be called and specify the proxy machine for execution.

  **Using Scenario:** Call the component node in the process to execute actions through the functions in the component. It also supports parameter passing, providing high versatility.

  ![image-20230804115013592](Flowchart.assets/image-20230804115013592.png)
  
  > **[Tips]**
  >
  >  - <span><font color="black">The data of the called component comes from the components created in the [Component Management](\3.组件设计\manual_addition.html) interface.</font></span>
  >  - <font color="black">The called component must be an approved component.</font>
  
- Batch Node: Double-click the batch node. In this node, you can set multiple proxy machines to execute the process and select the execution mode (parallel or serial), enabling the same process to be executed on multiple machines.

  **Using Scenario:** Use the batch node in scenarios where the same process needs to be executed by multiple machines.

  ![image-20240416195516868](Flowchart.assets/image-20240416195516868.png)

#### Process Connections <span id="process-connection"></span>

In the process editing interface, after adding process nodes, you need to connect the nodes with lines. The method for connecting process nodes is as follows:

In the node bar on the right side of the interface, check "Connecting Line," move the mouse to a node in the editing area, click on the added node, hold down the mouse button, drag to another node, and release the mouse to complete the node connection.

![image-20230804142106447](Flowchart.assets/image-20230804142106447.png)

 > **[Tips]**  
 >
 > <span> &emsp;</span><font color="black">Quick connection method: Check "Connection Line," then hold down Ctrl and connect nodes one by one with the mouse. After connecting, uncheck "Connection Line."</font>

### Process Execution <span id="process-execution"></span>

In multi-node processes, you can select execution proxy machines for each process node based on the actual situation; it is not necessary for all nodes to use the same execution machine.

Processes where all nodes use the same execution proxy machine are called single-machine running processes.

Processes where different nodes use different execution proxy machines are called multi-machine running processes.

#### Single-Machine Running Process <span id="single-machine-running-process"></span>

In the example below, all nodes of the process use the same execution proxy machine.

![image-20230804142924602](Flowchart.assets/image-20230804142924602.png)

#### Multi-Robot Collaborative Process <span id="multi-robot-collaborative-process"></span>

In the example below, K-RPA processes support multi-robot collaborative execution, meaning different nodes of the same process can choose different execution proxy machines.

![image-20220509154806780](Flowchart.assets/image-20220509154806780.png)





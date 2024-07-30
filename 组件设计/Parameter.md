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

2. Right-click the edit box and select "Show Intelli Prompt".

   ![1699843155730](Parameter.assets/1699843155730.png)

   ![1699843242854](Parameter.assets/1699843242854.png)

#### Passing Parameters<span id="passing-parameters"></span>

Parameters can be passed in two ways: parameter passing when a component calls another component, and parameter passing when a process calls a component.

1. Parameter passing when a component calls another component.

   ![1699843649553](Parameter.assets/1699843649553.png)

2. Parameter passing when a process calls a component.

   ![1699843845487](Parameter.assets/1699843845487.png)

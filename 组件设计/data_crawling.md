### 数据抓取

数据抓取实际为【提取结构化数据】函数的协作工具，主要是从具有规则的表格、表单或者列表中提取数据，如table 、 ul 、ol 以及其他具有规则的 div、span 等数据。

#### 功能说明<span id="功能说明"></span>

当用户需要对具有规则的表单、表格或者列表进行操作时，可通过数据抓取工具进行数据的获取，数据抓取的方式有下面两种：

- 通过添加“提取结构化数据”函数，在该函数属性面板的“提取元数据”字段中提供XML字符串，以此指定提取的信息；
- 通过使用组件编辑面板中的【数据抓取】按钮，直接指明抓取的信息，从而自动生成相关函数以及函数所相关的属性。

#### 场景示例<span id="场景示例"></span>

当前示例以抓取浏览器中表单的数据为例，具体使用请参考以下两个示例：

[场景示例一](#场景示例一)

[场景示例二](#场景示例二)

##### 场景示例一

通过【数据抓取】按钮进行数据抓取。

1. 在浏览器中打开所需抓取数据的网页表格，如图所示：

   ![image-20230609141452656](data_crawling.assets/image-20230609141452656.png)

2. 在组件编辑面板中，单击【数据抓取】按钮，此时会弹出一个“提取向导”的窗口，然后按照窗口提示的步骤进行操作。

   ![image-20230609141826491](data_crawling.assets/image-20230609141826491.png)

3. 在“提取向导”窗口中，单击下一步后，将鼠标光标悬停在数据源字段上方（红框选中我们所需选择的字段即可），单击该字段。此时将会有个提示“您已选择了一个表格单元，是否从整个表格中提取数据”，单击【是】。

   ![image-20230609142023031](data_crawling.assets/image-20230609142023031.png)

4. 完成步骤3后，页面将切换至控制台，此时在“提取向导”窗口中会加载到所提取到的表格的数据，可在该处设置数据的最大显示条数（默认最大结果条数为100；0表示不限制，此时会提取表格中的所有数据）。

   ![image-20230609142313623](data_crawling.assets/image-20230609142313623.png)

5. 单击【完成】按钮，会有相应的提示操作。

   ![image-20230609142706043](data_crawling.assets/image-20230609142706043.png)

   - 单击【是】，则表明将要抓取跨多个页面的数据，此时可根据提示框中的步骤进行操作。
   - 单击【否】，则表明只抓取当前页面的数据。

6. 操作完成上述步骤后，将会在组件编辑面板中，生成一个“提取结构化数据”的函数。

   ![image-20230609142856011](data_crawling.assets/image-20230609142856011.png)

7. 在所生成的“提取结构化数据”函数中，创建数据表的输出变量，将输出结果赋给变量Table。<span id="步骤7"></span>

   ![image-20230609143719183](data_crawling.assets/image-20230609143719183.png)

8. 此时我们可添加相应的其他辅助函数，将我们所抓取到的数据直接输出或写入文件中。

   - 结果直接输出的操作方式：

     1. 添加“输出数据表”函数，数据表属性选择Table变量，并创建文本的输出变量text。

        ![image-20230609144353232](data_crawling.assets/image-20230609144353232.png)

     2. 添加“日志消息”函数，设置如下：

        ![image-20230609144502355](data_crawling.assets/image-20230609144502355.png)

     3. 执行结果如下所示：

        ![image-20230609160034692](data_crawling.assets/image-20230609160034692.png)

   - 结果写入文件的操作方式：

     1. 添加“Excel应用程序范围”函数，填入需要存放的工作簿的路径，如下图所示：

        ![image-20230609161801217](data_crawling.assets/image-20230609161801217.png)

     2. 添加“写入范围”函数，设置效果如下图所示：

        ![image-20230609162130719](data_crawling.assets/image-20230609162130719.png)

     3. 执行结果如下：

        ![image-20230609162151605](data_crawling.assets/image-20230609162151605.png)

##### 场景示例二

通过“提取结构化数据”函数进行数据抓取。

1. 在组件编辑面板中，添加“提取结构化数据”函数，通过指明元素指明需要抓取的表格数据字段，指明完成后，选取器属性栏会自动生成相关内容，此时创建输出变量Table即可。

   ![image-20230609162644862](data_crawling.assets/image-20230609162644862.png)

2. 接下来的操作，与场景示例一一样，具体可从[场景示例一](#步骤7)的步骤7开始进行参考。


### Data Crawling

Data crawling is a collaborative tool for the "Extract Structured Data" function, mainly used to extract data from structured tables, forms, or lists, such as tables, unordered lists (ul), ordered lists (ol), and other structured divs, spans, etc.

#### Function Description<span id="function-description"></span>

When users need to operate on structured forms, tables, or lists, they can use the data crawling tool to obtain the data. There are two ways to perform data crawling:

- Add the "Extract Structured Data" function and provide an XML string in the "Extract Metadata" field of the function's property panel to specify the information to be extracted.
- Use the 【Data Crawling】 button in the component editing panel to directly specify the information to be crawled, automatically generating the related functions and properties.

#### Scenario Examples<span id="scenario-examples"></span>

The following examples demonstrate how to crawl data from forms in a browser. For detailed usage, please refer to the two examples below:

[Scenario Example 1](#scenario-example-1)

[Scenario Example 2](#scenario-example-2)

##### Scenario Example 1

Perform data crawling using the 【Data Crawling】 button.

1. Open the webpage with the table data to be crawled in the browser, as shown below:

   ![image-20230609141452656](data_crawling.assets/image-20230609141452656.png)

2. In the component editing panel, click the 【Data Crawling】 button. A "Extraction Wizard" window will pop up. Follow the steps indicated in the window.

   ![image-20230609141826491](data_crawling.assets/image-20230609141826491.png)

3. In the "Extraction Wizard" window, after clicking Next, hover the mouse cursor over the data source field (highlight the field you need to select with a red box), and click the field. A prompt will appear: "You have selected a table cell, do you want to extract data from the entire table?" Click 【Yes】.

   ![image-20230609142023031](data_crawling.assets/image-20230609142023031.png)

4. After completing step 3, the page will switch to the console. The "Extraction Wizard" window will display the data extracted from the table. You can set the maximum number of data rows to display (default maximum is 100; 0 means no limit, which will extract all data from the table).

   ![image-20230609142313623](data_crawling.assets/image-20230609142313623.png)

5. Click the 【Finish】 button. There will be a prompt for the following operations:

   ![image-20230609142706043](data_crawling.assets/image-20230609142706043.png)

   - Click 【Yes】 to indicate that data across multiple pages will be crawled. Follow the steps indicated in the prompt box.
   - Click 【No】 to indicate that only the data on the current page will be crawled.

6. After completing the above steps, a function for "Extract Structured Data" will be generated in the component editing panel.

   ![image-20230609142856011](data_crawling.assets/image-20230609142856011.png)

7. In the generated "Extract Structured Data" function, create an output variable for the data table and assign the result to the variable `Table`. <span id="step-7"></span>

   ![image-20230609143719183](data_crawling.assets/image-20230609143719183.png)

8. You can now add other auxiliary functions to directly output or write the crawled data to a file.

   - Direct output of results:

     1. Add the "Output Data Table" function, select the `Table` variable for the data table property, and create a text output variable `text`.

        ![image-20230609144353232](data_crawling.assets/image-20230609144353232.png)

     2. Add the "Log Message" function with the following settings:

        ![image-20230609144502355](data_crawling.assets/image-20230609144502355.png)

     3. The execution result is as follows:

        ![image-20230609160034692](data_crawling.assets/image-20230609160034692.png)

   - Writing results to a file:

     1. Add the "Excel Application Scope" function and enter the path of the workbook where the data will be stored, as shown below:

        ![image-20230609161801217](data_crawling.assets/image-20230609161801217.png)

     2. Add the "Write Range" function with the following settings:

        ![image-20230609162130719](data_crawling.assets/image-20230609162130719.png)

     3. The execution result is as follows:

        ![image-20230609162151605](data_crawling.assets/image-20230609162151605.png)

##### Scenario Example 2

Perform data crawling using the "Extract Structured Data" function.

1. In the component editing panel, add the "Extract Structured Data" function. Specify the fields of the table data to be crawled by indicating elements. After completing the specification, the selector property panel will automatically generate the related content. Create the output variable `Table`.

   ![image-20230609162644862](data_crawling.assets/image-20230609162644862.png)

2. The subsequent operations are similar to Scenario Example 1. Specifically, refer to step 7 from [Scenario Example 1](#step-7) for detailed instructions.








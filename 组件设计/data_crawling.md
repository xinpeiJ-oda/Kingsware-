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








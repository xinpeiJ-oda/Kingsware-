
## Excel Read Operations (Based on COM)

### Excel Read Range <span id ="excel-read-range"></span>

1. Create a new component "Excel Read/Write Operation Demo" and add two commands, "Sequence" and "Excel Application Scope". In the "Excel Application Scope", fill in the path of the Excel document, as shown:

   ![image-20220509161530740](COMread.assets/image-20220509161530740.png)

   The content of the Excel file is as follows:

   ![image-20220509161604829](COMread.assets/image-20220509161604829.png)

2. Drag in the "Read Range" command and create a variable "Table" for the output data table.

   Common attribute descriptions:

   - Range: The range to be read, format (e.g., 'A1:E10'); if not set, the entire table will be read; if the range is specified as a single cell (e.g., 'A2'), the entire table starting from that cell will be read.
   - AddHeaders: If checked, the headers of the specified table range will be retrieved.

   ![image-20220509161706752](COMread.assets/image-20220509161706752.png)

3. Print data to view: Add the "Output Data Table" command, select the input as the "Table" generated in the previous step, and create a variable "str_tmp" for the output. Then use the "Log Message" command to print out "str_tmp".

   ![image-20220509161808089](COMread.assets/image-20220509161808089.png)

   ![image-20220509161819211](COMread.assets/image-20220509161819211.png)

4. Execution result:

   ![image-20220509161840006](COMread.assets/image-20220509161840006.png)

### Excel Traverse Content <span id ="excel-traverse-content"></span>

Based on reading the range, traverse the Excel table data, which is essentially traversing the data in "Table".

1. Add the command "For Each Row" and set the input to Table.

   ![image-20220509161925011](COMread.assets/image-20220509161925011.png)

   Create a variable "Row" for the output.

   ![image-20220509161940839](COMread.assets/image-20220509161940839.png)

   ![image-20220509161953199](COMread.assets/image-20220509161953199.png)

   ![image-20220509162006704](COMread.assets/image-20220509162006704.png)

2. Add the "Get Row Item" command and set the input and output parameters as shown:

   ![image-20220509162033560](COMread.assets/image-20220509162033560.png)

3. Add the "Log Message" command to output the obtained value ("str_tmp").

   ![image-20220509162047912](COMread.assets/image-20220509162047912.png)

   Execution result:

   ![image-20220509162104275](COMread.assets/image-20220509162104275.png)

### Other Excel Read Operations <span id ="other-excel-read-operations"></span>

1. Read Column: Input the worksheet name and the starting cell, return the entire column data, output type is 'List'.

   ![image-20220509162154071](COMread.assets/image-20220509162154071.png)

2. Read Cell: Input the worksheet name and cell, return the content of the cell.

   ![image-20220509162204207](COMread.assets/image-20220509162204207.png)

3. Read Cell Formula: Input the worksheet name and cell, return the cell formula.

   ![image-20220509162214384](COMread.assets/image-20220509162214384.png)

4. Read Row: Input the worksheet name and starting cell, return the corresponding entire row content, output type is 'List'.

   ![image-20220509162226544](COMread.assets/image-20220509162226544.png)

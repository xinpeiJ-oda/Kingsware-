## Excel读取操作(基于COM)

### Excel读取范围<span id ="excel读取范围"></span>

1. 新建组件“Excel读写操作Demo”，并添加“活动范围”、“Excel应用程序范围”两个命令，在“Excel应用程序范围”填写Excel文档的路径，如图：

   ![image-20220509161530740](COMread.assets/image-20220509161530740.png)

   Excel内容如下：

   ![image-20220509161604829](COMread.assets/image-20220509161604829.png)

2. 拖入“读取范围”命令，并为输出数据表创建一个变量“Table”。

   常用属性介绍:

   范围: 需要读取的范围，格式（如’A1:E10’）;如果未设值，将会读取整个表格; 如果将范围指定为某个单元格(如：’A2’)，则读取从该单元格开始的整个表格。 

   添加标头：如果选中，将获取指定表格范围的标题。

   ![image-20220509161706752](COMread.assets/image-20220509161706752.png)

3. 打印数据查看：添加“输出数据表”命令，选择输入为上一步产生的“Table”，并为输出创建一个变量“str_tmp”，然后用“日志消息”命令打印出str_tmp。

   ![image-20220509161808089](COMread.assets/image-20220509161808089.png)

   ![image-20220509161819211](COMread.assets/image-20220509161819211.png)

4. 执行结果：

   ![image-20220509161840006](COMread.assets/image-20220509161840006.png)

   

### Excel遍历内容<span id ="excel遍历内容"></span>

在完成读取范围的基础上，遍历Excel表格数据，实际上是对“Table”的数据进行遍历。

1. 添加命令“对于每一行”，并设置输入Table。

   ![image-20220509161925011](COMread.assets/image-20220509161925011.png)

   为输出Row创建遍历“Row”。

   ![image-20220509161940839](COMread.assets/image-20220509161940839.png)

   ![image-20220509161953199](COMread.assets/image-20220509161953199.png)

   ![image-20220509162006704](COMread.assets/image-20220509162006704.png)

2. 添加“获取行项目”命令，并设置输入输出参数，如图：

   ![image-20220509162033560](COMread.assets/image-20220509162033560.png)

3. 添加“日志消息”命令，输出取到的值（str_tmp）。

   ![image-20220509162047912](COMread.assets/image-20220509162047912.png)

   运行结果：

   ![image-20220509162104275](COMread.assets/image-20220509162104275.png)

   

### Excel其他读取操作<span id ="excel其他读取操作"></span>

1. 读取列：输入工作表名和起始单元格，返回整列数据，类型为List。

   ![image-20220509162154071](COMread.assets/image-20220509162154071.png)

2. 读取单元格：输入工作表名和单元格，返回单元格的内容。

   ![image-20220509162204207](COMread.assets/image-20220509162204207.png)

3. 读取单元格公式：输入工作表名和单元格，返回单元格公式。

   ![image-20220509162214384](COMread.assets/image-20220509162214384.png)

4. 读取行：输入工作表名和起始单元格，对应整行内容，类型为List。

   ![image-20220509162226544](COMread.assets/image-20220509162226544.png)
   
## Excel Read Operations (Based on COM)

### Excel Read Range <span id ="excel-read-range"></span>

1. Create a new component "Excel Read/Write Operation Demo" and add two commands, "Activity Scope" and "Excel Application Scope". In the "Excel Application Scope", fill in the path of the Excel document, as shown:

   ![image-20220509161530740](COMread.assets/image-20220509161530740.png)

   The content of the Excel file is as follows:

   ![image-20220509161604829](COMread.assets/image-20220509161604829.png)

2. Drag in the "Read Range" command and create a variable "Table" for the output data table.

   Common attribute descriptions:

   - Range: The range to be read, format (e.g., 'A1:E10'); if not set, the entire table will be read; if the range is specified as a single cell (e.g., 'A2'), the entire table starting from that cell will be read.
   - Add Headers: If checked, the headers of the specified table range will be retrieved.

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

1. Read Column: Input the worksheet name and the starting cell, return the entire column data, type is List.

   ![image-20220509162154071](COMread.assets/image-20220509162154071.png)

2. Read Cell: Input the worksheet name and cell, return the content of the cell.

   ![image-20220509162204207](COMread.assets/image-20220509162204207.png)

3. Read Cell Formula: Input the worksheet name and cell, return the cell formula.

   ![image-20220509162214384](COMread.assets/image-20220509162214384.png)

4. Read Row: Input the worksheet name and starting cell, return the corresponding entire row content, type is List.

   ![image-20220509162226544](COMread.assets/image-20220509162226544.png)

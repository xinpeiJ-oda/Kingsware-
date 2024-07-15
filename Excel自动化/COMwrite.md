## Excel写入操作(基于COM)

### Excel写入范围<span id ="excel写入范围"></span>

1. 参考读取范围的步骤，把Excel内容读入到Table。

   ![image-20220509162652044](COMwrite.assets/image-20220509162652044.png)

2. 添加新的“Excel应用程序范围”，填写新建的工作簿路径。

   ![image-20220509162707188](COMwrite.assets/image-20220509162707188.png)

3. 添加“写入范围”命令，并填写工作表名称，起始单元格、输入表（Table）、勾选增加标头。

   ![image-20220509162719055](COMwrite.assets/image-20220509162719055.png)

4. 运行组件，查看输出文件内容。

   ![image-20220509162737710](COMwrite.assets/image-20220509162737710.png)

### Excel写入单元格<span id ="excel写入单元格"></span>

<span> &emsp;&emsp;</span>范围：单元格表达式，如A20。

<span> &emsp;&emsp;</span>工作表名称：如Sheet1。

<span> &emsp;&emsp;</span>输入值：填写要填入单元格的内容。

![image-20220509162812929](COMwrite.assets/image-20220509162812929.png)
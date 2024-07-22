## Excel Write Operations (Based on COM)

### Excel Write Range <span id="excel-write-range"></span>

1. Refer to the steps of "Read Range" to read the Excel content into Table.

   ![image-20220509162652044](COMwrite.assets/image-20220509162652044.png)

2. Add a new "Excel Application Scope" and fill in the path of the new workbook.

   ![image-20220509162707188](COMwrite.assets/image-20220509162707188.png)

3. Add the "Write Range" command, and fill in the worksheet name, starting cell, input (Table), and check the option to add headers.

   ![image-20220509162719055](COMwrite.assets/image-20220509162719055.png)

4. Run the component and check the content of the output file.

   ![image-20220509162737710](COMwrite.assets/image-20220509162737710.png)

### Excel Write Cell <span id="excel-write-cell"></span>

- Range: Cell expression, such as A20.
- sheetName: e.g., Sheet1.
- Input Value: Fill in the content to be entered into the cell.

![image-20220509162812929](COMwrite.assets/image-20220509162812929.png)

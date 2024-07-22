## Excel Write Operations (Based on Workbook File Read/Write)

### Write Range <span id="write-range"></span>

1. Attribute Descriptions

   - StartingCell: The cell from which to begin writing values.
   - SheetName: The name of the worksheet to write into.
   - DataTable: The data to be written into the cell range.
   - WorkbookPath: The path of the Excel file to be written into.
   - AddHeaders: If checked, the headers of the specified table range will be written.
   - Password: The password for the Excel file (if any, otherwise ignore).

2. Example

   As shown in the figure, fill in the "Read Range" and "Write Range" commands under the Workbook category, including: SheetName, DataTable (Table), and WorkbookPath to write into.

   ![image-20220509163212423](Workbookwrite.assets/image-20220509163212423.png)

   ![image-20220509163224850](Workbookwrite.assets/image-20220509163224850.png)

### Write Cell <span id="write-cell"></span>

- Cell: Cell expression, such as A20.
- SheetName: e.g., Sheet1.
- Text: Fill in the content to be entered into the cell.
- WorkbookPath: The path of the workbook to write into.

![image-20220509163306753](Workbookwrite.assets/image-20220509163306753.png)

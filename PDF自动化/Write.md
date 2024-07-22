## PDF写入操作

### PDF写入文本<span id ="pdf写入文本"></span>

1. 部分属性介绍

   设置: 可以设置写入PDF内容的一些格式。

   页：写入内容的位置（下标从0开始）。

   文本: 需要写入的内容。

   清除原数据：若勾选，会在写入数据之前清除原有的数据。

2. 案例说明

   给定PDF文件“test.pdf”，对其进行写入内容操作。

3. 操作步骤

   1. 使用 “PDF应用范围”函数，打开指定PDF文件。

      ![image-20220509163846716](Write.assets/image-20220509163846716.png)

   2. 使用 “PDF写文本”函数，在“输入”属性中，设置希望写入的页数位置，设置文本内容，并对写入的文本进行格式的设置。

      ![image-20220509163909349](Write.assets/image-20220509163909349.png)

      运行结果如下：

      ![image-20220509163929433](Write.assets/image-20220509163929433.png)

### 插入PDF页<span id ="插入pdf页"></span>

1. 常用属性介绍

    位置: 希望插入新的PDF页的位置（下标从0开始）。

   数量: 需要插入的PDF页的数量。

2. 案例说明

   给定PDF文件“test.pdf”，插入新的2页。

3. 操作步骤

   1. 使用 “PDF应用范围”函数，打开指定PDF文件。

      ![image-20220509164046439](Write.assets/image-20220509164046439.png)

   2. 依次使用 “获取PDF页数”函数，获取当前PDF的页数，使用“插入PDF页”函数，插入新的2页，再次使用“获取PDF页数”函数，获取PDF数量。

      ![image-20220509164103675](Write.assets/image-20220509164103675.png)

      运行结果如下：

      ![image-20220509164117453](Write.assets/image-20220509164117453.png)

### PDF插入图片<span id ="pdf插入图片"></span>

1. 常用属性介绍

   页: 希望插入图片的位置（下标从0开始）。

   图片文件: 图片存在的路径。

   设置：可以设置插入图片的一些格式。

2. 案例说明

   给定PDF文件“test.pdf”，插入一张图片。

3. 操作步骤

   1. 使用 “PDF应用范围”函数，打开指定PDF文件。

      ![image-20220509164224470](Write.assets/image-20220509164224470.png)

   2. 使用 “PDF插入图片”函数，设置图片格式。

      ![image-20220509164242497](Write.assets/image-20220509164242497.png)

      运行结果如下：

      ![image-20220509164257074](Write.assets/image-20220509164257074.png)
      
      
 ## PDF Writing Operations

### Write Text to PDF<span id="pdf-write-text"></span>

1. **Property Descriptions:**

   - **Settings:** Options for formatting the text to be written to the PDF.
   - **Page:** The page where the text will be written (index starts from 0).
   - **Text:** The content to be written.
   - **Clear Existing Data:** If checked, existing data on the page will be cleared before writing.

2. **Case Description:**

   Given a PDF file "test.pdf", perform a text-writing operation.

3. **Steps:**

   1. Use the "Open PDF" function to open the specified PDF file.

      ![image-20220509163846716](Write.assets/image-20220509163846716.png)

   2. Use the "Write Text to PDF" function to set the page location, text content, and text formatting settings.

      ![image-20220509163909349](Write.assets/image-20220509163909349.png)

      Result:

      ![image-20220509163929433](Write.assets/image-20220509163929433.png)

### Insert PDF Page<span id="insert-pdf-page"></span>

1. **Property Descriptions:**

   - **Position:** The position to insert the new PDF pages (index starts from 0).
   - **Quantity:** The number of PDF pages to insert.

2. **Case Description:**

   Given a PDF file "test.pdf", insert 2 new pages.

3. **Steps:**

   1. Use the "Open PDF" function to open the specified PDF file.

      ![image-20220509164046439](Write.assets/image-20220509164046439.png)

   2. Use the "Get PDF Page Count" function to retrieve the current number of pages, then use the "Insert PDF Page" function to insert 2 new pages, and again use the "Get PDF Page Count" function to check the updated number of pages.

      ![image-20220509164103675](Write.assets/image-20220509164103675.png)

      Result:

      ![image-20220509164117453](Write.assets/image-20220509164117453.png)

### Insert Image into PDF<span id="pdf-insert-image"></span>

1. **Property Descriptions:**

   - **Page:** The page where the image will be inserted (index starts from 0).
   - **Image File:** Path to the image file.
   - **Settings:** Options for formatting the inserted image.

2. **Case Description:**

   Given a PDF file "test.pdf", insert an image.

3. **Steps:**

   1. Use the "Open PDF" function to open the specified PDF file.

      ![image-20220509164224470](Write.assets/image-20220509164224470.png)

   2. Use the "Insert Image into PDF" function to set the image formatting.

      ![image-20220509164242497](Write.assets/image-20220509164242497.png)

      Result:

      ![image-20220509164257074](Write.assets/image-20220509164257074.png)

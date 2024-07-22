## PDF Writing Operations

### Write Texts to PDF Page<span id="pdf-write-text"></span>

1. **Property Descriptions:**

   - **Font Set:** Options for formatting the text to be written to the PDF.
   - **Page Number:** The page where the text will be written (index starts from 0).
   - **Text:** The content to be written.
   - **Clear Old Data:** If checked, existing data on the page will be cleared before writing.

2. **Example:**

   Given a PDF file "test.pdf", perform a text-writing operation.

3. **Steps:**

   1. Use the "PDF Scope" function to open the specified PDF file.

      ![image-20220509163846716](Write.assets/image-20220509163846716.png)

   2. Use the "PDF Write Text" function to set the page location, text content, and text formatting settings.

      ![image-20220509163909349](Write.assets/image-20220509163909349.png)

      Result:

      ![image-20220509163929433](Write.assets/image-20220509163929433.png)

### Insert PDF Pages<span id="insert-pdf-page"></span>

1. **Property Descriptions:**

   - **Position:** The position to insert the new PDF pages (index starts from 0).
   - **Page Count:** The number of PDF pages to insert.

2. **Example:**

   Given a PDF file "test.pdf", insert 2 new pages.

3. **Steps:**

   1. Use the "PDF Scope" function to open the specified PDF file.

      ![image-20220509164046439](Write.assets/image-20220509164046439.png)

   2. Use the "PDF Get Page Count" function to retrieve the current number of pages, then use the "PDF Insert Pages" function to insert 2 new pages, and again use the "PDF Get Page Count" function to check the updated number of pages.

      ![image-20220509164103675](Write.assets/image-20220509164103675.png)

      Result:

      ![image-20220509164117453](Write.assets/image-20220509164117453.png)

### Insert Images into PDF<span id="pdf-insert-image"></span>

1. **Property Descriptions:**

   - **Page Number:** The page where the image will be inserted (index starts from 0).
   - **Image File:** Path to the image file.
   - **Image Set:** Options for formatting the inserted image.

2. **Example:**

   Given a PDF file "test.pdf", insert an image.

3. **Steps:**

   1. Use the "PDF Scope" function to open the specified PDF file.

      ![image-20220509164224470](Write.assets/image-20220509164224470.png)

   2. Use the "PDF Insert Image" function to set the image formatting.

      ![image-20220509164242497](Write.assets/image-20220509164242497.png)

      Result:

      ![image-20220509164257074](Write.assets/image-20220509164257074.png)

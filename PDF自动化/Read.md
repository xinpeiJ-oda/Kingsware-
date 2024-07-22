## PDF Reading Operations

### Read PDF Page <span id="read-pdf-page"></span>

1. Properties Description:

   Page Number: The desired position of content to be read (indexed starting from 0).

   Read Type: Type of content to be read, supporting "all", "text" only, and "image" only modes.

   Text ExtractionOptions: Algorithms available for text extraction, default is 8.

   Image SavePath: Path to save extracted files.

   Image Options: Options for images, 0 and non-0 values, default is 0 (cannot enumerate images on page), non-0 (imageListID value).

   Text: Stores extracted text content in a string variable.

   Image File: Stores extracted images in a string variable.

2. Example

   Given PDF file "test.pdf", perform reading operations on it.

3. Steps

   1. Use the "PDF Scope" function to open the specified PDF file.

      ![image-20220509164444346](Read.assets/image-20220509164444346.png)

   2. Use the "PDF Read Page" function to read text and images inside, and output the content to the console.

      ![image-20220509164503028](Read.assets/image-20220509164503028.png)

      Running result:

      (1) Extracted text:

      ![image-20220509164534425](Read.assets/image-20220509164534425.png)

      (2) Extracted image:

      ![image-20220509164549896](Read.assets/image-20220509164549896.png)

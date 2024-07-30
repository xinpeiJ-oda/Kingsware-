## Data Types <span id="data-types"></span>

Data types are essential in all programming languages as they determine how variables are stored in memory and the size of memory they occupy. Common basic data types are as follows:

| Data Type | Meaning                                                      | Example           | Description                             |
| --------- | ------------------------------------------------------------ | ----------------- | --------------------------------------- |
| String    | String type, defines a sequence of characters                | ‘computer’, ’text’| Characters should be enclosed in single quotes |
| Boolean   | Boolean value, with only 2 possible values                   | True/False        | Generally used for conditions or decisions |
| Integer   | Integer type, used to store whole numbers                     | 100, 2020         | Typically used for calculations or comparisons |
| Double    | Double precision floating point type, used to store decimal numbers, range: -1.79E+308 to 1.79E+308 | 10.5, 13.56       | Often used for input and output through variables |
| Float     | Single precision floating point type, defines a floating point number, range: -3.40E+38 to 3.40E+38 | 1.0, 3.14         | Often used for input and output through variables |
| Array     | Array type, used to store multiple values of the same type, can create integer arrays, string arrays, boolean arrays, etc. with fixed size | [‘0.1’, ‘0.2’…]  | Typically used for input and output through variables |
| List      | List type, also an Object type, used to store multiple values of the same type, can be extended or shortened | [‘1’, ‘2’, ‘3’…]  | Typically used for list input and output through variables |

- To view the supported variable types, go to “Variables” - “Variable Types”. You can also add, delete, or modify variables on the variable tab.

  ![image-20230601151543319](Data.assets/image-20230601151543319.png)

- To view the supported parameter types, go to “Parameters” - “Parameter Types”. You can also add, delete, or modify parameters on the parameter tab.

  ![image-20230601151501496](Data.assets/image-20230601151501496.png)

### Notes on Specific Data Types

- **String**

  The content of a string type needs to be enclosed in single quotes, otherwise an error will occur.

  In the expression editor, click the “+” or “-” button at the bottom to add or remove single quotes around the string.

  ![image-20230601152021455](Data.assets/image-20230601152021455.png)

  ![image-20230601152105818](Data.assets/image-20230601152105818.png)

- **List**

  Lists are one of the most commonly used types. List output can be done as follows:

  1. To output all list items, use “Traverse Loop”.
  2. To output specified list items, use “Get String List Item” for characters in specified order.

  > **[Note]**
  >
  > <span> &emsp;</span><font color="black">In other data types, TList represents a list. For example, ![1695200833379](Data.assets/1695200833379.png) data type indicates a list with item type TUiElement.</font>



## 数据类型<span id ="数据类型"></span>

数据类型是所有计算机语言都必须涉及的内容，它用于确定变量在内存中的存放方式和占用内存的大小。常用的基本数据类型如下：

| 数据类型 | 含义                                                         | 示例              | 说明                                    |
| -------- | ------------------------------------------------------------ | ----------------- | --------------------------------------- |
| String   | 字符串类型，可以定义一<br>个字符串序列                       | ‘computer’,’text’ | 字符前后要添加单引号                    |
| Boolean  | 布尔值，只有2个值                                            | True/False        | 一般用于做判断或决策                    |
| Integer  | 整型,，用于存储程序中的<br/>整数类型数值                     | 100，2020         | 一般用于执行方程或者<br/>进行比较       |
| Double   | 双精度浮点类型，用于存<br/>储程序中的小数类型数值，<br/>表示范围：<br/>-1.79E+308~-1.79E+308 | 10.5,13.56        | 一般通过变量来实现输<br/>入和输出       |
| Float    | 单精度浮点类型，可以定<br/>义一个浮点数，表示范围：<br/>-3.40E+38~3.40E+38 | 1.0,3.14          | 一般通过变量来实现输<br/>入和输出       |
| Array    | 数组类型，用于存储同一<br/>类型的多个值，可以创建<br/>整数类型数组、字符串类<br/>型数组、布尔值类型数组<br/>等具有固定的大小 | [‘0.1’,’0.2’…]    | 一般通过变量来实现输<br/>入和输出       |
| List     | 列表类型，也是一种Object<br/>类型，用于存储同一类型的<br/>多个值，可以被延长或缩短 | [‘1’,’2’,’3’…]    | 一般通过变量来实现列<br/>表的输入和输出 |

- 系统支持的变量类型，可通过“变量”-“变量类型”进行查看，同时在变量页签可以对变量进行增删改操作。

  ![image-20230601151543319](Data.assets/image-20230601151543319.png)

- 系统支持的参数类型，可通过“参数”-“参数类型”进行查看，同时在参数页签可以对参数进行增删改操作。

  ![image-20230601151501496](Data.assets/image-20230601151501496.png)

### 部分需注意的数据类型说明

- 字符串

  字符串类型的内容，需要用单引号括起来，否则会报错。

  可在表达式编辑器中，单击下方的 “+” 号或者 “-” 号，对字符串整体添加或去除单引号。

  ![image-20230601152021455](Data.assets/image-20230601152021455.png)

  ![image-20230601152105818](Data.assets/image-20230601152105818.png)

- 列表

  列表是最常用的类型之一，列表输出可通过如下方式进行。

  1. 全部列表项，可通过“遍历循环”进行输出。
  2. 指定列表项，可通过“获取字符串列表项”对指定顺序的字符进行输出。

  > **[warning] 注意**
  > 
  > <span> &emsp;</span><font color="black">其余数据类型中，TList 均表示列表。如![1695200833379](Data.assets/1695200833379.png)数据类型，即表示是一个列表，列表项类型为 TUiElement 。</font>
  
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

  > **[warning] Note**
  >
  > <span> &emsp;</span><font color="black">In other data types, TList represents a list. For example, ![1695200833379](Data.assets/1695200833379.png) data type indicates a list with item type TUiElement.</font>



# K-RPA安装部署

本章节主要介绍如何在 Windows 平台上安装部署 K-RPA 系统。K-RPA采用三层架构模式，由Server、Robot（Agent）、和Control三个程序组成，K-RPA属于绿色安装软件，只要获得了软件的商用版本，就可以直接进行安装。

> **[info]  备注**  
>
> - <font color="black">K-RPA 系统遵循绿色软件理念，无需安装过程，单个文件直接拷贝即可使用，部署方便，快捷简单，支持批量升级。</font>
> - <font color="black">K-RPA 系统除支持在 Windows 平台上安装部署外，还支持在 Linux 、Arm和信创平台上进行安装部署。</font>

## Server安装<span id="server安装"></span>

1. 服务器（Server）程序安装包获取途径：

   - 内部人员，可在产品下载中心网站上进行下载；

     ![image-20230807102413043](Server.assets/image-20230807102413043.png)

   - 外部人员则由项目实施人员提供。

2. 运行 Server 程序

   将Server程序安装包解压到安装目录下，如： “D：/krpa/Server/Server.exe” 。双击运行 “Server.exe” ，打开主界面，如下图所示。

   ![image-20221125143608308](Server.assets/image-20221125143608308.png)

3. 配置信息

   单击“配置”按钮，弹出 Server 服务器“配置”窗口，如下图所示。

   ![image-20221129154717364](Server.assets/image-20221129154717364.png)

   配置说明：

   - 名称：Server 描述，自定义即可。
   - 端口：Server 对外的服务端口，建议12580，也可自定义。 Robot 和 Control 都是通过此端口与 Server 建立 Socket 连接。端口开通的方向是： Robot 和 Control 往 Server 方向。
   - 自动打开“下载页面”：勾上此选项，在 Server 启动时会自动弹出 Control 和 Robot 的下载页面和安装操作说明。
   - 开机时自动启动：勾上此选项，Server 会随机器一同启动。
   - 其他选项无需设置，默认即可。

4. 返回 Server 服务器主界面

   配置完成后，单击“确定”，回到 Server 服务器开启界面。

   ![image-20221125143653900](Server.assets/image-20221125143653900.png)

5. 申请授权文件

   单击“开始/继续(S)”按钮，弹出“授权信息”窗口，将“机器标识”字符串拷贝并发送至金智维厂商，如下图所示。

   ![image-20221129154940325](Server.assets/image-20221129154940325.png)

   > **[warning]  注意**  
   >
   > - <font color="black">首次安装或者授权文件已失效才需要进行授权申请。</font>
   > - <font color="black">若需要使用网页版，则在申请授权时需要备注说明支持网页版。</font>

6. 导入授权文件

   待金智维厂商收到机器标识后，会返回一个后缀名为 “.lnc” 的授权文件，此时将授权文件导入即可，如下图所示。

   ![image-20221129155018302](Server.assets/image-20221129155018302.png)

7. 启动 Server 服务器

   单击“确定”按钮，如 Server 程序最小化到托盘，双击 ![1669366217173](Server.assets/1669366217173.jpg) 图标打开主界面，待启动按钮状态变成灰色即表示 Server 已启动成功，如下图所示。

   > **[info]  说明**  
   >
   > <span>&emsp;</span><font color="black"> ![1669366217173](Server.assets/1669366217173.jpg) 为旧版本 Server 图标，新版本图标已更新为 ![1691659519577](Server.assets/1691659519577.png)</font>

   ![image-20221129155118835](Server.assets/image-20221129155118835.png)


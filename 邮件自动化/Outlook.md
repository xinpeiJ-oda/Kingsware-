## Outlook

### 获取Outlook邮件信息

![image-20230807094238981](Outlook.assets/image-20230807094238981.png)

1. 常用属性介绍

   - 输入:

       邮件文件夹: 从中检索邮件的邮件文件夹。

       账户对应的目录名称: 用于访问要检索邮件的帐户。

   - 选项:

     筛选器： 用作要检索邮件的过滤器的字符串。

     仅未读消息：是否仅检索未读消息，默认此复选框处于选中状态。

     标记为已读：是否将检索到的邮件标记为已读，默认清除此复选框。

     顶部: 从列表顶部开始检索的邮件数，默认为30。

   - 输出：

     消息：作为邮件消息对象的集合，已检索到的邮件消息。

2. 案例说明

   使用“获取Outlook邮件信息”函数，收取邮件消息，并遍历循环邮件，取出邮件的主题、发件人、收件人、日期、邮件内容等信息。

3. 操作步骤

   1. 使用“获取Outlook邮件信息”函数，配置相关信息。

      ![image-20220509173440264](Outlook.assets/image-20220509173440264.png)

   2. 使用“应用程序集成 > 邮件 > 邮件属性 ”下面的函数来获取相应的邮件信息，将信息保存在变量并打印输出到控制台。

      ![image-20220509173458714](Outlook.assets/image-20220509173458714.png)

   3. 配置完成，编译、保存、运行程序。

      ![image-20220509173518196](Outlook.assets/image-20220509173518196.png)

   4. 查看运行结果。

      ![image-20220509173533680](Outlook.assets/image-20220509173533680.png)

### 发送Outlook邮件信息<span id ="发送outlook邮件信息"></span>

![image-20220509173546292](Outlook.assets/image-20220509173546292.png)

![image-20220509173556600](Outlook.assets/image-20220509173556600.png)

1. 常用属性介绍

   - Mail：

     附件：要添加到电子邮件中的附件。

     附件集合：要添加到电子邮件中的附件列表，允许指定待附加的一组文件 。

     收件人：主要的电子邮件收件人。

     抄送：次要的电子邮件收件人。

     密送：隐藏的电子邮件收件人。

     主题：电子邮件的主题。

     正文：电子邮件消息正文。

   - 输入:

     账户: 用于发送消息的帐户。

     代表某人发送: 邮件信息预期发件人的显示名称。

   - 选项:

     是草稿：是否将邮件另存为草稿 。

     正文是Html:指定消息主体是否以HTML格式编写。

2. 案例说明

   使用“发送Outlook邮件信息”函数，给指定邮箱发送邮件，抄送另外一位邮件接收人，并发送附件。

3. 操作步骤

   1. 使用“发送Outlook邮件信息”函数，配置相关信息。

      ![image-20220509173804916](Outlook.assets/image-20220509173804916.png)

      ![image-20220509173815746](Outlook.assets/image-20220509173815746.png)

   2. 运行查看结果。

      ![image-20220509173831159](Outlook.assets/image-20220509173831159.png)
      
# Outlook

### Retrieve Outlook Email Information

![image-20230807094238981](Outlook.assets/image-20230807094238981.png)

1. Common Properties

   - **Input:**
   
     - **Email Folder**: The folder from which to retrieve emails.
     - **Account Directory Name**: The directory name for the account from which to retrieve emails.

   - **Options:**
   
     - **Filter**: A string used as a filter for retrieving emails.
     - **Only Unread Messages**: Whether to retrieve only unread messages; this checkbox is selected by default.
     - **Mark as Read**: Whether to mark retrieved emails as read; this checkbox is cleared by default.
     - **Top**: The number of emails to retrieve from the top of the list; the default is 30.

   - **Output:**
   
     - **Messages**: A collection of email message objects, representing the retrieved emails.

2. Example Description

   Use the “Retrieve Outlook Email Information” function to fetch email messages, iterate through the emails, and extract information such as subject, sender, recipient, date, and email content.

3. Steps

   1. Use the “Retrieve Outlook Email Information” function to configure the relevant information.

      ![image-20220509173440264](Outlook.assets/image-20220509173440264.png)

   2. Use functions from “Application Integration > Email > Email Properties” to retrieve the respective email information, save the information in variables, and print the output to the console.

      ![image-20220509173458714](Outlook.assets/image-20220509173458714.png)

   3. After configuration, compile, save, and run the program.

      ![image-20220509173518196](Outlook.assets/image-20220509173518196.png)

   4. Check the results.

      ![image-20220509173533680](Outlook.assets/image-20220509173533680.png)

### Send Outlook Email Information<span id="send-outlook-email-information"></span>

![image-20220509173546292](Outlook.assets/image-20220509173546292.png)

![image-20220509173556600](Outlook.assets/image-20220509173556600.png)

1. Common Properties

   - **Mail:**

     - **Attachment**: Attachments to add to the email.
     - **Attachment Collection**: A list of attachments to add to the email, allowing the specification of a group of files to attach.
     - **Recipient**: The primary email recipient.
     - **CC**: Secondary email recipients.
     - **BCC**: Hidden email recipients.
     - **Subject**: The subject of the email.
     - **Body**: The body of the email message.

   - **Input:**

     - **Account**: The account used to send the message.
     - **Send on Behalf of**: The display name of the intended sender of the email.

   - **Options:**

     - **Save as Draft**: Whether to save the email as a draft.
     - **Body is HTML**: Specify whether the message body is written in HTML format.

2. Example Description

   Use the “Send Outlook Email Information” function to send an email to a specified address, CC another recipient, and include an attachment.

3. Steps

   1. Use the “Send Outlook Email Information” function to configure the relevant information.

      ![image-20220509173804916](Outlook.assets/image-20220509173804916.png)

      ![image-20220509173815746](Outlook.assets/image-20220509173815746.png)

   2. Run and check the results.

      ![image-20220509173831159](Outlook.assets/image-20220509173831159.png)

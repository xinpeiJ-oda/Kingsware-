# 邮件自动化

## 发送SMTP邮件消息<span id ="发送smtp邮件消息"></span>

![image-20230807092541966](Mail.assets/image-20230807092541966.png)

1. 常用属性介绍

   - 电子邮件: 用于发送消息的电子邮件帐户。
   - 密码: 用于发送消息的电子邮件帐户的密码。
   - 服务器: 要使用的电子邮件服务器主机。
   - 端口: 用于发送电子邮件消息的端口。
   - 名称: 发件人的显示名称。
   - 从：发件人的电子邮件地址。
   - 字符集：发送的邮件内容所使用的字符集，如“UTF-8”。
   - 收件人：主要的电子邮件收件人。
   - 抄送：次要的电子邮件收件人。
   - 密送：隐藏的电子邮件收件人
   - 主题：电子邮件的主题。
   - 正文：电子邮件消息正文。
   - 附件：要添加到电子邮件的附件，多个附件用分号隔开。
   - 图片：发送的图片所在路径。
   - 邮件消息：要转发的邮件消息，该字段仅支持邮件消息对象。
   - 发送方式：邮件发送的方式。
   - 安全连接：用于指定连接的SSL或TLS加密。
   - 正文是Html：指定消息主体是否以HTML格式编写。

2. 案例说明

   利用“发送SMTP邮件消息”函数，给指定邮箱发送邮件，抄送另外一位邮件接收人，并发送附件。

3. 操作步骤

   1. 使用“发送SMTP邮件消息”函数，配置相关信息。

      ![image-20220509165113952](Mail.assets/image-20220509165113952.png)

      ![image-20220509165125534](Mail.assets/image-20220509165125534.png)

   2. 运行查看结果。

      ![image-20220509165145960](Mail.assets/image-20220509165145960.png)
      
# Email Automation

## Send SMTP Email Message<span id="send-smtp-email-message"></span>

![image-20230807092541966](Mail.assets/image-20230807092541966.png)

1. Common Properties

   - **Email**: The email account used to send messages.
   - **Password**: The password for the email account used to send messages.
   - **Server**: The email server host to use.
   - **Port**: The port used to send email messages.
   - **Name**: The display name of the sender.
   - **From**: The email address of the sender.
   - **Charset**: The character set used for the email content, such as “UTF-8”.
   - **Recipient**: The primary email recipient.
   - **CC**: Secondary email recipients.
   - **BCC**: Hidden email recipients.
   - **Subject**: The subject of the email.
   - **Body**: The body of the email message.
   - **Attachment**: Attachments to add to the email, separated by semicolons if multiple.
   - **Image**: Path of the image to be sent.
   - **Email Message**: The email message to be forwarded; this field only supports email message objects.
   - **Sending Method**: The method of sending the email.
   - **Secure Connection**: Specify SSL or TLS encryption for the connection.
   - **Body is HTML**: Specify whether the message body is written in HTML format.

2. Example Description

   Use the “Send SMTP Email Message” function to send an email to a specified address, CC another recipient, and attach a file.

3. Steps

   1. Use the “Send SMTP Email Message” function to configure the relevant information.

      ![image-20220509165113952](Mail.assets/image-20220509165113952.png)

      ![image-20220509165125534](Mail.assets/image-20220509165125534.png)

   2. Run and check the results.

      ![image-20220509165145960](Mail.assets/image-20220509165145960.png)

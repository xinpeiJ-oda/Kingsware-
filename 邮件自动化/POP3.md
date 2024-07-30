## Get POP3 Mail Messages

![image-20220509165200284](POP3.assets/image-20220509165200284.png)

![image-20230807094316108](POP3.assets/image-20230807094316108.png)

1. Common Properties

   - **Email**: The email account used to receive messages.
   - **Password**: The password for the email account used to receive messages.
   - **Server**: The email server host to use.
   - **Port**: The port used to retrieve email messages.
   - **Specify Sender**: Only retrieve emails from the senders listed in this parameter; multiple senders should be separated by semicolons.
   - **Specify Subject**: Only retrieve emails with subjects containing the specified themes; multiple themes should be separated by semicolons.
   - **Start Time**: Only retrieve emails received after this time.
   - **End Time**: Only retrieve emails received before this time.
   - **Proxy Parameters**: Proxy parameters in the format “address:port”.
   - **Delete Information**: Specify whether to mark read messages as deleted.
   - **Connection Type**: The type of connection for the mailbox.
   - **Secure Connection**: Specify SSL or TLS encryption for the connection.
   - **Top**: The number of emails to retrieve from the top of the list; the default is 30.
   - **Messages**: A collection of email message objects representing the retrieved emails.

2. Example Description

   Use the “Get POP3 Mail Messages” function to fetch email messages, then loop through the emails to extract details such as the subject, sender, recipient, date, and email content.

3. Steps

   1. Use the “Get POP3 Mail Messages” function to configure the relevant information.

      ![image-20220509173138169](POP3.assets/image-20220509173138169.png)

   2. After configuration, compile, save, and run the program.

      ![image-20220509173200777](POP3.assets/image-20220509173200777.png)

   3. Check the results.

      ![image-20220509173232132](POP3.assets/image-20220509173232132.png)

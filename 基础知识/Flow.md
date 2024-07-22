## 流程

### 流程设计原则

流程是RPA的核心，一个流程通常对应一个场景任务的自动化实现。 

流程设计相当于加工厂，可以把多个跟场景相关的功能组件，通过一定的逻辑与顺序连起来，加上参数信息，形成流程。

流程设计的原则：

1. 一个流程必须至少包含“开始”和“结束”节点。
2. 流程连接线必须有闭环，即流程节点应该直接或者间接（通过其他节点）与“开始”和“结束”节点相连。
3. 流程连接线可设置条件，但必须结合流程节点的执行返回使用。
4. 一个流程可被另一个流程直接引用，支持无限多层引用。
5. 一个流程可直接嵌套子流程，支持无限下钻嵌套。

### 流程组成及说明

![image-20240307105909685](Flow.assets/image-20240307105909685.png)

### 流程设计介绍

流程设计的目的是将各操作按预定的执行顺序、执行条件连接在一起，编辑完成后提交给流程视图和任务配置，以实现批量操作自动化。

一个完整的流程，必须具有”开始“和”结束“节点作为流程的固定节点，其他节点为实现机器人流程自动化功能性的节点。

在进行流程图的设计时，可将流程设计为单分支流程或多分支流程。

### 流程创建

1. 进入【流程设计】页面：

   在界面左边菜单栏，单击“流程管理”，在页面中单击“流程设计”，进入流程设计界面；

   ![image-20240307110513373](Flow.assets/image-20240307110513373.png)

2. 增加流程分组：

   在【流程设计】页面，单击“增加”-“文件夹”，增加流程分组；

   ![image-20240307110810775](Flow.assets/image-20240307110810775.png)

   ![image-20240307110850788](Flow.assets/image-20240307110850788.png)

3. 增加流程：

   选中一个分组，单击“增加”-“流程图”，增加流程。在“增加流程”弹框中，一般只需要填写“流程名称”即可，若需要将新增流程关联到运营管理平台，才需填写其他属性。

   ![image-20240307111005550](Flow.assets/image-20240307111005550.png)

   ![image-20240307111055100](Flow.assets/image-20240307111055100.png)

## Process

### Process Design Principles

Processes are the core of RPA, typically corresponding to the automation of a scenario task.

Process design is akin to a factory, where multiple scenario-related functional components are connected through certain logic and sequences, along with parameter information, to form a process.

Principles of process design:

1. A process must include at least "Start" and "End" nodes.
2. Process connections must form a closed loop, meaning process nodes should be directly or indirectly (through other nodes) connected to the "Start" and "End" nodes.
3. Process connections can be conditional but must be used in conjunction with the execution returns of the process nodes.
4. A process can be directly referenced by another process, supporting an infinite number of layers of references.
5. A process can directly nest subprocesses, supporting infinite nested drilling.

### Process Components and Description

![image-20240307105909685](Flow.assets/image-20240307105909685.png)

### Introduction to Process Design

The purpose of process design is to connect various operations in a predetermined execution sequence and conditions, and after editing, submit them to the process view and task configuration to achieve batch operation automation.

A complete process must have "Start" and "End" nodes as fixed nodes of the process, while other nodes are functional nodes for achieving robotic process automation.

When designing a process chart, the process can be designed as a single-branch process or a multi-branch process.

### Process Creation

1. Enter the [Process Design] page:

   In the left menu bar of the interface, click "Process Management", then click "Process Design" on the page to enter the process design interface.

   ![image-20240307110513373](Flow.assets/image-20240307110513373.png)

2. Add a Process Group:

   On the [Process Design] page, click "Add" - "Folder" to add a process group.

   ![image-20240307110810775](Flow.assets/image-20240307110810775.png)

   ![image-20240307110850788](Flow.assets/image-20240307110850788.png)

3. Add a Process:

   Select a group, click "Add" - "Process Chart" to add a process. In the "Add Process" pop-up box, usually, only the "Process Name" needs to be filled in. If you need to associate the new process with the operations management platform, then fill in other attributes.

   ![image-20240307111005550](Flow.assets/image-20240307111005550.png)

   ![image-20240307111055100](Flow.assets/image-20240307111055100.png)

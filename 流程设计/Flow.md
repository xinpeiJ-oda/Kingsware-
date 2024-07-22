# 流程设计

## 流程设计原则及组成<span id ="流程设计原则及组成"></span>

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

![image-20230726163659540](Flow.assets/image-20230726163659540.png)


# Process Design

## Process Design Principles and Composition <span id="process-design-principles-and-composition"></span>

### Process Design Principles

The process is the core of RPA, and a process usually corresponds to the automation of a scenario task.

Process design is akin to a factory, where multiple scenario-related functional components are connected in a certain logic and order, with added parameter information, to form a process.

Process design principles:

1. A process must include at least "Start" and "End" nodes.
2. The process connection must be a closed loop, meaning process nodes should be directly or indirectly (through other nodes) connected to the "Start" and "End" nodes.
3. Process connections can set conditions but must be used in conjunction with the execution return of process nodes.
4. One process can be directly referenced by another process, supporting infinite layers of referencing.
5. One process can directly nest sub-processes, supporting infinite drill-down nesting.

### Process Composition and Description

![image-20230726163659540](Flow.assets/image-20230726163659540.png)

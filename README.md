# Cloud-Computing-VPC-Project

Source code for the cloud computing project done on AWS. The purpose of this was to demonstrate designing a cloud infrastructure. A VPC on AWS was used with the use of 2 EC2 instances: a public and private one. A database was also used to store data along with a queue to send a message with a lambda trigger which stores whatever message to the database. An event scheduler was also implemented.

The program was a to-do list which implements adding the task to the queue which gets sent to the database. The event scheduler is used to implement a repetead reminder.

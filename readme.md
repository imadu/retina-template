# PiggyTech Fastify Boiler Plate for V2

## What does it do?

Defines a set of folders (including middlewares, typings, database schemas, tests, namespaces, utils and services for external party calls),
that would be used to build new backend applications for PiggyTech in Fastify.

## Modules

### Common

- Definies all items common (i.e. shared across) the entire application. These include but are not subject to:
  - envs
  - error handlers and query interfaces

### Middlewares

Stores middlewares used to format request responses and override different actions. Default middlewares include

- validator - used to validate request bodys coming into the application

### Modules

Namespaces hold all the core modules in an application. The idea of a namespace is that each subsection of an application can be moved to either, another application or be a standalone with minimal effort. Namespaces usually hold 4 files. For example, a namespace named **User** will hold the following:

- User.controller.ts
- User.repo.ts
- User.types.ts
- User.routes.ts

### Services

Services hold all external application calls. This is used for third party integrations and service to service calls

### Utils

Utility functions

### Adding new providers

## Deploying to Huawei Cloud 

To set up an application for the first time deployment on huawei cloud, you would need to do the following, after the set up, the pipeline takes care of the rest automatically 

- Log into the Huawei cloud with your log in details.

- Navigate to the Service Stage from the left hand panel. (An ECS cluster would have already been set up for your deployment, so you don't need to do this).

- Click on **Component Management** and then click on **Create Component** (This is where you would map the repository and repository branch for the build).

- Select a Name, Environment (Usually the ECS cluster) and Application for the app you're trying to deploy.

- Select a **component package** for the deployment and the version (this is usually a node js application. Currently Huawei supports only up to NodeJS 16).

- Select Source Code Repository and select Github: 
  - Select the authorization for the repository.
  - Select the repository for the code. 
  - Select the branch.

- In the Build Job area, select the name space for the application (usually either production or development or testing) and then click **Next**.

- In the following section select the number of CPU's and the number of Memory Limits you want to have, and then the namespace you want to deploy the application to.

- Click **Create and Deploy**

- After your build is successful: 
 - Navigate back to service stage and set up the pipeline
    - under continous delivery select the **Pipeline** and then create a pipeline
    - select the build job and then select the environment to deploy to and click **create and execute**. 
    - Once successful your pipeline is set, and any time code is pushed it will deploy the code.





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

The following links will guide on how to add new providers for modules that reuire third party integrations.
[Add new Inflow provider](./src/modules/nip-inflow/readme.md)
[Add new ouflow provider](./src//modules//nip-outflow/readme.md)
[Add new card provider](./src/modules//cards/readme.md)

# Halim_William_p1
Repository for the frontend.
Technologies

Persistence Tier

PostGreSQL
API Tier

Java 8
Gradle
JDBC
Java EE Servlets
JUnit
Mockito
Client Tier

HTML
CSS (Bootstrap if preferred)
JS
Fetch API
Functional Requirements

An new employee or new finance manager can request registration with the system
An admin user can approve or deny new registration requests
A registered employee can authenticate with the system by providing valid credentials
An authenticated employee can view and manage their pending reimbursement requests
An authenticated employee can view their reimbursement request history (sortable and filterable)
An authenticated employee can submit a new reimbursement request
An authenticated finance manager can view a list of all pending reimbursement requests
An authenticated finance manager can view a history of requests that they have approved/denied
An authenticated finance manager can approve/deny reimbursement requests
An admin user can deactivate user accounts, making them unable to log into the system
An admin user can reset a registered user's password
Non-Functional Requirements

Basic validation is enforced to ensure that invalid/improper data is not persisted
User passwords will be encrypted by the system before persisting them to the data source
Users are unable to recall reimbursement requests once they have been processed (only pending allowed)
Errors and exceptions are handled properly and their details are obfuscated from the user
The system conforms to RESTful architecture constraints
The system's is tested with at least 80% line coverage in all service and utility classes
The system's data schema and component design is documented and diagrammed
The system keeps detailed logs on info, error, and fatal events that occur
Suggested Bonus Features

Authenticated employees are able to upload an receipt image along with their reimbursement request
The system notifies the user of changes to their account registration status by email
The system notifies the user of changes to their reimbursement request status by email
Document your API using a tool like OpenAPI/Swagger
Run your application within a Docker container
Automate builds using GitHub Actions

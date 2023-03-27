Background
==========
The application is written in Angular 12 using TypeScript. It is a simple application, with a list of current road records (2 road records have been added as default). On the right-hand side, you can create a new road record, by clicking 'add' and filling in the form. This will be used to add to the list later in the test. There is also an 'Empty list' button which clears the list. A reload will reset the application, and default back to the 2 road records.

Installation
============
1. Copy the code to a working folder on your machine.
2. Run "npm install" within this working folder.
3. Run "ng serve" within this working folder to host the application locally.
4. Run "ng test" within this working folder to run the test/s of the application.
5. Open http://localhost:4200/ to view the application.
Note: The application should run in Firefox or Chrome. It does not need to run in Internet Explorer. 

Guidance
========
We want to see what you can do with this small application. Don't be afraid to implement the tasks however you see best. We would like to see craftsmanship in your code as well as completeness of the tasks. If you want to add anything extra you feel would show your skills off, please  feel free to do so - including any refactoring, clean code, DRY, SOLID etc.

Tasks
====
Implement the following requirements:
1. Validation: When adding a new record to the current surface recordings list, grade selection should be a required field before it is added.
2. Functionality: When adding a new record, the submit button hasn't been fully implemented. When a new record has been submitted, add it to the list.
3. Functionality: On the list, the 'delete' buttons for each item haven't been implemented - make each delete button remove its own item from the list.
4. Functionality: On the list, show each of the item's surface type name property, e.g. "Bituminous".
5. Functionality: On the list, show each of the item's grade name AND description properties, e.g. "Grade 2 | Some marks". 
6. Testing: There is a test spec file called 'create-record.component.spec.ts'. Add some possible tests for checking the functionality of the CreateRecordComponent.

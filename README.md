# ITMD542_Fullstack_InventoryX
# Project README

Name: Pravallika Vadla
Email:pvadla@hawk.iit.edu

Class and Assignment Numbers
Class: ITMD542
Assignment: Final Project

Git Repository URL:https://github.com/vadlapravallika/inventory.git

Project Description:

InventoryX is a web-based Inventory Management System designed to streamline the 
tracking and management of goods and products for businesses of all sizes. It offers a user-friendly 
interface for managing inventory items, allowing users to perform CRUD operations easily.


Development Environment:
Operating System: Windows 11 Node.js Version:v20.11.0 Editors Used: Visual Studio Code

Installation/Running Instructions:
1. Clone the repository: `git clone(https://github.com/vadlapravallika/inventory.git)` or by using this -> git clone https://github.com/vadlapravallika/inventory.git <new-directory> (Example:git clone <repository-url> <new-directory>).
2. Navigate to the project directory: `cd inventory` or After cloning, navigate into the cloned directory
or 
1.git clone https://github.com/vadlapravallika/inventory.git <new-directory>
2.After cloning, navigate into the cloned directory

Client:

1. Navigate to the client directory: `cd client`
2. Use .env.local file which I submitted on blackboard to obtain next-auth secret key
3. Install dependencies: `npm install`
4. Start the application: `npm run dev`
5. Open your browser and go to: `http://localhost:3000`

Server:

1. Navigate to the client directory: `cd server`
2. Use .env file which I submitted on blackboard to obtain mongo db connection string
3. Install dependencies: `npm install`
4. Start the application: `npm run dev`
5. Open your browser and go to: `http://localhost:5000`

Insights and Results

Insights:
Express Validator: Implementing server-side form validation using express-validator to ensure data integrity.
Form Validation: Implementing client-side form validation using regular expressions to ensure data integrity.
During the development of this movie library management application, I gained insights into the following key aspects:
Express.js Routing**: Understanding and implementing routing in Express.js for managing different views and actions.
Mongo DB: Understanding and Implementing Database Management in Mongo DB for handling CRUD Operations.

Results:
Create (Add) Item: 
•Users can add new items to the inventory by providing details such as name, description, quantity, 
and price through a form.
•When a user submits the form, the item details are sent to the server, where they are validated and 
saved to the database using a POST request.
Read (View) Item:
•Users can view a list of all items in the inventory on the main page of the application.
•Each item is displayed with its details, such as name, description, quantity, and price.
•The inventory list is fetched from the server and rendered on the frontend using Pug templates.
Update (Edit) Item:
•Users can edit the details of existing items in the inventory, such as changing the name, description, 
quantity, or price.
•Each item in the inventory list may have an edit button or link that, when clicked, opens a form pre-
populated with the item's current details.
•When the user submits the updated details, they are sent to the server, where they are validated 
and updated in the database using a PUT request.
Delete Item:
•Users can remove items from the inventory if they are no longer needed.
•Each item in the inventory list may have a delete button or link that, when clicked, prompts the user
to confirm the deletion.
 •When confirmed, a DELETE request is sent to the server, and the item is removed from the 
database.
Validation and Error Handling:
•Input data provided by users is validated on both the client and server sides to ensure data integrity
and prevent security vulnerabilities.
•Proper error handling is implemented to provide meaningful error messages to users in case of 
validation errors or other issue

Challenges Faced:
Authentication its takes me time.
Mongo DB: Learning and Implementing MongoDB Atlas and Mongo DB methods took some time.

References:
[Node.js Documentation](https://nodejs.org/)
[Express.js Documentation](https://expressjs.com/)
[MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
[Mongo DB Documentation](https://www.mongodb.com/docs/atlas/getting-started/)


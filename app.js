const mongoose = require('mongoose');
const customer = require("customer.ejs")

const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);

/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const ToDo = require("./modules/customer.js");
const Customer = require('./modules/customer.js');

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  
    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries()
  
    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  
    // Close our app, bringing us back to the command line.
    process.exit();
  };

// Create a Customer
async function creatCustomer(){
    const newCustomer = {
      name: "Ali Hussain",
      age: 20
    }
  
   const createdCustomer =  await Customer.create(newCustomer)
  
   console.log("created new customer", createdCustomer)
  }

  //Get all Customers
  async function getAllCustomers(){
    const getAllCustomers = await Customer.find()
    console.log("All Customers", getAllCustomers)
    
  }

  //Update a Customer
  async function updateCustomer(){

    const findOneCustomer = await Customer.updateOne({age:20},{age: 22})
    console.log("Updated Record", findOneCustomer)
  }

  //Delete a Customer
  async function deleteCustomer(){

    const deletedCustomer = await Customer.findByIdAndDelete("6772c1bf71658a156727c36e")
    console.log("deleted Customer", deletedCustomer)
  }

  const runQueries = async () => {
    console.log('Queries running.')
    // The functions calls to run queries in our db will go here as we write them
    // .
    await getAllCustomers()
    await creatCustomer()
    await updateCustomer()
    await deleteCustomer()

  };
  
  connect()
  



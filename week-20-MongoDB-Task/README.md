## Month-5 Week-2 MongoDB Basics

Here, we will learn how to install MongoDB and also how to generate queries using a .csv data file.


### MongoDB :
1. MongoDB is a free and open-source cross-platform document-oriented database.
2. Classified as a NoSQL database, MongoDB avoids the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas, making the integration of data in certain types of applications easier and faster..

### Installation:

- Go to [Installation Link](https://www.mongodb.com/try/download/database-tools), install MongoDB Community Edition, MongoDB Shell,  MongoDB database Tools by clicking on the respective .zip folders.
- After installing the MongoDB Community Edition, Go to the MongoDB path and copy and paste the Mongosh.exe, mongoimport.exe files in the path. (C:\ProgramFiles\MongoDB\Server\version_here\bin folder -> paste Mongosh.exe, mongoimport.exe)

### Data File:

- Go to [mockaroo](https://www.mockaroo.com/), download the data.
- Copy the data.csv file and paste in your C:\ProgramFiles\MongoDB\Server\version_here\bin folder
- Open cmd, change the path cd C:\Program Files\MongoDB\Server\version_here\bin
- Then run the command as follows:

      mongoimport -d database_name -c collection_name --type csv --file file_name-here.csv --headerline

- Run the Mongosh shell, there in the shell, we have to write our queries.

### Task: Generate atleast 10 queries on the downloaded csv file data.

Here, our database name is, **demo**  collection name is **data**

- First head to our database by running below command in shell:

        use demo

- To get the collection name of our database, run:

        show collections

### 1. Write a MongoDB query to display all the documents in the collection.

        db.collection_name.find()  - Displays all the documents in the collection.

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query1.PNG" alt="Page">
<br/>

### 2.  Write a MongoDB query to display the fields for all the documents where gender is Female.

        db.data.find({"gender": 'Female'})

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query2.PNG" alt="Page">
<br/>

### 3.  Write a MongoDB query to display the count of all the documents in the collection.

        db.data.countDocuments()

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query3.PNG" alt="Page">
<br/>


### 4.  Write a MongoDB query to display the first 5 documents in the collection.

        db.data.find({}).limit(5)

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query4.PNG" alt="Page">
<br/>

### 5.  Write a MongoDB query to display the first 5 documents having gender as Male in the collection.

        db.data.find({gender:"Male"}).limit(5)

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query5.PNG" alt="Page">
<br/>

### 6.  Write a MongoDB query to display the documents having gender as Male and first_name starts with either 'S' or 'Z' in the collection.

        db.data.find({gender:"Male", first_name:{$regex:"^Z|^S"}})

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query6.PNG" alt="Page">
<br/>


### 7.  Write a MongoDB query to display the count of the documents having gender as Male and first_name starts with either 'S' or 'Z' in the collection.

        db.data.find({gender:"Male", first_name:{$regex:"^Z|^S"}}).count()

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query7.PNG" alt="Page">
<br/>


### 8.  Write a MongoDB query to display the count of the null documents of field ip_address.

      db.data.countDocuments({ip_address:{$exists:false}})

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query8.PNG" alt="Page">
<br/>


### 9.  Write a MongoDB query to add a new document to the existing data.

       db.data.insertOne({id:001, first_name: "Sabiya",last_name: "Tabassum",email:"test@gmail.com",ip_address:"22.188.45.48"})

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query9.PNG" alt="Page">
<br/>

### 10.  Write a MongoDB query to delete that new document from the existing data.

       db.data.deleteOne({id:001, first_name: "Sabiya",last_name: "Tabassum",email:"test@gmail.com",ip_address:"22.188.45.48"})

<br/>
   <img src="https://github.com/shanolhere/CreWork/blob/main/week-20-MongoDB-Task/assets/query10.PNG" alt="Page">
<br/>




##### **My Key Takeaways:**
1. This week brushed basic concepts of MongoDB.
2. Looking forward to learn more.

##### **My Social Links**

- **Portfolio**  - [PortfolioLink](https://sabiya.netlify.app/)
- **Twitter** - [TwitterLink](https://twitter.com/nerd_fswd)

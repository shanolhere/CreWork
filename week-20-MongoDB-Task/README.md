## Month-5 Week-2 MongoDB Basics

Here, we will learn how to install MongoDB and also how to generate queries using a .csv data file.


### MongoDB :
1. React is a widely used JS Library to build user interfaces.
2. With the help of React, we can build encapsulated components that manage their own state, then compose them to make complex UIs.
3. Also, React is declarative.

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





##### **My Key Takeaways:**
1. This week brushed basic concepts of ReactJS, Hooks, Router concepts, context API concept.
2. Looking forward to learn more.

##### **My Social Links**

- **Portfolio**  - [PortfolioLink](https://sabiya.netlify.app/)
- **Twitter** - [TwitterLink](https://twitter.com/nerd_fswd)

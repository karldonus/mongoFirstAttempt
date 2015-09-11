#Mongo Teach Yourself Read Me

### Description

- Simple node app that connects to a MongoDB database using Mongoose.

### Questions

- Why did you choose this subject?
  - Wanted to have exposure to the "M" in the Mean Stack
- How were you first made aware of it?
  - It is a common pairing with angular, node.js, and express
- What problem does it solve and how does it solve the problem (conceptually)?
  - MongoDB is nonrelationial database. It is particularly good at dealing with JSON-like documents. MongoDB uses dynamic schemas. We can store arrays and other complex structures.
- Why does one use it?
  - Flexibility. when you don't want a rigid schema. Craigslist uses it b/c they don't have to use a lot of schema migrations.
- What are the alternatives and what is it similar to, if anything?
  - any sql-based databases (e.g. postgresql and mysql) are alternatives. other nosql databases include apache, cassandra, redis, etc.
- What is the history of this technology. Who built it and why. Who is maintaining it?
  - Carlo Strozzi in 1998 coined the term NoSQl. In 2009, MongoDB was released by MongoDB Inc (formerly 10gen). They are the main maintainers of this open source program.
- What is your opinion on the technology after having built something with it?
  - I can see it is much easier to set up. The language is much easier to understand and type than psql or mysql. For example, to get a list of all users, the Mongo command is db.users.find() but psql is SELECT * FROM users.
- What are the biggest conceptual hurdles (if any) you encountered when researching this?
  - There are multiple drivers you can use for mongoDB, so stackoverflow might have answers for let's say mongoose when you're looking for the python equivalent.
- What resources do you recommend for interested students?
  - MongoDB's website has excellent documentation including tutorials.
- What article or forum was most helpful to you in learning this?
  - See above.
- What are 3 interview questions one might be asked about this technology?
  - How is mongoDB different than postresql?
  - When would you use one over the other?
  - Explain how mongoDB and angular connect?

### Installation

- Install MongoDB
  - Refer to MongoDB's website for installation instructions
  - Can be installed with homebrew
- Run npm install after download to install dependencies

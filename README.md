# Node.js API on IBM i
This is a demo Node.js API that can run on IBM i. It uses the [Open Database Connectivity (ODBC)](https://en.wikipedia.org/wiki/Open_Database_Connectivity) standard to connect to a Db2 for i and execute [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) opperations IBM's provided "[Sample Tables](https://www.ibm.com/docs/en/i/7.4?topic=tables-sample)".
# Getting Started
1. You must have the ODBC driver installed on the IBM i you want to connect to. See Seiden Group’s guide for [Using YUM to Install or Update the IBM i ODBC Driver](https://www.seidengroup.com/2022/07/11/using-yum-to-install-or-update-the-ibm-i-odbc-driver/). If you are developing on a local Linux machine, or  **W**indows **S**ubsystem for **L**inux (WSL), you must also install the ODBC driver, see my [write-up](https://colemaxwell.dev/posts/ibmi-odbc-on-linux/) for instructions on how to install the ODBC driver on a local machine.

2. Clone the repo to your local development machine or to your `IFS` home directory:

```shell
git clone https://github.com/cole-maxwell1/odbcExpressOnIBMi.git
``` 

3. On your IBM i there is a `stored procedure` included as part of the system that contains the data definition language (DDL) statements to create all of the tables and the `INSERT` statements to populate them used by this demo. The procedure creates the schema specified on the call to the procedure. Because this is an external stored procedure, it can be called from any SQL interface, including interactive SQL and System i® Navigator. To call the procedure where SAMPLE is the schema that you want to create, issue the following statement:
```sql
CALL QSYS.CREATE_SQL_SAMPLE ('SAMPLE');
```

4. Make a `.env` file. Then copy the contents of `sample.env` into the the new `.env` file you just created. You will need to fill in the information specific to connecting via ODBC on your IBM i system after each `(=)`.
```sh
# Sample .env
PORT=
DB_HOST=
DB_ID=
DB_PASSWORD=
DEBUG=
LIB=
DSN=
```
5. Using a shell of your choice, open the project's root directory and install the `npm` dependencies.
```sh
npm install
```
6. Run the server.
```sh
npm start
```

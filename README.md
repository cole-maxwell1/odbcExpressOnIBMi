# Getting Started
1. Clone the repo to your local development machine or to your `IFS` home directory.
```shell
git clone ...
``` 

2. Make a `.env` file. Then copy the contents of `sample.env` into the the new `.env` file you just created. You will need to fill in the information specific to connecting via ODBC on your IBM i system after each `(=)`. For more details about connecting to DB2 for i via ODBC see [my write-up](https://colemaxwell.dev/posts/ibmi-odbc-on-linux/).
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
3. Using a shell of your choice, open the project's root directory and install the `npm` dependencies.
```sh
npm install
```

To do...

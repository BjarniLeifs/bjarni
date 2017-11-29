To dump the database enter the following command in terminal or command prompt window

Replace mydb with the name of your database.

pg_dump mydb > db.sql

Example: My database is named databasename so my command would look like

pg_dump databasename > filename.sql

To restore the database to a new database use the following command.

psql -d newdb -f db.sql

Example: You created a new database called whatever so the command would look like

psql -d whatever -f file.sql

More info here: http://www.enterprisedb.com/docs/en/8.4/pg/app-pgdump.html

For Windows:

To restore the database to a new database use the following command. The flag -U must be used for postgres so that you don't need to have password for it

psql -U postgres -d nameofDatabase -f file.sql

Or from pgAdmin console
\i 'path/to/database/file/dump.sql'
i.e. \i 'C:/Users/Lenovo/Desktop/some_path....å/sqlSchems/database.sql'

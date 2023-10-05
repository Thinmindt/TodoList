# TodoList

A simple to-do list to experiment with Django and React

## To start developing

The easiest way to start developing on this project is to use a VSCode dev container.

Clone the repository to your local environment and open it in VSCode. You should be prompted to build the dev container. This sets up all of the dependencies for the project and connects to a Postgres container.

Run a database migration to set up Postgres:

```
cd backend
python manage.py migrate
```

Also in the backend folder, run the Django server:

```
python manage.py runserver 0.0.0.0:8000
```

You should now be able to direct your browser to `localhost:8000` to view the REST JSON API. Read more about the backend in the [backend readme](backend/README.md).

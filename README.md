# TodoList

A simple to-do list to experiment with Django and React

# Add a python pip dependency

Add the dependency's pip tag to `backend/dependencies/requirements.in` for production requirements or `backend/dependencies/dev-requirements.in` for development dependencies.

To pin the version and ensure the dependency is added to subsequent dev container and production builds:

```
pip-compile --output-file=backend/dependencies/requirements.txt backend/dependencies/requirements.in
```

or

```
pip-compile --output-file=backend/dependencies/dev-requirements.txt backend/dependencies/dev-requirements.in
```

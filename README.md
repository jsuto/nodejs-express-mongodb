## Setup

Export the mongodb uri, eg.

```
export MONGODB_URI=mongodb+srv://root:admin123@mongo/test
```

curl 127.0.0.1:8080/api/persons
```
[{"name":"Alice","age":40,"id":"6639af8ff8bb478b59e1e355"},{"name":"Bob","age":30,"id":"6639afb3f8bb478b59e1e356"}]
```

curl 127.0.0.1:8080/api/persons?name=Alice

```
[{"name":"Alice","age":40,"id":"6639af8ff8bb478b59e1e355"}]
```

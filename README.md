## run server 

- first-install
```
npm i
```

- change-directory
```
cd Server
```

- secound-run-nodemonCommand
```
nodemon index.js
```

##### run server on port 5000
##### http://localhost:5000/


# API Reference

### Get all todos - GET
```
/api/
```

### Save todo - Post
```
/api/save
```
```Body: {"content": String}```


### Update todo - patch
```
/api/{id}
```
```Body: {"content": String}```

### Delete todo - delete
```
/api/{id}
```

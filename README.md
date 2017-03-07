Server đồ án tốt nghiệp
# Prerequisite
```
- npm install -g nodemon
```

# Install
```
- git clone https://github.com/viettienbk/servernodejs.git
- cd servernodejs
- npm install
- npm test
```
# APIs
## Login: /login
```
+ email: string
+ password: string
```
## Sign up: /signup
```
+ email: string 
+ password: string
+ fullname: string
+ numberPhone: number
+ age: number
+ latitude: number
+ longitude: number
```

## Register Store: /store/register
```
+ name: string
+ address: string
+ phoneNumer: string
```

## Get all Store: /store
```
result:
{
  "store": [
    {
      "_id": "58b844e58ed9aa64c92b0d8c",
      "name": "tien",
      "address": "aaa",
      "numberPhone": "111",
      "type": 0,
      "__v": 0
    },
    {
      "_id": "58b848ffe38f4a681822a985",
      "name": "tien",
      "address": "aaa",
      "numberPhone": "112",
      "type": 0,
      "__v": 0
    }
  ]
}
```

## Get Store by Id : /store/:id
```
result:
{
  "store": {
    "_id": "58b844e58ed9aa64c92b0d8c",
    "name": "tien",
    "address": "aaa",
    "numberPhone": "111",
    "type": 0,
    "__v": 0
  }
}
```

## Register Repairor: /repairor/register
```
+ name: string
+ address: string
+ phoneNumer: string
```

## Get all Store: /repairor
```
result:
{
  "repairor": [
    {
      "_id": "58bee5cac980814d011016e3",
      "name": "tien",
      "address": "aaa",
      "numberPhone": "112",
      "type": 1,
      "__v": 0
    },
    {
      "_id": "58bee5f48b62e34d6ff2fd01",
      "name": "tien",
      "address": "aaa",
      "numberPhone": "113",
      "type": 1,
      "__v": 0
    }
  ]
}
```

## Get Repairor by Id : /repairor/:id
```
result:
{
  "repairor": {
    "_id": "58bee5cac980814d011016e3",
    "name": "tien",
    "address": "aaa",
    "numberPhone": "112",
    "type": 1,
    "__v": 0
  }
}
```

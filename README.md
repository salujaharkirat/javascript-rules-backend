# javascript-rules-backend
backend for rules editor

Demo backend for storing rule for order validation.

1. yarn install
2. yarn start


P.S: If `yarn start` gives issues related to mysql, please configure `config/config.json`
according the local database


## API Calls

1. http://localhost:3000/api/v0/rules/add-rules/

Make a post call to populate DB with following info

```
{
   "rules":[
      {
         "id":1,
         "name":"First Rule",
         "conditions":[
            {
               "id":1,
               "name":"First Condition",
               "fact":"monthly rental amount",
               "operator":"greaterThan",
               "value": "1000"
            },
            {
               "id":2,
               "name":"Second Condition",
               "fact":"Customer Age",
               "operator":"lessThan",
               "value": "21"
            }
         ]
      },
      {
         "id":2,
         "name":"Second Rule",
         "conditions":[
            {
               "id":1,
               "name":"First Condition",
               "fact":"monthly rental amount",
               "operator":"greaterThan",
               "value": "1000"
            },
            {
               "id":2,
               "name":"Second Condition",
               "fact":"Zip Code",
               "operator":"isIn",
               "value": "3,5,6"
            }
         ]
      },
      {
         "id":3,
         "name":"Third Rule",
         "conditions":[
            {
               "id":1,
               "name":"First Condition",
               "fact":"monthly rental amount",
               "operator":"lessThanInclusive",
               "value": "1000"
            },
            {
               "id":2,
               "name":"Second Condition",
               "fact":"Order",
               "operator":"hasA",
               "value":"TV"
            }
         ]
      },
      {
         "id":4,
         "name":"Fourth Rule",
         "conditions":[
            {
               "id":1,
               "name":"First Condition",
               "fact":"Rental Tenure",
               "operator":"lessThan",
               "value": "3"
            }
         ]
      }
   ]
}
```


2. http://localhost:3000/api/v0/rules/add-rules/

Make a get call to get the rules

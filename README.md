### step 0 

```
- npm i
- npm run docker
- install and run postman to make http request
```
---------------------------------------------

### step 1

`CREATE A WORKSHOP
WITH POSTMAN
`
<b>post url:</b>  localhost:3000/v1/workshops/createWorkshop

<b>body</b> 
```
{
    "name": "frankiegarage",
    "vehicles": [],
    "businessOwner": []
}
```
---------------------------------------------

### step 2
`
ADD AN OWNER TO THE WORKSHOP (TAKE THE ID OF THE WORKSHOP
THAT MONGODB HAS ASSIGNED AUTOMATICALLY)
`

<b>post url:</b>  localhost:3000/v1/workshops/addOwner

<b>body</b>
```
{
    "workshopID": "5eac1df97e5b4800113ac524",
    "BusinessOwner": {
        "name" : "Lewis",
        "surname" : "Capaldi",
        "username" :"Lewis96"
    }
}
```
---------------------------------------------

### step 3
`
ADD A VEHICLE TO THE GARAGE (TAKE THE ID OF THE GARAGE
THAT MONGODB HAS ASSIGNED AUTOMATICALLY)
`

<b>post url:</b>  localhost:3000/v1/car/insertCar

<b>body</b> 

```
{
    "workshopID": "5eac1df97e5b4800113ac524",
    "car":{
        "state" : "pending_worker",
        "licensePlate" : "CCBT551",
        "brand" : "Alfa Romeo",
        "mod": "Brera",
        "steeringWheel": "leather",
        "wheels":["wheel1old","wheel2old","wheel3old","wheel4old"]
    }
}
```
---------------------------------------------

### step 4
`
RETRIEVE ALL THE VEHICLES THAT START WITH (ex. "CC") AND 
THE WORKSHOP WHERE THEY ARE ALLOCATED
`

<b>post url:</b>  localhost:3000/v1/car/filterByLicense

<b>body</b>  
```
{
    "licensePlate":"CC"
}
```
---------------------------------------------


### step 5
`
RETRIEVE ALL WORKSHOPS
WITH POSTMAN
`

<b>get url:</b>  localhost:3000/v1/workshops/

---------------------------------------------

### step 6
`
RETRIEVE ALL WORKSHOPS USING NAME
WITH POSTMAN
`

<b>get url:</b> localhost:3000/v1/workshops/?name=frankiegarage

---------------------------------------------

### step 7

`
CHANGE WHEELS OF A VEHICLE USING THE 
LICENSE PLATE OF THE VEHICLE AND THE WORKSHOP ID
`

<b>put url:</b> localhost:3000/v1/car/changeWheel

<b>body</b>
```
{
    "workshopID": "5eac1df97e5b4800113ac524",
    "licensePlate":"CCBT551"
}
```
---------------------------------------------

### step 8

`
CHANGE STEERING WHEEL OF A VEHICLE USING THE 
LICENSE PLATE OF THE VEHICLE AND THE TYPE OF
THE NEW STEERING WHEEL
`

<b>put url:</b> localhost:3000/v1/car/changeSteeringWheel

<b>body</b>
```
{
    "licensePlate":"CCBT551",
    "steeringWheel":"plastic"
}
```
---------------------------------------------
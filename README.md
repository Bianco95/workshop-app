<h1>------------------STEP 0---------------------</h1>

- npm i
- npm run docker
- install and run postman to make http request


------------------STEP 1---------------------

CREATE A WORKSHOP

WITH POSTMAN

POST -> localhost:3000/v1/workshops/createWorkshop
BODY ->

{
    "name": "frankiegarage",
    "vehicles": [],
    "businessOwner": []
}

---------------------------------------------


------------------STEP 2---------------------

ADD AN OWNER TO THE WORKSHOP (TAKE THE ID OF THE WORKSHOP
THAT MONGODB HAS ASSIGNED AUTOMATICALLY)

WITH POSTMAN

POST -> localhost:3000/v1/workshops/addOwner
BODY ->
{
    "workshopID": "5eac1df97e5b4800113ac524",
    "BusinessOwner": {
        "name" : "Lewis",
        "surname" : "Capaldi",
        "username" :"Lewis96"
    }
}

---------------------------------------------

------------------STEP 3---------------------

ADD A VEHICLE TO THE GARAGE (TAKE THE ID OF THE GARAGE
THAT MONGODB HAS ASSIGNED AUTOMATICALLY)

WITH POSTMAN

POST -> localhost:3000/v1/car/insertCar
BODY ->
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

---------------------------------------------


------------------STEP 4---------------------

RETRIEVE ALL THE VEHICLES THAT START WITH (ex. "CC") AND 
THE WORKSHOP WHERE THEY ARE ALLOCATED

WITH POSTMAN

POST -> localhost:3000/v1/car/filterByLicense
BODY ->
{
    "licensePlate":"CC"
}

---------------------------------------------


------------------STEP 5---------------------

RETRIEVE ALL WORKSHOPS
WITH POSTMAN

GET -> localhost:3000/v1/workshops/

---------------------------------------------

------------------STEP 6---------------------

RETRIEVE ALL WORKSHOPS USING NAME
WITH POSTMAN

GET -> localhost:3000/v1/workshops/?name=frankiegarage

---------------------------------------------

------------------STEP 7---------------------

CHANGE WHEELS OF A VEHICLE USING THE 
LICENSE PLATE OF THE VEHICLE AND THE WORKSHOP ID

PUT -> localhost:3000/v1/car/changeWheel
BODY ->
{
    "workshopID": "5eac1df97e5b4800113ac524",
    "licensePlate":"CCBT551"
}

---------------------------------------------

------------------STEP 8---------------------

CHANGE STEERING WHEEL OF A VEHICLE USING THE 
LICENSE PLATE OF THE VEHICLE AND THE TYPE OF
THE NEW STEERING WHEEL

PUT -> localhost:3000/v1/car/changeSteeringWheel
BODY ->
{
    "licensePlate":"CCBT551",
    "steeringWheel":"plastic"
}

---------------------------------------------
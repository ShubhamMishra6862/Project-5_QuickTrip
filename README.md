# Live Link : https://quicktrip.onrender.com    id:rahul27 password:jack78 
(The application still requires some refinement, and I am actively working on enhancing its functionality.)

# Project-5_QuickTrip 
## **About**
This MERN application serves the purpose of optimizing bus routes and facilitating ticket reservations. Its primary objective is to showcase the inner workings of navigation applications such as Google Maps and Apple Maps by constructing algorithms and logic entirely from scratch. The project utilizes a graph data structure where bus stops are represented as nodes, employing geocodes or coordinates, and interconnected with branches. A custom-built BFS pathfinding algorithm is then implemented to find the shortest path from a specified source to destination. Notably, every functionality, including CRUD operations and pathfinding, is developed without the use of external libraries. This approach aims to provide a clear understanding for beginners about MERN development, demonstrating how authentications and other features can be implemented without relying on third-party libraries.
## **Features & Logic**
This application utilizes a graph data structure to establish a bus network, with test cases developed using coordinates inspired by Bangalore's map (though the specified bus stop coordinates are not based on real data). The pathfinding algorithm structures the coordinates into a JSON object for output purposes. Subsequently, the application organizes various outputs based on the time taken by each path before sending them to the frontend for rendering on the map. Then on frontend side it gives those path asa suggestion.
<p align="center"><img src="https://github.com/ShubhamMishra6862/Project-5_QuickTrip/assets/101014691/cbc77c93-44a3-46bc-bd0c-a765ffbaa014" width="500" height="500"></p>

### **Auto-suggestion Feature**
To simplify the selection of source and destination locations for users, I've integrated an auto-suggestion feature. When a user inputs a value into the field, requests are sent to the backend to retrieve the most suitable locations that match the input. Consequently, users can conveniently select and input the desired location from the suggestions provided.
<p align="center"><img src="https://github.com/ShubhamMishra6862/Project-5_QuickTrip/assets/101014691/74ed2c07-9dba-4f42-bd7d-aa929f727433" width="300" height="400"></p>

## **Other Features**
I've integrated user authentication and user creation functionalities (including CRUD operations). Moreover, cookies have been utilized for authentication purposes in the application.

## **Tech-Stack**
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) [MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) **MAPBOX**

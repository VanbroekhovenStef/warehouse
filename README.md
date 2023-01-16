# Utopia 2.0
Utopia is comprised of three main sections:
- The game itself is made in the Unity game engine
- A microservices back-end takes care of all the data storage and processing
- A web application that hosts the Unity game and allows some extra functionality for analytics and gathering feedback

## Game engine
Utopia 2.0 is made in the Unity game engine. This platform allows the programmer to use lots of features and packages that help in creating a game, which normal web development platforms do not offer. We used a template for Isometric 2D development. More info on this template can be found [here](https://blog.unity.com/technology/isometric-2d-environments-with-tilemap).

### Installation
To load the game, you will need to install Unity Hub first. The download files can be found [here](https://unity.com/download). From within Unity Hub, you can intall the right verstion of Unity to run the application. Utopia is made in version `2021.3.14f1`. It is recommended to install the same exact version. Visit the Unity [Download Archive](https://unity.com/releases/editor/archive) and download the correct version through Unity Hub. After the install is complete, you can safely run Utopia and explore the game.

### Important directories
All editing of the game happens within the `Assets` folder. In there, you can find the following directories:
- Art
This folder contains all art that is used in the game, from animations, sprites (game objects) and tiles to create the world.

### Useful links
A handful of tutorials were followed to get to know the Unity game engine. Below you can find some useful links that can help you get on your way with Unity.


## Back-end
For documentation of the back-end we refer to the `edge-service`, where all information about the microservice architecture is gathered. Information on the different services used, how to run the services locally and ways of testing are mentioned there.

[EDGE-SERVICE](https://github.com/KevinVandeputte-TM/utopia_edgeservice)

## Web application

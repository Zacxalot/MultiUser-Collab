# MultiUser-Collab
Multi user collaboration tool for use in a workplace environment.

Uses Node.js Socket.io and the HTML5 canvas.

Run server.js with node and host the client folder.

```shell
node server.js
```
and

```shell
serve ./client
```
This package uses <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>

Set ports for the socket server in server.js and socket-manager.js.

Still to add:

* Drag and drop image sharing using dropzone
* Improve drawing features to support different colours, pen types etc.
* Improve canvas to support map style navigation
* Secure login and group feature

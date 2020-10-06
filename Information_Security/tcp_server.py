#!/sur/bin/python3

import socket

#Creating the socket object
serversocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
host = socket.gethostbyname()
port = 42567

#Binding to socket
serversocket.bind(host,port)

#Starting TCP listener
serversocket.listen(3)

while True:
    clientsocket, address = serversocket.accept()

    print("Received connection from: " %str(address))

    message = 'Connection succesful!Socket will close now.' + "\r\n"
    clientsocket.send(message)

    clientsocket.close()



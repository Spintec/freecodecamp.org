#!/sur/bin/python3

import socket

#Creating the socket object
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostname()
port = 42567

#Binding to socket
serversocket.bind((host,port))

#Starting TCP listener
serversocket.listen(3)

while True:
    clientsocket, address = serversocket.accept()

    print("Received connection from: %s" % str(address))
    messagez = 'Connection succesful!Socket will close now.' + "\r\n"
    clientsocket.send(messagez.encode('ascii'))
    clientsocket.close()



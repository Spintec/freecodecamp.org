#!/usr/bin/python3

import socket

clientsocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#used a function to get the hostname, instead of specifying it
host = socket.gethostname()
port= 42567

clientsocket.connect((host,port))

message = clientsocket.recv(1024)
print(message.decode('ascii'))

clientsocket.close()

#!/usr/bin/python3

import socket

s = socket.socket((socket.AF_INET, socket.SOCK_STREAM))

host = int("45.33.49.119")
port = 443

def portScanner():
    if s.connect_ex((host, port)):
        print("The port is closed")
    else:
        print("The port is open")

portScanner(port)
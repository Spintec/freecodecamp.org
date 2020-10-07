#!/usr/bin/python3

import socket

def banner(ip_addr,port):
    s = socket.socket()
    s.connect((ip_addr,int(port)))
    print(s.recv(1024))

def main():
    ip_addr=input('Please enter the IP: \n')
    port =  str(input("Please enter the Port: \n"))
    banner(ip_addr, port)

main()


    
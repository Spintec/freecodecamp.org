#!/usr/bin/python3

import nmap
scanner = nmap.PortScanner()

print("Beginner nmap automation tool")
print("-------------------------------------")

ip_addr=input("Enter the IP address to be scanned: \n")

type(ip_addr)

option_select = input("""Select the type of scan:
                1)SYN ACK Scan
                2)UDP Scan
                3)Comprehensive Scan\n""")

if option_select == '1':
    print("Nmap Version: ", scanner.nmap_version())
    scanner.scan(ip_addr, '1-65535', '-v -sS')
    print(scanner.scaninfo())
    print("Ip Status: ", scanner[ip_addr].state)
    print(scanner[ip_addr].all_protocols())
    print("Open Ports: ", scanner[ip_addr]['tcp'].keys())
elif option_select == '2':
    print("Nmap Version: ", scanner.nmap_version())
    scanner.scan(ip_addr, '1-65535', '-v -sU')
    print(scanner.scaninfo())
    print("Ip Status: ", scanner[ip_addr].state)
    print(scanner[ip_addr].all_protocols())
    print("Open Ports: ", scanner[ip_addr]['udp'].keys())

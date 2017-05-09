from singly_linked_list import greet_user
from singly_linked_list import Node
from singly_linked_list import SinglyLinkedList

greet_user("Hello Madeleine") #greeting hello world, my first python import lol...

#build the node list
node1 = Node(100)
node2 = Node(200)
node3 = Node(300)
node1.next = node2
node2.next = node3

#print the list out
def printList(node):
  while node:
    print(node.data),
    node = node.next

printList(node1)

#lets add the linked list to an array
node_list = []
node = node1

while node:
    node_list.append(node.data)
    node = node.next

print(node_list)

#reverse the linked list










# node2 = Node("Node2", 200)
# node3 = Node("Node3", 300)

# node1.next = node2
# node2.next = node3

# print(node2.data)
# print(node3.data)

# print(node2.next)
# print(node3.next)
# ll = SinglyLinkedList()
# ll.add(node1)
# ll.add(node2)
# ll.add(node3)
#
# print(node1.data)
# print(node1.next)
# print(node2.data)
# print(node2.next)
# print(node3.data)
# print(ll)
# print(ll.size)

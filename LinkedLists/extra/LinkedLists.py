class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    def add_to_head(node):
        if (self.head == None) and (self.tail == None):
            self.head = node
            self.tail = node
        temp = self.head
        self.head = node
        self.head.next = temp
        temp.prev = self.head

class Node:
    def __init__(self, name, data):
        self.name = name #does it need a name?
        self.data = data
        self.prev = None
        self.next = None

ll = LinkedList()

node1 = Node( 100)
node2 = Node("Node2", 200)
node3 = Node("Node3", 300)

node1.next = node2
node2.prev = node1
node3.prev = node2
node2.next = node3

print(node1.data)
print(node2.data)
print(node3.data)
print(node1.next)
print(node2.next)
print(node3.next)

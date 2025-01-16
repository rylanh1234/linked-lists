function LinkedList(value, index) {
    return {
        listHead: null,

        append(value) {
            const newNode = new Node();
            newNode.value = value;
            // if list is empty, make the head
            if (!this.listHead) {
                this.listHead = newNode;
            }
            else {
                let current = this.listHead;
                // go to the end of the list and adds the newNode
                while (current.nextNode) {
                    current = current.nextNode;
                }
                current.nextNode = newNode;
                }
        },
        prepend(value) {
            const newNode = new Node();
            newNode.value = value;
            newNode.nextNode = this.listHead;
            this.listHead = newNode;
        },
        size() {
            let size = 0;
            let current = this.listHead;
            while (current.nextNode) {
                current = current.nextNode;
                size += 1;
            }
            return size += 1;
        },
        head() {
            return this.listHead;
        },
        tail() {
            let current = this.listHead;
            while (current.nextNode) {
                current = current.nextNode;
            }
            return current;
        },
        at(index) {
            let current = this.listHead;
            let currentIdx = 0;
            while (currentIdx < index) {
                current = current.nextNode;
                currentIdx += 1;
            }
            return current;
        },
        pop() {
            let current = this.listHead;
            while (current.nextNode) {
                if (current.nextNode.nextNode === null) {
                    current.nextNode = null;
                }
                else {
                    current = current.nextNode;
                }
            }
        },
        contains(value) {
            let current = this.listHead;
            while (current.nextNode) {
                if (value === current.value) {
                    return true;
                }
                current = current.nextNode;
            }
            if (value === current.value) {
                return true;
            }
            return false;
        },
        find(value) {
            let current = this.listHead;
            let currentIdx = 0;
            while (current.nextNode) {
                if (value === current.value) {
                    return currentIdx;
                }
                    current = current.nextNode;
                    currentIdx += 1;
            }
            if (value === current.value) {
                return currentIdx;
            }
            return null;
        },
        toString() {
            let listString = "";
            let current = this.listHead;
            while (current.nextNode) {
                listString += "( " + current.value + " ) -> ";
                current = current.nextNode;
            }
            listString += "( " + current.value + " ) -> " + current.nextNode;
            return listString;
        },
        insertAt(value, index) {
            let current = this.listHead;
            let currentIdx = 0;
            while (currentIdx < index - 1) {
                current = current.nextNode;
                currentIdx += 1;
            }
            const newNode = new Node();
            newNode.value = value;
            newNode.nextNode = current.nextNode;
            current.nextNode = newNode;
        },
        removeAt(index) {
            let current = this.listHead;
            let currentIdx = 0;
            while (currentIdx < index - 1) {
                current = current.nextNode;
                currentIdx += 1;
            }
            current.nextNode = current.nextNode.nextNode;
        }
    };
}

function Node() {
    return {
        value: null,
        nextNode: null
    };
}


const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
// list.prepend("parrot");
// list.pop();
list.append("hamster");
list.append("snake");
list.append("turtle");
// console.log(list.contains("parrot"));
// list.insertAt("duck", 2);
list.removeAt(2);
console.log(list.toString());
// Stacks: build it with which one? Arrays or Linked Lists
// Ans: both arrays and linked lists are okay

// Arrays 
// --> Arrays allow cache locality, which makes them technically faster when accessing its items in memory because they're right next to each other.
// --> Array have either a static array or dynamic array that has certain amount of memory
// --> When reach its limit, it's going to have to double up that memory and create new space for it somewhere in memory

// Linked Lists
// --> The items of Linked List has scattered all over the memory
// --> Linked Lists need extra memory to hold on to those pointers
// --> Have more dynamic memory, so we can keep adding things to the list

// Queues: build with which one? 
// Ans: Never build it with Arrays, ideally build it with linked lists

// Matt -- Joy -- Samir -- Pavel

// Arrays
// --> Every time we remove an element, we need to shift all elements forth
// --> O(n) operation

// Linked lists
// --> We only need to remove the head and move the 2nd elements up to be the head
// --> O(1) operation
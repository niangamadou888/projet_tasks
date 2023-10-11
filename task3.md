
# Identify what the memory leak is in each

- In Leak1 file, it's essential to identify and address the potential memory leak. The issue in this code is that it creates a large array with a size of SIZE, which is a very large number (1,000,000). This array is being held in memory indefinitely, causing a memory leak. The array is never explicitly deallocated, and it continues to exist even after the component is unmounted.

- In Leak2 file, there are potential memory leak issues related to the NamesList component. The primary concern is that a large memory-consuming string is allocated when the NamesList component is updated. This allocation occurs in the getDerivedStateFromProps method. In each update, a new array is created with 100,000 characters, and this array is never explicitly cleared, leading to memory leaks.
## Be able to demonstrate the tools which you used to identify the leak.

- I used Performance section in Chrome DevTools to identify leaks.

## Describe how you would go about fixing it

- To fix memory leak in Leak1:
-We added a new method handleAppStateChange to handle the AppState changes.

-We call AppState.addEventListener in the componentDidMount method to register the event listener.

-In the componentWillUnmount method, we clear the memory array by setting it to null. This allows the allocated memory to be released.

- To fix memory leak in Leak2:

-In the NamesList component, we initialize the state in the constructor, avoiding the creation of a large memory-consuming array in the getDerivedStateFromProps method.

-The getDerivedStateFromProps method checks if the data prop has changed and only updates the state if there is new data. This prevents unnecessary memory allocations.

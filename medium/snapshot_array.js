// Implement a SnapshotArray that supports the following interface:
// SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
// Example 1:
// Input: ["SnapshotArray","set","snap","set","get"]
// [[3],[0,5],[],[0,6],[0,0]]
// Output: [null,null,0,null,5]
// Explanation: 
// SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
// snapshotArr.set(0,5);  // Set array[0] = 5
// snapshotArr.snap();  // Take a snapshot, return snap_id = 0
// snapshotArr.set(0,6);
// snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
class SnapshotArray {
    constructor(length) {
        // each element will be an array of [val, snapId] values
        this.elements = Array(length).fill(null).map(el => []);    // O(n)
        this.snapId = 0;
    }
    set(index, val) {   // O(1)
        this.elements[index].push([val, this.snapId]);
    }
    snap() {    // O(1)
        ++this.snapId;
        return this.snapId - 1;
    }
	// find the value for snapId <= snap_id. in case no value is found, return 0
    get(index, snap_id) {   // O(log(s))
        const element = this.elements[index];
        let left = 0,
            right = element.length - 1,
            mid, id = -1;
        
        while(left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if(element[mid][1] <= snap_id) {
                id = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return id === -1 ? 0 : element[id][0];
    }
}
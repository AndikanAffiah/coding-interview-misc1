/**
 * Implement a class named ring buffer with fixed capacity such that
 *
 * constructor: takes the capacity for the ring buffer
 *
 * push: adds a value to the ring buffer.
 * pop: removes the last value from the ring buffer or undefined if it's empty.
 * peek: returns the current value of the most recent value added or undefined if none have been added
 *
 * If we have too many values (exceeding capacity) the oldest values are lost.
 *
 * The ordering of the push operations must be kept.
 */
 export class RingBuffer<T> {

    private _capacity: number = 0;
    private _buffer: T[];
    
    constructor(capacity: number) {
        this._capacity = capacity;
        this._buffer = [];
    }

    public push(value: T) {
        if (this._buffer.length === this._capacity){
            this._buffer.push(value)
            this._buffer.shift()
            return 
        }
        return this._buffer.push(value);
    }

    public peek(): T | undefined {
        if (this._buffer.length > 0) {
            return this._buffer[this._buffer.length - 1]
        }
        return undefined;
    }

    public pop(): T | undefined {
        if (this._buffer.length > 0) {
            return this._buffer.pop();
        }
        return undefined;
    }

}


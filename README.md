# jsByte

A simple javascript library that provides a "Byte" data type for manipulating bytes/bits.

# Usage

The constructor function accepts 3 arguments

`Byte(val, base, size)`

- Mixed val
 - This should be a numeric value, but may be hex or other base besides 10 if "base" is set
- Int base (optional)
 - This should be the base of the original value, defaults to 10
- Int size (optional)
 - The number of bits this "byte" contains, defaults to 8

```
var myInt = 235;
var byte = new Byte(myInt);
byte.setBit(2, 1);

console.log(byte.toString());
//11101111

console.log(byte.toInt());
//239

console.log(byte.invert().toString());
//00001000

console.log(byte.setBit(1,1).flip().toString());
//01010000

byte.setBit(7,1).toBase(16);
//d0
```

You can send in any base number (up to 32) instead of an integer for initialization by defining the starting base

```
var myHex = "F0";
var byte = new Byte(myHex, 16);
```

And of course inline awesomeness

```
var hex = "134".toByte().invert().setBit(5,1).flip().toBase(16);
console.log(hex);
//9e
```

# Methods

###Bit Manipulation

`getBit(index)`
Returns the value of a bit at index (remember bits read right to left)

`setBit(index, value)`
Sets the value of bit at index

`invert()`
Inverts the bits (11011000 becomes 00100111)

`flip()`
Reverses the bits (11011000 becomes 00011011)

### Casting

`toString()`
Returns the bits in a string

`toArray()`
Returns the bits in an array

`toInt()` and `valueOf()`
Returns the integer value

### Internal

`setBits()`
Sets the value of the bits based on the stored int value

`setInt()`
Sets the int value based on the stored bits

 This library also add a method to both the String and Number data types called `toByte(base size)`

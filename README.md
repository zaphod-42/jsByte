# jsByte

A simple javascript library that provides a "Byte" data type for manipulating bytes/bits.

#usage

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

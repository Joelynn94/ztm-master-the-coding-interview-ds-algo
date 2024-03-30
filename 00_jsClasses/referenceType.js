/*
===============================
Accessing by value and reference
===============================
In JavaScript, a variable may store two types of values: primitive and reference.
All types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), Strings are immutable. We refer to values of these types as "primitive values".
=====
Primitive types:
Boolean --> true or false 
Null --> value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address
Undefined --> property of the global object. Not writable, not enumberable, not configurable 
Number --> two built-in numeric types: Number and BigInt
String --> type is used to represent textual data, immutable 
Symbol --> A symbol value may be used as an identifier for object properties; this is the data type's primary purpose, although other use-cases exist, such as enabling opaque data types, or serving as an implementation-supported unique identifier in general.
=====

The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the stack.
On the other hand, the size of a reference value is dynamic so JavaScript stores the reference value on the heap.
*/

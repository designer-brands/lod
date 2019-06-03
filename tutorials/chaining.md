The chaining mechanism of `lod` works in a similar fashion to that of `lodash` or `underscore`. You can use the [Supported Lod Method](#Supported-Lod-Methods) or the [Current Value's Native Methods](#Current-Value's-Native-Methods) for each link in the chain. You can also use the `.invoke()`[method](#invoke()-Method) if you want to tap in the chaining flow with your custom function. The final value can be accessed by `.value()` method.

## Supported Lod Methods
The following 'lod' methods are available to chaining. The first argument of these methods is pre-filled with the current value.

* {@link defaultToArray}
* {@link defaultToNumber}
* {@link defaultToObject}
* {@link defaultToString}
* {@link get}
* {@link getAsArray}
* {@link getAsBoolean}
* {@link getAsNumber}
* {@link getAsObject}
* {@link getAsString}
* {@link groupBy}
* {@link last}
* {@link pick}
* {@link sortBy}
* {@link uniqBy}

### Example
```javascript
let arr = [{
	val: 1
}, {
	val: 2
}, {
	val: 3
}];

let result = chain(arr)
	.groupBy(element => element.val % 2 ? "odd" : "even")
	.getAsNumber("odd.0.val")
	.value();

// result is 1
```

Note how the current value for each link in the chain is prefilled in the supported methods. When calling `.groupBy()` the prefilled current value is `arr`, and when calling `getAsNumber()` the prefilled current value is `{odd: [{val: 1}, {val: 3}], even: [{val: 2}]}`.

## Current Value's Native Methods
`Lod` advocates to use Javascript native api's unless there is a really good reason otherwise, so unlike `lodash` and `underscore`, it does not provide aliases or wrappers for the built in methods such as `Array`'s `find()`, `filter()` and `indexOf()` methods, etc. However these methods are still available in chaining for convenience.

## Example
```javascript
let a = [{
	foo: {
		id: "1xx"
	},
	value: 1,
	include: true
}, {
	foo: {
		id: "2xx"
	},
	value: 2,
	include: true
}, {
	foo: {
		id: "3xx"
	},
	value: 3,
	include: false
}];

let result = chain(a)
	.filter(obj => obj.include) // .filter() can be used because the current value is an array
	.find(obj => obj.value > 1) // .find() can be used because the current value is an array
	.get("foo.id")
	.slice(0, 1) // .slice() can be used because the current value is a string
	.value();

// result is "2"
```

## invoke() Method
What if neither the `supported lod methods` nor the `current value's native methods` can fit my needs? The `invoke()` method to the rescue! With the `invoke()` method you can invoke any custom method to tap in the chaining flow, which provides maximal flexibility. In general, though, the `supported lod methods` and the `current value's native methods` should be sufficient.

Let's take the same example above, but here we want to convert the final result to a number instead. We have a few options.

```javascript
let result = Number(chain(a)
	.filter(obj => obj.include)
	.find(obj => obj.value > 1)
	.get("foo.id")
	.slice(0, 1)
	.value());
```
This works but it is ugly and kind of defeats the whole purpose of chaining.

```javascript
let result = chain(a)
	...
	.value() - 0;
```
So is this one, and the ```-0``` magic itself may throw someone off.

```javascript
let result = chain(a)
	...
	.value();

result = Number(result);
```
This is OK, but wouldn't it be nice if we can also put the type coercing at the end in chaining as well?

```javascript
let result = chain(a)
	...
	.toNumber()
	.value();

result = Number(result);
```
But this won't work as `.toNumber()` is not a native method for strings in javascript, nor is it a supported lod method. Then what can we do?

```javascript
let result = chain(a)
	...
	.invoke(str => Number(str))
	.value();

result = Number(result);

// result is 2
```
We can use the `.invoke()` method, it can be used anywhere in the chain any number of times so that your needs can almost always be met.
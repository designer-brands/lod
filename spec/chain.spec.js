const chain = require("@src/chain.js");

given("chain method", function () {
	when("called with a value", function () {
		then("it should return an object with library methods used for chaining", function () {
			Object.values(chain({})).forEach(method => {
				expect(method).toEqual(jasmine.any(Function));
			});
		});

		then("chaining using library methods should work", function () {
			let result1 = chain({})
				.get("foo")
				.value();

			expect(result1).toBe(void 0);

			let result2 = chain({})
				.getAsNumber("foo")
				.value();

			expect(result2).toBe(0);

			let result3 = chain({})
				.getAsArray("foo")
				.value();

			expect(result3).toEqual([]);

			let result4 = chain({})
				.getAsObject("foo")
				.value();

			expect(result4).toEqual({});

			let result5 = chain({})
				.getAsString("foo")
				.value();

			expect(result5).toEqual("");

			let result6 = chain({a: 1})
				.get("a")
				.value();

			expect(result6).toBe(1);

			let result7 = chain({a: 1})
				.getAsNumber("a")
				.value(1);

			expect(result7).toBe(1);

			let result8 = chain({a: 1})
				.getAsArray("a")
				.value();

			expect(result8).toEqual([]);

			let result9 = chain({a: 1})
				.getAsObject("a")
				.value();

			expect(result9).toEqual({});

			let result10 = chain({a: 1})
				.getAsString("a")
				.value();

			expect(result10).toEqual("");

			let obj = {
				a: {
					b: [1, 2],
					c: 3,
					d: 4
				},
				e: 5
			};

			let longChainingResult1 = chain(obj)
				.getAsObject("a")
				.pick("b", "c")
				.defaultToObject()
				.value();

			expect(longChainingResult1).toEqual({
				b: [1, 2],
				c: 3
			});

			let arr = [{
				val: 1
			}, {
				val: 2
			}, {
				val: 3
			}];

			let longChainingResult2 = chain(arr)
				.groupBy(element => element.val % 2 ? "odd" : "even")
				.getAsNumber("odd.0.val")
				.value();

			expect(longChainingResult2).toEqual(1);
		});

		then("chaining using custom functions provided by invoke() method in the middle should work", function () {
			let obj = {
				a: [{
					name: "foo",
					id: "001",
					val: -1
				}, {
					name: "bar",
					id: "002",
					val: 3
				}, {
					name: "baz",
					val: -1
				}],
				b: "dummy"
			};

			let result = chain(obj)
				.getAsArray("a")
				.uniqBy(tempObj => tempObj.val)
				.invoke(
					tempArr => tempArr.filter(element => element.val > 0)
				)
				.invoke(tempArr => tempArr.sort((a, b) => a.val > b.val))
				.getAsObject("0")
				.pick("val", "name")
				.value();

			expect(result).toEqual({
				name: "bar",
				val: 3
			});
		});

		then("chaining using the current value's native method in the middle should work", function () {
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
				.filter(obj => obj.include)
				.find(obj => obj.value > 1)
				.get("foo.id")
				.slice(0, 1)
				.invoke(char => Number(char))
				.value();

			expect(result).toBe(2);
		});
	});
});
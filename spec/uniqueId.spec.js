const uniqueId = require("../src/uniqueId.js");

given("uniqueId method", function () {
    const generatedIds = new Set();

    when("called with no argument", function () {
        then("it should return a unique id", function () {
            let id1 = uniqueId();
            expect(generatedIds.has(id1)).toBeFalsy();
            generatedIds.add(id1);

            let id2 = uniqueId();
            expect(generatedIds.has(id2)).toBeFalsy();
            generatedIds.add(id2);

            let id3 = uniqueId();
            expect(generatedIds.has(id3)).toBeFalsy();
            generatedIds.add(id3);
        });
    });

    when("called with a prefix", function () {
        then("it should return a unqiue id with the given prefix", function () {
            let id1 = uniqueId("foo");
            expect(id1.startsWith("foo")).toBeTruthy();
            expect(generatedIds.has(id1)).toBeFalsy();
            generatedIds.add(id1);

            let id2 = uniqueId("bar");
            expect(id2.startsWith("bar")).toBeTruthy();
            expect(generatedIds.has(id2)).toBeFalsy();
            generatedIds.add(id2);

            let id3 = uniqueId("foo");
            expect(id3.startsWith("foo")).toBeTruthy();
            expect(generatedIds.has(id3)).toBeFalsy();
            generatedIds.add(id3);
        });
    });
});
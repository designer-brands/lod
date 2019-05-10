let env = jasmine.getEnv();

Object.assign(global, {
    given: function(description, specDefinitions) {
        return env.describe(`GIVEN: ${description}\n`, specDefinitions);
    },

    when: function(description, specDefinitions) {
        return env.describe(`    WHEN: ${description}\n`, specDefinitions);
    },

    then: function(description, fn) {
        return env.it(`      THEN: ${description}\n`, fn);
    },

    fgiven: function(description, specDefinitions) {
        return env.fdescribe(`GIVEN: ${description}\n`, specDefinitions);
    },

    fwhen: function(description, specDefinitions) {
        return env.fdescribe(`    WHEN: ${description}\n`, specDefinitions);
    },

    fthen: function(description, fn) {
        return env.fit(`      THEN: ${description}\n`, fn);
    },

    xgiven: env.xdescribe,
    xwhen: env.xdescribe,
    xthen: env.xit
});

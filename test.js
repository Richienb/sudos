const test = require("ava")
const sudos = require(".")

test("main", async t => {
	t.is(typeof sudos, "function")
})

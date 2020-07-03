#!/usr/bin/env node
"use strict"

const pify = require("pify")
const sudo = pify(require("sudo-prompt").exec, {
	multiArgs: true
})

module.exports = (async () => {
	try {
		const [stdout, stderr] = await sudo(process.argv.slice(2).join(" "), {
			name: "sudos"
		})
		if (stderr) {
			process.stderr.write(stderr)
		}
		if (stdout) {
			process.stdout.write(stdout)
		}
	} catch ([error]) {
		process.stderr.write(error.message)
		process.exitCode = error.code
	}
})()

const http2 = require("http2");

const server = http2.createServer();

server.on("error", (err) => console.error(err));

server.on("stream", (stream, headers) => {
	stream.respond({
		"content-type": "text/plain; charset=utf-8",
		":status": 200,
	});
	stream.end("Hello World with HTTP/2!");
	console.log("Request handled");
});

server.listen(7777, () => {
	console.log("Server is running on http://localhost:7777");
});

const memorySnapshots = [];
setInterval(() => {
	const currentMemory = process.memoryUsage();
	memorySnapshots.push(currentMemory);
	console.log(`Overall Memory Usage (current):`);
	console.log(`  - RSS: ${currentMemory.rss / 1024 / 1024} MB`);
	console.log(`  - Heap Used: ${currentMemory.heapUsed / 1024 / 1024} MB`);
}, 100);

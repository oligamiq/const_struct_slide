import { initInterpreter } from "./interpreter";

(async () => {
    // Build main Interpreter
    const interpreter = await initInterpreter();

    console.log("initialized interpreter");

    // When code is received run it
    addEventListener("message", async (event) => {
        const { code, printLast } = event.data;
        const result = await interpreter.run(code, printLast);
        postMessage({ result });
    });

    // Send a message when finished loading
    postMessage({ loaded: true });
})();

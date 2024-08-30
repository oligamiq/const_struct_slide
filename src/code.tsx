import { useEffect, useRef } from "react";

export const MyCode = (props: {
    value: string;
}) => {
    const CodeRef = useRef(null);
    const value = props.value;

    return <pre><code ref={CodeRef} data-line-numbers="|3,8" data-trim className="monaco language-rust">
        <script type="text/template">{value}</script>
    </code></pre>
}

// @ts-ignore
import { AnsiUp } from "ansi_up";
import { Interpreter } from "./interpreter";
import Reveal from "reveal.js";

export const MyCodeWithInterpreter = (props: {
    value: string;
}) => {
    const TerminalRef = useRef(null);
    const runButtonRef = useRef(null);
    const value = props.value;

    const interpreter = new Interpreter();
	const ansiUp = new AnsiUp();

    // Add libraries downloaded to list
    // @ts-ignore
    interpreter.onAssetDownloaded((lib) => {
        console.log("Downloaded", lib);
    });

    let innerText = value;

    useEffect(() => {
        const runButton = runButtonRef.current as unknown as HTMLButtonElement;
        if (!runButton) {
            return;
        }
        runButton.disabled = true;

        interpreter.onRun(() => {
            const termElement = TerminalRef.current;
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            (termElement as any).innerHTML = "Running...";
        });

        interpreter.onResult(result => {
            console.log("Result", result);
            const resultElement = TerminalRef.current;

            // もし500文字より少ないなら、フォントサイズを上げる
            if (result.length < 500) {
                (resultElement as unknown as HTMLDivElement).style.fontSize = "3rem";
            } else {
                (resultElement as unknown as HTMLDivElement).style.fontSize = "1rem";
            }

            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            (resultElement as any).innerHTML = ansiUp.ansi_to_html(result.replaceAll("\n", "\r"));
            const runButton = runButtonRef.current as unknown as HTMLButtonElement;
            if (!runButton) {
                return;
            }
            runButton.disabled = false;
        });

        interpreter.onLoaded(() => {
            console.log("Interpreter loaded");
            const runButton = runButtonRef.current as unknown as HTMLButtonElement;
            if (!runButton) {
                return;
            }
            runButton.disabled = false;
            console.log("Interpreter loaded");
        })

        window.addEventListener("reveal-monaco-content-change", (event) => {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            innerText = (event as any).detail.textContent;
            console.log("innerText", innerText);
            // console.log("Content change");
            console.log(event);
        });
    })

    return <div><pre><code data-line-numbers="|3,8" data-trim className="monaco language-rust monaco_with">
        <script type="text/template">{value}</script>
    </code></pre>
    <button style={{
        height: "2rem"
    }} ref={runButtonRef} onClick={() => {
        const runButton = runButtonRef.current as unknown as HTMLButtonElement;
        if (!runButton) {
            return;
        }
        runButton.disabled = true;
        console.log("innerText!!", innerText);
        interpreter.run(innerText);
    }}>Run</button>
    <div ref={TerminalRef} className="result" style={{
        fontSize: "3rem",
    }}>
    </div>
    </div>
}

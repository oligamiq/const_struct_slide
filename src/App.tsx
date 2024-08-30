import { RevealSlides } from "react-reveal-slides";

import "reveal.js/dist/theme/serif.css";
// import "reveal.js/plugin/highlight/monokai.css";
import "./vs.css"
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
// import "reveal.js/dist/theme/white.css";

// import '../node_modules/reveal.js/dist/theme/white.css'

// Make sure reveal.js is installed with npm for the following imports to work
// Plugins

import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import RevealMultiplexer from "../plugin/reveal-multiplexer/plugin";
import { loadDefaultJapaneseParser } from "budoux";
import { useEffect, useRef } from "react";

// https://simpleicons.org/
import { SiBun, SiVite, SiReact, SiBiome, SiRevealdotjs, SiGithub, SiX, SiQiita } from '@icons-pack/react-simple-icons';
import { Qr } from "./Qr";
import QRCode from "react-qr-code";
import { Example1 } from "./codes";

function App() {
	const h2Ref = useRef(null);

	useEffect(() => {
		const h2Elements = h2Ref.current as unknown as HTMLElement;
		const ele = h2Elements.querySelectorAll("h2, p, li") as unknown as HTMLElement[];
		const parser = loadDefaultJapaneseParser();
		for (let i = 0; i < ele.length; i++) {
			console.log(ele[i]);
			parser.applyToElement(ele[i]);
		}
	}, []);

    const info = {
        multiplexer: {
            // identifier: "9084de8f-872e-4201-b983-ef74be5768f8"
            identifier: process.env.NODE_ENV === "production" ? "9084de8f-872e-4201-b983-ef74be5768f8" : "f3278ffa-fc59-4a66-bd6e-a957ecf9282d"
        },
    };

	return (
		<div
			ref={h2Ref}
			className="ctc-font slide-cont"
			style={{ width: "100vw", height: "100vh" }}
		>
            <Qr />
			<RevealSlides
				controls={false}
				plugins={[RevealZoom, RevealNotes, RevealMultiplexer, RevealHighlight]}
				// onStateChange={(state) => console.log(state)}
                // view={'scroll'}
                touch={true}
                {...info}
			>
				<section key="0">
					<section key="0-0">
						<h2>Rustでマクロを用いたまともなライブラリを作った件</h2>
						<p>Presented by @oligamiq</p>
                        <p>Powered by <br />
                        bun<SiBun color="#f8eddd" size={"2.5rem"} />
                        , vite<SiVite color="default" size={"2.5rem"} />
                        , react<SiReact color="default" size={"2.5rem"} />
                        , biomejs<SiBiome color="default" size={"2.5rem"} />
                        , reveal<SiRevealdotjs color="default" size={"2.5rem"} />
                        , BudouX
                        </p>
					</section>
					<section key="0-1">
                        <p>
                            このプレゼンに使われているライブラリと軽い説明
                        </p>
						<ul className="r-stack">
							<li className="fragment current-visible">
                                bun<SiBun color="#f8eddd" size={"2.5rem"} />
                                <p>高速なnpm alternativeで、パッケージマネージャとして使っている</p>
							</li>
							<li className="fragment current-visible">
                                vite<SiVite color="default" size={"2.5rem"} />
                                <p>Reactの開発環境として使っている。開発用サーバを立てられることが利点</p>
							</li>
							<li className="fragment current-visible">
                                react<SiReact color="default" size={"2.5rem"} />
                                <p>Tsxとコンポーネントを用いて、プレゼンを書きたかったため</p>
							</li>
                            <li className="fragment current-visible">
                                biomejs<SiBiome color="default" size={"2.5rem"} />
                                <p>linter及びformatterとして使っている。prettierの代わり</p>
                            </li>
                            <li className="fragment current-visible">
                                reveal<SiRevealdotjs color="default" size={"2.5rem"} />
                                <p>このスライド型のプレゼンを作るために使っている。メインのライブラリ</p>
                            </li>
                            <li className="fragment current-visible">
                                BudouX
                                <p>日本語のテキストを適切に改行するために使っている。このスライドの日本語はこれにより変な場所で改行しない</p>
                            </li>
                            <p className="fragment">
                                実は、このパワポは同期する。socket.ioを使った既存のライブラリがあったのだが、サーバを立てるのが面倒だったため、<a href = "https://github.com/nwtgck/piping-server">piping server</a>を用いて、同期を実現するシステムを作って運用している。<br/>
                                <a href = "https://github.com/oligamiq/reveal-multiplexer">貫徹で一日かけて作った自作プラグイン</a>
                            </p>
						</ul>
					</section>
                    <section key="0-2">
                        <QRCode
                            href="https://github.com/oligamiq/const_struct_slide"
                            style={{ height: "auto", maxWidth: "90%", width: "90%" }}
                            value="https://github.com/oligamiq/const_struct_slide"
                            viewBox={"0 0 256 256"}
                        />
                    </section>
				</section>
				<section key="1" data-background-color="#bf4f41">
					<section key="1-0" data-auto-animate>
						<h2>自己紹介</h2>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <ul>
                            <li data-id="kosen">高専</li>
                            <li data-id="daigaku">大学</li>
                            <li data-id="seiseki">成績</li>
                            <li data-id="github"><SiGithub color="default" height={"3rem"} /></li>
                            <li data-id="x"><SiX color="default" height={"3rem"} /></li>
                            <li data-id="qiita"><SiQiita color="default" height={"3rem"} /></li>
                        </ul>
                        </div>
					</section>
					<section key="1-1" data-auto-animate>
                        <h2>自己紹介</h2>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "left",
                            alignItems: "left",
                        }}>
                        <ul>
                            <li data-id="kosen">高専: 5年情報工学科</li>
                            <li data-id="daigaku">大学: 電通大編入予定</li>
                            <li data-id="seiseki">成績: 5年前期中間: 累計GPA 3.3 順位 34/41</li>
                            <li data-id="github"><SiGithub color="default" height={"3rem"} /> oligamiq</li>
                            <li data-id="x"><SiX color="default" height={"3rem"} /> nziq5</li>
                            <li data-id="qiita"><SiQiita color="default" height={"3rem"} /> oligami</li>
                        </ul>
                        </div>
                    </section>
                </section>
                <section key="2">
					<section key="2-0" data-auto-animate>
						<h2 data-id="gaiyou">
                            作ったライブラリの概要と技術的に難しかったところ
						</h2>
					</section>
					<section key="2-1" data-auto-animate>
						<h2 data-id="gaiyou">
                            ライブラリ概要
                            <QRCode
                                href="https://github.com/oligamiq/const_struct"
                                style={{ height: "auto", maxWidth: "20%", width: "20%" }}
                                value="https://github.com/oligamiq/const_struct"
                                viewBox={"0 0 256 256"}
                            />
						</h2>

                        <div>
                        <pre><code data-line-numbers="|3,8" data-trim className="language-rust" >
                            {/* <textarea> */}
                                {Example1}
                            {/* </textarea> */}
                        </code></pre>
                        </div>
					</section>
                </section>
			</RevealSlides>
		</div>
	);
}

export default App;

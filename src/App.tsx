import { RevealSlides } from "react-reveal-slides";

import "reveal.js/dist/theme/black.css";
// import "reveal.js/dist/theme/white.css";

// import '../node_modules/reveal.js/dist/theme/white.css'

// Make sure reveal.js is installed with npm for the following imports to work
// Plugins
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import { loadDefaultJapaneseParser } from "budoux";
import { useEffect, useRef } from "react";

// https://simpleicons.org/
import { SiBun, SiVite, SiReact, SiBiome, SiRevealdotjs } from '@icons-pack/react-simple-icons';

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

	return (
		<div
			ref={h2Ref}
			className="ctc-font slide-cont"
			style={{ width: "100vw", height: "100vh" }}
		>
			<RevealSlides
				controls={false}
				plugins={[RevealZoom, RevealNotes]}
				onStateChange={(state) => console.log(state)}
                // view={'scroll'}
                touch={true}
			>
				<section key="0" data-background-color="#0c1821">
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
                            <li className="fragment">
                                BudouX
                                <p>日本語のテキストを適切に改行するために使っている。このスライドの日本語はこれにより変な場所で改行しない</p>
                            </li>
						</ul>
					</section>
				</section>
				<section key="1" data-background-color="#bf4f41">
					<section key="1-0">
						<h2>自己紹介</h2>
						<p>
							This package makes no efforts to impead or restrict what you can
							do.
						</p>
					</section>
					<section key="1-1">
						<p>
							Since React creates HTML DOM elements out of JSX, there should be
							no reason we cant just put JSX inside of our RevealSlides
							component instead of the HTML markup Reveal.js normally expects.
						</p>
					</section>
					<section key="1-2">
						<p>
							Simply put, React already takes care of converting JSX into
							something Reveal.js can work with.
						</p>
						<aside className="notes">
							Shhh, these are your private notes 📝
						</aside>
					</section>
				</section>
			</RevealSlides>
		</div>
	);
}

export default App;

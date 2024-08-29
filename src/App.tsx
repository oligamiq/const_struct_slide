import { RevealSlides } from "react-reveal-slides";
import "reveal.js/dist/theme/white.css";

// import '../node_modules/reveal.js/dist/theme/white.css'

// Make sure reveal.js is installed with npm for the following imports to work
// Plugins
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import { loadDefaultJapaneseParser } from "budoux";
import { useEffect, useRef } from "react";

function App() {
	const h2Ref = useRef(null);

	useEffect(() => {
		const h2Elements = h2Ref.current as unknown as HTMLElement;
		const ele = h2Elements.querySelectorAll("h2");

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
			>
				<section key="0" data-background-color="#0c1821">
					<section key="0-0">
						<h2>Rustでマクロを用いたまともなライブラリを作った件</h2>
						<p>Create dynamic Reveal.js slides</p>
					</section>
					<section key="0-1">
						<ul>
							<li className="fragment">
								Easily make presentation content dynamic
							</li>
							<li className="fragment">
								Easily add presentations to React apps
							</li>
							<li className="fragment">
								Embed React components inside presentations
							</li>
						</ul>
					</section>
				</section>
				<section key="1" data-background-color="#bf4f41">
					<section key="1-0">
						<h2>Free reign over your presentation</h2>
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

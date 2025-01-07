'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabs = [
	{ name: 'Accueil', path: '#home' },
	{ name: 'CV', path: '#cv' },
	{ name: 'contact', path: '#contact' },
] as const;

export default function NavBar() {
	const [selected, setSelected] = useState(0);
	useEffect(() => {
		window.history.scrollRestoration = 'manual';

		ScrollTrigger.create({
			trigger: '#home',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => setSelected(0),
			onEnterBack: () => setSelected(0),
		});
		ScrollTrigger.create({
			trigger: '#cv',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => setSelected(1),
			onEnterBack: () => setSelected(1),
		});
		ScrollTrigger.create({
			trigger: '#contact',
			start: 'top center',
			end: 'bottom center',
			onEnter: () => setSelected(2),
			onEnterBack: () => setSelected(2),
		});
	}, []);

	// Animation de background
	useGSAP(() => {
		gsap.to('.Container', {
			scrollTrigger: {
				trigger: '.Container',
				start: 'top top',
				end: 'bottom +=200',
				toggleActions: 'play none none reverse',
			},
			background: 'rgba(24, 23, 31, 0.5)',
			backdropFilter: 'blur(10px)',
		});
	});

	return (
		<div className="Container fixed top-0 flex  h-fit max-h-[calc(100vh-40px)] py-2 min-w-fit w-fit justify-center bg-background items-center m-5 rounded-full drop-shadow-2xl px-5 bg-opacity-0 space-x-6 z-10">
			{/* <span classNa500  bg-accent absolute size-5"></span> */}
			{tabs.map(({ name, path }, i) => (
				<Link
					className={`relative z-1 rounded-full p-1 px-2 ${
						selected === i
							? 'bg-accent [&_*]:text-black'
							: ' bg-none [&_*]:text-white'
					}`}
					href={path}
					key={`${i}-parent`}>
					<div key={i}>
						<div className={`relative z-1`}>{name}</div>
					</div>
				</Link>
			))}
		</div>
	);
}

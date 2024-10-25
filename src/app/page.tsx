'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Home() {
	useGSAP(() => {
		gsap.fromTo(
			'.Titles',
			{
				opacity: 0,
				x: -500,
			},
			{
				opacity: 1,
				x: 0,
				duration: 1.5,
				stagger: 1,
			}
		);

		gsap.fromTo(
			'.SmallTitle',
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				delay: 3,
				ease: 'back.out(1.3)',
			}
		);
	});

	return (
		<div className=" min-h-screen w-screen flex flex-col items-center h-[200vh] [&_*]:fill-white">
			<h1 className="Titles self-start mt-28 ml-20 text-accent text-9xl -z-10">
				Florian Donckers.
			</h1>
			<span className="Titles text-8xl self-start ml-20 -z-10 lea">
				<h1>Un développeur front-end.</h1>
				<h2 className="SmallTitle text-lg mr-12 text-right">
					Nivelles, Belgique.
				</h2>
			</span>
		</div>
	);
}

'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Observer from 'gsap/dist/Observer';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

export default function DecorationAscii() {
	useGSAP(() => {
		gsap.to('.DecorationAsciiBot', {
			scrollTrigger: {
				trigger: '.DecorationAsciiBot',
				start: 'top 78%',
				toggleActions: 'play none none reverse',
			},
			opacity: 0,
			x: 50,
			y: 50,
			ease: 'back.inOut(4)',
		});

		gsap.to('.DecorationAsciiTop', {
			scrollTrigger: {
				trigger: '.DecorationAsciiBot',
				start: 'top 78%',
				toggleActions: 'play none none reverse',
			},
			opacity: 0,
			x: -50,
			y: -50,
			ease: 'back.inOut(4)',
		});

		gsap.fromTo(
			'.DecorationAsciiBot',
			{
				opacity: 0,
				x: 50,
				y: 50,
				ease: 'back.inOut(4)',
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				duration: 1,
				delay: 0.5,
				ease: 'back.inOut(4)',
			}
		);

		gsap.fromTo(
			'.DecorationAsciiTop',
			{
				opacity: 0,
				x: -50,
				y: -50,
				ease: 'back.inOut(4)',
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				duration: 1,
				delay: 0.5,
				ease: 'back.inOut(4)',
			}
		);
	});

	return (
		<>
			<div className="Decoration DecorationAsciiBot fixed bottom-0 right-0 w-1/3 h-1/5 border-r-4 border-b-4 border-accent border-dashed m-2"></div>
			<div className="Decoration DecorationAsciiTop fixed top-0 left-0 w-1/3 h-1/5 border-l-4 border-t-4 border-accent border-dashed m-2"></div>
		</>
	);
}

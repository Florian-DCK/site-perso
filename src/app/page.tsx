'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
	NextIcon,
	JSIcon,
	HtmlIcon,
	GsapIcon,
	CSSIcon,
	PythonIcon,
	TailwindIcon,
} from '@/components/svgs';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

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

		const tl = gsap
			.timeline({ repeat: -1, repeatDelay: 5, delay: 5 })
			.to('.Icon', {
				y: -40,
				ease: 'power3.inOut',
				duration: 0.3,
				stagger: {
					each: 5,
					from: 'random',
					yoyo: true,
					yoyoEase: 'bounce.out',
					repeat: 1,
				},
			});

		gsap.fromTo(
			'.Icon',
			{
				y: -300,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1.5,
				ease: 'bounce.out',
				delay: 2,
				duration: 1,
			}
		);

		ScrollTrigger.create({
			trigger: '.Icon',
			start: 'top 20%',
			end: 'bottom -50%',
			toggleActions: 'play none none reverse',
			onToggle: (self) => {
				if (self.isActive) {
					gsap.to('.Icon', {
						x: 300,
						opacity: 0,
						duration: 0.5,
						ease: 'back.inOut(2)',
					});
				} else {
					gsap.to('.Icon', {
						x: 0,
						opacity: 1,
						duration: 0.5,
						ease: 'back.inOut(2)',
					});
				}
			},
		});
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
			<div className="[&_*]:size-24 flex justify-center items-center space-x-4 absolute bottom-14 right-14 ">
				<span className="Icon">
					<NextIcon />
				</span>
				<span className="Icon">
					<JSIcon />
				</span>
				<span className="Icon">
					<HtmlIcon />
				</span>
				<span className="Icon">
					<CSSIcon />
				</span>
				<span className="Icon">
					<GsapIcon />
				</span>
				<span className="Icon">
					<PythonIcon />
				</span>
				<span className="Icon">
					<TailwindIcon />
				</span>
			</div>
			<div className=" min-h-96 min-w-96 bg-slate-300 mt-[700px] self-start ml-20">
				<ul className=" flex-col space-y-10 justify-between items- size-full m-5 ">
					<li>Alternance développeur front-web</li>
					<li>Bachelier en Sciences informatiques</li>
					<li>Bachelier en Sciences Biologiques</li>
					<li>CESS</li>
				</ul>
			</div>
		</div>
	);
}

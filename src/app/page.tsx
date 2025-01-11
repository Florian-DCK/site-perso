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

import Menu from '@/components/Menu';
import GithubCalendarComponent from '@/components/GithubCalendar';
import ContactForm from '@/components/ContactForm';

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
				stagger: 0.7,
				ease: 'elastic.out(0.5, 0.2)',
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
				delay: 2,
				ease: 'back.out(1.3)',
			}
		);

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
				delay: 1.5,
				duration: 1,
			}
		);

		ScrollTrigger.create({
			trigger: '.Icon',
			start: 'top 20%',
			end: 'bottom -200%',
			toggleActions: 'play none none none',
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

		gsap.from('.Menu', {
			x: '-150%',
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.Menu',
				start: 'top 80%',
				end: 'bottom 30%',
			},
		});

		gsap.from('.Calendar', {
			x: '150%',
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.Calendar',
				start: 'top 80%',
				end: 'bottom 30%',
			},
		});
	});

	return (
		<div className="flex flex-col">
			<section
				id="home"
				className="min-h-screen w-screen flex flex-col items-center [&_*]:fill-white">
				<h1 className="Titles lg:self-start mt-24 lg:mt-48 lg:ml-20 text-accent lg:text-8xl -z-10 text-3xl">
					Florian Donckers.
				</h1>
				<span className="Titles text-1xl lg:text-7xl lg:self-start lg:ml-20 -z-10">
					<h1>Un développeur front-end.</h1>
					<h2 className="SmallTitle text-sm lg:text-lg lg:mr-12 lg:text-right text-center">
						Nivelles, Belgique.
					</h2>
				</span>
				<div className="lg:[&_*]:size-24 [&_*]:size-10 lg:flex justify-center items-center space-x-4 absolute bottom-14 right-14 ">
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
			</section>
			<section
				id="cv"
				className=" self-start flex flex-col justify-center h-screen w-screen space-y-20">
				<Menu className="Menu"></Menu>
				<hr className="border-t-4 border-accent border-dashed m-24 " />
				<GithubCalendarComponent className="Calendar self-end me-20" />
			</section>

			<section
				id="contact"
				className="flex flex-col items-center justify-center h-screen w-screen">
				<ContactForm></ContactForm>
			</section>
		</div>
	);
}

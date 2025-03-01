import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { GithubIcon } from './svgs';

interface GithubCalendarComponentProps {
	className?: string;
}

export default function GithubCalendarComponent({
	className,
}: GithubCalendarComponentProps) {
	const labels = {
		months: [
			'jan',
			'fév',
			'mars',
			'avril',
			'mai',
			'juin',
			'juil',
			'août',
			'sept',
			'oct',
			'nov',
			'déc',
		],
		weekdays: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
		totalCount: "{{count}} contributions durant l'année {{year}}",
		legend: {
			less: 'Moins',
			more: 'Plus',
		},
	};

	return (
		<div className={` size-fit flex items-center -z-1 ${className} `}>
			<a
				href="https://github.com/Florian-DCK"
				target="_blank"
				className="[&_*]:size-24 [&_*]:fill-white [&_*]:mr-20  ">
				<GithubIcon></GithubIcon>
			</a>

			<GitHubCalendar username="Florian-DCK" labels={labels} />
		</div>
	);
}

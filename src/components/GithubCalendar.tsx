import React from 'react';
import GitHubCalendar from 'react-github-calendar';

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
		<div className={` size-fit ${className} `}>
			<GitHubCalendar username="Florian-DCK" labels={labels} />
		</div>
	);
}

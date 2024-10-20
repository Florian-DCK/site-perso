import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendarComponent() {
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
        totalCount: '{{count}} contributions durant l\'année {{year}}',
        legend: {
            less: 'Moins',
            more: 'Plus',
        }
    }


    return (
        <GitHubCalendar username="Florian-DCK" labels={labels} />
    );
}
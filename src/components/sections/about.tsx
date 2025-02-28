import Menu from '@/components/Menu';
import GithubCalendarComponent from '@/components/GithubCalendar';
import Timeline from '@/components/timeline';

export default function About() {
	return (
		<section
			id="cv"
			className=" self-start flex flex-col justify-end w-screen space-y-20 h-screen">
			<div className=" w-full border-t-2 border-accent flex items-center h-[85%] bg-[#373642]/30">
				<Timeline></Timeline>
			</div>
		</section>
	);
}

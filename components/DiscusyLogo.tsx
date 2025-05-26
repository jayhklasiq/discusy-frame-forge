import { cn } from "@/lib/utils";

interface DiscusyLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const DiscusyLogo: React.FC<DiscusyLogoProps> = ({ className, ...props }) => {
	return (
		<div className={cn("flex items-center gap-2", className)} {...props}>
			<div className="w-8 h-8 rounded-lg bg-discusy-pink flex items-center justify-center">
				<span className="text-white font-bold text-xl">D</span>
			</div>
			<span className="text-white text-2xl font-bold">Discusy</span>
		</div>
	);
};

export default DiscusyLogo;

import { Loader2, Mail, MessageSquare, Plus, User, X, Github, type LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	spinner: Loader2,
	mail: Mail,
	message: MessageSquare,
	plus: Plus,
	user: User,
	close: X,
	gitHub: Github,
	google: Mail,
} as const;

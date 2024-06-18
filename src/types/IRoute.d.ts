export interface IRoute {
	path: string;
	page: React.FC | any;
	title?: string;
	icon: string;
}

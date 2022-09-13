import { BannerData } from './BannerData';

export type Banner = {
	id: string;
	uid: string;
	url: string;
	type: string;
	href: string;
	tags: string[];
	first_publication_date: string;
	last_publication_date: string;
	slugs: string[];
	linked_documents: string[];
	lang: string;
	alternate_languages: Object[];
	data: BannerData;
};

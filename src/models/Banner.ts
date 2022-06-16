import { BannerData } from './BannerData';

export interface Banner {
	id: string;
	uid: string;
	url: string;
	type: string;
	href: string;
	tags: string[];
	first_publication_date: string;
	last_publication_date: string;
	slugs: Object[];
	linked_documents: string[];
	lang: string;
	alternate_languages: Object[];
	data: BannerData;
}

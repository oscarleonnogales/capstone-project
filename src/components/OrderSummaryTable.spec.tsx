import OrderSummaryTable from './OrderSummaryTable';
import { render, screen } from '@testing-library/react';

const mockCartItems = [
	{
		product: {
			id: 'YZZ-ThIAAC4AvmNn',
			uid: null,
			url: null,
			type: 'product',
			href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ-ThIAAC4AvmNn%22%29+%5D%5D',
			tags: ['Living Room', 'Featured'],
			first_publication_date: '2021-11-18T16:24:50+0000',
			last_publication_date: '2021-11-18T16:24:50+0000',
			slugs: ['cojin-faye-azul'],
			linked_documents: [],
			lang: 'en-us',
			alternate_languages: [
				{
					id: 'YZZ9-xIAACwAvmHG',
					type: 'product',
					lang: 'es-mx',
				},
			],
			data: {
				name: 'Cojín Faye Azul',
				sku: '1091816888',
				category: {
					id: 'YWHyYRIAACgAykCq',
					type: 'category',
					tags: [],
					lang: 'en-us',
					slug: 'decorate',
					first_publication_date: '2021-10-09T23:32:29+0000',
					last_publication_date: '2021-11-18T14:27:09+0000',
					link_type: 'Document',
					isBroken: false,
				},
				mainimage: {
					dimensions: {
						width: 696,
						height: 900,
					},
					alt: 'Faye Blue Throw Pillow',
					copyright: null,
					url: 'https://images.prismic.io/wizeline-academy/39db837a-8a39-48fc-9937-5d496027bc79_1.jpeg?auto=compress,format',
				},
				short_description:
					'The soft texture makes a room cozier. This cushion features a beautiful variation of ups and downs and features a subtle diamond pattern that works with all styles. Oeko-Tex Certified: This product is free of harmful and irritating toxins; the production is ecological and does not generate water, air or noise pollution.',
				description: [
					{
						type: 'paragraph',
						text: 'The soft texture makes a room cozier. This cushion features a beautiful variation of ups and downs and features a subtle diamond pattern that works with all styles. Oeko-Tex Certified: This product is free of harmful and irritating toxins; the production is ecological and does not generate water, air or noise pollution.',
						spans: [],
					},
				],
				specs: [
					{
						spec_name: 'Care and cleaning instructions',
						spec_value:
							'Machine wash cold; smooth cycle. Use only non-chlorine bleach when necessary. Dry low',
					},
					{
						spec_name: 'Color',
						spec_value: 'Blue',
					},
					{
						spec_name: 'Dimensions',
						spec_value: '50.80 cm x 50.80 cm',
					},
				],
				images: [
					{
						image: {
							dimensions: {
								width: 696,
								height: 900,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/39db837a-8a39-48fc-9937-5d496027bc79_1.jpeg?auto=compress,format',
						},
					},
					{
						image: {
							dimensions: {
								width: 696,
								height: 900,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/56f55c28-e085-403b-b7f1-dcb704c842d0_2.jpeg?auto=compress,format',
						},
					},
				],
				stock: 49,
				price: 41,
			},
		},
		quantity: 2,
		limitReached: false,
	},
	{
		product: {
			id: 'YZaBuRIAACsAvnN-',
			uid: null,
			url: null,
			type: 'product',
			href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZaBuRIAACsAvnN-%22%29+%5D%5D',
			tags: ['Lamps'],
			first_publication_date: '2021-11-18T16:39:24+0000',
			last_publication_date: '2021-11-18T16:39:24+0000',
			slugs: ['paxton-pendant-lamp', 'lampara-colgante-paxton'],
			linked_documents: [],
			lang: 'en-us',
			alternate_languages: [
				{
					id: 'YZaBWRIAAC4AvnG1',
					type: 'product',
					lang: 'es-mx',
				},
			],
			data: {
				name: 'Paxton Pendant Lamp',
				sku: '1083937920',
				category: {
					id: 'YWHy0xIAACoAykKm',
					type: 'category',
					tags: [],
					lang: 'en-us',
					slug: 'lighting',
					first_publication_date: '2021-10-09T23:32:20+0000',
					last_publication_date: '2021-10-13T00:04:48+0000',
					link_type: 'Document',
					isBroken: false,
				},
				mainimage: {
					dimensions: {
						width: 940,
						height: 1215,
					},
					alt: 'Paxton Pendant Lamp',
					copyright: null,
					url: 'https://images.prismic.io/wizeline-academy/72e1dd40-3880-4485-9bfd-5b9042330414_5.webp?auto=compress,format',
				},
				short_description:
					'Blown glass in an eclectic mix of shapes, the shades of our pendant light have a soft mottled texture and a subtle green hue. Each glass lamp is suspended from a round cover with black fabric cable. Made of molded glass and steel finished with bronze. Professional installation is recommended. Each lamp is sold separately.',
				description: [
					{
						type: 'paragraph',
						text: 'Blown glass in an eclectic mix of shapes, the shades of our pendant light have a soft mottled texture and a subtle green hue. Each glass lamp is suspended from a round cover with black fabric cable. Made of molded glass and steel finished with bronze. Professional installation is recommended. Each lamp is sold separately.',
						spans: [],
					},
				],
				specs: [
					{
						spec_name: 'Care and Cleaning Instructions',
						spec_value:
							'Clean with a soft, dry cloth. To protect the finish, do not apply abrasives or household cleaners. Do not exceed the specified power',
					},
				],
				images: [
					{
						image: {
							dimensions: {
								width: 940,
								height: 1215,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/81c6238c-1409-4a3b-b095-ef1b8fae4cc6_1.webp?auto=compress,format',
						},
					},
					{
						image: {
							dimensions: {
								width: 940,
								height: 1215,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/3f987996-cf7e-458f-82ba-c530eb10f3cd_2.jpeg?auto=compress,format',
						},
					},
					{
						image: {
							dimensions: {
								width: 940,
								height: 1215,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/f74990c9-5b99-43f0-ba16-2db801ecf58a_3.webp?auto=compress,format',
						},
					},
					{
						image: {
							dimensions: {
								width: 940,
								height: 1215,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/7ac48c95-3dad-4124-86b3-909fa14eaf54_4.jpeg?auto=compress,format',
						},
					},
					{
						image: {
							dimensions: {
								width: 940,
								height: 1215,
							},
							alt: null,
							copyright: null,
							url: 'https://images.prismic.io/wizeline-academy/72e1dd40-3880-4485-9bfd-5b9042330414_5.webp?auto=compress,format',
						},
					},
				],
				stock: 22,
				price: 106,
			},
		},
		quantity: 3,
		limitReached: false,
	},
];

describe('order summary table tests', () => {
	const firstCartItem = mockCartItems[0];
	const secondCartItem = mockCartItems[1];

	const firstItemSubtotal: number = firstCartItem.quantity * firstCartItem.product.data.price;
	const secondItemSubtotal: number = secondCartItem.quantity * secondCartItem.product.data.price;

	it('should compute and show subtotals', async () => {
		//@ts-ignore
		render(<OrderSummaryTable cartItems={mockCartItems} />);
		const firstSubtotalText = screen.getByText(`$${firstItemSubtotal}`);
		expect(firstSubtotalText).toBeInTheDocument();
	});

	it('should compute and show the grand total', () => {
		const total = firstItemSubtotal + secondItemSubtotal;
		const totalText = screen.getByText(`$${total}`);
		expect(totalText).toBeInTheDocument();
	});
});

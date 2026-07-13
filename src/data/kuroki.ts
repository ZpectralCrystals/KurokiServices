export interface PaletteItem {
	name: string;
	hex: string;
	note: string;
}

export interface BrandPoint {
	title: string;
	text: string;
}

export interface TypographyItem {
	name: string;
	family: string;
	role: string;
	sample: string;
}

export const brandSummary =
	'KUROKI SERVICES es una consultora que brinda soluciones estrategicas y personalizadas para ayudar a empresas y organizaciones a alcanzar su maximo potencial.';

export const brandPoints: BrandPoint[] = [
	{
		title: 'Proposito',
		text: 'Generar valor a traves de la estrategia, la eficiencia y la innovacion.',
	},
	{
		title: 'Valores',
		text: 'Integridad, Excelencia, Compromiso, Confidencialidad, Innovacion.',
	},
	{
		title: 'Enfoque',
		text: 'Soluciones a medida, enfocadas en resultados y relaciones a largo plazo.',
	},
];

export const palette: PaletteItem[] = [
	{
		name: 'Primario',
		hex: '#0D0130',
		note: 'Azul oscuro institucional para fondos, texto y alta jerarquia.',
	},
	{
		name: 'Secundario',
		hex: '#B12433',
		note: 'Rojo de acento para llamados visuales y contraste de marca.',
	},
	{
		name: 'Secundario claro',
		hex: '#C9A55A',
		note: 'Dorado para detalles premium, lineas y servicios.',
	},
	{
		name: 'Neutro claro',
		hex: '#EFE6D8',
		note: 'Blanco roto para fondos suaves y bloques editoriales.',
	},
	{
		name: 'Gris',
		hex: '#6E6E6E',
		note: 'Gris oscuro para cuerpo de texto y apoyo visual.',
	},
];

export const typography: TypographyItem[] = [
	{
		name: 'Poppins',
		family: 'Poppins',
		role: 'Titulos / Subtitulos',
		sample: 'Aa',
	},
	{
		name: 'Montserrat',
		family: 'Montserrat',
		role: 'Cuerpo de texto',
		sample: 'Aa',
	},
];

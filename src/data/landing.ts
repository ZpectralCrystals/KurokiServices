export type IconName =
	| 'arrow-right'
	| 'bot'
	| 'brain'
	| 'briefcase'
	| 'calendar'
	| 'check-circle'
	| 'clipboard'
	| 'code'
	| 'database'
	| 'gauge'
	| 'layers'
	| 'line-chart'
	| 'mail'
	| 'menu'
	| 'network'
	| 'phone'
	| 'rocket'
	| 'shield'
	| 'smartphone'
	| 'sparkles'
	| 'users'
	| 'waypoints'
	| 'workflow';

export interface NavLink {
	href: string;
	label: string;
}

export interface CompanyData {
	name: string;
	descriptor: string;
	slogan: string;
	commercialPhrase: string;
	contactPerson: string;
	phones: {
		commercial: string;
		contact: string;
	};
	email: string;
	emailConfirmed: boolean;
	schedule: string;
	logo: string;
	logoAlt: string;
	socialLinks: Array<{ label: string; href: string }>;
}

export interface ServiceItem {
	icon: IconName;
	title: string;
	description: string;
	features?: string[];
}

export interface SolutionItem {
	title: string;
	description: string;
	items: string[];
}

export interface ProcessItem {
	title: string;
	text: string;
}

export interface TechnologyGroup {
	title: string;
	items: string[];
}

export interface FormOption {
	value: string;
	label: string;
}

export const companyData: CompanyData = {
	name: 'Kuroki',
	descriptor: 'Software & Digital Solutions',
	slogan: 'Impulsamos soluciones digitales con agilidad, calidad y experiencia.',
	commercialPhrase:
		'Desarrollamos soluciones digitales confiables, rapidas y seguras para que nuestros clientes puedan concentrarse en hacer crecer su negocio.',
	contactPerson: 'Romel Dudikoff Idme Calderón',
	phones: {
		commercial: '924775747',
		contact: '938346690',
	},
	email: 'hola@kservices.com',
	emailConfirmed: false,
	schedule: '8:00 a. m. - 8:00 p. m.',
	logo: '/brand/kuroki-logo.png',
	logoAlt: 'Kuroki Software & Digital Solutions',
	socialLinks: [],
};

export const whatsappMessage =
	'Hola, me gustaria solicitar informacion sobre el desarrollo de un proyecto de software con Kuroki.';

export const whatsappUrl = `https://wa.me/51${companyData.phones.commercial}?text=${encodeURIComponent(
	whatsappMessage,
)}`;

export const mailtoUrl = `mailto:${companyData.email}?subject=${encodeURIComponent(
	'Solicitud de cotizacion - Kuroki',
)}&body=${encodeURIComponent(whatsappMessage)}`;

export const navLinks: NavLink[] = [
	{ href: '#top', label: 'Inicio' },
	{ href: '#nosotros', label: 'Nosotros' },
	{ href: '#servicios', label: 'Servicios' },
	{ href: '#soluciones', label: 'Soluciones' },
	{ href: '#proceso', label: 'Como trabajamos' },
	{ href: '#contacto', label: 'Contacto' },
];

export const heroHighlights: ServiceItem[] = [
	{
		icon: 'smartphone',
		title: 'Aplicaciones moviles',
		description: 'Android, iOS y productos moviles preparados para crecer.',
	},
	{
		icon: 'code',
		title: 'Plataformas web',
		description: 'Web corporativa, back office, paneles y experiencias responsive.',
	},
	{
		icon: 'workflow',
		title: 'Software a medida',
		description: 'Soluciones ajustadas al flujo real de cada negocio.',
	},
];

export const aboutPoints = [
	'Kuroki nace de la vision compartida de dos profesionales que iniciaron juntos su camino en el desarrollo de software y posteriormente se especializaron en soluciones moviles y web dentro de diferentes empresas y proyectos.',
];

export const missionVision = [
	{
		title: 'Mision',
		text: 'Desarrollar soluciones digitales web y moviles escalables, seguras y mantenibles, combinando experiencia tecnica, arquitectura de software e inteligencia artificial responsable para transformar las ideas de nuestros clientes en productos solidos y eficientes.',
	},
	{
		title: 'Vision',
		text: 'Convertirnos en una consultora tecnologica reconocida por la calidad, confiabilidad y agilidad de sus soluciones, participando en proyectos medianos y grandes del sector privado y publico, tanto en el mercado nacional como internacional.',
	},
];

export const services: ServiceItem[] = [
	{
		icon: 'smartphone',
		title: 'Aplicaciones Android nativas',
		description:
			'Desarrollamos aplicaciones Android con Kotlin y tecnologias modernas, optimizadas para distintos dispositivos, versiones del sistema y necesidades empresariales.',
		features: [
			'Interfaces modernas',
			'Integracion con APIs',
			'Notificaciones',
			'Geolocalizacion',
			'Pagos digitales',
			'Autenticacion',
			'Publicacion en Google Play',
		],
	},
	{
		icon: 'smartphone',
		title: 'Aplicaciones iOS nativas',
		description:
			'Creamos aplicaciones nativas para iPhone utilizando Swift y SwiftUI, priorizando rendimiento, seguridad, mantenibilidad y una experiencia alineada con el ecosistema Apple.',
		features: [
			'Desarrollo con Swift y SwiftUI',
			'Integracion con servicios externos',
			'Notificaciones',
			'Pagos',
			'Seguridad',
			'Analitica',
			'Publicacion en App Store',
		],
	},
	{
		icon: 'rocket',
		title: 'Landing pages',
		description:
			'Paginas rapidas y enfocadas en presentar un producto, servicio, campana o emprendimiento con llamadas a la accion claras.',
		features: [
			'Formularios',
			'WhatsApp',
			'Redes sociales confirmadas',
			'Galerias',
			'Mapas',
			'Diseno responsive',
			'Optimizacion basica para buscadores',
		],
	},
	{
		icon: 'briefcase',
		title: 'Paginas web corporativas',
		description:
			'Sitios profesionales para presentar la empresa, servicios, productos, proyectos, informacion institucional y canales de contacto.',
	},
	{
		icon: 'database',
		title: 'Plataformas web con back office',
		description:
			'Sistemas web con paneles administrativos para controlar informacion y operaciones del negocio.',
		features: [
			'Usuarios y roles',
			'Productos y servicios',
			'Clientes',
			'Proveedores',
			'Ventas',
			'Pedidos',
			'Inventarios',
			'Reportes',
			'Estadisticas',
			'Gestion de contenido',
		],
	},
	{
		icon: 'code',
		title: 'Software a medida',
		description:
			'Analizamos los procesos de cada empresa y desarrollamos una solucion personalizada desde el levantamiento de requerimientos hasta la implementacion.',
	},
	{
		icon: 'network',
		title: 'Integraciones y automatizacion',
		description:
			'Conectamos plataformas, APIs, pasarelas de pago, sistemas internos y servicios externos para reducir tareas manuales y mejorar el flujo de informacion.',
	},
];

export const specializedSolutions: SolutionItem[] = [
	{
		title: 'Sistema para boticas',
		description: 'Software orientado a la gestion operativa y comercial de boticas.',
		items: [
			'Productos',
			'Inventario',
			'Lotes',
			'Proveedores',
			'Clientes',
			'Ventas',
			'Caja',
			'Reportes',
			'Usuarios y permisos',
		],
	},
	{
		title: 'Sistema para consultorios',
		description: 'Software orientado a ordenar la atencion y administracion de consultorios.',
		items: [
			'Pacientes',
			'Citas',
			'Profesionales',
			'Servicios',
			'Historiales',
			'Pagos',
			'Reportes',
			'Operaciones administrativas',
		],
	},
	{
		title: 'Software empresarial personalizado',
		description:
			'Plataformas disenadas segun el flujo real de cada negocio, sin obligar al cliente a adaptarse a un sistema generico.',
		items: ['Procesos a medida', 'Back office', 'Integraciones', 'Automatizacion', 'Reportes'],
	},
];

export const aiUseCases = [
	'Analisis inicial',
	'Documentacion',
	'Prototipado',
	'Revision de codigo',
	'Generacion de pruebas',
	'Automatizacion de tareas repetitivas',
];

export const workProcess: ProcessItem[] = [
	{
		title: 'Conocemos el negocio',
		text: 'Identificamos el problema, los objetivos, los usuarios y las necesidades reales.',
	},
	{
		title: 'Definimos la solucion',
		text: 'Organizamos el alcance, funcionalidades, entregables, tiempos y arquitectura.',
	},
	{
		title: 'Disenamos la experiencia',
		text: 'Preparamos los flujos, pantallas y propuesta visual del producto.',
	},
	{
		title: 'Desarrollamos por etapas',
		text: 'Construimos la solucion mediante entregas organizadas y revisiones constantes.',
	},
	{
		title: 'Probamos y validamos',
		text: 'Revisamos el funcionamiento, experiencia de usuario, rendimiento y seguridad.',
	},
	{
		title: 'Implementamos y acompanamos',
		text: 'Publicamos el producto y brindamos soporte segun las condiciones contratadas.',
	},
];

export const differentiators = [
	'Comunicacion directa con los responsables del proyecto',
	'Desarrollo web y movil dentro de un mismo equipo',
	'Soluciones adaptadas a cada negocio',
	'Analisis arquitectonico antes de desarrollar',
	'Tecnologias seleccionadas segun la necesidad real',
	'Entregas organizadas por etapas',
	'Codigo mantenible y documentado',
	'Uso responsable de inteligencia artificial',
	'Trabajo remoto con seguimiento constante',
	'Acompanamiento posterior a la entrega',
	'Menor cantidad de intermediarios',
	'Enfoque en seguridad, escalabilidad y calidad',
];

export const technologies: TechnologyGroup[] = [
	{ title: 'Mobile', items: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose'] },
	{ title: 'Web', items: ['React', 'Angular', 'JavaScript', 'TypeScript'] },
	{
		title: 'Backend y servicios',
		items: ['Node.js', 'APIs REST', 'Bases de datos relacionales', 'Firebase', 'Supabase'],
	},
	{
		title: 'Infraestructura y herramientas',
		items: ['Servicios cloud', 'Git', 'Integraciones externas', 'Automatizacion', 'Analitica'],
	},
];

export const projectTypes: FormOption[] = [
	{ value: '', label: 'Selecciona una opcion' },
	{ value: 'Aplicacion Android', label: 'Aplicacion Android' },
	{ value: 'Aplicacion iOS', label: 'Aplicacion iOS' },
	{ value: 'Aplicacion movil Android y iOS', label: 'Aplicacion movil para Android y iOS' },
	{ value: 'Landing page', label: 'Landing page' },
	{ value: 'Pagina web corporativa', label: 'Pagina web corporativa' },
	{ value: 'Plataforma web con back office', label: 'Plataforma web con back office' },
	{ value: 'Software a medida', label: 'Software a medida' },
	{ value: 'Sistema para botica', label: 'Sistema para botica' },
	{ value: 'Sistema para consultorio', label: 'Sistema para consultorio' },
	{ value: 'Automatizacion o integracion', label: 'Automatizacion o integracion' },
	{ value: 'Otro', label: 'Otro' },
];

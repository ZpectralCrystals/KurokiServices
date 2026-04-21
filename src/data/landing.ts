export type IconName =
	| 'arrow-right'
	| 'bot'
	| 'brain'
	| 'briefcase'
	| 'calendar'
	| 'check-circle'
	| 'clipboard'
	| 'code'
	| 'gauge'
	| 'layers'
	| 'line-chart'
	| 'network'
	| 'rocket'
	| 'shield'
	| 'sparkles'
	| 'users'
	| 'waypoints'
	| 'workflow';

export interface NavLink {
	href: string;
	label: string;
}

export interface HeroMetric {
	value: string;
	label: string;
	icon: IconName;
}

export interface PillarItem {
	icon: IconName;
	title: string;
	description: string;
}

export interface ProcessItem {
	icon: IconName;
	title: string;
	text: string;
}

export interface SprintHighlight {
	icon: IconName;
	title: string;
	text: string;
}

export interface SprintStep {
	title: string;
	text: string;
}

export interface CollaboratorItem {
	name: string;
	role: string;
	text: string;
}

export const navLinks: NavLink[] = [
	{ href: '#proceso', label: 'Proceso' },
	{ href: '#sprints', label: 'Sprint semanal' },
	{ href: '#ia', label: 'IA aplicada' },
	{ href: '#colaboradores', label: 'Colaboradores' },
];

export const heroMetrics: HeroMetric[] = [
	{ value: 'Semanal', label: 'Cadencia de seguimiento', icon: 'calendar' },
	{ value: 'Visible', label: 'Avance demostrable', icon: 'line-chart' },
	{ value: 'Asistido', label: 'Optimizacion con IA', icon: 'bot' },
];

export const summaryPoints: string[] = [
	'Flujo claro desde analisis hasta entrega',
	'Sprints semanales con revision continua',
	'Presentaciones de avance para feedback temprano',
	'IA aplicada como soporte del equipo',
];

export const pillars: PillarItem[] = [
	{
		icon: 'workflow',
		title: 'Proceso de software',
		description:
			'Definimos flujo ordenado para analizar, disenar, desarrollar, probar y entregar funcionalidades de forma continua.',
	},
	{
		icon: 'calendar',
		title: 'Metodologia agil',
		description:
			'Trabajamos con sprints semanales, revisiones frecuentes y seguimiento continuo para mantener control y visibilidad.',
	},
	{
		icon: 'brain',
		title: 'IA aplicada como soporte',
		description:
			'Incorporamos inteligencia artificial para acelerar tareas operativas, reducir retrabajo y optimizar tiempos del proyecto.',
	},
];

export const softwareProcess: ProcessItem[] = [
	{
		icon: 'clipboard',
		title: 'Analisis',
		text: 'Levantamiento de necesidades, revision funcional y definicion del alcance inicial.',
	},
	{
		icon: 'waypoints',
		title: 'Diseno',
		text: 'Estructuracion de solucion, flujos, prioridades y componentes que se construiran.',
	},
	{
		icon: 'code',
		title: 'Desarrollo',
		text: 'Construccion iterativa de funcionalidades con seguimiento semanal y foco en resultados.',
	},
	{
		icon: 'shield',
		title: 'Pruebas y validacion',
		text: 'Revision de entregables, validaciones funcionales y ajustes antes de presentar avance.',
	},
];

export const sprintHighlights: SprintHighlight[] = [
	{
		icon: 'gauge',
		title: 'Avance visible',
		text: 'Entregables demostrables cada semana.',
	},
	{
		icon: 'users',
		title: 'Feedback continuo',
		text: 'Ajustes oportunos con cliente y stakeholders.',
	},
];

export const sprintFlow: SprintStep[] = [
	{
		title: 'Planificacion',
		text: 'Se priorizan requerimientos, se definen objetivos y se organiza alcance semanal.',
	},
	{
		title: 'Ejecucion',
		text: 'Equipo avanza en funcionalidades y tareas clave con apoyo de IA donde genera valor.',
	},
	{
		title: 'Validacion',
		text: 'Se revisan resultados, se prueban entregables y se identifican ajustes antes de demo.',
	},
	{
		title: 'Presentacion semanal',
		text: 'Se muestra avance, se recibe feedback y se alinean siguientes pasos del proyecto.',
	},
];

export const aiUseCases: string[] = [
	'Apoyo en analisis inicial de requerimientos',
	'Generacion y mejora de documentacion tecnica y funcional',
	'Estructura base de componentes o modulos',
	'Validaciones iniciales y soporte operativo',
	'Aceleracion de tareas repetitivas del equipo',
	'Mejor preparacion de entregables y revisiones',
];

export const benefits: string[] = [
	'Mayor velocidad en ejecucion del proyecto',
	'Avances visibles semana a semana',
	'Reduccion de tareas repetitivas mediante IA',
	'Mejor validacion y menor retrabajo',
	'Comunicacion clara con cliente y stakeholders',
	'Entregables iterativos, medibles y ajustables',
];

export const collaborators: CollaboratorItem[] = [
	{
		name: 'Direccion / Gerencia',
		role: 'Toma de decisiones',
		text: 'Recibe visibilidad del avance, aprueba prioridades y valida impacto del proyecto.',
	},
	{
		name: 'Cliente / Area usuaria',
		role: 'Feedback funcional',
		text: 'Participa en revisiones semanales para validar que desarrollo responda a necesidad real.',
	},
	{
		name: 'Equipo tecnico',
		role: 'Construccion y validacion',
		text: 'Ejecuta sprint, implementa mejoras y asegura calidad tecnica en cada entrega.',
	},
	{
		name: 'Colaboradores estrategicos',
		role: 'Espacio editable',
		text: 'Bloque pensado para mostrar aliados, especialistas, proveedores o colaboradores del proyecto.',
	},
];

export const logos: string[] = [
	'Colaborador 01',
	'Colaborador 02',
	'Colaborador 03',
	'Colaborador 04',
	'Colaborador 05',
];

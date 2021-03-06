// Generated by dts-bundle-generator v4.3.0

export declare type HookHandler = (data: HookData) => void | boolean;
export declare type CellHookHandler = (data: CellHookData) => void | boolean;
declare class Table {
	id?: any;
	cursor: {
		x: number;
		y: number;
	};
	doc: any;
	userStyles: any;
	settings: any;
	columns: Column[];
	head: Row[];
	body: Row[];
	foot: Row[];
	wrappedWidth: number;
	minWidth: number;
	width: number;
	height: number;
	headHeight: number;
	footHeight: number;
	startPageNumber: number;
	pageNumber: number;
	pageCount: number;
	pageStartX: number;
	pageStartY: number;
	finalY: number;
	styles: any;
	cellHooks: any;
	allRows(): Row[];
	callCellHooks(handlers: HookHandler[] | CellHookHandler[], cell: Cell, row: Row, column: Column): boolean;
	callEndPageHooks(): void;
	margin(side: string): any;
}
declare class Row {
	raw: HTMLTableRowElement | any;
	index: number;
	cells: {
		[key: string]: Cell;
	};
	section: Section;
	height: number;
	maxCellHeight: number;
	x: number;
	y: number;
	spansMultiplePages: boolean;
	constructor(raw: any, index: number, section: Section);
	hasRowSpan(): boolean;
	canEntireRowFit(height: number): boolean;
	getMinimumRowHeight(): any;
}
export declare type Section = 'head' | 'body' | 'foot';
declare class Cell {
	raw: HTMLTableCellElement | any;
	styles: any;
	text: string | string[];
	section: Section;
	contentHeight: number;
	contentWidth: number;
	wrappedWidth: number;
	minReadableWidth: number;
	minWidth: number;
	width: number;
	height: number;
	textPos: {
		y: number;
		x: number;
	};
	x: number;
	y: number;
	colSpan: number;
	rowSpan: number;
	constructor(raw: any, themeStyles: any, section: Section);
	getContentHeight(): any;
	padding(name: 'vertical' | 'horizontal' | 'top' | 'bottom' | 'left' | 'right'): any;
}
declare class Column {
	raw: any;
	dataKey: string | number;
	index: number;
	wrappedWidth: number;
	minReadableWidth: number;
	minWidth: number;
	width: number;
	constructor(dataKey: string | number, raw: any, index: number);
	getMaxCustomCellWidth(): number;
}
declare class HookData {
	table: Table;
	pageNumber: number;
	pageCount: number;
	settings: any;
	doc: any;
	cursor: {
		x: number;
		y: number;
	};
	constructor();
}
declare class CellHookData extends HookData {
	cell: Cell;
	row: Row;
	column: Column;
	section: 'head' | 'body' | 'foot';
	constructor(cell: Cell, row: Row, column: Column);
}
export interface ColumnOption {
	header?: string;
	title?: string;
	footer?: string;
	dataKey?: string | number;
}
export declare type UserOptions = HTMLConfig | ContentConfig | ColumnDataConfig;
export declare type Color = [number, number, number] | number | 'transparent' | false;
export declare type MarginPadding = number | {
	top?: number;
	right?: number;
	bottom?: number;
	left?: number;
};
export interface Styles {
	font?: 'helvetica' | 'times' | 'courier' | string;
	fontStyle?: 'normal' | 'bold' | 'italic' | 'bolditalic';
	overflow?: 'linebreak' | 'ellipsize' | 'visible' | 'hidden';
	fillColor?: Color;
	textColor?: Color;
	halign?: 'left' | 'center' | 'right' | 'justify';
	valign?: 'top' | 'middle' | 'bottom';
	fontSize?: number;
	cellPadding?: number;
	lineColor?: Color;
	lineWidth?: number;
	cellWidth?: 'auto' | 'wrap' | number;
	minCellHeight?: number;
}
export interface CellDefinition {
	rowSpan?: number;
	colSpan?: number;
	styles?: Styles;
	content?: string | string[] | number;
}
export declare type CellType = null | string | number | boolean | CellDefinition;
export declare type MultipleRowType = CellType[][] | {
	string: CellType;
}[];
export declare type SingleRowType = CellType[] | {
	string: CellType;
};
export interface BaseConfig {
	theme?: 'striped' | 'grid' | 'plain';
	startY?: number;
	margin?: MarginPadding;
	pageBreak?: 'auto' | 'avoid' | 'always';
	rowPageBreak?: 'auto' | 'avoid';
	tableWidth?: 'auto' | 'wrap' | number;
	showHead?: 'everyPage' | 'firstPage' | 'never';
	showFoot?: 'everyPage' | 'lastPage' | 'never';
	tableLineWidth?: number;
	tableLineColor?: Color;
	tableId?: any;
	styles?: Styles;
	bodyStyles?: Styles;
	headStyles?: Styles;
	footStyles?: Styles;
	alternateRowStyles?: Styles;
	columnStyles?: {
		[key: string]: Styles;
	};
	didParseCell?: (data: CellHookData) => void;
	willDrawCell?: (data: CellHookData) => void;
	didDrawCell?: (data: CellHookData) => void;
	didDrawPage?: (data: CellHookData) => void;
}
export interface ContentConfig extends BaseConfig {
	head?: SingleRowType | MultipleRowType;
	foot?: SingleRowType | MultipleRowType;
	body: MultipleRowType;
}
export interface ColumnDataConfig extends BaseConfig {
	columns?: ColumnOption[];
	body: object[];
}
export interface HTMLConfig extends BaseConfig {
	html: string | HTMLElement;
}
export declare function applyPlugin(jsPDF: any): void;
export declare type autoTable = (options: UserOptions) => void;

export {};

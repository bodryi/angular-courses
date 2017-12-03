import {
	Directive,
	ElementRef,
	HostListener,
	Input
} from "@angular/core";

@Directive({
	selector: '[app-highlight]'
           })
export class HighlightDirective {
	@Input('app-highlight') highlightColor: string;

	private element: HTMLElement;

	constructor(el: ElementRef) {
		this.element = el.nativeElement;
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.highlight(this.highlightColor || 'yellow');
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.highlight(null);
	}


	highlight(color: string) {
		this.element.style.backgroundColor = color;
	}
}
import { isPlatformServer } from '@angular/common';
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appShellRender]'
})
export class AppShellRenderDirective implements OnInit {
    constructor(private viewContainer: ViewContainerRef,
                private templateRef: TemplateRef<any>,
                @Inject(PLATFORM_ID) private platformID) { }

    ngOnInit() {
        if (isPlatformServer(this.platformID)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { INavigateList } from '../navigate-list/models/navigate';
import { BrowserService } from '../../services/browser/browser.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'neo-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() public navigate: INavigateList[] = [];
  @Input() public logoPath = '../../assets/img/logo.jpg';

  public scrolled = false;
  public mobileMenuState = false;
  public mobileMenuStateClose = false;

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private browser: BrowserService,
    private router: Router
  ) {}

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll() {
    if (this.browser.isBrowser) {
      this.scrolled = (window as any)?.scrollY > 0;

      if (this.scrolled) {
        this.renderer.addClass(
          (document as any)?.querySelector('body'),
          'scrolled'
        );
      } else {
        this.renderer.removeClass(
          (document as any)?.querySelector('body'),
          'scrolled'
        );
      }
    }
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.changeMenu(false));
  }

  public changeMenu(userEvent = true): void {
    if (!userEvent) {
      this.mobileMenuState = false;
      this.cdr.detectChanges();
      return;
    }

    if (this.mobileMenuState) {
      this.mobileMenuStateClose = true;
      setTimeout(() => {
        this.mobileMenuState = !this.mobileMenuState;
        this.mobileMenuStateClose = false;
        this.cdr.detectChanges();
      }, 1200);
    } else {
      this.mobileMenuState = !this.mobileMenuState;
      this.cdr.detectChanges();
    }
  }
}

import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bootTabAng';
  ngOnInit() {
    $('a[data-toggle="tab"]').on('hide.bs.tab', (e:any) => {
      const $old_tab = $($(e.target).attr("href"));
      const $new_tab = $($(e.relatedTarget).attr("href"));
    
      if ($new_tab.index() < $old_tab.index()) {
        $old_tab.css('position', 'relative').css("right", "0").show();
        $old_tab.animate({ "right": "-100%" }, 300, () => {
          $old_tab.css("right", 0).removeAttr("style");
        });
      } else {
        $old_tab.css('position', 'relative').css("left", "0").show();
        $old_tab.animate({ "left": "-100%" }, 300, () => {
          $old_tab.css("left", 0).removeAttr("style");
        });
      }
    });
    
    $('a[data-toggle="tab"]').on('show.bs.tab', (e:any) => {
      const $new_tab = $($(e.target).attr("href"));
      const $old_tab = $($(e.relatedTarget).attr("href"));
    
      if ($new_tab.index() > $old_tab.index()) {
        $new_tab.css('position', 'relative').css("right", "-2500px");
        $new_tab.animate({ "right": "0" }, 500);
      } else {
        $new_tab.css('position', 'relative').css("left", "-2500px");
        $new_tab.animate({ "left": "0" }, 500);
      }
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', (e:any) => {
    });
    
  }
}


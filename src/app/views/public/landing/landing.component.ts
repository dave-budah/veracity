import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'landing',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    reveal();

    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      console.log(posts);
    });
  }
}

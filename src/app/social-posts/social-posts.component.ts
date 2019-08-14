import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post"; //Import Post interface to social-posts component.

@Component({
  selector: "social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;

  posts: Post[] = [
    {
      title: "Dog",
      thought:
        "Bacon ipsum dolor amet pork shank biltong salami, pork chop chuck boudin cupim hamburger buffalo ham hock shoulder porchetta beef."
    },
    {
      title: "Cat",
      thought:
        "Drumstick jowl swine pork belly fatback shoulder tenderloin turkey picanha strip steak filet mignon meatball."
    },
    {
      title: "Pig",
      thought: "Frankfurter pig chicken kielbasa boudin filet mignon."
    },
    {
      title: "Cow",
      thought:
        "Corned beef biltong meatloaf turducken pastrami venison fatback picanha cupim. "
    }
  ];

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}

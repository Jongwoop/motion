import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Component } from "./components/component.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
    this.page.addChild(image);

    const note = new NoteComponent("Note Title", "Note Body");
    this.page.addChild(note);

    const todo = new TodoComponent("todo Title", "todo Body");
    this.page.addChild(todo);

    const video = new VideoComponent("video Title", "https://www.youtube.com/watch?v=aEPt7mNcUNU");
    this.page.addChild(video);
  }
}

new App(document.querySelector(".document")! as HTMLElement);

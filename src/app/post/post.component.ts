import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../shared/services/authentication.service";
import {MedicalFileService} from "../shared/services/medical-file.service";
import {User} from "../shared/models/user";
import {Autorisation} from "../shared/models/autorisation";
import {Post, TypePost} from "../shared/models/post";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @ViewChild('scrollBottom') private myScrollContainer: ElementRef;
  isLogged: boolean;
  autorisation: Autorisation;
  me: User = new User(null);
  usersPost: User[] = [];
  messengerBox: String[] = [];
  messengerListPosts: Post[] = [];
  newPost: Post;
  newPostText: string;

  constructor(private auth: AuthenticationService, private medicalService: MedicalFileService) { }
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();
    this.autorisation = new Autorisation(null);
    this.medicalService.getCurrentPatient()
      .subscribe( patient => {
        this.me = new User(patient.user_id); // OK
        // this.testPost.sender = this.me;
        // this.testPost.receiver = this.me;
        // this.testPost.text = "EHHHH";
        // this.testPost.type = TypePost.INFO;

        // this.medicalService.send_post(this.testPost)
        //  .subscribe( resp => {
        //    console.log('Post send');
        //  });
        // this.autorisation.user = this.me; // OK
        // this.autorisation.observer = this.me; // OK
        // this.medicalService.addAutorisation(this.autorisation)
        //  .subscribe( autorisation => {
        //    console.log(autorisation);
        //  });
        this.getAutorisationList(); // OK
      });
  }

  // getUserList() {
  //  this.medicalService.getCurrentPatient()
  //    .subscribe(patient => {
  //      this.medicalService.getUserList(patient.user_id)
  //        .subscribe( users => {this.usersMessage = users; });
  //    });
  // }

  // Get a list of all the users who can communicate with the patient connected.
  getAutorisationList() {
    this.medicalService.getPostAutorisation(this.me._id)
      .subscribe( autorisations => {
        // on cree une liste d'users a partir des autorisation
        for (const aut of autorisations) {
          let add = true;
          for (const user of this.usersPost) {
            if (user._id === aut.observer._id) {
              add = false;
            }
          }
          if (add) {
            this.usersPost.push(aut.observer);
          }
        }
      });
  }


  openMessenger(user: User) {
    this.messengerBox['name'] = user.first_name + ' ' + user.last_name;
    this.messengerBox['display'] = 'True';
    this.messengerBox['id'] = user._id;
    this.medicalService.get_posts(this.me._id, user._id)
      .subscribe( postsRequest => {
        this.medicalService.get_posts(user._id, this.me._id)
          .subscribe( postsResponse => {
            this.messengerListPosts = postsResponse;
            for (let i = 0; i < postsRequest.length; i++) {
              this.messengerListPosts.push(postsRequest[i]);
            }
            // tri des posts
            let tab_en_ordre = false;
            let taille = this.messengerListPosts.length;
            while (!tab_en_ordre) {
              tab_en_ordre = true;
              for (let i = 0 ; i < taille - 1 ; i++) {
                if (this.messengerListPosts[i].Created_at > this.messengerListPosts[i + 1].Created_at) {
                  const tempo = this.messengerListPosts[i + 1];
                  this.messengerListPosts[i + 1] = this.messengerListPosts[i];
                  this.messengerListPosts[i] = tempo;
                  tab_en_ordre = false;
                }
              }
              taille--;
            }
            console.log(this.messengerListPosts);
            this.scrollToBottom();
          });
      });
  }

  sendPost() {
    console.log('a new post will be sended with the text : ' + this.newPostText);
    this.newPost = new Post(null);
    this.newPost.text = this.newPostText;
    this.newPost.type = TypePost.POST;
    this.newPost.sender = this.me;

    this.medicalService.getUserById(this.messengerBox['id'])
      .subscribe( user => {
        this.newPost.receiver = new User(user);
        this.medicalService.addPost(this.newPost)
          .subscribe( resp => {
            this.openMessenger(user);
          });
      });
  }

  // ne fonctionne pas
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }
}

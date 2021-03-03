import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DatabaseService } from '../services/database.service';
import { MessagingService } from '../services/messaging.service';
//import { ThemeService } from '../services/theme.service';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import * as anime from '../services/anime.js'  // For splash animation

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  validationsForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Invalid email.' }
    ],

    // TODO: Validate password security at sign-up page only
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };

  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private database: DatabaseService,
    private messaging: MessagingService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private storage: Storage
    //,private theme: ThemeService

  ) {
    //this.animate();
  }    

  private loading;
  public debugging_mode = true;
  public toggle_dark_mode = false;
  
  ngOnInit() {

    this.debugging_mode = !environment.production;  // --prod
    
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });
    
    // Restore used user/password
    this.storage.get('email').then(value => {
      this.validationsForm.get('email').setValue(value);
    });
    this.storage.get('password').then(value => {
      this.validationsForm.get('password').setValue(value);
    });

    // Query for the toggle that is used to change between themes
    // Note: "dark" colors are defined in theme/variables.scss
    const toggle:any = document.querySelector('#themeToggle');
    toggle.addEventListener('ionChange', (ev:any) => {
      document.body.classList.toggle('dark', ev.detail.checked);
      this.storage.set('dark', ev.detail.checked);
    });

    this.storage.get('dark').then(value => {
      document.body.classList.toggle('dark', value);
      this.toggle_dark_mode = value; // This will also set ngModel for ion-toggle
    });
  }

  async loginUser(input){

    console.log(`> Attempting login: ${input.email}`);

    // Loading spinner overlay
    this.loading = await this.loadingCtrl.create({
      message: "Authenticating..."
    });
    this.loading.present();
    
    try { 

      // Authenticate user
      var res = await this.authService.loginUser(input);
      console.log(`> AWS Cognito authentication is successful: ${res.email}`);

      // Init database, retrieve user/drives info    
      this.setLoadingText("Reading database...");
      await this.database.init();
      console.log(`> Finished loading user: ${res.email}`);

      // Init cloud messaging/notifications
      this.setLoadingText("Initializing cloud messaging...");
      await this.messaging.init(res.email);

      this.setLoadingText("Login success.");
      setTimeout(() => {this.loading.dismiss();},2000);

      // Done initialization
      if (this.database.current.user.is_commander) {
        this.navCtrl.navigateForward('/tabs/commander');
      } else {
        this.navCtrl.navigateForward('/tabs/summary');
      }
      this.errorMessage = '';

      // On successful login, save it      
      this.storage.set('email', input.email);
      this.storage.set('password', input.password);

    } catch(err) {
      this.loading.dismiss();
      this.errorMessage = `Login failed. ${err.message}`;
    }
    //this.validationsForm.reset();
  }

  private setLoadingText(text:string) {
    const elem = document.querySelector(
      "div.loading-wrapper div.loading-content");
    if (elem) elem.innerHTML = text;
  }

  private debug(who) {
    if (who === 'driver') {
      this.validationsForm.get('email').setValue('meto@google.com');
      this.validationsForm.get('password').setValue('123456');
    }
    if (who === 'commander') {
      this.validationsForm.get('email').setValue('meoc@google.com');
      this.validationsForm.get('password').setValue('123456');
    }

    /*//if (who === 'driver') {
      this.validationsForm.get('email').setValue('tan97@gmail.com');
      this.validationsForm.get('password').setValue('123456');
    } else
    //if (who === 'commander') {
      this.validationsForm.get('email').setValue('lee55@gmail.com');
      this.validationsForm.get('password').setValue('123456');
    } else
    //if (who === 'admin') {
      this.validationsForm.get('email').setValue('superuser@gmail.com');
      this.validationsForm.get('password').setValue('123456');
    }*/
  }
  private animate() {
    // Only start animation when background image has finished loading
    document.body.classList.add('js-loading');
    window.addEventListener("load", () => 
    {
      document.body.classList.remove('js-loading');
      console.log("Inside window::load");

      anime.timeline({loop: false})
      .add({
        targets: '#login-content',
        opacity: [0,1],
        duration: 3000,
        easing: "easeOutExpo",
      }).add({
        targets: '#email',
        opacity: [0,1],
        translateY: ["50em",0],
        duration: 800,
        easing: "easeOutBack",
        offset: '-=3000'
      }).add({
        targets: '#password',
        opacity: [0,1],
        translateY: ["50em",0],
        duration: 800,
        easing: "easeOutBack",
        offset: '-=2500'
      }).add({
        targets: '.submit-btn',
        opacity: [0,1],
        translateY: ["50em",0],
        duration: 800,
        easing: "easeOutBack",
        offset: '-=2250'
      }).add({
        targets: '.signup-btn',
        opacity: [0,1],
        translateY: ["50em",0],
        duration: 800,
        easing: "easeOutBack",
        offset: '-=2000'
      }).add({
        targets: '#debug-stuff',
        opacity: [0,1],
        duration: 800,
        easing: "easeOutBack",
        offset: '-=1000'
      });
    });
  }
}

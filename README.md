# Verto Group
## Code Challenge

### Intro
A code challenge for applicants to demonstrate their developement skills and knowledge

### Challenge
You are to create a media library app using this laravel app and vue js.
The app must be able to do the following:
* Allow the user to search for images from unsplash
* Allow the user to select an image to add to the medai library
* Creates a responsive media page that allows for viewing a media item by it's self
* 

## Setup
This app is setup to use Laravel Homestead using vagrant so follow the instruction @ https://laravel.com/docs/6.x/homestead to use this

1. Fork this repo and git clone it to your local environment
2. Ensure that you have Vagrant, Virtual Box, PHP & Composer install and setup
3. Setup Homestead configuration by copying `Homesteade.example.yaml` to `Homestead.yaml` and change the following line:
```
    folders:
    - map: {{Add Path to Project Folder on your computer}}
    - to: /home/vagrant/code
```
4. Point `homestead.test` or custom domain to the ip address in the `Hoemstead.yaml` file
5. Navigate to the project folder
6. run `composer install`
7. run `vagrant up`
8. run `vagrant ssh` to ssh into the vagrant and naviage to the 'to' folder in your Homestead.yaml file
9. run `npm install` or `yarn install`
10. run `art key:generate`
10. Navigate to the URl that you have setup in homestead.yaml

** If you have difculty with getting vagrant to launch make sure that you run `vagrant destroy` to start again ***

Your all set to go

### Unsplash
To allow access to the Unsplash API you need to register as a developer with unsplash to get access to the API (https://unsplash.com/developers)

### Conclusion
Please respond to us when you have finished with the link to your repo
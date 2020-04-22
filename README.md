# README

Welcome to the DevPoint Store!! 
Here you will find all the awesome merch from DevPoint Labs and DevPoint Studios.
See the finished product here: https://devpoint-labs-store-2020.herokuapp.com/

This website was built with Ruby on Rails and React.js

To Get Started:
After cloning the repository, checkout the .env.example file.
You will need to create your own Cloudinary account and enter your keys into the .env folder to load images and escape the 401 (unauthorized) error.
Visit the '/login' page to log in as an admin and add/update/remove merch.
Visit the '/' page to get the full user experience.

To set up the Mailer (sends receipt to provided e-mail address after purchase):
Go to application mailer and add your email to default from:
   Put the following into the .env file:
      GMAIL_USERNAME= your Gmail address
      GMAIL_PASSWORD= your Gmail password 

If you experience issues you may need to turn on the "Allow Less Secure Application" setting in your Gmail Account.

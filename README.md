# README

Welcome to the DevPoint Store!! <br />
Here you will find all the awesome merch from DevPoint Labs and DevPoint Studios.<br />
See the finished product here: https://devpoint-labs-store-2020.herokuapp.com/<br /><br />

This website was built with Ruby on Rails and React.js<br /><br />

To Get Started:<br />
After cloning the repository, checkout the .env.example file.<br />
You will need to create your own Cloudinary account and enter your keys into the .env folder to load images and escape the 401 (unauthorized) error.<br />
Visit the '/login' page to log in as an admin and add/update/remove merch.<br />
Visit the '/' page to get the full user experience.<br /><br />

To set up the Mailer (sends receipt to provided e-mail address after purchase):<br />
Go to application mailer and add your email to default from:<br />
   Put the following into the .env file:<br />
      GMAIL_USERNAME= your Gmail address<br />
      GMAIL_PASSWORD= your Gmail password <br /><br />

If you experience issues you may need to turn on the "Allow Less Secure Application" setting in your Gmail Account.

<img src="doc/landing.png">

## Installation
To view this application, you must first [install meteor](https://www.meteor.com/install).  Next, go to your Command Prompt (windows) and cd into your /app directory.  
Then type $meteor npm install.  Once that is finished, type $meteor npm run start.  Once this is done running, your application should run on the website http://localhost:3000.

## Walkthrough
The first page is the Landing page as shown in the picture above.  This is an introductory page that tells you what you need to know about the application you are signing up for.  The top right corner is the user icon where you can either sign up or sign in.
  

#### Login page

Clicking on the Login link, then on the Sign In menu item displays this page:

<img src="doc/login.png">

#### Register page

If you do not have an account or would like to make a new one, clicking on the Login link, then on the Sign Up menu item displays this page where you can register:

<img src="doc/register.png">


#### Landing (after Login) page, non-Admin user

Once you log in (either to an existing account or by creating a new one), the top menu shows more option tabs:
<img src="doc/user-landing.png">

You can now add new COntact documents, and list the Contacts you have created. Note you cannot see any Contacts created by other users.

#### Add Contact page
This is the first tab on the home page.  This will allow you to add a person's information into the database with the required fields as shown below. 

<img src="doc/add.png">

#### List Contacts page

Clicking the "List Contacts" tab will show you all of the contacts you have added into your system.

<img src="doc/list.png">

You click the "Edit" link to go to the Edit Contact page, shown next.

You can also place a side note attached to the contact in the bottom portion of the contact card.  It will show you your note along with a time stamp.

#### Edit Contact page

If you accidentally see you have made a mistake, then you can press the edit option on the contact card. This will take you to the page shown below where you can resubmit your changes.

<img src="doc/edit.png">

#### Landing (after Login), Admin user

If you want to add an extra "admin" user, you can do so in the settings.json file. This user, after logging in, gets a special entry in the navbar:
<img src="doc/admin-landing.png">

#### Admin page (list all users contacts)

The admin page will have the same exact properties, but it will have one extra tab called "admin".  This tab will show all contacts in the system and will show who the owner is as shown:
<img src="doc/admin.png">

Note that non-admin users cannot get to this page, even if they type in the URL by hand.

### Collections

The application implements a single Collection called "Contact". Each Contact document has the following fields: firstName, lastName, address, image, and description (admin: owner).

The Contact collection is defined in [imports/api/contact/Contacts.js](https://github.com/auusui/digits/blob/master/app/imports/api/contact/Contacts.js).

The Contact collection is initialized in [imports/startup/server/Publications.js](https://github.com/auusui/digits/blob/master/app/imports/startup/server/Publications.js).


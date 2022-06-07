# ViLog

![ViLog Logo](/public/viLog.png?raw=true "Logo")

## Project Objective

The AmaliTech Visitors Logbook is an automated monitoring system for AmaliTech that
would monitor visitors to AmaliTech premises, and provide accurate and reliable reports
to AmaliTech Management

## Technologies Used

- Front End built with react
- Express server for serve the react app
- Postgres Database
- Host: Heroku
- App Logo created with Adobe AI

### `Usage`

View [On heroku](https://vilogsys.herokuapp.com) the hosted version.

Or the app in the development mode.\
By first cloning the repo, `npm install` and the `npm start`\
Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Database`

- Two tables **(Users, Visitors)** on the database
- Users table to keep records of host and admins
- Visitors table to keep daily record of the visitors, login, logout times and the login methods.
- ![Visitors Table](/public/databaseVisitorsTable.png?raw=true "Optional Title")
- App makes use of redux store to temporarily hold visitor data before pushing to dataabase.

### `For Host / Admin`

![Main menu](/public/mainMenu.png?raw=true "Optional Title")

On the main index page host or admin would select the host/Admin option. Which then redirects to Login page with a Sign Up option

![Host sign in](/public/adminLogin.png?raw=true "Optional Title")

After host or admin, user is then redirected to either the host or admin dashboard depending on the admin access

Host dashboard, mainly contains tables of the visitors, and has the functionality to search for particular visitors and also retrieve visitors for a given date

While admin dashboard has an added functionality of managing the employee data, and viewing graphs and summaries of visitor activity

### `For Visitors`

On the main index page visitor would select the visitor option. Which then redirects to the visitor login and logout page

### login

```txt
With the visitor login, a visitor has the options to login with an email(recommended), and username, or QR code

The fourth option is to register for a QR code. After selecting this option, visitor then would enter the email in the input and receive the QR code upon submission.
```

![Visitor Login](/public/visitorLoginOptions.png?raw=true "Optional Title")

### logout

```txt
Visitor selects the logout tab, and start typing the email or username. A list of visitor cards with logged in user details matching the been typed email/username is made available, which the visitor would then click to logout.
```

![Visitor Logout](/public/visitorLogout.png?raw=true "Optional Title")

## **vilog**

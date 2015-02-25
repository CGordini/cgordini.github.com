eating
======

Website for the #eating/Hope For Pahokee project.

To develop from scratch, you must have Node Package Manager (NPM) and Bower (npm install -g bower).
Then just open the INDEX.HTML file!

To build dist:
  npm install
  bower update
  (Make sure there's a copy of most recent index.html in the dist folder with appropriate JS and CSS references)
  grunt

ToDo list can be found in todo.txt.

Legalese to follow:
======

Most UI components adopted from the Bootstrap library (getbootstrap.com/components/) (http://angular-ui.github.io/bootstrap/).
All of which are free to use and modify, so several of my custom directives are derivatives of these components.

Bootstrap theming came from a mixture of the Paper and Cerulean themes off of http://bootswatch.com/.

Facebook, Twitter, and Instagram icons came out of the FontAwesome library, and were colored based on each websites default icon color.
See: http://fortawesome.github.io/Font-Awesome/

University of Michigan icon comes from http://vpcomm.umich.edu/brand/style-guide/logo-guidelines, and follows all guidelines therein.
Original asset is stored in /images, and was embedded in the App.CSS file in Base 64.

We also use the University of Michigan required colors for Maize and Blue -- Maize in the icon, Blue in page headers.

Reddit icon comes from an adoption of the resources available via http://www.reddit.com/wiki/licensing.

The Email icon is an adoption of the GMail icon found on http://www.iconarchive.com/show/plex-icons-by-cornmanthe3rd/Communication-gmail-icon.html
I wanted to use the original GMail icon, but licensing was unclear, so I went with an alternative.

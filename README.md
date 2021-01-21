# my-awesome-image-repo

My Awesome Image Repo is an app in which registered users can see, post (add), edit and delete images associated with their accounts. The text data are stored in PostgreSQL, while the images are stored in S3 (AWS). 


## Final Product

![Screenshot Login](https://github.com/RicardoJBOF/my-awesome-image-repo/blob/master/docs/login-page.png)
![Screenshot Album](https://github.com/RicardoJBOF/my-awesome-image-repo/blob/master/docs/home-page.png)
![Screenshot Add Picture](https://github.com/RicardoJBOF/my-awesome-image-repo/blob/master/docs/add-picture-page.png)


## Dependencies
- Express
- Node 10.x or above
- NPM 5.x or above
- PostgreSQL 6.x
- Amazon S3


## Getting Started

- DB:
  - Create a new DB in your PostgreSQL 6.x.
  - Create a new bucket in your Amazon S3 account.
    - Update your Permissions Cross-origin resource sharing (CORS):
    ```
    [
      {
          "AllowedHeaders": [
              "*"
          ],
          "AllowedMethods": [
              "POST",
              "GET",
              "DELETE",
              "PUT"
          ],
          "AllowedOrigins": [
              "*"
          ],
          "ExposeHeaders": []
      }
    ]
    

- Server:
  - Install dependencies using the `npm install` command.
  - Create and update a .env
  - Reset database using `npm run db:reset`.
  - Start the web server using the `npm run dev` command.

- Client:
  - Install dependencies using the `npm install` command.
  - Create and update a .env
  - Start the web server using the `npm run local` command. The app will be served at <http://localhost:3000/>. 
  - Go to <http://localhost:3000/> in your browser.


## Requirements

- Only registered users can see their pictures 
- Registered users can add, edit and delete their pictures







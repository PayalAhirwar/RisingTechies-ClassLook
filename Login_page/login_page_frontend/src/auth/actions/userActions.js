import axios from 'axios';
export const loginUser = (credentials,setFieldError,setSubmitting) => {
         // Make checks and get some data
          axios.post("https://payalahirwar.github.io/login_page.github.io/",
          credentials,
          {
            headers : {
               "Content-Type": "application/json"
            }
          }
          ).then((response)=> {

          }).catch(err => console.error(err))

         const user = {
            name: "John",
            email:"john@gmail.com"
         } 
         const status = true;

         if(status === true) {
         //Allow access and redirect
         }else {
         // Return error to the user
         
         }
}

export const signupUser = (credentials,setFieldError,setSubmitting) => {

}

export const logoutUser = () => {

}
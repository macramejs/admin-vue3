import { loadUser } from "@/modules/api";
import { isAuthenticated, authedUser } from "@/modules/auth";

const auth = ({ next, router }) => {
  if(isAuthenticated.value){
    return next();
  }
  loadUser()
    .then(response => {
      isAuthenticated.value = true 
      authedUser.value = response.data 
      return next()
    })
    .catch((error)=>{
      console.log('please login', {error});
      isAuthenticated.value = false
      return router.push('/login');
    })
        
        return next();
}

const guest = ({ next, router }) => {
  if(isAuthenticated.value){
    loadUser()
      .then(response => {
        // not a guest, go home!
            isAuthenticated.value = true 
            authedUser.value = response.data 
        return router.push('/');
      })
      .catch(()=>{
        // is a guest, continue…
            isAuthenticated.value = false
        return next();
      })
  }
  return next()
  
    
}

export {auth, guest}
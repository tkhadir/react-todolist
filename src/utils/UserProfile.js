var UserProfile = (function() {

    var getTasks = function() {
        return sessionStorage.getItem('tasks');
    }
  
    var save = function(tasks) {  
        sessionStorage.setItem('tasks', tasks);
    };
  
    return {
      save: save,
      getTasks: getTasks
    }
  
  })();
  
  export default UserProfile;
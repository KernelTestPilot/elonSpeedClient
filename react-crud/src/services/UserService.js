import http from "../http-common";

class UserService {
 
  create(data) {
    return http.post("user/register", data);
  }


  login(data) {
    return http.post("user/login", data);
  }


  getId(data) {
    return http.post("user/getId", data);
  }



 
}

export default new UserService();
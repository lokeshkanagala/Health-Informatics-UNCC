import {Injectable} from '@angular/core';
import {
  CognitoUserPool, CognitoUserAttribute, CognitoUser,
  CognitoIdentityServiceProvider, AuthenticationDetails
} from 'amazon-cognito-identity-js';
import {ActivatedRoute, Router} from '@angular/router';
@Injectable()
export class AuthService {

  poolData = {
  UserPoolId : 'us-east-1_kzOihZumJ',
  ClientId : '7egh0r51nn71i54j8044753vm6'
   };
  userPool = new CognitoUserPool(this.poolData);

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  SignUpUser(username, password, phonenumber, email): Promise<string>{

    var attributeList = [];
    var dataEmail = {
      Name : 'email',
      Value : email
    };
    var dataPhoneNumber = {
      Name : 'phone_number',
      Value : phonenumber
    };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    return new Promise((resolve,reject)=>{
      this.userPool.signUp(username, password, attributeList, null, function(err, result){
        if (err) {
          alert(err);
          console.log('error');
          reject('error');
        } else {
          var cognitoUser = result.user;
          console.log('user name is ' + cognitoUser.getUsername());
          resolve('user');
        }
      });
    });
  }

  VerifyUser(otp, username): Promise<string> {
    var userData = {
      Username : username,
      Pool : this.userPool
    };
    var cognitoUser = new CognitoUser(userData);
    return new Promise((resolve, reject)=>{
      cognitoUser.confirmRegistration(otp, true, function(err, result) {
        if (err) {
          alert(err);
          reject('error');
        }else {
          console.log('call result: ' + result);
          resolve('success');
        }
      });
    });

  }

  LoginUser(username, password): Promise<string>{
    var authenticationData = {
      Username : username,
      Password : password
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var userPool = new CognitoUserPool(this.poolData);
    var userData = {
      Username : username,
      Pool : userPool
    };
    var cognitoUser = new CognitoUser(userData);
    return new Promise((resolve,reject) => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          resolve(result.getAccessToken().getJwtToken());
        },

        onFailure: function(err) {
          alert(err);
          console.log('error in h2');
          reject('error');
        }
      });
      });
  }



}

import { LightningElement, track } from 'lwc';

export default class EmpLogIn extends LightningElement {
    @track
    loginDisabled = true;
    userName
    password
    setLogin(event){
        this.userName = event.detail.value
        if(this.userName && this.password){
            this.loginDisabled = false
        }else{
            this.loginDisabled = true
        }
    }
    setPassword(event){
        this.password = event.detail.value
        if(this.userName && this.password){
            this.loginDisabled = false
        }else{
            this.loginDisabled = true
        }
    }
}
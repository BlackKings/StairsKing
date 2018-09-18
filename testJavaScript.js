function a(){
    var user = "greenking";
    console.log(this.user);
    console.log(this);
}

window.a();
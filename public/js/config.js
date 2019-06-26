appModule.constant('READ_URL','http://localhost:2222/read'+"?userid="+localStorage.userid);
appModule.constant('CREATE_URL','http://localhost:2222/create'+"?userid="+localStorage.userid);
appModule.constant('UPDATE_URL','http://localhost:2222/update/:name'+"?userid="+localStorage.userid);
appModule.constant('DELETE_URL','http://localhost:2222/delete/:name'+"?userid="+localStorage.userid);
appModule.constant('LOGIN_URL','http://localhost:2222/login');
appModule.constant('SIGNUP_URL','http://localhost:2222/signup');
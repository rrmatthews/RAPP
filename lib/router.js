Router.configure({layoutTemplate: 'layout',})
Router.route('/',{name:'main'});
Router.route('about');
Router.route('/about/info',{name:'info'});

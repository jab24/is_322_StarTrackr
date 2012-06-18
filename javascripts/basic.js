// Add a test to Modernirz for standalone mode
Modernizr.addTest('standalone',function(){
	return window.navigator.standalone;
});
if(!!navigator.standalone){
	document.documentElement.setAttribute('class,document.documentElement.getAttribute('class') + "standalone");
}

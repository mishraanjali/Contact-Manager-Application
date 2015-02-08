
var defaultContacts = {
    "App.Contact":{
        "records":{
        }
    }
};

if (localStorage) {
	
    if ( !localStorage.getItem('DS.LSAdapter') )
        localStorage.setItem( 'DS.LSAdapter', JSON.stringify(defaultContacts) );
} 

else {
    throw new Error("This browser does not seem to support localStorage.");
}

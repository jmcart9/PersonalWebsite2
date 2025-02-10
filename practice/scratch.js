function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
		this.yearsOfExperience = yearsOfExperience; 
		this.name = name;
		this.cleaningRepertoire = cleaningRepertoire;	
        this.clean = function() {
            alert("cleaning!");
        }
}
	
var houseKeeper1 = new HouseKeeper(10, "johnn", ["cleaning"]);
console.log(houseKeeper1);
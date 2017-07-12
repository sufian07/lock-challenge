describe("script",function(){
	var lock = ["....","AB..",".C..","...."];
	var actions = "RDL"

	it("should return expected value",function(){
		var output = ["....", "....", "B...", "AC.."];
		expect(secretArchivesLock(lock,actions)).toEqual(output);
	});

});
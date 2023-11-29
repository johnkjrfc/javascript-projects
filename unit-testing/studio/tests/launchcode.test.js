// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("if ornganization = nonprofit, test passes", function(){
    expect(launchcode.organization).toBe('nonprofit');
  });
  test("if executiveDirector = Jeff, test passes", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("if percentageCoolEmployees = 100, test passes", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("if programsOffered = ['Web Development', 'Data Analysis', 'Liftoff'], test passes", function(){
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });
  // Write your unit tests here!
  
});
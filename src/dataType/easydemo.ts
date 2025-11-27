//1.Number Variable//
let age: number = 27
console.log("Age:",age);

//2.String Variable//
let username: string = "Faizan Khan"
console.log("Username:",username);

//3.Boolean Variable//
let isMarried: boolean = true
let isSingle: boolean = false
console.log("Is Married:",isMarried);
console.log("Is Single:",isSingle); 

//4. Variable//
var city: string = "New York"
city = "Tirupattur"
console.log("City:",city);

//5. let example//
let ContactNumber: number = 9876543210
ContactNumber = 9095128786
console.log("Contact Number:",ContactNumber);

//6. Constant Variable//
const height: number = 5.5
console.log("height:",height);

//7. any Data Type//
let inwordmonthlyIncome: any = "Fifty Thousand"
console.log("Monthly Income:",inwordmonthlyIncome)
let monthlyinomeinamount:number = 50000
console.log("Monthly Income in Amount:",monthlyinomeinamount);

//8.Union Data Type//
let district: string | number = "Vellore";
console.log("District:",district);
district = 632512
console.log("District Pin Code:",district);

//9. String Array//
let degrees: string[] = ["BBA","MBA"]
console.log("Degrees:",degrees);

//10. Number Array//
let CGPA: number[] = [85,90,78,92]
console.log("Marks:",CGPA);

//11.Generic Array//
let noofdegrees: Array<number>= [1,2]
console.log("Number of Degrees:",noofdegrees);

//12. Tuple Data Type//
let collegename: [string, number] = ["SHC", 635601]
console.log("College Name and Pin code:",collegename);

//13. undefined //
let unversityname: string | undefined = undefined
console.log("University Name:",unversityname); // not assigned value
unversityname = "Thiruvalluvar University"
console.log("University Name:",unversityname);

//14. Object Data Type//
let principal: {name: string, age: number} = {
    name: "Dr. Father John",
    age: 58};
console.log("Principal Details:",principal);

//15. Optional Property//
let employeeid: {id: number, mailid?: string}
= {id: 101, mailid: "shc@gamil.com"}
console.log("Employee ID with Mail ID:",employeeid);

//16. Optional Property not assigned//
let idcode: {id: number, mailid?: string}
= {id: 101}
console.log("ID card Code:",idcode);

//17. Null Data Type//
let privatename: null = null;
console.log("Type",privatename);

//18. Enum in Number//
enum ranking {
   Top,
   moderate,
   Okay
}
let clgranking: ranking = ranking.moderate
console.log("College Rank:",clgranking);

//19. Enum in String//
enum rankings {
    Top = "Vera Level",
    moderate = "Average",
    Okay = "Below Average"
 }
 let clgrankings: rankings = rankings.moderate
 console.log("College status:",clgrankings);

 //20. Nested Object//

let fatherprofile: {
  name: string;
  address: { City: string; State: string; Pincode: number };} 
  = {
  name: "Mr. John",
  address: { City: "Tirupatur", State: "Tamil Nadu", Pincode: 632-512 }
};
 console.log("Father Profile:",fatherprofile);

 // 22. Union Array//
 let registerednumbers: (number | string)[] = [45,"SHC111"];
    console.log("Registered Numbers:",registerednumbers);

//23. Tuple with optional//
let collegeinfo: [string, number?] = ["SHC"];
console.log("College Info:",collegeinfo);

//24. Function with return type//
function sub(a: number, b: number): number {
    return b - a}
    console.log("Subtraction:",sub(50,150));

// 25. void //
function greet(): void {
    console.log("Welcome to SHC College");
}
greet();
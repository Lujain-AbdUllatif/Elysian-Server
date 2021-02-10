# Elysian - Server 

The Server is basically made for a two sides use; 
- the *tester* who makes tests composed or several exercises with images and questions.
- the *examinee* who will take the test. 

These are the **Routes** the server provides with the documentation below:
1. Tester: Sign-up  
2. Examinee: Sign-up 
3. Tester: Sign-in 
4. Examinee: Sign-in 
5. Tester: Make Exercise   
6. Tester: View Exercises  
7. Tester: Make Test  
8. Tester: Get all Examinees
9. Tester: View tests  
10. Examinee: View test
11. Examinee: Set Answers

Note that: *access_token should be included in all requests*

1. **Tester: Sign-up**

Route: http://localhost:4000/tester/signup   
Method: POST  
Request body : should be an object like   
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: String (e.g. "muhammad awwad"),  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: String (e.g "hammode.awad@gmail.com"),  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass:String (e.g. "123")  
}  
Response body : should be object like  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;token: access_token as a String,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg: ”email created successfully”  
}  
<br /> 
<br /> 
2. **Examinee: Sign-up**

Route: http://localhost:4000/examinee/signup  
Method: POST  
Request body : should be an object like  
{  
	"name": String (e.g. "kobe bryant"),  
	"email":String (e.g. "kobe.bryant@gmail.com"),  
	"pass":String (e.g. "123")  
}  
Response body : should be object like  
{  
    token: access_token as a String,  
    msg: ”email created successfully”  
}  
<br /> 
<br /> 
3. **Tester: Sign-in**

Route: http://localhost:4000/tester/signin  
Method: POST  
Request body : should be an object like  
{  
  email: String (e.g. "tester1@gmail.com"),  
password: String (e.g. "123")  
}  
Response body : should be object like  
{  
  access_token: access_token as a String,  
	tests_id: [array of ids],  
	examinees_id: [array of ids]  
}  
<br /> 
<br /> 
4. **Examinee: Sign-in**

Route: http://localhost:4000/examinee/signin  
Method: POST  
Request body : should be an object like  
{  
  email: String (e.g. "examinee1@gmail.com"),  
  password: String (e.g. "123")  
}  
Response body : should be object like  
{  
  access_token: access_token as a String,  
  upcoming_test: id as a String  
}  
<br /> 
<br />
5. **Tester Make Exercise** 

Route: http://localhost:4000/tester/addExercise  
Method: POST  
Request body:   
{  
  data: {  
  name: String (e.g. "Animals"),  	
  images: Array of Objects (e.g. [{ "number": 1, "url": "http://animals.jpg"},{ "number":2, "url": "http://animals.jpg"}]),  
  questions: Array of Objects (e.g. [{"question" : "what is that animal" ,"keyword" :  "animal" , "answers" : ["1","2","3"]}, {"question" : "we sit on it" , "keyword" : "sit" , "answers" : ["1","3"]}])  
  }  
}  
Response body : should be array likewise  
{  
  msg: "exercise added successfully!"  
}  
<br />
<br />
6. **Tester: View Exercises**

Route: http://localhost:4000/tester/exercises  
Method: POST  
Request body : should be an object like  
{  
	"tests_id": [array of ids] (e.g. ["6011a48a6bc8aed7b7f4911a","6011a4d16bc8aed7b7f4911b"])  
}  
Response body : should be object like  
{   
It should return an array of objects  
[{ex1}, {ex2}]  
Exercises >>> {_id, name, images:[ImagesSchema], questions: [QuestionsSchema]}  
}  
<br />
<br />
7. **Tester: make test**

Route: http://localhost:4000/tester/maketest  
Method: POST  
Request body : should be an object like  
{  
	name: String (e.g. "test1"),  
	time: Number,  
  exercises:[array of ids]  
}  
Response body : should be object like  
{  
  exercises: Array of IDs (e.g ["601437c113920b0cf7c28052"]),  
  _id: String (e.g. "60145f2cc01a322aeea6b538"),  
  name: String (e.g."test1"),  
  time: Number (e.g. 52),  
  __v: 0  
}  
<br />
<br />
8. **Tester: Get All Examinee**

Route: http://localhost:4000/tester/examinees  
Method: POST  
Request body : should be an object like  
{  
	"examinees_ids": Array of IDs (e.g. ["600feed49723372560d7a8c4", "60102668807d53441465eeb5"])  
}  
Response body : should be object like  
{[{  
    done_tests: Array of IDs,   
    Upcoming_tests: String "ID",  
    _id: String (e.g. "600feed49723372560d7a8c4"),  
    name: String (e.g. "examinee1"),  
    email:String (e.g. "examinee1@gmail.com"),  
    __v: 0  
    },  

  	{  
    done_tests: Array of tests Ids,  
    Upcoming_tests: String "ID",   
    _id: "60102668807d53441465eeb5",  
    name: "examinee2",  
    email: "examinee2@gmail.com",  
    __v: 0  
}]}  
<br />
<br />
9. **Tester: View Test**

Route: http://localhost:4000/tester/tests  
Method: POST  
Request body : should be an object like  
{  
	tests_id :[array with ids]  
}  
Response body : should be object like  
{  
	data:   
[array of objects each object is a test]>>[{test1}, {test2}...]
test_Object is >>>_id, name, time, exercises: [{ex1},{ex2}, … ]
Exercises >>> {_id, name, images:[ImagesSchema], questions: [QuestionsSchema]}  
}  
<br />
<br />
10. **Examinee View Test**

Route: http://localhost:4000/examinee/test  
Method: POST  
Request body : should be an object like  
{  
	test_id : String "ID"  
}  
Response body : should be object like:  
{  
	data:   
[array of objects each object is a test]>>[{test1}, {test2}...]
test_Object is >>>_id, name, time, exercises: [{ex1},{ex2}, … ]
Exercises >>> {_id, name, images:[ImagesSchema], questions: [QuestionsSchema]}  
}  
<br />
<br />
11. **Examinee: Set Answers**

- If the test is *done*:  
Route: http://localhost:4000/examinee/answers  
Method: POST  
Request body : should be an object like  
{  
	test_status: "done",  
	score: Number,  
	date: String "09.02.2021",   
	overall_time: Number,   
	test_id: String "6011a48a6bc8aed7b7f4911a”  
}  
Response body : should be object like  
{  
	"msg": "Saved Successfully"  
}  
- If the test *isn’t done*:
Route: http://localhost:4000/examinee/answers  
Method: POST  
Request body : should be an object like  
{  
	test_status: "done",  
	Test_id: String “ID”,  
	exercise_id: String “ID”,   
	question_id: String “ID”,  
	answers: Array of arrays of numbers (e.g [[2], [1,2]]),   
	Final_status: “fail” OR “success”  
}  
Response body : should be object like  
{  
	result: {object of the record added}  
	"msg": "The answer was saved successfully"   
}  






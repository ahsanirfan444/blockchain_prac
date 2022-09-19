function student_func(first_name,last_name,age){
    this.first_name=first_name,
    this.last_name=last_name,
    this.age=age,
    this.full_name= function(){
            console.log(this.first_name+" "+ this.last_name)
        }
    
 
}


student_func.prototype.colour = function(){
    console.log("Your colour is black")
}


var a = new student_func("HTML","CSS")

console.log(a)





// console.log(student.full_name(),student.age)
function student_func(first_name,last_name,age){
    student ={
        first_name:first_name,
        last_name:last_name,
        age:age,
        full_name: function(){
            console.log(this.first_name+" "+ this.last_name)
        }
    }
    return console.log(student.full_name())
 
}


student_func("ahsan","irfan",30)


// console.log(student.full_name(),student.age)
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Karthik:karthik1234@cluster0.fohsgzm.mongodb.net/DBMS_Assign")

//create a data schema 
const CourseTableSchema = {
    Course_ID: String,
    Course_Name: String,
    Course_Credits: String,
    Desc: String
}

const StudentTableSchema = {
    Student_ID: String,
    S_Course_ID: String,
    Student_Name: String,
    Email: String
}

const FacultyTableSchema = {
    Faculty_ID: String,
    Faculty_Name: String,
    Faculty_Email: String,
    Phone_No: String,
}

const FeesTableSchema = {
    Payment_ID: String,
    F_StudentID: String,
    Amount: String,
    Status: String
}

const CourseTable = mongoose.model("CourseTable", CourseTableSchema);
const StudentTable = mongoose.model("StudentTable", StudentTableSchema);
const FeesTable = mongoose.model("FeesTable", FeesTableSchema);
const FacultyTable = mongoose.model("FacultyTable", FacultyTableSchema);

app.use(express.static('.'))


app.post("/", function (req, res) {
    let NewCourseEntry = new CourseTable({
        Course_ID: req.body.Course_ID,
        Course_Name: req.body.Course_Name,
        Course_Credits: req.body.Course_Credits,
        Desc: req.body.Description
    });
    let NewStudentEntry = new StudentTable({
        Student_ID: req.body.Student_ID,
        S_Course_ID: req.body.S_Course_ID,
        Student_Name: req.body.Student_Name,
        Email: req.body.Email
    });
    let NewFeesEntry = new FeesTable({
        Payment_ID: req.body.Payment_ID,
        F_StudentID: req.body.F_StudentID,
        Amount: req.body.Amount,
        Status: req.body.Status
    });
    let NewFacultyEntry = new FacultyTable({
        Faculty_ID: req.body.Faculty_ID,
        Faculty_Name: req.body.Faculty_Name,
        Faculty_Email: req.body.Faculty_Email,
        Phone_No: req.body.Phone_No
    });

    NewCourseEntry.save();
    NewStudentEntry.save();
    NewFeesEntry.save();
    NewFacultyEntry.save();

    res.redirect('/');
})


app.listen(3000, function () {
    console.log("server is running on 3000");
})


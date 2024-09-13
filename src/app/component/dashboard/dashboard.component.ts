import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showLoader: boolean = false;

  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  mobile: string = '';
  editMode: boolean = false;
  studentToEdit: Student | null = null;
  studentForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private data: DataService,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      mobile: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.showLoader = true;
    this.data.getAllStudents().subscribe(
      (res) => {
        this.studentsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          this.showLoader = false;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching student data');
      }
    );
  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.mobile = '';
    this.editMode = false;
    this.studentToEdit = null;
  }

  addStudent() {
    if (
      this.first_name == '' ||
      this.last_name == '' ||
      this.mobile == '' ||
      this.email == ''
    ) {
      alert('Fill all input fields');
      return;
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.mobile = this.mobile;

    this.data.addStudent(this.studentObj).then(() => {
      this.resetForm();
    });
  }

  updateStudent() {
    if (
      this.first_name == '' ||
      this.last_name == '' ||
      this.mobile == '' ||
      this.email == ''
    ) {
      alert('Fill all input fields');
      return;
    }

    if (this.studentToEdit) {
      const updatedStudent: Student = {
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        mobile: this.mobile,
      };

      this.data.updateStudent(updatedStudent).then(() => {
        this.resetForm();
      });
    }
  }

  editStudent(student: Student) {
    this.studentToEdit = student;
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.email = student.email;
    this.mobile = student.mobile;
    this.id = student.id;
    this.editMode = true;
  }

  deleteStudent(student: Student) {
    if (
      window.confirm(
        'Are you sure you want to delete ' +
          student.first_name +
          ' ' +
          student.last_name +
          ' ?'
      )
    ) {
      this.data.deleteStudent(student);
    }
  }
}

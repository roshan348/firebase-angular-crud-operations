import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private afs: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  addStudent(student: Student) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  deleteStudent(student: Student) {
    this.afs.doc('/Students/' + student.id).delete();
  }

  updateStudent(student: Student) {
    // return this.afs.doc('/Students/' + student.id).update(student);
    return this.afs.doc(`/Students/${student.id}`).update(student);
  }

  // updateStudent(student: Student) {
  //   console.log('Updating student in Firestore with ID:', student.id);
  //   return this.afs
  //     .doc<Student>(`/Students/${student.id}`)
  //     .update(student)
  //     .then(() => {
  //       console.log('Update successful');
  //     })
  //     .catch((err) => {
  //       console.error('Error updating document:', err);
  //     });
  // }
}

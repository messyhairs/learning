import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ManageService } from './manage.service';
import { Team } from './team';
import { Employee } from './employee';
@Component({
  selector: 'app-patchcomp',
  templateUrl: './patchcomp.component.html',
  styleUrls: ['./patchcomp.component.css'],
  providers: [FormBuilder]
})
export class PatchcompComponent implements OnInit {
  teamForm: FormGroup;
  isValidFormSubmitted = null;
  allSkills: Observable<any[]>;
  constructor(
    private formBuilder: FormBuilder,
    private teamMngService: ManageService) {
  }
  ngOnInit() {
    this.allSkills = this.teamMngService.getSkills();
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      employees: this.formBuilder.array([
        this.formBuilder.group(new Employee()),
        this.formBuilder.group(new Employee())
      ])
    });

  }
  get teamName() {
    return this.teamForm.get('teamName');
  }
  get employees(): FormArray {
    return this.teamForm.get('employees') as FormArray;
  }
  addEmployee() {
    const fg = this.formBuilder.group(new Employee());
    this.employees.push(fg);
  }
  deleteEmployee(idx: number) {
    this.employees.removeAt(idx);
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.teamForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    const team: Team = this.teamForm.value;
    this.teamMngService.saveTeam(team);
    this.teamForm.reset();
  }
  patchEmployeeValues() {
    this.employees.patchValue([
      { empId: '111', empName: 'Mohan' },
      { empId: '112', skill: 'Angular' }
    ]);
  }
  setEmployeeValues() {
    this.employees.setValue([
      { empId: '111', empName: 'Mohan', skill: 'Java' },
      { empId: '112', empName: 'Krishna', skill: 'Angular' }
    ]);
  }
    resetTeamForm() {
      this.teamForm.reset();
    }
  }

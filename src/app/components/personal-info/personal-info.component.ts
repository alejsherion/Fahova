import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  gender: string[] = [
    "Masculino",
    "Femenino"
  ];

  documentType: string[] = [
    "CC",
    "CE"
  ];

  personalInfo: PersonalInfo;

  constructor() { 
    this.loadPersonalInfo();
  }


  ngOnInit() {
    
  }


  loadPersonalInfo() {
    this.personalInfo = {
      address: null,
      birthDate: null,
      city: null,
      companyId: null,
      companyLogo: null,
      companyName: null,
      country: null,
      documentExpredition: null,
      documentId: null,
      documentType: null,
      firstName: null,
      gender: null,
      lastName: null,
      nick: null,
      phone: null
    }
  }
}

interface PersonalInfo {
  nick: string,
  firstName: string,
  lastName: string,
  birthDate: Date,
  gender: string,

  documentType: string,
  documentId: number,
  documentExpredition: string,

  companyName: string,
  companyId: number,
  companyLogo: String,

  city: string,
  country: string,

  address: string,
  phone: number
}
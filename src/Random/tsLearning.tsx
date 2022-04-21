
interface People {
    name: string;
    age: number;
    adress: string;
  }
  
  interface Profession {
    isStudying: boolean;
    isWorking: boolean;
    isInSchool: boolean;
  }
  
  type TimeUnit = "hours" | "min" | "sec";
  
  type Time = `${number} ${TimeUnit}` | `${number}${TimeUnit}`;
  interface FreeTime {
    hobbies: string;
    timeSpend: Time;
  }
  
  class adult implements People, Profession, FreeTime {
    constructor(
      public name: string,
      public age: number,
      public adress: string,
      public isStudying: boolean,
      public isWorking: boolean,
      public isInSchool: boolean,
      public hobbies: string,
      public timeSpend: Time
    ) {}
  }
  
  
  let kevin: People & Profession & FreeTime = {
    age: 30,
    name: "kevin",
    adress: "something",
    isInSchool: false,
    isStudying: true,
    isWorking: true,
    hobbies: "motorbike",
    timeSpend: "2 hours",
  };
  console.log(kevin);
  
  /* class Child implements Person {
    constructor(
      public name: string,
      public age: number,
      public isStudent: boolean
    ) {}
  }
  const c1 = new Child("kevin", 6, false);
  console.log(c1);
  
  let person: Person; */

  export default {}
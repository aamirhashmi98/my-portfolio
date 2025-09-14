export interface About {
  title: string;
  name: string;
  designation: string;
  description: string;
}

export interface ExperienceList {
  company: string;
  designation: string;
  description: string;
  duration: string;
}

export interface Experience {
  title: string;
  list: ExperienceList[];
}

export interface Education {
  title: string;
  college: string;
  discipline: string;
  course: string;
  duration: string;
}

export interface Profile {
  about: About;
  experience: Experience;
  education: Education;
}

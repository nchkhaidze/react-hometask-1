export interface Author {
  id: string;
  name: string;
}

export interface AuthorDTO {
  name: string;
}

export interface CourseAuthor extends Author {
  onCourse: boolean;
}

export interface Author {
  id: string;
  name: string;
}

export interface CourseAuthor extends Author {
  onCourse: boolean;
}

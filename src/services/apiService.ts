import axios from 'axios';
import { AuthorDTO } from '../models/Author';
import { CourseDTO } from '../models/Course';

export class ApiService {
  async addCourse(course: CourseDTO) {
    return await axios.post('http://localhost:3000/courses/add', course, {
      headers: {
        Authorization: JSON.parse(
          localStorage.getItem('token') ?? JSON.stringify('')
        ),
      },
    });
  }

  async addAuthor(author: AuthorDTO) {
    return await axios.post('http://localhost:3000/authors/add', author, {
      headers: {
        Authorization: JSON.parse(
          localStorage.getItem('token') ?? JSON.stringify('')
        ),
      },
    });
  }

  async updateCourse(id: string, course: CourseDTO) {
    return await axios.put(`http://localhost:3000/courses/${id}`, course, {
      headers: {
        Authorization: JSON.parse(
          localStorage.getItem('token') ?? JSON.stringify('')
        ),
      },
    });
  }

  async removeCourse(id: string) {
    return await axios.delete(`http://localhost:3000/courses/${id}`, {
      headers: {
        Authorization: JSON.parse(
          localStorage.getItem('token') ?? JSON.stringify('')
        ),
      },
    });
  }

  async logout() {
    return await axios.delete('http://localhost:3000/logout', {
      headers: {
        Authorization: JSON.parse(
          localStorage.getItem('token') ?? JSON.stringify('')
        ),
      },
    });
  }
}

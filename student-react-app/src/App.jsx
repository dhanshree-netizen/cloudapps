
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [students, setStudents] = useState([])

  function addStudent() {
    if (name.trim() === '' || course.trim() === '') {
      alert('Please enter your name and course')
      return
    }

    const student = {
      id: Date.now(),
      name: name,
      course: course
    }

    setStudents([...students, student])
    setName('')
    setCourse('')
  }

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Library Management System</h1>
        <p>Manage your student details easily</p>
      </header>

      <main className="container">
        <section className="form-card">
          <h2>Add Student</h2>

          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Course</label>
          <input
            type="text"
            placeholder="Enter course name"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button onClick={addStudent}>Add Student</button>
        </section>

        <section className="list-card">
          <h2>Student Details</h2>
          <p>Total Students: {students.length}</p>

          {students.length === 0 ? (
            <p>No students added yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>

      <footer>
        <p>Student Management System | React Application</p>
      </footer>
    </div>
  )
}

export default App

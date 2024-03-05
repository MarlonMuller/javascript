const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

// Abaixo de 5 = reprovado

const newStudents = students.map( (student) => {
    const status = student.testGrade >= 5 ? 'Aprovado' : 'Reprovado'
    
    return status
})

console.log(newStudents)
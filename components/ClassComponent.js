export default (properties)=>(
    <div>
        <div>
            <h2>
                {properties.className}
            </h2>
            <ul>
                {properties.students.map(student=><li>{student.first_name}</li>)}
            </ul>
        </div>
    </div>
)
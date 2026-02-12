import StudentList from "../components/StudentList";
import { Link } from "react-router-dom";

const StudentListPage = () => {
    return (
        <section>
            <h1>Student List Page</h1>
            <StudentList />
        </section>
    );
};
export default StudentListPage;
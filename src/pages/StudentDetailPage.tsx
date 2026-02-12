import { useParams } from "react-router-dom";
import StudentList from "../components/StudentList";
import NotFoundPage from "../components/NotFoundPage";
import { useState, useEffect } from "react";
import Config from "../config/";
import { Student } from "../models/Student";
import AddStudentForm from '../components/AddStudentForm';
import { Table } from 'react-bootstrap';
import '../index.css';
const StudentDetailPage = () => {
    const { id } = useParams();
    const [studentInfo, setStudentInfo] = useState<Student>({
        studentId: 0,
        firstName: "",
        lastName: "",
        school: "",
    });
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${Config.API_BASE_URL}students/${id}`);
            const body = await result.json();
            //console.log(body);
            setStudentInfo(body);
        };
        fetchData();
    }, [id]);
    if (studentInfo.studentId === 0) return <NotFoundPage />;
    return (
        <section>
            <div style={{ width: "20%", float: "right" }}>
                <h3>Others:</h3>
                <Table striped bordered hover className="student-table">
                    <tbody>
                        <StudentList exceptId={studentInfo.studentId} />
                    </tbody>
                </Table>
            </div>
            <h4 className="id text-muted">Student ID={studentInfo.studentId}</h4>
            <section className="student-info">
                <div>
                    <b>Name: </b>
                    {studentInfo.firstName} {studentInfo.lastName}
                </div>
                <div>
                    <b>school: </b>
                    {studentInfo.school}
                </div>
            </section>
            <div style={{ width: "50%", float: "left" }}>
                <hr />
                <AddStudentForm />
            </div>
        </section >
    );
};
export default StudentDetailPage;
import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/HomePage";
import Register from "./pages/user/RegisterPage";
import Login from "./pages/user/LoginPage";
import EditProfilePage from "./pages/user/EditProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import CourseDetailPage from "./pages/user/CourseDetailPage";
import CoursePage from "./pages/user/CoursePage";
import MyCoursePage from "./pages/user/MyCoursePage";
import CourseLearningPage from "./pages/user/CourseLearningPage";
import { useAuth } from "./context/authentication";
import DesireCoursePage from "./pages/user/DesireCoursePage";
import CourseListPage from "./pages/admin/CourseList";
import AddCoursePage from "./pages/admin/AddCoursePage";
import AddLessonPage from "./pages/admin/AddLessonPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import EditLessonPage from "./pages/admin/EditLessonPage";
import EditCoursePage from "./pages/admin/EditCoursePage";
import AssignmentPage from "./pages/admin/AssignmentPage";
import MyAssignmentPage from "./pages/user/MyAssignment";
// export const SessionContext = React.createContext();

function App() {
  const auth = useAuth();
  return (
    <Routes>
      <Route path="/admin">
        {auth.isAdminAuthenticated ? (
          <>
            <Route index element={<CourseListPage />} />
            <Route path="addcourse" element={<AddCoursePage />} />
            <Route path="addlesson" element={<AddLessonPage />} />
            <Route path="editcourse/:courseId" element={<EditCoursePage />} />
            <Route path="editlesson" element={<EditLessonPage />} />
            <Route path="assignment" element={<AssignmentPage />} />
          </>
        ) : (
          <Route index element={<AdminLoginPage />} />
        )}
      </Route>
      {/* <Route path="/tester" element={<TesterComponent />} /> */}
      AddLessonPage
      <Route path="*" element={<AdminLoginPage />} />
    </Routes>
  );
}

export default App;

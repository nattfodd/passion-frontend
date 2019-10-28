import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCourses } from './CoursesHeadless.js';
import { useAuth } from "../context/auth";

const RootList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const CourseHeader = styled.li`
  padding: 13px 30px 12px 30px;

  margin-bottom: 1px;

  background-color: rgba(57, 113, 193, 0.1);
  font-size: 16px;
  font-weight: bold;
  color: #3971c1;

  &:first-child {
    margin-top: 1px;
  }
`

const CourseBy = styled.span`
  display: inline;
  font-weight: normal;
`

function CourseItem(props) {
  return (
    <CourseHeader>{props.course.name} <CourseBy>by</CourseBy> {props.course.author}</CourseHeader>
  );
}

export function Courses(props) {
  const [courses, setCourses] = useState([])
  const { authToken } = useAuth();

  const fetchCourses = async () => {
    setCourses(await getCourses(authToken, props.categoryId))
  }

  useEffect(() => {
    if (courses.length === 0) {
      fetchCourses()
    }
  })

  const list = courses.map((course) => {
    return <CourseItem course={course} key={course.id} />
  })

  return (
    <RootList>
      { list }
    </RootList>
  );
}

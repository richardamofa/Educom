import React from 'react';
import './Courses.css';

const courses = [
  {
    category: 'UI/UX Course',
    title: 'Figma learning from beginner to pro course.',
    duration: '9h 20min',
    lessons: '1k Lesson',
    color: '#EFF6FF',
    accent: '#3B82F6',
    icon: '🎨',
  },
  {
    category: 'UI/UX Course',
    title: 'Python coding teaching from beginner to pro',
    duration: '11h 20min',
    lessons: '1k Lesson',
    color: '#F0FDF4',
    accent: '#22C55E',
    icon: '🐍',
  },
  {
    category: 'UI/UX Course',
    title: 'Digital marketing course beginner to pro',
    duration: '9h 20min',
    lessons: '1k Lesson',
    color: '#FFF7ED',
    accent: '#F97316',
    icon: '📊',
  },
];

const CourseCard = ({ course }) => (
  <div className="course-card" style={{ '--card-accent': course.accent, '--card-bg': course.color }}>
    <div className="course-card__preview">
      <div className="course-card__preview-inner">
        <span className="course-card__icon">{course.icon}</span>
        <div className="course-card__preview-lines">
          <div className="line line--wide"></div>
          <div className="line"></div>
          <div className="line line--short"></div>
        </div>
      </div>
    </div>
    <div className="course-card__body">
      <span className="course-card__category">{course.category}</span>
      <h3 className="course-card__title">{course.title}</h3>
      <div className="course-card__meta">
        <span>⏱ {course.duration}</span>
        <span>📚 {course.lessons}</span>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="courses__header">
          <div>
            <h2 className="section-title courses__heading">Our Latest Courses</h2>
            <p className="courses__sub">Choose from 500+ online video courses with new additions published every month.</p>
          </div>
          <button className="btn-primary courses__view-btn">View More</button>
        </div>
        <div className="courses__grid">
          {courses.map((c, i) => (
            <CourseCard key={i} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

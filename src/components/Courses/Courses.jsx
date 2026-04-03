import React from 'react';
import './Courses.css';
import { FaClock, FaBook } from 'react-icons/fa';
import figmaImg from '../../assets/uiux.jfif';
import pythonImg from '../../assets/python.jfif';
import marketingImg from '../../assets/digitalmarketing.jfif';

const courses = [
  {
    category: 'UI/UX Course',
    title: 'Figma learning from beginner to pro course.',
    duration: '9h 20min',
    lessons: '1k Lesson',
    color: '#EFF6FF',
    accent: '#3B82F6',
    image: figmaImg,
  },
  {
    category: 'Software Development Course',
    title: 'Python coding teaching from beginner to pro',
    duration: '11h 20min',
    lessons: '1k Lesson',
    color: '#F0FDF4',
    accent: '#22C55E',
    image: pythonImg,
  },
  {
    category: 'Social Marketing Course',
    title: 'Digital marketing course beginner to pro',
    duration: '9h 20min',
    lessons: '1k Lesson',
    color: '#FFF7ED',
    accent: '#F97316',
    image: marketingImg,
  },
];


const CourseCard = ({ course }) => {

  return (
    <div
      className="course-card"
      style={{
        '--card-accent': course.accent,
        '--card-bg': course.color,
      }}
    >
      {/* Preview */}
        <div className="course-card__preview">
        <div className="course-card__preview-inner">
            
            {/* IMAGE */}
            <div className="course-card__image-wrap">
            <img 
                src={course.image} 
                alt={course.title} 
                className="course-card__image"
            />
            </div>
              <span className="course-card__badge">
                {course.category}
            </span>

            {/* Fake lines 
            <div className="course-card__preview-lines">
            <div className="line line--wide"></div>
            <div className="line"></div>
            <div className="line line--short"></div>
            </div>*/}
        </div>
        </div>

      {/* Body */}
      <div className="course-card__body">
        <span className="course-card__category">
          {course.category}
        </span>

        <h3 className="course-card__title">
          {course.title}
        </h3>

        {/* Meta */}
        <div className="course-card__meta">
          <span className="meta-item">
            <FaClock />
            {course.duration}
          </span>

          <span className="meta-item">
            <FaBook />
            {course.lessons}
          </span>
        </div>
      </div>
    </div>
  );
};

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

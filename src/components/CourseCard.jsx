import React from "react";

export default function CourseCard({ course }) {
  console.log(course);
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src="./images/img1.jpg" alt="Course Picture" />
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          title={course.title}
          description={course.description}
          rate={course.rate}
        />
        <CourseCardFooter
          start={course.start}
          tags={course.tags}
          status={course.status}
        />
      </div>
    </div>
  );
}

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">⭐️ {rate}</span>
    </div>
  );
}

function CourseCardFooter({ tags, start, status }) {
  const startedAt = new Date(start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((t) => {
          return (
            <span key={t} className="badge badge--secondary">
              {t}
            </span>
          );
        })}
      </div>
      <div className="caption">
        <div className="date">
          {/* You can write js code in a {} */}
          {startedAt}
        </div>
        {/* write styles in dynamic format */}
        <span
          className={`badge ${
            status === "Active"
              ? "badge--primary"
              : status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

const courseStatus = ["All", "Active", "Completed", "Upcoming"];

export default function Header() {
  return (
    <div>
      <h1 className="">My Courses (3) </h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
    </div>
  );
}

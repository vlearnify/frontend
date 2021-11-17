import { ReactElement, useState, useEffect } from "react";
import "./Courses.scss";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";

interface Course {
  id: string;
  author: string;
  capacity: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

function Courses(): ReactElement {
  const [fetchedCourses, setFetchedCourses] = useState<Array<Course>>([]);

  const getAllCourses = async (url: string) => {
    fetch(url)
      .then((response): Promise<Array<Course>> => response.json())
      .then((data) => {
        setFetchedCourses(data);
      });
  };

  useEffect(() => {
    const url = "http://localhost:8080/api/v1/courses";

    getAllCourses(url);
  }, []);

  const courseTemplate = (course: Course) => {
    return (
      <Card
        key={course.id}
        title={course.name}
        subTitle={`by ${course.author}`}
        className="p-col-3 course-card"
      />
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="courses">
      <h2>All</h2>
      <div className="courses-container">
        <Carousel
          value={fetchedCourses}
          itemTemplate={courseTemplate}
          numVisible={6}
          numScroll={1}
          responsiveOptions={responsiveOptions}
        />
      </div>
    </div>
  );
}

export default Courses;

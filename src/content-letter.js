import { ProjectProfile } from "./project-profile";
import { Summary } from "./summary";
import { useState, useEffect } from "react";

export function ContentLetter() {
  let targetId_s = "summary";
  const [activeBtn, setActiveBtn] = useState("summary");
  const [visibleId, setVisibleId] = useState("project-profile");
  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      let scrollPos =
        target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: scrollPos, behavior: "smooth" });
    }
    changeActiveBtn(targetId);
  };
  const changeActiveBtn = (target) => {
    if (target) {
      setActiveBtn(target);
    }
  };
  const observerIDs = ["project-profile", "summary"];
  useEffect(() => {
    const observers = [];
    observerIDs.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      console.log("attaching", id);
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log(entry);
          if (entry.isIntersecting) {
            setVisibleId(id);
            console.log("id ", id);
          }
        },
        { threshold: 0.7 },
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => {
      observers.forEach((ob) => ob.disconnect());
    };
  }, []);
  return (
    <>
      <div className="summary row m-4">
        <div className="col-lg-2"></div>
        <div className="col-md-12 col-lg-7">
          <div className="d-flex nav-headers">
            <button style={{ display: "contents" }}>
              {" "}
              <h3
                className={`card app-topic-head card-header fs-4 me-1 ${visibleId === "summary" ? "active-tab" : ""}`}
                onClick={() => handleScroll("summary")}
              >
                Summary
              </h3>
            </button>
            <button style={{ display: "contents" }}>
              {" "}
              <h3
                className={`card app-topic-head card-header fs-4 ${visibleId !== "summary" ? "active-tab" : ""}`}
                onClick={() => handleScroll("project-profile")}
              >
                Professional History
              </h3>
            </button>
            {visibleId}
          </div>
          <Summary />
          <ProjectProfile />
        </div>
      </div>
    </>
  );
}

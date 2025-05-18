import { ProjectProfile } from "./project-profile";
import { Summary } from "./summary";
import { useState, useEffect } from "react";

export function ContentLetter() {
  const [activeBtn, setActiveBtn] = useState("summary");
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
  useEffect(() => {
    const observerIDs = ["summary", "project-profile"];
    const visibilityMap = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          visibilityMap.set(id, entry.intersectionRatio);
        });

        const summaryView = visibilityMap.get("summary") || 0;
        const profileView = visibilityMap.get("project-profile") || 0;
        if (summaryView < 0.11 && profileView > 0) {
          changeActiveBtn("project-profile");
        }
        if (summaryView > 0.12) {
          setActiveBtn("summary");
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );
    const elements = observerIDs
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
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
                className={`card app-topic-head card-header fs-4 me-1 ${activeBtn === "summary" ? "active-tab" : ""}`}
                onClick={() => handleScroll("summary")}
              >
                Summary
              </h3>
            </button>
            <button style={{ display: "contents" }}>
              {" "}
              <h3
                className={`card app-topic-head card-header fs-4 ${activeBtn !== "summary" ? "active-tab" : ""}`}
                onClick={() => handleScroll("project-profile")}
              >
                Professional History
              </h3>
            </button>
          </div>
          <Summary />
          <ProjectProfile />
        </div>
      </div>
    </>
  );
}

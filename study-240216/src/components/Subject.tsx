import React from "react";

interface SubjectProps {
  title: string;
  sub?: string; // optional sub prop
}

function Subject(props: SubjectProps) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.sub || 'default sub text'} {/* rendering optional sub prop or default text */}
    </header>
  );
}

export default Subject;
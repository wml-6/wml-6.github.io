import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg"; // 准备一张头像图片放在src/assets目录下

export default function App() {
  const [skills] = useState([
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Web Development",
  ]);

  return (
    <div className="container">
      <header>
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1>小王的个人主页</h1>
      </header>

      <section className="about">
        <h2>关于我</h2>
        <p>从零开始自学Web到AI</p>
      </section>

      <section className="skills">
        <h2>技术栈</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>联系我</h2>
        <div className="links">
          <a
            href="https://github.com/wml-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="wml19549162860@163.com">Email</a>
        </div>
      </section>
    </div>
  );
}

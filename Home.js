import React from 'react';

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="intro">
        <h1>Welcome to TaskFlow</h1>
        <p>
          TaskFlow is your ultimate platform for streamlining task and project management. Whether handling personal projects or collaborating with a team, TaskFlow equips you with the tools to enhance productivity.
        </p>
      </section>

      <section className="overview">
        <h2>Why Choose TaskFlow?</h2>
        <p>
          Designed to simplify the workflow process, TaskFlow empowers users to efficiently manage assignments, set clear priorities, and achieve goals on time. Perfect for professionals, students, and teams alike.
        </p>
      </section>

      <section className="features">
        <h3>Key Features</h3>
        <ul>
          <li>⚡ **Custom Task Views**: Tailor your dashboard to display only the tasks that matter.</li>
          <li>📅 **Integrated Calendar**: Plan your week ahead and visualize deadlines effortlessly.</li>
          <li>👥 **Real-Time Collaboration**: Share tasks, assign roles, and keep everyone on the same page.</li>
          <li>📈 **Analytics & Insights**: Track progress with built-in reports and analytics for informed decision-making.</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Start Your Journey</h2>
        <p>
          Get started with TaskFlow today and experience an intuitive way to manage your projects from start to finish. Simplify your workflow and stay ahead of deadlines with ease.
        </p>
      </section>
    </div>
  );
};

export default Home;

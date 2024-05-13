

const Faq = () => {
    return (
        <div className="p-8">
            <h1 className="font-bold text-4xl text-center mb-5">Assignment FAQ Question</h1>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Introduction to Python Programming
                </div>
                <div className="collapse-content">
                    <p>Learn the basics of Python programming language including variables, loops, and functions</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Data Analysis with Pandas
                </div>
                <div className="collapse-content">
                    <p>Use the Pandas library in Python to analyze and manipulate data from CSV files</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Machine Learning Project
                </div>
                <div className="collapse-content">
                    <p>Implement a machine learning model using libraries like scikit-learn or TensorFlow</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    HTML and CSS Basics
                </div>
                <div className="collapse-content">
                    <p>Build a simple webpage using HTML for structure and CSS for styling.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Database Design and SQL Queries
                </div>
                <div className="collapse-content">
                    <p>Design a simple database schema and write SQL queries to retrieve and manipulate data.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Full-Stack Web Development Project
                </div>
                <div className="collapse-content">
                    <p>Create a full-stack web application using technologies like Node.js, React, and MongoDB.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
const courses = [{
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const coursesDiv = document.getElementById("courses");
const courseCount = document.getElementById("course-count");

// Function to display subject + number only
function displayCourses(courseList) {
    coursesDiv.innerHTML = ""; // Clear container

    // Calculate total credits
    let totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    // Show total credits
    courseCount.textContent = `The total credits for the listed courses: ${totalCredits}`;


    // Loop through filtered courses
    courseList.forEach(course => {
        let card = document.createElement("section");
        card.classList.add("course-card");

        let title = document.createElement("h3");


        if (course.completed) {
            title.innerHTML = `&#10003 ${course.subject} ${course.number}`;
            card.classList.add("completed")
        } else {
            title.textContent = `${course.subject} ${course.number}`;
            card.classList.add("incompleted")
        }

        card.appendChild(title);
        card.addEventListener('click', () => {
            displayCourseDetails(course);
        });
        coursesDiv.appendChild(card);
    });
}

// Event listeners for buttons
document.getElementById("allBtn").addEventListener("click", () => displayCourses(courses));

document.getElementById("cseBtn").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

const courseDetails = document.querySelector("#course-details")

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    const closeModal = document.getElementById('closeModal');

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
    // ✅ Close modal when clicking outside
    courseDetails.addEventListener("click", (event) => {
        const dialogDimensions = courseDetails.getBoundingClientRect();
        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            courseDetails.close();
        }
    });
}











// Show all courses on page load
displayCourses(courses);

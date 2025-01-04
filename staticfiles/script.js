document.addEventListener("DOMContentLoaded", function () {
    const seeAllButton = document.getElementById('seeAllButton');

    if (seeAllButton) {
        seeAllButton.addEventListener('click', function () {
            const button = this;

            if (button.textContent === 'See All') {
                button.disabled = true; // Disable button to prevent multiple clicks
                button.textContent = 'Loading...'; // Update button text

                // Fetch additional instructors
                fetch('/load-more-instructors/')
                    .then(response => response.json())
                    .then(data => {
                        const grid = document.getElementById('instructorGrid');

                        // Append each additional instructor to the grid
                        data.instructors.forEach(instructor => {
                            const card = document.createElement('div');
                            card.className = 'instructor-card additional-card'; // Mark as additional card
                            card.innerHTML = `
                                <img src="${instructor.image}" alt="${instructor.name}" />
                                <h3>${instructor.name}</h3>
                                <p>${instructor.role}</p>
                                <ul>
                                    <li class="rating">
                                        <img src="/static/images/icon.png" alt="Star" />
                                        <span>${instructor.rating}</span>
                                    </li>
                                    <li class="students">${instructor.students} Students</li>
                                </ul>
                            `;
                            grid.appendChild(card);
                        });

                        button.textContent = 'Close'; // Change to "Close" button
                        button.disabled = false; // Re-enable button
                    })
                    .catch(error => {
                        console.error('Error loading instructors:', error);
                        button.disabled = false;
                        button.textContent = 'See All';
                    });
            } else if (button.textContent === 'Close') {
                // Remove additional instructor cards
                const additionalCards = document.querySelectorAll('.additional-card');
                additionalCards.forEach(card => card.remove());

                button.textContent = 'See All'; // Change back to "See All"
            }
        });
    } else {
        console.error("See All button not found.");
    }
});


 document.addEventListener("DOMContentLoaded", function () {
        const categoryItems = document.querySelectorAll('.category-item');

        categoryItems.forEach(item => {
            item.addEventListener('click', function () {
                const categoryId = this.getAttribute('data-category-id');

                // Fetch category-specific courses
                fetch(`/category/${categoryId}/courses/`)
                    .then(response => response.json())
                    .then(data => {
                        const container = document.getElementById('top-courses-container');
                        container.innerHTML = '';  // Clear existing courses

                        if (data.courses.length > 0) {
                            data.courses.forEach(course => {
                                const courseHTML = `
                                    <div class="course-grid">
                                        <img src="${course.image}" alt="${course.title} Image" />
                                        <h3>${course.title}</h3>
                                        <p>${course.instructor}</p>
                                        <div class="rating">
                                            <span>⭐⭐⭐⭐⭐</span> (${course.ratings} Ratings)
                                        </div>
                                        <p>${course.duration} hours. ${course.lectures} lectures. ${course.level}</p>
                                        <p style="color: black; font-weight: bold; font-size: 20px">$${course.price}</p>
                                    </div>
                                `;
                                container.innerHTML += courseHTML;
                            });
                        } 
                        // Handle empty course response
                        else if (data.empty) {
                            const placeholderHTML = `
                                <div class="course-grid placeholder">
                                    <img src="/static/images/coming-soon.png" alt="Coming Soon" />
                                    <h3>New Courses Coming Soon!</h3>
                                    <p>Stay tuned for exciting courses in this category.</p>
                                </div>
                            `;
                            container.innerHTML = placeholderHTML;
                        }
                    })
                    .catch(error => {
                        console.error('Error loading courses:', error);
                    });
            });
        });
    });
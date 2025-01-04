document.getElementById('toggle-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const toggleBtn = document.getElementById('toggle-btn');
    const allItems = document.querySelectorAll('.category-item');
    const hiddenItems = document.querySelectorAll('.category-item.hidden-category');
    
    // Check if we need to show all categories or hide extra ones
    if (hiddenItems.length > 0) {
        // Show all hidden categories
        hiddenItems.forEach(item => {
            item.classList.remove('hidden-category'); // Remove the class to show the item
        });
        
        // Change button text to "Show Less"
        toggleBtn.textContent = 'Show Less';
    } else {
        // Hide all categories except the first 4
        allItems.forEach((item, index) => {
            if (index >= 4) {
                item.classList.add('hidden-category'); // Add the class to hide extra categories
            }
        });

        // Change button text to "See All"
        toggleBtn.textContent = 'See All';
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("seeAllButton");
    const allInstructors = document.querySelectorAll(".instructor-card");

    // Initially hide instructors beyond the first 5
    allInstructors.forEach((instructor, index) => {
        if (index >= 5) {
            instructor.classList.add("hidden-instructor");
        }
    });

    // Add click event listener to the button
    toggleBtn.addEventListener("click", function () {
        const hiddenInstructors = document.querySelectorAll(".instructor-card.hidden-instructor");

        if (hiddenInstructors.length > 0) {
            // Show all hidden instructors
            hiddenInstructors.forEach((instructor) => {
                instructor.classList.remove("hidden-instructor");
            });

            // Change button text to "Show Less"
            toggleBtn.textContent = "Show Less";
        } else {
            // Hide instructors beyond the first 5
            allInstructors.forEach((instructor, index) => {
                if (index >= 5) {
                    instructor.classList.add("hidden-instructor");
                }
            });

            // Change button text to "See All"
            toggleBtn.textContent = "See All";
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const testimonials = document.querySelectorAll('.main-quotes .qotues');
    
    let currentIndex = 0;
    const visibleTestimonials = 3;  // Show 3 testimonials initially

    // Function to show next testimonials
    function showNext() {
        if (currentIndex + visibleTestimonials < testimonials.length) {
            currentIndex += visibleTestimonials;
        } else {
            currentIndex = testimonials.length - visibleTestimonials;  // Reset to the last group
        }
        updateTestimonialsVisibility();
    }

    // Function to show previous testimonials
    function showPrev() {
        if (currentIndex - visibleTestimonials >= 0) {
            currentIndex -= visibleTestimonials;
        } else {
            currentIndex = 0;  // Reset to the first group
        }
        updateTestimonialsVisibility();
    }

    // Update visibility based on current index
    function updateTestimonialsVisibility() {
        testimonials.forEach((testimonial, index) => {
            if (index >= currentIndex && index < currentIndex + visibleTestimonials) {
                testimonial.classList.remove('hidden');
            } else {
                testimonial.classList.add('hidden');
            }
        });
    }

    // Initialize with the first set of testimonials visible
    updateTestimonialsVisibility();

    // Attach event listeners to the buttons
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showNext();
    });

    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showPrev();
    });
});

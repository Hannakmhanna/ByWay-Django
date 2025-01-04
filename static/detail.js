// Lesson Details Toggle Logic

document.addEventListener("DOMContentLoaded", function () {
    const syllabusItems = document.querySelectorAll(".syllabus-item .arrow");

    syllabusItems.forEach(arrow => {
        arrow.addEventListener("click", function () {
            const parentItem = arrow.closest('.syllabus-item');
            const lessonDetails = parentItem.querySelector('.lesson-details');
            const title = parentItem.querySelector('h4');
            const description = parentItem.querySelector('p');

            // Close all open lessons except the one clicked
            document.querySelectorAll(".lesson-details").forEach(detail => {
                if (detail !== lessonDetails) {
                    detail.style.display = 'none';
                    const otherItem = detail.closest('.syllabus-item');
                    otherItem.querySelector('h4').style.display = 'block';
                    otherItem.querySelector('p').style.display = 'block';
                    otherItem.querySelector('.arrow').classList.remove('open');
                }
            });

            // Toggle the selected lesson's visibility
            const isVisible = lessonDetails.style.display === 'block';
            lessonDetails.style.display = isVisible ? 'none' : 'block';
            arrow.classList.toggle('open', !isVisible);

            // Hide/show h4 and p
            title.style.display = isVisible ? 'block' : 'none';
            description.style.display = isVisible ? 'block' : 'none';
        });
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

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review-list .review');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const initialReviewsVisible = 3; // Number of reviews to show initially

    // Hide all reviews initially except the first 3
    for (let i = initialReviewsVisible; i < reviews.length; i++) {
        reviews[i].classList.add('hidden');
    }

    // Show More Reviews
    loadMoreBtn.addEventListener('click', function() {
        for (let i = 0; i < reviews.length; i++) {
            reviews[i].classList.remove('hidden');
        }

        // Hide Load More and show Show Less button
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    });

    // Show Less Reviews
    showLessBtn.addEventListener('click', function() {
        // Hide reviews that are beyond the initial 3
        for (let i = initialReviewsVisible; i < reviews.length; i++) {
            reviews[i].classList.add('hidden');
        }

        // Hide Show Less button and show Load More button
        loadMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
    });
});

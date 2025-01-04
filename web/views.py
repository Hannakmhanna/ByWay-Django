from django.shortcuts import render, get_object_or_404
from .models import Category, Course, Instructor
from decimal import Decimal

# Home View
def home(request):
    categories = Category.objects.all()
    top_courses = Course.objects.all()[:4]
    instructors = Instructor.objects.all()
    
    context = {
        'categories': categories,
        'top_courses': top_courses,
        'instructors': instructors
    }
    
    return render(request, 'index.html', context)


# Individual Course Detail View for details.html
def course_detail(request, course_id):
    course = get_object_or_404(Course, id=course_id)
    
    # Calculate the discounted price
    discount_rate = Decimal('0.5')  # 50% discount
    discounted_price = course.price * discount_rate  # This will avoid TypeError
    
    random_courses = Course.objects.exclude(id=course_id).order_by('?')[:4]
    context = {
        'course': course,
        'discounted_price': round(discounted_price, 2),
        'random_courses': random_courses,  # Round to 2 decimal places
    }
    
    return render(request, 'details.html', context)



# All Courses View
def courses(request):
    all_courses = Course.objects.all()
    return render(request, 'courses.html', {'all_courses': all_courses})


# Instructor Details View
def instructor_detail(request, instructor_id):
    instructor = get_object_or_404(Instructor, id=instructor_id)
    instructor_courses = Course.objects.filter(instructor=instructor)
    
    return render(request, 'instructor_detail.html', {
        'instructor': instructor,
        'courses': instructor_courses,
    })


# Category Details View
def category_details(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    category_courses = Course.objects.filter(category=category)
    
    context = {
        'category': category,
        'courses': category_courses,
    }
    
    return render(request, 'category_details.html', context)

from django.urls import path
from . import views 
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),  # Homepage
    path('courses/', views.courses, name='courses'),
    path('courses/<int:course_id>/', views.course_detail, name='course_detail'),  # Course detail (courses.html)
    path('details/<int:course_id>/', views.course_detail, name='details_course_detail'),  # Course detail (details.html)
    path('category/<int:category_id>/', views.category_details, name='category_details'),  # Category Details
    path('instructor/<int:instructor_id>/', views.instructor_detail, name='instructor_detail'),  # Instructor Details
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

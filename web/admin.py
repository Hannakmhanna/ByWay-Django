from django.contrib import admin
from .models import Category ,Course,Instructor, Language

admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Instructor)
admin.site.register(Language)

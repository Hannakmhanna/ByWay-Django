from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)  
    icon = models.ImageField(upload_to='category_icons/') 
    description =  models.CharField(max_length=100)
    

    def __str__(self):
        return self.title
    
class Instructor(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, default="Default Title") 
    image = models.ImageField(upload_to='instructors/', blank=True, null=True)  # Optional image
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)  # Rating of the instructor
    students = models.IntegerField(default=0)  # Number of students enrolled

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name    

class Course(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    duration = models.CharField(max_length=50)
    lectures = models.IntegerField()
    level = models.CharField(max_length=50)
    ratings = models.FloatField()
    total_reviews = models.IntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='course_images/')
    description = models.TextField()
    languages = models.ManyToManyField('Language', related_name='courses')

    def __str__(self):
        return self.title


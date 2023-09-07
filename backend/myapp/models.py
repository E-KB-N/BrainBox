from django.db import models

# Create your models here.
class Career(models.Model):
    degree_program = models.CharField(max_length= 200)
    level = models.CharField(max_length=10)
    career_choice = models.CharField(max_length= 200)
    interest = models.CharField(max_length=200)
    
    def __str__(self):
        return self.degree_program
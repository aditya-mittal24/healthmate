from django.db import models
from django.contrib.auth.models import User

def calculate_bmi(height, weight):
    if height <= 0 or weight <= 0:
        return None  # Handle division by zero or negative values

    # Calculate BMI (weight in kg / (height in meters ^ 2))
    height_in_meters = height / 100  # Convert height from cm to meters
    bmi = weight / (height_in_meters ** 2)
    return round(bmi, 2) 

BLOOD_GROUP_CHOICES = [
    ('A+', 'A+'),
    ('A-', 'A-'),
    ('B+', 'B+'),
    ('B-', 'B-'),
    ('AB+', 'AB+'),
    ('AB-', 'AB-'),
    ('O+', 'O+'),
    ('O-', 'O-'),
]

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES)
    aadhar_no = models.CharField(max_length=12)

    def __str__(self):
        return self.user.username
    
    def save(self, *args, **kwargs):
        # Calculate BMI before saving the UserProfile instance
        self.bmi = calculate_bmi(self.height, self.weight)
        super(UserProfile, self).save(*args, **kwargs)
        
class HealthRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_recorded = models.DateField()
    sugar_level = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    blood_pressure = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return f"{self.user.username}'s Health Record - {self.date_recorded}"
    
class DiabetesPrediction(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    prediction_date = models.DateField()
    prediction = models.BooleanField(default=False)

    def __str__(self):
        return f"Diabetes Prediction for {self.user.username} - {self.prediction_date}"
    
    
class HypertensionPrediction(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    prediction_date = models.DateField()
    prediction = models.BooleanField(default=False)

    def __str__(self):
        return f"Hypertension Prediction for {self.user.username} - {self.prediction_date}"
    
    
class HeartDiseasePrediction(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    prediction_date = models.DateField()
    prediction = models.BooleanField(default=False)

    def __str__(self):
        return f"Heart Disease Prediction for {self.user.username} - {self.prediction_date}"
        

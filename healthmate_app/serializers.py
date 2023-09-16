from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile, HealthRecord  # Import the UserProfile model

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('age', 'height', 'weight', 'blood_group','aadhar_no')

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=True)  # Include the UserProfile serializer

    class Meta:
        model = User
        fields = ( 'first_name', 'last_name', 'username', 'password', 'email','profile')
        extra_kwargs = {'password': {'write_only': True}}
        depth = 1

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')  # Extract profile data
        user = User.objects.create_user(**validated_data)
        UserProfile.objects.create(user=user, **profile_data)  # Create UserProfile
        return user
    
class HealthRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthRecord
        fields = '__all__'
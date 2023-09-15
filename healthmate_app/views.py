from rest_framework import generics
from rest_framework import status, views
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserProfileSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from joblib import load
from notebooks.diabetes_prediction import DiabetesPredictor

class DiabetesPredictionView(views.APIView):
    def post(self, request):
        print(request.data)
        gender = int(request.data.get("gender"))
        age = int(request.data.get("age"))
        hypertension = int(request.data.get("hypertension"))
        heart_disease = int(request.data.get("heart_disease"))
        smoking_history = int(request.data.get("smoking_history"))
        bmi = float(request.data.get("bmi"))
        avg_blood_sugar_level = float(request.data.get("avg_blood_sugar_level"))
        blood_glucose_level = float(request.data.get("blood_glucose_level"))
        
        
        input_data = (gender,age,hypertension,heart_disease,smoking_history,bmi,avg_blood_sugar_level,blood_glucose_level)
        predictor = load('./savedModels/diabetes_predictor.joblib')
    
        prediction = predictor.predict_diabetes(input_data)
        return Response({'prediction': prediction}, status=status.HTTP_200_OK)

# @api_view(['POST'])
# def predict_diabetes(request):
#     if request.method == 'POST':
#         try:
#             # Load the predictor object
#             predictor = load('./savedModels/diabetes_predictor.joblib')
#             # Get input data from the request (assuming input data is sent as JSON)
#             input_data = request.data # Change to request.data if using DRF

#             # Make predictions using the loaded model
#             prediction = predictor.predict(input_data)

#             return JsonResponse({"prediction": prediction})
#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=500)
#     else:
#         return JsonResponse({"error": "Invalid HTTP method"}, status=400)


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({'user_id': user.id}, status=status.HTTP_201_CREATED)

class UserLoginView(views.APIView):
    def post(self, request):
        username = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            return Response({'user_id': user.id}, status=status.HTTP_201_CREATED)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_single_user(request):
    user_profile = request.user.userprofile  # Assuming you have a UserProfile model linked to User
    serializer = UserProfileSerializer(user_profile)
    return Response(serializer.data)

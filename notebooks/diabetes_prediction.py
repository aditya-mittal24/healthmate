import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm

class DiabetesPredictor:
    def __init__(self, dataset_path):
        self.dataset = pd.read_csv(dataset_path)
        # Preprocess the dataset here (e.g., data cleaning, feature engineering)

        # Standardize the data
        self.scaler = StandardScaler()
        self.scaler.fit(self.dataset.drop(columns='diabetes').values)
        self.X = self.scaler.transform(self.dataset.drop(columns='diabetes').values)
        self.Y = self.dataset['diabetes']

        # Split the data into training and testing sets
        self.X_train, self.X_test, self.Y_train, self.Y_test = train_test_split(
            self.X, self.Y, test_size=0.2, stratify=self.Y, random_state=2
        )

        # Create and train the classifier
        self.classifier = svm.SVC(kernel='linear')
        self.classifier.fit(self.X_train, self.Y_train)

    def predict_diabetes(self, input_data):
        # Convert input data to a numpy array
        input_data_as_numpy_array = np.asarray(input_data)

        # Reshape the array as we are predicting for one instance
        input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

        # Standardize the input data
        std_data = self.scaler.transform(input_data_reshaped)

        # Make predictions
        prediction = self.classifier.predict(std_data)

        if prediction[0] == 0:
            return 'The person is not diabetic'
        else:
            return 'The person is diabetic'

import joblib

# Create an instance of the DiabetesPredictor class with the path to your dataset
predictor = DiabetesPredictor('notebooks/diabetes_dataset.csv')

# Save the predictor object to a file
joblib.dump(predictor,'savedModels/diabetes_predictor.joblib')

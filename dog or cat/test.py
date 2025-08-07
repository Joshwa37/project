import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.models import load_model
import matplotlib.pyplot as plt

model = load_model('2stmodel.h5')

IMG_SIZE = (100, 100)

def predict_image(img_path, threshold=0.5):
    try:
        img = load_img(img_path, target_size=IMG_SIZE)
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0
        prediction = model.predict(img_array)
        plt.imshow(img)
        plt.axis('off')  
        plt.show()

        if prediction < threshold:
            print(f"{img_path}: This is a Cat!")
        else:
            print(f"{img_path}: This is a Dog!")
    
    except Exception as e:
        print(f"Error loading image: {e}")


test_image_path = 'dog.png'  
predict_image(test_image_path)
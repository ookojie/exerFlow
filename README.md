# exerFlow

## Inspiration:
#####	The idea behind exerFlow is to prompt healthy activity even under remote circumstances. Often, individuals try exercising but feel like they’ve made no progress towards their goal, and a likely factor is them not being able to have a trainer oversee whether they’ve completed an exercise with the correct form. As lovers of sports and physical activity, we wish to stay active while balancing this online lifestyle and school responsibilities. We thought about how we could model a fitness trainer environment, and came up with exerFlow.
 
## What it does:
#####	This app is designed to use gridlines and machine learning to detect improper user postures. In this version, the act of squatting is used as an example. If the user’s squat does not match the grid line area for different parts of the body that the AI has identified as correct, then it will notify the user that their position is incorrect. 
 
## How we built it:
#####	We primarily used React Native with Expo to make an app and navigate between screens. We also implemented the PoseNet library from TensorFlow to train the AI and help it identify the correct squatting position using different joints. 
 
## Challenges we ran into:
#####	It was very difficult to find support and information on using tensorflow with react native. This was also because we were trying to integrate tensorflow into our Expo camera (for mobile). We had to infer and experiment with various ways based on information we knew and how much information we were given. Furthermore, we coded the tensorflow machine learning part in React and the app in React Native, which are two different languages. Although they both use JavaScript, react made it impossible to use our Expo camera. So in order to get tensorflow hooked up to our phone camera, we had to retrace our steps and spend time figuring out React Native integration. 
 
## Accomplishments that we're proud of:
#####	We’re proud that we made an app that can navigate between screens and access the user’s camera on a web browser as well as mobile. We were also able to create our own logo for the app, which was not necessary but a very nice feature to add on. Being able to train the AI and gain an outline of the user’s body to detect their position form while squatting was difficult but we are proud that we were able to make significant progress and teach ourselves how it works.
 
## What we learned:
#####	We learned how to register user movement using posenet from tensorflow. From this, we were able to train the model and learned how it can differentiate between right and wrong positions during squatting. By learning the basics of React Native, we were able to make an app that can navigate between screens using buttons. We also learned how to access the camera on web browsers and phones within an app using React Native. 
 
## What's next for exerFlow:
#####	As of now, exerFlow is meant for squatting posture but we hope to develop it into an all-purpose system, capable of extending into other exercises and eventually sports. Furthermore, allowing users to call or share their videos can set exerFlow up for success as a tool for fitness trainers in these times. Using this new feature, they would be able to provide feedback on the spot and have a look at the structural positions of their clients. Furthermore, aside from sports and physical exercises, we also hope to expand it into physical therapy and medical practices. Using the posenet outlines, user’s can have a better idea of how to physically relieve themselves from distress and examiner’s can have a better visual idea of how the user is attempting to treat themselves.
